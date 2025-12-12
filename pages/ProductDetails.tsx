import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useShop } from '../context/ShopContext';
import { Star, ShoppingBag, Heart, Check, ArrowLeft, Truck, ShieldCheck, Eye, Clock } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === Number(id));
  const { addToCart, addToWishlist, isInWishlist } = useShop();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                <Link to="/products" className="text-indigo-600 hover:underline">Back to Shop</Link>
            </div>
        </div>
    );
  }

  const isFashion = ['Men', 'Women'].includes(product.category);
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center text-gray-500 hover:text-black mb-8 transition-colors font-medium text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collection
        </Link>
        
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section */}
                <div className="bg-gray-100 h-[500px] lg:h-auto relative group">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center" />
                     {discount > 0 && (
                        <div className="absolute top-6 left-6 bg-red-600 text-white text-sm font-bold px-3 py-1.5 rounded shadow-lg">
                            {discount}% OFF
                        </div>
                    )}
                </div>

                {/* Details Section */}
                <div className="p-8 lg:p-16 flex flex-col justify-center">
                    <div className="mb-4 flex items-center space-x-2">
                        <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-1 rounded">{product.category}</span>
                        {product.recentSales && (
                             <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded flex items-center">
                                <Eye className="w-3 h-3 mr-1" /> {product.recentSales}
                             </span>
                        )}
                    </div>
                    
                    <h1 className="text-3xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">{product.name}</h1>
                    
                    <div className="flex items-center space-x-4 mb-8">
                        <div className="flex items-center text-yellow-400">
                             {[...Array(5)].map((_, i) => (
                                 <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                             ))}
                        </div>
                        <span className="text-gray-500 text-sm font-medium underline decoration-gray-300 underline-offset-4">
                            {product.reviewsCount} Reviews
                        </span>
                    </div>

                    <div className="flex items-end space-x-4 mb-8">
                        <span className="text-4xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                            <span className="text-xl text-gray-400 line-through mb-1">₹{product.originalPrice.toLocaleString()}</span>
                        )}
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                        {product.description}
                    </p>

                    {/* Specs / Options */}
                    <div className="space-y-6 mb-10">
                         {isFashion && (
                            <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Select Size</h3>
                                <div className="flex space-x-3">
                                    {['S', 'M', 'L', 'XL'].map(size => (
                                        <button 
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 font-bold transition-all ${selectedSize === size ? 'border-zinc-900 bg-zinc-900 text-white' : 'border-gray-200 text-gray-600 hover:border-gray-400'}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                         )}
                         
                         <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-6 rounded-2xl border border-gray-100">
                             <div>
                                 <span className="block text-gray-400 text-xs uppercase tracking-wide font-bold mb-1">Material</span>
                                 <span className="font-bold text-gray-900">{product.specs?.material}</span>
                             </div>
                             <div>
                                 <span className="block text-gray-400 text-xs uppercase tracking-wide font-bold mb-1">Weight</span>
                                 <span className="font-bold text-gray-900">{product.specs?.weight}</span>
                             </div>
                         </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <button 
                            onClick={() => addToCart(product)}
                            className="flex-1 bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all active:scale-95 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl"
                        >
                            <ShoppingBag className="w-5 h-5" />
                            <span>Add to Bag</span>
                        </button>
                        <button 
                             onClick={() => addToWishlist(product)}
                             className={`px-6 py-4 rounded-xl border-2 font-bold transition-all flex items-center justify-center ${isInWishlist(product.id) ? 'border-red-500 text-red-500 bg-red-50' : 'border-gray-200 text-gray-700 hover:border-gray-400'}`}
                        >
                            <Heart className={`w-6 h-6 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-100">
                        <div className="flex items-start space-x-3">
                            <Truck className="w-5 h-5 text-indigo-600 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Free Express Shipping</h4>
                                <p className="text-xs text-gray-500">On all orders over ₹5,000</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                             <ShieldCheck className="w-5 h-5 text-indigo-600 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Authenticity Guarantee</h4>
                                <p className="text-xs text-gray-500">100% genuine products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;