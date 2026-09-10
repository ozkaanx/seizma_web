import { supabase } from "./supabase";

const ADMIN_IDLE_TIMEOUT =
  30 * 60 * 1000;

const ADMIN_VERIFY_INTERVAL =
  5 * 60 * 1000;

const LAST_ACTIVITY_KEY =
  "seizma_admin_last_activity";

export const verifyAdminUser =
  async () => {
    const {
      data: { user },
      error: userError,
    } =
      await supabase.auth.getUser();

    if (
      userError ||
      !user
    ) {
      return null;
    }

    const {
      data: admin,
      error: adminError,
    } = await supabase
      .from("admin_users")
      .select("user_id")
      .eq(
        "user_id",
        user.id,
      )
      .maybeSingle();

    if (
      adminError ||
      !admin
    ) {
      return null;
    }

    return user;
  };

export const logoutAdmin =
  async (
    reason?: string,
  ) => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error(
        "Admin logout error:",
        error,
      );
    }

    localStorage.removeItem(
      LAST_ACTIVITY_KEY,
    );

    const url =
      reason
        ? `/admin?reason=${encodeURIComponent(
            reason,
          )}`
        : "/admin";

    window.location.replace(
      url,
    );
  };

export const startAdminSessionGuard =
  () => {
    let idleTimeout:
      number | undefined;

    let verifyInterval:
      number | undefined;

    let lastStoredActivity = 0;

    const scheduleIdleCheck =
      () => {
        if (idleTimeout) {
          window.clearTimeout(
            idleTimeout,
          );
        }

        idleTimeout =
          window.setTimeout(
            () => {
              void logoutAdmin(
                "session-expired",
              );
            },
            ADMIN_IDLE_TIMEOUT,
          );
      };

    const touchActivity =
      () => {
        const now =
          Date.now();

        /*
         * localStorage'a sürekli
         * yazmamak için 30 saniyede
         * bir güncelliyoruz.
         */
        if (
          now -
            lastStoredActivity >
          30_000
        ) {
          localStorage.setItem(
            LAST_ACTIVITY_KEY,
            String(now),
          );

          lastStoredActivity =
            now;
        }

        scheduleIdleCheck();
      };

    const checkStoredActivity =
      () => {
        const raw =
          localStorage.getItem(
            LAST_ACTIVITY_KEY,
          );

        if (!raw) {
          touchActivity();
          return;
        }

        const lastActivity =
          Number(raw);

        if (
          !Number.isFinite(
            lastActivity,
          )
        ) {
          touchActivity();
          return;
        }

        if (
          Date.now() -
            lastActivity >=
          ADMIN_IDLE_TIMEOUT
        ) {
          void logoutAdmin(
            "session-expired",
          );

          return;
        }

        const remaining =
          ADMIN_IDLE_TIMEOUT -
          (Date.now() -
            lastActivity);

        if (idleTimeout) {
          window.clearTimeout(
            idleTimeout,
          );
        }

        idleTimeout =
          window.setTimeout(
            () => {
              void logoutAdmin(
                "session-expired",
              );
            },
            remaining,
          );
      };

    const verifySession =
      async () => {
        const admin =
          await verifyAdminUser();

        if (!admin) {
          await logoutAdmin(
            "unauthorized",
          );
        }
      };

    const handleVisibility =
      () => {
        if (
          document.visibilityState ===
          "visible"
        ) {
          checkStoredActivity();

          void verifySession();
        }
      };

    const activityEvents = [
      "pointerdown",
      "keydown",
      "scroll",
      "touchstart",
    ] as const;

    activityEvents.forEach(
      (eventName) => {
        window.addEventListener(
          eventName,
          touchActivity,
          {
            passive: true,
          },
        );
      },
    );

    document.addEventListener(
      "visibilitychange",
      handleVisibility,
    );

    const {
      data: {
        subscription,
      },
    } =
      supabase.auth.onAuthStateChange(
        (
          event,
        ) => {
          if (
            event ===
            "SIGNED_OUT"
          ) {
            localStorage.removeItem(
              LAST_ACTIVITY_KEY,
            );
          }
        },
      );

    checkStoredActivity();

    verifyInterval =
      window.setInterval(
        () => {
          void verifySession();
        },
        ADMIN_VERIFY_INTERVAL,
      );

    return () => {
      if (idleTimeout) {
        window.clearTimeout(
          idleTimeout,
        );
      }

      if (verifyInterval) {
        window.clearInterval(
          verifyInterval,
        );
      }

      activityEvents.forEach(
        (eventName) => {
          window.removeEventListener(
            eventName,
            touchActivity,
          );
        },
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibility,
      );

      subscription.unsubscribe();
    };
  };