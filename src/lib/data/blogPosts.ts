import type { BlogPost } from "@/lib/data/types";

export const blogPosts: BlogPost[] = [
  {
    id: "gaming-laptop-guide",
    title: "How to Choose the Right Gaming Laptop in 2024",
    excerpt:
      "A comprehensive guide to understanding GPU, CPU, and cooling needs for modern gaming.",
    category: "Buying Guide",
    date: "10 May",
    image:
      "https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "ssd-vs-hdd",
    title: "SSD vs HDD: Why You Need to Upgrade Now",
    excerpt:
      "Discover how upgrading to an NVMe SSD can make your 5-year-old laptop feel brand new.",
    category: "Tech Tips",
    date: "05 May",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "battery-health",
    title: "Top 5 Tips to Maintain Your Laptop Battery Health",
    excerpt:
      "Extend the lifespan of your laptop battery with these simple charging and usage habits.",
    category: "Maintenance",
    date: "28 Apr",
    image:
      "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?auto=format&fit=crop&w=500&q=80",
  },
];

export const testimonial = {
  text: "Outstanding service! My Macbook Pro was dead, and Apple asked for a fortune. ElyteSys fixed the motherboard issue in 2 days at a fraction of the cost. Highly recommended in Chennai!",
  author: "Karthik R.",
  role: "Verified Customer",
  avatar:
    "https://ui-avatars.com/api/?name=Karthik+R&background=2563EB&color=fff",
};
