export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterGroup {
  title: string;
  links: FooterLink[];
}

export const footerGroups: FooterGroup[] = [
  {
    title: "Seizma",
    links: [
      {
        label: "Teknoloji",
        href: "#teknoloji",
      },
      {
        label: "Ekosistem",
        href: "#ekosistem",
      },
      {
        label: "Nasıl Çalışır?",
        href: "#nasil-calisir",
      },
      {
        label: "Kurumsal",
        href: "#kurumsal",
      },
    ],
  },

  {
    title: "Çözümler",
    links: [
      {
        label: "Seizma App",
        href: "#ekosistem",
      },
      {
        label: "Home Booster",
        href: "#ekosistem",
      },
      {
        label: "Seizma Booster",
        href: "#ekosistem",
      },
    ],
  },

  {
    title: "İletişim",
    links: [
      {
        label: "Bize Ulaşın",
        href: "mailto:info@seizma.com",
      },
    ],
  },
];