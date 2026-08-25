export interface DisasterPhase {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  features: string[];
}

export const disasterPhases: DisasterPhase[] = [
  {
    number: "01",
    title: "Deprem Öncesi",
    eyebrow: "Hazırlık",
    description:
      "Sensör ağından ve bağlı sistemlerden gelen veriler, afet öncesi hazırlık ve uyarı süreçlerinin bir parçası olarak değerlendirilir.",
    features: [
      "Sensör ağı",
      "Erken uyarı",
      "Hazırlık",
    ],
  },

  {
    number: "02",
    title: "Deprem Anı",
    eyebrow: "Bağlantı",
    description:
      "Geleneksel iletişim altyapılarının etkilenebildiği kritik anda alternatif iletişim kanallarıyla bağlantının devam etmesi hedeflenir.",
    features: [
      "PLAI Network",
      "Alternatif iletişim",
      "Yerel bağlantı",
    ],
  },

  {
    number: "03",
    title: "Deprem Sonrası",
    eyebrow: "Koordinasyon",
    description:
      "Afet sonrasında SOS, konum ve iletişim yetenekleri saha koordinasyonunun sürdürülebilmesine yardımcı olur.",
    features: [
      "SOS",
      "Konum",
      "Koordinasyon",
    ],
  },
];