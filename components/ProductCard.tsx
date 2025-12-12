import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Heart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, addToWishlist, isInWishlist } = useShop();

  // Calculate discount
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full relative">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/5] bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {discount > 0 && (
                <div className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                    {discount}% OFF
                </div>
            )}
            {product.recentSales.includes("1K+") && (
                 <div className="bg-amber-400 text-black text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                    BESTSELLER
                </div>
            )}
        </div>

        {/* Hover Actions */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 px-4">
             <button 
                onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                }}
                className="flex-1 bg-white text-zinc-900 font-bold py-2 rounded-lg shadow-lg hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-center text-xs uppercase tracking-wider"
             >
                <ShoppingBag className="w-4 h-4 mr-2" /> Quick Add
             </button>
        </div>

        {/* Wishlist Button */}
        <button 
            onClick={(e) => {
                e.preventDefault();
                addToWishlist(product);
            }}
            className={`absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors ${isInWishlist(product.id) ? 'text-red-500 fill-red-500' : 'text-gray-400 hover:text-red-500'}`}
        >
            <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-1">
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">{product.category}</span>
        </div>
        
        <Link to={`/products/${product.id}`} className="block mb-2 group-hover:text-indigo-600 transition-colors">
            <h3 className="font-bold text-gray-900 line-clamp-1 leading-tight">{product.name}</h3>
        </Link>
        
        {/* Rating & Reviews */}
        <div className="flex items-center space-x-1 mb-3">
            <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                ))}
            </div>
            <span className="text-xs text-gray-400">({product.reviewsCount})</span>
        </div>

        {/* Recent Sales Text */}
        <div className="mb-3 text-[10px] font-medium text-emerald-600 bg-emerald-50 inline-block px-2 py-1 rounded w-fit">
            <span className="flex items-center">
                <Eye className="w-3 h-3 mr-1" /> {product.recentSales}
            </span>
        </div>
        
        <div className="mt-auto flex items-end space-x-2">
            <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through mb-1">₹{product.originalPrice.toLocaleString()}</span>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;