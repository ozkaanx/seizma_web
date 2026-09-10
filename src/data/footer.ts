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
        label: "Ürünler",
        href: "#urunler",
      },
      {
        label: "İletişim",
        href: "#iletisim",
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
        href: "#urunler",
      },
      {
        label: "Home Booster",
        href: "#urunler",
      },
      {
        label: "Seizma Booster",
        href: "#urunler",
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