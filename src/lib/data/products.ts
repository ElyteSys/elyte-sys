import type { Product } from "@/lib/data/types";

export const featuredProducts: Product[] = [
  {
    id: "dell-xps-15",
    name: "Dell XPS 15 Professional",
    price: 145000,
    badge: "Top Rated",
    rating: 4.5,
    reviewCount: 124,
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=500&q=80",
    overview:
      "The Dell XPS 15 is a premium professional laptop featuring a stunning OLED display, powerful Intel Core i7 processor, and a sleek carbon fiber chassis. Perfect for creators and power users.",
    specs: [
      { label: "Processor", value: "Intel Core i7 13th Gen" },
      { label: "RAM", value: "16GB LPDDR5" },
      { label: "Storage", value: "1TB NVMe SSD" },
      { label: "Display", value: "15.6 inch 3.5K OLED Touch" },
      { label: "Graphics", value: "NVIDIA RTX 4050 6GB" },
    ],
    featured: true,
  },
  {
    id: "asus-rog-strix-g16",
    name: "ASUS ROG Strix G16",
    price: 125000,
    badge: "New",
    badgeVariant: "blue",
    rating: 5,
    reviewCount: 89,
    image:
      "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&w=500&q=80",
    overview:
      "Dominate the game with the ASUS ROG Strix G16. Featuring an ultra-fast refresh rate display, advanced cooling system, and desktop-class graphics performance.",
    specs: [
      { label: "Processor", value: "Intel Core i7 13650HX" },
      { label: "RAM", value: "16GB DDR5 4800MHz" },
      { label: "Storage", value: "1TB PCIe 4.0 SSD" },
      { label: "Display", value: "16 inch QHD+ 240Hz" },
      { label: "Graphics", value: "NVIDIA RTX 4060 8GB" },
    ],
    featured: true,
  },
  {
    id: "macbook-pro-m3",
    name: "Apple MacBook Pro M3",
    price: 169900,
    rating: 5,
    reviewCount: 312,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
    overview:
      "The ultimate pro laptop. The Apple MacBook Pro M3 delivers mind-blowing performance, up to 22 hours of battery life, and the world's best laptop display.",
    specs: [
      { label: "Processor", value: "Apple M3 Pro Chip (11-core)" },
      { label: "RAM", value: "18GB Unified Memory" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "14.2 inch Liquid Retina XDR" },
      { label: "Battery", value: "Up to 22 Hours" },
    ],
    featured: true,
  },
  {
    id: "hp-spectre-x360",
    name: "HP Spectre x360",
    price: 134999,
    rating: 4.5,
    reviewCount: 145,
    image:
      "https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&w=500&q=80",
    overview:
      "A masterclass in 2-in-1 design. The HP Spectre x360 offers versatile usage modes, exceptional battery life, and a stunning gem-cut design.",
    specs: [
      { label: "Processor", value: "Intel Core Ultra 7" },
      { label: "RAM", value: "16GB LPDDR5x" },
      { label: "Storage", value: "1TB PCIe NVMe" },
      { label: "Display", value: "14 inch 2.8K OLED Touch" },
      { label: "Form Factor", value: "360-degree Convertible" },
    ],
    featured: true,
  },
  {
    id: "acer-predator-helios-16",
    name: "Acer Predator Helios 16",
    price: 114990,
    strikePrice: 130000,
    badge: "Gamer's Choice",
    badgeVariant: "blue",
    rating: 5,
    reviewCount: 210,
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80",
    overview:
      "Engineered for hardcore gamers. The Acer Predator Helios 16 packs intense cooling technology and an overclockable GPU for maximum frame rates.",
    specs: [
      { label: "Processor", value: "Intel Core i7 13700HX" },
      { label: "RAM", value: "16GB DDR5" },
      { label: "Storage", value: "1TB NVMe SSD" },
      { label: "Display", value: "16 inch WQXGA 165Hz IPS" },
      { label: "Graphics", value: "NVIDIA RTX 4060 8GB" },
    ],
    featured: true,
  },
  {
    id: "lenovo-legion-5-pro",
    name: "Lenovo Legion 5 Pro",
    price: 132000,
    rating: 4.5,
    reviewCount: 178,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=80",
    overview:
      "The Lenovo Legion 5 Pro is built with a singular purpose: dominating your competitors. Features AI engine tuning and a beautiful 16:10 display.",
    specs: [
      { label: "Processor", value: "AMD Ryzen 7 7745HX" },
      { label: "RAM", value: "16GB DDR5" },
      { label: "Storage", value: "1TB SSD" },
      { label: "Display", value: "16 inch WQXGA 240Hz" },
      { label: "Graphics", value: "NVIDIA RTX 4070 8GB" },
    ],
    featured: true,
  },
  {
    id: "samsung-980-pro",
    name: "Samsung 980 PRO 1TB SSD",
    price: 9500,
    rating: 5,
    reviewCount: 420,
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=500&q=80",
    overview:
      "Unleash the power of the Samsung PCIe 4.0 NVMe SSD 980 PRO for your next-level computing. Delivers 2x the data transfer rate of PCIe 3.0.",
    specs: [
      { label: "Capacity", value: "1TB" },
      { label: "Interface", value: "PCIe Gen 4.0 x4, NVMe 1.3c" },
      { label: "Read Speed", value: "Up to 7000 MB/s" },
      { label: "Write Speed", value: "Up to 5000 MB/s" },
      { label: "Form Factor", value: "M.2 (2280)" },
    ],
    featured: true,
  },
  {
    id: "corsair-vengeance-ddr5",
    name: "Corsair Vengeance 16GB DDR5",
    price: 6200,
    strikePrice: 7500,
    badge: "Sale",
    badgeVariant: "blue",
    rating: 4,
    reviewCount: 56,
    image:
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=500&q=80",
    overview:
      "Corsair Vengeance DDR5 delivers the higher frequencies and greater capacities of DDR5 technology in a high-quality, compact module.",
    specs: [
      { label: "Capacity", value: "16GB (1x16GB)" },
      { label: "Memory Type", value: "DDR5" },
      { label: "Speed", value: "5200MHz" },
      { label: "CAS Latency", value: "CL40" },
      { label: "Voltage", value: "1.25V" },
    ],
    featured: true,
  },
];

export const shopProducts: Product[] = [
  {
    id: "msi-katana-15",
    name: "MSI Katana 15 Gaming",
    price: 89990,
    rating: 4,
    reviewCount: 45,
    category: "laptops",
    image:
      "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=500&q=80",
    overview:
      "The MSI Katana 15 brings sharp gaming performance in a sleek, lightweight chassis. Ideal for mid-range gaming and productivity.",
    specs: [
      { label: "Processor", value: "Intel Core i7 13620H" },
      { label: "RAM", value: "16GB DDR5" },
      { label: "Storage", value: "1TB NVMe SSD" },
      { label: "Display", value: "15.6 inch FHD 144Hz" },
      { label: "Graphics", value: "NVIDIA RTX 4050 6GB" },
    ],
  },
  {
    id: "dell-alienware-m16",
    name: "Dell Alienware m16",
    price: 229990,
    rating: 5,
    reviewCount: 32,
    category: "laptops",
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80",
    overview:
      "Experience desktop-level gaming on the go with the premium Dell Alienware m16, featuring aerospace-inspired design and vapor chamber cooling.",
    specs: [
      { label: "Processor", value: "Intel Core i9 13900HX" },
      { label: "RAM", value: "32GB DDR5" },
      { label: "Storage", value: "2TB PCIe Gen4 SSD" },
      { label: "Display", value: "16 inch QHD+ 240Hz" },
      { label: "Graphics", value: "NVIDIA RTX 4080 12GB" },
    ],
  },
  {
    id: "hp-victus-16",
    name: "HP Victus 16",
    price: 75000,
    rating: 4,
    reviewCount: 67,
    category: "laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80",
    overview:
      "The HP Victus 16 is the perfect entry-level gaming laptop that doesn't compromise on daily driver aesthetics and performance.",
    specs: [
      { label: "Processor", value: "AMD Ryzen 5 7640HS" },
      { label: "RAM", value: "16GB DDR5" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "16.1 inch FHD 144Hz" },
      { label: "Graphics", value: "NVIDIA RTX 3050 6GB" },
    ],
  },
  {
    id: "asus-zenbook-14",
    name: "Asus Zenbook 14 OLED",
    price: 95000,
    rating: 4.5,
    reviewCount: 88,
    category: "laptops",
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80",
    overview:
      "Ultra-thin and lightweight, the Asus Zenbook 14 OLED offers incredible color accuracy, deep blacks, and all-day battery life for professionals.",
    specs: [
      { label: "Processor", value: "Intel Core Ultra 5" },
      { label: "RAM", value: "16GB LPDDR5x" },
      { label: "Storage", value: "512GB NVMe SSD" },
      { label: "Display", value: "14 inch 3K OLED 120Hz" },
      { label: "Weight", value: "1.2kg" },
    ],
  },
  {
    id: "wd-black-sn850x",
    name: "WD Black SN850X 1TB",
    price: 9200,
    rating: 5,
    reviewCount: 156,
    category: "parts",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=500&q=80",
    overview:
      "Game faster with the WD_BLACK SN850X NVMe SSD. Crush load times and slash throttling, lagging, and model pop-ins for a smooth, fast experience.",
    specs: [
      { label: "Capacity", value: "1TB" },
      { label: "Interface", value: "PCIe Gen4 x4" },
      { label: "Read Speed", value: "7300 MB/s" },
      { label: "Write Speed", value: "6300 MB/s" },
      { label: "Format", value: "M.2 2280" },
    ],
  },
  {
    id: "crucial-32gb-ddr5",
    name: "Crucial 32GB DDR5 RAM",
    price: 8500,
    rating: 5,
    reviewCount: 98,
    category: "parts",
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=500&q=80",
    overview:
      "Empower your next-gen multi-core CPU with Crucial DDR5 memory. Experience faster speeds and better power efficiency compared to DDR4.",
    specs: [
      { label: "Capacity", value: "32GB (1x32GB)" },
      { label: "Speed", value: "4800 MT/s" },
      { label: "Type", value: "DDR5 SO-DIMM" },
      { label: "Voltage", value: "1.1V" },
      { label: "Warranty", value: "Limited Lifetime" },
    ],
  },
  {
    id: "ips-display-panel",
    name: '15.6" IPS Display Panel',
    price: 4500,
    rating: 4,
    reviewCount: 34,
    category: "parts",
    image:
      "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?auto=format&fit=crop&w=500&q=80",
    overview:
      "High-quality replacement IPS display panel for 15.6-inch laptops. Delivers crisp colors, excellent viewing angles, and a matte anti-glare finish.",
    specs: [
      { label: "Size", value: "15.6 inch" },
      { label: "Resolution", value: "FHD (1920x1080)" },
      { label: "Panel Type", value: "IPS" },
      { label: "Refresh Rate", value: "60Hz" },
      { label: "Connector", value: "30-pin eDP" },
    ],
  },
  {
    id: "hp-65w-adapter",
    name: "HP 65W Original Adapter",
    price: 1800,
    rating: 4.5,
    reviewCount: 210,
    category: "parts",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=500&q=80",
    overview:
      "Genuine HP 65W Smart AC Adapter ensures your laptop is safely charged without power spikes or battery degradation.",
    specs: [
      { label: "Brand", value: "HP Original" },
      { label: "Power Output", value: "65W" },
      { label: "Connector Pin", value: "Blue pin with center pin" },
      { label: "Voltage", value: "19.5V" },
      { label: "Warranty", value: "1 Year" },
    ],
  },
  {
    id: "logitech-mx-master-3s",
    name: "Logitech MX Master 3S",
    price: 8995,
    rating: 5,
    reviewCount: 312,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=500&q=80",
    overview:
      "The Logitech MX Master 3S is an iconic mouse remastered for ultimate tactility, performance, and flow. Features quiet clicks and an 8000 DPI track-on-glass sensor.",
    specs: [
      { label: "Sensor", value: "8000 DPI Darkfield" },
      { label: "Buttons", value: "7 customizable buttons" },
      { label: "Scroll", value: "MagSpeed Electromagnetic" },
      { label: "Battery", value: "Up to 70 days" },
      { label: "Connectivity", value: "Bluetooth & Logi Bolt" },
    ],
  },
  {
    id: "razer-blackwidow-v3",
    name: "Razer BlackWidow V3",
    price: 9499,
    rating: 4.5,
    reviewCount: 178,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=500&q=80",
    overview:
      "The Razer BlackWidow V3 continues a legacy of iconic gaming keyboards with its tactile mechanical switches, transparent switch housing, and Chroma RGB.",
    specs: [
      { label: "Switches", value: "Razer Green Mechanical (Tactile & Clicky)" },
      { label: "Form Factor", value: "Full Size" },
      { label: "Keycaps", value: "Doubleshot ABS" },
      { label: "Lighting", value: "Razer Chroma RGB" },
      { label: "Wrist Rest", value: "Ergonomic" },
    ],
  },
  {
    id: "rgb-cooling-pad",
    name: "RGB Cooling Pad",
    price: 1500,
    rating: 4,
    reviewCount: 89,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&q=80",
    overview:
      "Keep your gaming laptop icy cool with this 6-fan RGB cooling pad. Features adjustable height settings and dynamic RGB lighting.",
    specs: [
      { label: "Fans", value: "6 High-Speed Quiet Fans" },
      { label: "Lighting", value: "10 RGB Modes" },
      { label: "Size", value: "Fits 15.6 to 17.3 inch laptops" },
      { label: "Stand", value: "Adjustable dual-angle" },
      { label: "Ports", value: "2x USB 2.0" },
    ],
  },
  {
    id: "rgb-gaming-headset",
    name: "Premium RGB Gaming Headset",
    price: 4500,
    rating: 4.5,
    reviewCount: 134,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    overview:
      "Immerse yourself in the game with the Premium RGB Gaming Headset. Featuring 7.1 surround sound, noise-canceling microphone, and ultra-soft memory foam ear cushions.",
    specs: [
      { label: "Sound", value: "7.1 Virtual Surround" },
      { label: "Drivers", value: "50mm Neodymium" },
      { label: "Frequency", value: "20Hz - 20kHz" },
      { label: "Microphone", value: "Detachable Noise-Canceling" },
      { label: "Lighting", value: "Syncable RGB" },
    ],
  },
];

export const allProducts: Product[] = [...featuredProducts, ...shopProducts];
