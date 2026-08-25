export interface ProductFeature {
  label: string;
}

export interface Product {
  number: string;
  name: string;
  eyebrow: string;
  description: string;
  features: ProductFeature[];
  variant: "app" | "home" | "infrastructure";
}

export const products: Product[] = [
  {
    number: "01",
    name: "Seizma App",
    eyebrow: "Mobil bağlantı",
    description:
      "Afet öncesi, anı ve sonrasında uyarı, iletişim, konum ve SOS ihtiyaçlarını tek noktada birleştiren mobil merkez.",
    features: [
      {
        label: "SOS",
      },
      {
        label: "Konum",
      },
      {
        label: "Mesajlaşma",
      },
      {
        label: "Erken uyarı",
      },
    ],
    variant: "app",
  },
  {
    number: "02",
    name: "Home Booster",
    eyebrow: "Ev ve iş yerleri",
    description:
      "Bulunduğu noktayı Seizma ağına bağlayan, yerel cihazlar ile daha geniş iletişim altyapısı arasında köprü görevi gören merkez.",
    features: [
      {
        label: "PLAI",
      },
      {
        label: "Bluetooth",
      },
      {
        label: "Wi-Fi",
      },
      {
        label: "Sensör",
      },
    ],
    variant: "home",
  },
  {
    number: "03",
    name: "Seizma Booster",
    eyebrow: "Şehir altyapısı",
    description:
      "Geniş alanlarda dayanıklı ve uzun menzilli iletişim altyapısı oluşturmak için tasarlanan saha çözümü.",
    features: [
      {
        label: "IP67",
      },
      {
        label: "Solar",
      },
      {
        label: "360°",
      },
      {
        label: "Long Range",
      },
    ],
    variant: "infrastructure",
  },
];