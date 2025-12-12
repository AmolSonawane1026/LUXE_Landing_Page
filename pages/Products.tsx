import React, { useState, useMemo, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Filter, ChevronDown, Search, ArrowRight, Star } from 'lucide-react';
import { SortOption } from '../types';
import { useLocation } from 'react-router-dom';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  const [priceRange, setPriceRange] = useState<number>(50000); // Updated for INR
  const location = useLocation();

  // Check URL params for category on mount/update
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam && CATEGORIES.includes(categoryParam)) {
        setSelectedCategory(categoryParam);
    }
  }, [location]);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== "All") {
      result = result.filter(p => p.category === selectedCategory);
    }

    result = result.filter(p => p.price <= priceRange);

    switch (sortOption) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Assume default id order is 'newest' for demo (reversed ID for newest first)
        result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [selectedCategory, sortOption, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      
      {/* Promotional Header */}
      <div className="bg-zinc-900 text-white pt-12 pb-24 relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
         <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-2 block">New Arrivals</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">The Winter Collection</h1>
            <p className="text-gray-400 max-w-xl text-lg mb-8">
                Discover the season's most coveted styles. From Italian wool coats to premium leather accessories.
            </p>
            <div className="flex gap-4">
                <button className="bg-white text-zinc-900 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors">
                    View Lookbook
                </button>
                <div className="flex items-center text-white text-sm font-bold">
                    <Star className="w-4 h-4 text-yellow-400 mr-2 fill-current" />
                    Trusted by 50,000+ Customers
                </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 sticky top-24">
                    <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                        <div className="flex items-center space-x-2">
                            <Filter className="w-5 h-5 text-indigo-600" />
                            <h3 className="font-bold text-gray-900">Filters</h3>
                        </div>
                        <button 
                            onClick={() => {setSelectedCategory("All"); setPriceRange(50000);}}
                            className="text-xs text-gray-400 hover:text-indigo-600 font-medium underline"
                        >
                            Reset
                        </button>
                    </div>
                    
                    {/* Categories */}
                    <div className="mb-8">
                        <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider text-gray-400">Categories</h4>
                        <div className="space-y-2">
                            {CATEGORIES.map(cat => (
                                <label key={cat} className="flex items-center space-x-3 cursor-pointer group p-2 hover:bg-gray-50 rounded-lg transition-colors -mx-2">
                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${selectedCategory === cat ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300 group-hover:border-indigo-400'}`}>
                                        {selectedCategory === cat && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                                    </div>
                                    <input 
                                        type="radio" 
                                        name="category" 
                                        checked={selectedCategory === cat}
                                        onChange={() => setSelectedCategory(cat)}
                                        className="hidden"
                                    />
                                    <span className={`text-sm font-medium transition-colors ${selectedCategory === cat ? 'text-indigo-600' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                        {cat}
                                    </span>
                                    {selectedCategory === cat && <ArrowRight className="w-3 h-3 ml-auto text-indigo-600" />}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price Slider */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                             <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Price Range</h4>
                        </div>
                        <div className="mb-4 text-center">
                            <span className="text-lg font-bold text-gray-900">₹0 - ₹{priceRange.toLocaleString()}</span>
                        </div>
                        <input 
                            type="range" 
                            min="0" 
                            max="50000" 
                            step="1000" 
                            value={priceRange}
                            onChange={(e) => setPriceRange(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                        <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-medium uppercase">
                            <span>₹0</span>
                            <span>₹50,000+</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                {/* Toolbar */}
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm font-medium">
                        Showing <span className="text-gray-900 font-bold">{filteredProducts.length}</span> results
                    </p>
                    
                     {/* Sort Dropdown */}
                    <div className="relative group z-20 w-full sm:w-auto">
                        <button className="w-full sm:w-auto flex items-center justify-between space-x-2 bg-gray-50 border border-transparent hover:bg-white hover:border-gray-200 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 transition-all">
                            <span>Sort: <span className="text-indigo-600 capitalize">{sortOption.replace('-', ' ')}</span></span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl hidden group-hover:block overflow-hidden">
                            <button onClick={() => setSortOption('newest')} className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors">Newest Arrivals</button>
                            <button onClick={() => setSortOption('price-asc')} className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors">Price: Low to High</button>
                            <button onClick={() => setSortOption('price-desc')} className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors">Price: High to Low</button>
                            <button onClick={() => setSortOption('rating')} className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors">Top Rated</button>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                     <div className="flex flex-col items-center justify-center h-96 bg-white rounded-xl border border-dashed border-gray-300 text-center p-8">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                            <Search className="w-10 h-10 text-gray-300" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                        <p className="text-gray-500 mb-8 max-w-sm mx-auto">We couldn't find any items matching your filters. Try adjusting the price range or category.</p>
                        <button 
                            onClick={() => {setSelectedCategory("All"); setPriceRange(50000);}}
                            className="bg-zinc-900 text-white px-8 py-3 rounded-full font-bold hover:bg-zinc-800 transition-colors shadow-lg"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Products;