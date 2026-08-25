export interface SystemStatus {
  id: string;
  number: string;
  name: string;
  label: string;
  description: string;
}

export const systemStatuses: SystemStatus[] = [
  {
    id: "internet",
    number: "01",
    name: "İnternet",
    label: "OFF",
    description:
      "Yoğunluk, enerji kaybı veya altyapı hasarı internet erişimini etkileyebilir.",
  },
  {
    id: "gsm",
    number: "02",
    name: "GSM",
    label: "OFF",
    description:
      "Mobil iletişim altyapısı yoğunluk veya baz istasyonu problemleri nedeniyle kesintiye uğrayabilir.",
  },
  {
    id: "electricity",
    number: "03",
    name: "Elektrik",
    label: "OFF",
    description:
      "Enerji kesintileri geleneksel iletişim sistemlerini doğrudan etkileyebilir.",
  },
];