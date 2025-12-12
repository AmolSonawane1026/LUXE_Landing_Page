import { Product } from './types';

export const CATEGORIES = ["All", "Men", "Women", "Kids", "Accessories", "Electronics", "Home"];

export const PRODUCTS: Product[] = [
  // --- MEN ---
  {
    id: 1,
    name: "Italian Merino Wool Overcoat",
    price: 15999,
    originalPrice: 24999,
    category: "Men",
    tags: ["winter", "luxury", "bestseller"],
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=1000",
    rating: 4.9,
    reviewsCount: 1240,
    recentSales: "500+ bought in past month",
    description: "Handcrafted from 100% Italian Merino wool. A structured silhouette designed for the modern gentleman.",
    specs: { material: "100% Merino Wool", weight: "1.4kg", dimensions: "S, M, L, XL" }
  },
  {
    id: 2,
    name: "Slim-Fit Oxford Shirt",
    price: 2499,
    originalPrice: 3999,
    category: "Men",
    tags: ["classic", "essential"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1000",
    rating: 4.7,
    reviewsCount: 856,
    recentSales: "1K+ bought in past month",
    description: "Wrinkle-resistant organic cotton. Tailored for a sharp, professional look.",
    specs: { material: "Organic Cotton", weight: "200g", dimensions: "S, M, L, XL" }
  },
  {
    id: 3,
    name: "Tech-Fleece Cargo Joggers",
    price: 3999,
    category: "Men",
    tags: ["streetwear", "trendy"],
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=1000",
    rating: 4.5,
    reviewsCount: 420,
    recentSales: "300+ bought in past month",
    description: "Engineered for movement. Features water-resistant pockets and a tapered fit.",
    specs: { material: "Cotton/Poly Blend", weight: "450g", dimensions: "30-36 Waist" }
  },
  {
    id: 4,
    name: "Monogram Leather Loafers",
    price: 8999,
    originalPrice: 12999,
    category: "Men",
    tags: ["luxury", "formal"],
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&q=80&w=1000",
    rating: 4.8,
    reviewsCount: 150,
    recentSales: "50+ bought in past month",
    description: "Full-grain leather with a cushioned sole. The perfect finish for any suit.",
    specs: { material: "Calfskin Leather", weight: "800g", dimensions: "7-12 US" }
  },

  // --- WOMEN ---
  {
    id: 5,
    name: "Pure Cashmere Turtleneck",
    price: 12999,
    category: "Women",
    tags: ["winter", "luxury"],
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=1000",
    rating: 5.0,
    reviewsCount: 312,
    recentSales: "200+ bought in past month",
    description: "Ethically sourced Mongolian cashmere. Unparalleled softness and warmth.",
    specs: { material: "100% Cashmere", weight: "180g", dimensions: "XS, S, M, L" }
  },
  {
    id: 6,
    name: "Satin Midi Slip Dress",
    price: 4999,
    originalPrice: 6999,
    category: "Women",
    tags: ["evening", "trendy"],
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000",
    rating: 4.6,
    reviewsCount: 540,
    recentSales: "400+ bought in past month",
    description: "A versatile wardrobe staple. Features adjustable straps and a cowl neckline.",
    specs: { material: "Silk Satin", weight: "150g", dimensions: "2-12 US" }
  },
  {
    id: 7,
    name: "Oversized Denim Trucker",
    price: 5499,
    category: "Women",
    tags: ["casual", "streetwear"],
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1000",
    rating: 4.7,
    reviewsCount: 890,
    recentSales: "800+ bought in past month",
    description: "Vintage wash with a modern, boxy cut. 100% recycled denim.",
    specs: { material: "Recycled Denim", weight: "700g", dimensions: "One Size" }
  },
  {
    id: 8,
    name: "High-Rise Sculpt Leggings",
    price: 2999,
    originalPrice: 4499,
    category: "Women",
    tags: ["activewear", "essential"],
    image: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&q=80&w=1000",
    rating: 4.9,
    reviewsCount: 2100,
    recentSales: "2K+ bought in past month",
    description: "Buttery soft fabric with 4-way stretch. Squat-proof and moisture-wicking.",
    specs: { material: "Nylon/Spandex", weight: "200g", dimensions: "XS-XL" }
  },

  // --- ACCESSORIES ---
  {
    id: 9,
    name: "Chronograph Sapphire Watch",
    price: 18999,
    originalPrice: 25999,
    category: "Accessories",
    tags: ["luxury", "gift"],
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=1000",
    rating: 4.8,
    reviewsCount: 145,
    recentSales: "100+ bought in past month",
    description: "Swiss movement enclosed in surgical-grade stainless steel. 5ATM water resistance.",
    specs: { material: "Stainless Steel", weight: "140g", dimensions: "42mm Case" }
  },
  {
    id: 10,
    name: "Heritage Leather Weekender",
    price: 24999,
    category: "Accessories",
    tags: ["travel", "luxury"],
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=1000",
    rating: 5.0,
    reviewsCount: 89,
    recentSales: "40+ bought in past month",
    description: "Vegetable-tanned leather that develops a rich patina. Includes detachable shoulder strap.",
    specs: { material: "Full Grain Leather", weight: "1.8kg", dimensions: "50x30x25cm" }
  },
  {
    id: 11,
    name: "UV400 Aviator Sunglasses",
    price: 3499,
    originalPrice: 5999,
    category: "Accessories",
    tags: ["summer", "essential"],
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=1000",
    rating: 4.4,
    reviewsCount: 670,
    recentSales: "300+ bought in past month",
    description: "Polarized lenses with golden frames. Classic style meets modern protection.",
    specs: { material: "Metal/Polycarbonate", weight: "30g", dimensions: "Standard" }
  },

  // --- ELECTRONICS ---
  {
    id: 12,
    name: "Pro Noise-Cancelling Headphones",
    price: 29999,
    category: "Electronics",
    tags: ["tech", "premium"],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000",
    rating: 4.9,
    reviewsCount: 3400,
    recentSales: "1K+ bought in past month",
    description: "Industry-leading ANC with 30-hour battery life. Deep bass and crystal clear highs.",
    specs: { material: "Aluminum/Memory Foam", weight: "250g", dimensions: "Adjustable" }
  },
  {
    id: 13,
    name: "Mechanical Wireless Keyboard",
    price: 8499,
    originalPrice: 10999,
    category: "Electronics",
    tags: ["tech", "work"],
    image: "https://images.unsplash.com/photo-1587829741301-dc798b91add4?auto=format&fit=crop&q=80&w=1000",
    rating: 4.7,
    reviewsCount: 560,
    recentSales: "200+ bought in past month",
    description: "Hot-swappable switches with RGB backlighting. Connect up to 3 devices simultaneously.",
    specs: { material: "PBT Plastic", weight: "800g", dimensions: "65% Layout" }
  },

  // --- HOME ---
  {
    id: 14,
    name: "Minimalist Ceramic Diffuser",
    price: 4999,
    category: "Home",
    tags: ["wellness", "decor"],
    image: "https://images.unsplash.com/photo-1602143407151-cd111bb621a4?auto=format&fit=crop&q=80&w=1000",
    rating: 4.5,
    reviewsCount: 230,
    recentSales: "100+ bought in past month",
    description: "Ultrasonic technology. Matte finish that blends seamlessly into any interior.",
    specs: { material: "Ceramic", weight: "500g", dimensions: "500ml Capacity" }
  },
  {
    id: 15,
    name: "French Flax Linen Bedding",
    price: 18999,
    originalPrice: 22999,
    category: "Home",
    tags: ["luxury", "comfort"],
    image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80&w=1000",
    rating: 4.8,
    reviewsCount: 110,
    recentSales: "50+ bought in past month",
    description: "Stonewashed for softness. Breathable fabric that keeps you cool in summer and warm in winter.",
    specs: { material: "100% French Flax", weight: "2.5kg", dimensions: "Queen/King" }
  },
  {
    id: 16,
    name: "Mid-Century Modern Lamp",
    price: 6499,
    category: "Home",
    tags: ["design", "lighting"],
    image: "https://images.unsplash.com/photo-1513506003011-3b032f737104?auto=format&fit=crop&q=80&w=1000",
    rating: 4.6,
    reviewsCount: 340,
    recentSales: "150+ bought in past month",
    description: "Brass finish with an adjustable arm. The perfect reading companion.",
    specs: { material: "Brass/Steel", weight: "1.2kg", dimensions: "60cm Height" }
  }
];