export type ProductCategory = "laptops" | "parts" | "accessories";

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  strikePrice?: number;
  badge?: string;
  badgeVariant?: "default" | "blue";
  rating: number;
  reviewCount: number;
  image: string;
  overview: string;
  specs: ProductSpec[];
  category?: ProductCategory;
  featured?: boolean;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
};

export type Brand = {
  name: string;
  logo: string;
};

export type ShopFilter = "all" | ProductCategory;
