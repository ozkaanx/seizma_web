export interface TechnicalFeature {
  number: string;
  title: string;
  label: string;
  description: string;
}

export const technicalFeatures: TechnicalFeature[] = [
  {
    number: "01",
    title: "IP67",
    label: "Dayanıklılık",
    description:
      "Saha ekipmanlarının zorlu dış ortam koşullarında kullanılabilmesini destekleyen dayanıklı donanım yaklaşımı.",
  },
  {
    number: "02",
    title: "Solar",
    label: "Enerji",
    description:
      "Enerji altyapısına bağımlılığı azaltmaya yardımcı olan güneş enerjisi destekli çalışma mimarisi.",
  },
  {
    number: "03",
    title: "360°",
    label: "Kapsama",
    description:
      "Saha haberleşmesinde çevresel bağlantı noktalarına erişimi destekleyen geniş kapsama yaklaşımı.",
  },
  {
    number: "04",
    title: "PLAI",
    label: "Network",
    description:
      "Seizma ekosistemindeki farklı cihaz ve bağlantı katmanlarını ortak iletişim mimarisinde buluşturan ağ yapısı.",
  },
  {
    number: "05",
    title: "Long Range",
    label: "Bağlantı",
    description:
      "Yerel ağların daha uzak saha noktaları ve diğer Seizma ağlarıyla iletişim kurmasını destekleyen bağlantı katmanı.",
  },
  {
    number: "06",
    title: "Secure",
    label: "Güvenlik",
    description:
      "Afet iletişiminde taşınan verilerin güvenli şekilde aktarılmasına odaklanan iletişim yaklaşımı.",
  },
];