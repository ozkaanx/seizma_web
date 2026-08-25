export interface InfrastructureItem {
  number: string;
  title: string;
  status: string;
  description: string;
}

export const infrastructureItems: InfrastructureItem[] = [
  {
    number: "01",
    title: "İnternet",
    status: "Kesilebilir.",
    description:
      "Afet sırasında internet altyapısı yoğunluk, enerji kesintisi veya fiziksel hasar nedeniyle erişilemez hale gelebilir.",
  },
  {
    number: "02",
    title: "GSM",
    status: "Durabilir.",
    description:
      "Baz istasyonları ve mobil iletişim altyapısı afet anındaki yoğunluk veya altyapı sorunlarından etkilenebilir.",
  },
  {
    number: "03",
    title: "Elektrik",
    status: "Kesilebilir.",
    description:
      "Enerji altyapısındaki kesintiler, geleneksel iletişim sistemlerinin çalışmasını doğrudan etkileyebilir.",
  },
];