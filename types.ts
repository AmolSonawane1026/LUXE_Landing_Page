export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviewsCount: number;
  recentSales: string;
  description: string;
  tags?: string[];
  specs?: {
    material: string;
    weight: string;
    dimensions: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
}

export type SortOption = 'price-asc' | 'price-desc' | 'rating' | 'newest';