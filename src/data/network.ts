export type NetworkNodeId =
  | "app"
  | "home"
  | "center"
  | "long-range"
  | "safe-zone";

export interface NetworkNode {
  id: NetworkNodeId;
  number: string;
  shortLabel: string;
  title: string;
  protocol: string;
  description: string;
  x: number;
  y: number;
}

export interface NetworkEdge {
  from: NetworkNodeId;
  to: NetworkNodeId;
}

export const networkNodes: NetworkNode[] = [
  {
    id: "app",
    number: "01",
    shortLabel: "APP",
    title: "Seizma App",
    protocol: "Bluetooth · GSM · İnternet",
    description:
      "Kullanıcının Seizma ekosistemiyle etkileşim kurduğu mobil merkez. Uyarı, iletişim, konum ve SOS yeteneklerini tek noktada toplar.",
    x: 12,
    y: 64,
  },
  {
    id: "home",
    number: "02",
    shortLabel: "HOME",
    title: "Home Booster",
    protocol: "Fısıltı Ağı → PLAI",
    description:
      "Ev ve iş yerlerindeki cihazlarla daha geniş Seizma altyapısı arasında köprü görevi görür.",
    x: 34,
    y: 37,
  },
  {
    id: "center",
    number: "03",
    shortLabel: "CENTER",
    title: "Merkez Booster",
    protocol: "PLAI · LoRa",
    description:
      "Yerel Seizma trafiğini daha geniş saha ağına taşıyan merkez node olarak iletişim altyapısının önemli parçalarından biridir.",
    x: 58,
    y: 55,
  },
  {
    id: "long-range",
    number: "04",
    shortLabel: "LONG",
    title: "Uzun Menzil",
    protocol: "PLAI Long Range",
    description:
      "Daha uzak Seizma ağları ve bölgeler arasında iletişim köprüsü oluşturmak için kullanılan uzun menzilli ağ katmanıdır.",
    x: 82,
    y: 27,
  },
  {
    id: "safe-zone",
    number: "05",
    shortLabel: "SAFE",
    title: "Güvenli Nokta",
    protocol: "Saha İletişim Ağı",
    description:
      "Afet sonrası saha iletişiminin ve koordinasyonun desteklenebileceği bağlantı noktalarını temsil eder.",
    x: 82,
    y: 77,
  },
];

export const networkEdges: NetworkEdge[] = [
  {
    from: "app",
    to: "home",
  },
  {
    from: "home",
    to: "center",
  },
  {
    from: "center",
    to: "long-range",
  },
  {
    from: "center",
    to: "safe-zone",
  },
  {
    from: "long-range",
    to: "safe-zone",
  },
];