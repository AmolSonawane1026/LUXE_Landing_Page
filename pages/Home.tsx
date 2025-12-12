import React, { useEffect, useRef } from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { ArrowRight, Truck, Shield, RefreshCw, Flame, Mail, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // Filter products for specific sections
  const trendingProducts = PRODUCTS.filter(p => p.tags?.includes('trendy')).slice(0, 4);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const editorialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      const scrolled = window.scrollY;

      animationFrameId = requestAnimationFrame(() => {
          // 1. Advanced Hero Parallax
          if (heroRef.current) {
            const heroBg = heroRef.current.querySelector('.hero-bg') as HTMLElement;
            const heroText = heroRef.current.querySelector('.hero-text') as HTMLElement;
            const heroOverlay = heroRef.current.querySelector('.hero-overlay') as HTMLElement;
            
            if (heroBg) {
                // Scale up (zoom) + Translate Y (parallax)
                // This creates a feeling of depth where the background is further away
                const scale = 1 + scrolled * 0.0005;
                const translateY = scrolled * 0.5;
                heroBg.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
            }
            
            if (heroText) {
                // Text moves up slightly faster than natural scroll to create separation
                // And fades out
                const translateY = scrolled * -0.2; 
                const opacity = Math.max(0, 1 - scrolled / 600);
                heroText.style.transform = `translate3d(0, ${translateY}px, 0)`;
                heroText.style.opacity = opacity.toString();
                // Blur effect for extra polish when scrolling away
                heroText.style.filter = `blur(${scrolled * 0.01}px)`;
            }

            if (heroOverlay) {
                // Darken slightly as we scroll down
                const opacity = 0.3 + (scrolled / 1000); // Start at 0.3, increase
                heroOverlay.style.opacity = Math.min(0.8, opacity).toString();
            }
          }

          // 2. Editorial Section Parallax
          const editorialEl = editorialRef.current;
          if (editorialEl) {
            const rect = editorialEl.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            
            // Calculate progress: 0 when top enters view, 1 when bottom leaves
            if (rect.top < viewHeight && rect.bottom > 0) {
                const bg = editorialEl.querySelector('.parallax-bg') as HTMLElement;
                const content = editorialEl.querySelector('.parallax-content') as HTMLElement;
                
                if (bg) {
                    // Classic parallax: move background opposite to scroll
                    const offset = (viewHeight - rect.top) * 0.15;
                    bg.style.transform = `translate3d(0, -${offset}px, 0) scale(1.1)`;
                }
                
                if (content) {
                    // Subtle lift on the content card
                    const offset = (viewHeight - rect.top) * 0.05;
                    content.style.transform = `translate3d(0, -${offset}px, 0)`;
                }
            }
          }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial frame
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      
      {/* ADVANCED TRENDY HERO SECTION */}
      <section 
        id="hero-section"
        ref={heroRef} 
        className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-gray-900"
      >
         {/* Background Image Layer */}
         {/* Using a high-end fashion editorial image */}
         <div 
            className="hero-bg absolute inset-0 w-full h-[120%] bg-cover bg-center pointer-events-none will-change-transform"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2400&auto=format&fit=crop')",
                backgroundPosition: 'center 30%', // Focus on the face/upper body
                top: 0
            }}
         />
         
         {/* Gradient Overlay for Text Readability */}
         <div className="hero-overlay absolute inset-0 bg-black/30 transition-opacity duration-300 z-0" />
         
         {/* Grain Texture Overlay for 'Film' Aesthetic (Optional subtle touch) */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
         />

         {/* Hero Content */}
         <div className="hero-text relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center text-white pt-20 will-change-transform">
            <span className="inline-block py-2 px-6 border border-white/20 rounded-full text-xs md:text-sm font-bold tracking-[0.3em] mb-8 animate-fade-in-up backdrop-blur-sm bg-white/5 uppercase font-sans">
                Collection 2025
            </span>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight mb-8 leading-[0.9] animate-fade-in-up animation-delay-100 mix-blend-overlay opacity-90">
                Ethereal <br/>
                <span className="italic font-light">Elegance</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-200 mb-12 max-w-xl mx-auto font-light leading-relaxed animate-fade-in-up animation-delay-200 tracking-wide">
                Where timeless design meets modern luxury. Discover the new standard of essential wear for the uncompromising.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-300">
                <a href="#trending" className="group bg-white text-black px-12 py-4 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
         </div>

         {/* Minimal Scroll Indicator */}
         <div className="hero-text absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-bounce text-white/40 hidden md:block">
            <span className="text-[10px] uppercase tracking-[0.2em] mb-2 block text-center">Scroll</span>
            <ArrowDown className="w-5 h-5 mx-auto" />
         </div>
      </section>

      {/* Trust Indicators (Clean Minimalist) */}
      <section className="bg-white border-b border-gray-50 py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-50">
                <div className="flex flex-col items-center justify-center p-4 group">
                    <Truck className="w-8 h-8 text-gray-400 mb-4 group-hover:text-black transition-colors duration-300" />
                    <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-wide text-xs">Global Shipping</h4>
                    <p className="text-sm text-gray-500 font-serif italic">Complimentary on orders over $150</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 group">
                    <Shield className="w-8 h-8 text-gray-400 mb-4 group-hover:text-black transition-colors duration-300" />
                    <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-wide text-xs">Secure Payment</h4>
                    <p className="text-sm text-gray-500 font-serif italic">Encrypted & protected transactions</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 group">
                    <RefreshCw className="w-8 h-8 text-gray-400 mb-4 group-hover:text-black transition-colors duration-300" />
                    <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-wide text-xs">Free Returns</h4>
                    <p className="text-sm text-gray-500 font-serif italic">30-day satisfaction guarantee</p>
                </div>
            </div>
        </div>
      </section>

      {/* Main Collections Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-16">
                 <span className="text-indigo-600 font-bold tracking-[0.2em] text-xs uppercase mb-3">Browse by Category</span>
                 <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Curated Collections</h2>
                 <div className="w-24 h-1 bg-zinc-900"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Men */}
                <Link to="/products?category=Men" className="group relative h-[600px] overflow-hidden rounded-2xl block">
                    <img 
                      src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=987&auto=format&fit=crop" 
                      alt="Men's Fashion" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-white/80 text-xs font-bold tracking-widest uppercase mb-2 block">Collection</span>
                        <h3 className="text-3xl font-serif text-white mb-4">Men's Editorial</h3>
                        <div className="flex items-center text-white text-sm font-bold uppercase tracking-wide group-hover:underline decoration-1 underline-offset-4">
                            Shop Now <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                    </div>
                </Link>

                 {/* Women */}
                 <Link to="/products?category=Women" className="group relative h-[600px] overflow-hidden rounded-2xl block">
                    <img 
                      src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=986&auto=format&fit=crop" 
                      alt="Women's Fashion" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-white/80 text-xs font-bold tracking-widest uppercase mb-2 block">Collection</span>
                        <h3 className="text-3xl font-serif text-white mb-4">Women's Luxury</h3>
                         <div className="flex items-center text-white text-sm font-bold uppercase tracking-wide group-hover:underline decoration-1 underline-offset-4">
                            Shop Now <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                    </div>
                </Link>

                 {/* Accessories */}
                 <Link to="/products?category=Accessories" className="group relative h-[600px] md:col-span-2 lg:col-span-1 overflow-hidden rounded-2xl block">
                    <img 
                      src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1065&auto=format&fit=crop" 
                      alt="Accessories" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-white/80 text-xs font-bold tracking-widest uppercase mb-2 block">Collection</span>
                        <h3 className="text-3xl font-serif text-white mb-4">Fine Accessories</h3>
                         <div className="flex items-center text-white text-sm font-bold uppercase tracking-wide group-hover:underline decoration-1 underline-offset-4">
                            Shop Now <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
      </section>

      {/* EDITORIAL PARALLAX SCROLLING SECTION */}
      <section 
        ref={editorialRef}
        className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center bg-zinc-900"
      >
          {/* Parallax Background Image */}
          <div 
            className="parallax-bg absolute inset-0 -top-[20%] h-[140%] w-full bg-cover bg-center pointer-events-none will-change-transform opacity-70"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2500&auto=format&fit=crop')"
            }}
          />
          
          {/* Content Card */}
          <div className="parallax-content relative z-10 max-w-4xl mx-4 text-center text-white will-change-transform">
              <span className="inline-block py-1 px-4 border border-white/30 rounded-full text-[10px] font-bold tracking-[0.3em] mb-8 uppercase bg-black/30 backdrop-blur-md">
                  Editorial
              </span>
              <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
                  The Art of <br/> <span className="italic">Winter Layering</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                  Master the season with our guide to combining textures, tones, and silhouettes for warmth without compromising style.
              </p>
              <Link to="/products" className="inline-block bg-white text-black px-12 py-4 rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105 shadow-xl tracking-wide uppercase text-sm">
                  Read The Story
              </Link>
          </div>
      </section>

      {/* Trending Products */}
      <section id="trending" className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
                <div>
                    <div className="flex items-center space-x-2 text-indigo-600 mb-3 font-bold">
                        <Flame className="w-5 h-5" />
                        <span className="uppercase tracking-[0.2em] text-xs">This Week's Highlights</span>
                    </div>
                    <h2 className="font-serif text-4xl font-medium text-gray-900">Trending Essentials</h2>
                </div>
                <Link to="/products" className="group flex items-center bg-white px-6 py-3 rounded-full border border-gray-200 text-sm font-bold uppercase tracking-wider hover:bg-zinc-900 hover:text-white transition-all shadow-sm">
                    View All Products 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {trendingProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
      </section>
      
      {/* REDESIGNED NEWSLETTER SECTION */}
      <section className="py-20 px-4 md:px-0 bg-white">
        <div className="max-w-7xl mx-auto bg-gray-50 rounded-[2rem] overflow-hidden shadow-sm flex flex-col md:flex-row">
            {/* Image Side */}
            <div className="md:w-1/2 relative min-h-[500px]">
                <img 
                    src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=1200" 
                    alt="Fashion Model" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-12">
                    <div className="text-white">
                        <p className="font-serif italic text-3xl mb-4 leading-snug">"Style is a way to say who you are without having to speak."</p>
                        <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-80">— Rachel Zoe</p>
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
                <div className="flex items-center space-x-2 text-black mb-6">
                    <Mail className="w-4 h-4" />
                    <span className="uppercase tracking-[0.2em] font-bold text-xs">Newsletter</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Join the list</h2>
                <p className="text-gray-500 mb-10 leading-relaxed max-w-md">
                    Unlock 15% off your first order. Join our inner circle for early access to drops, exclusive collaborations, and members-only sales.
                </p>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative">
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            className="w-full bg-white border-b-2 border-gray-200 text-gray-900 text-lg py-4 px-2 focus:border-black outline-none transition-colors placeholder:text-gray-300" 
                        />
                        <button type="submit" className="absolute right-0 top-0 bottom-0 text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
                            Subscribe
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-[10px] text-gray-400 uppercase tracking-wide">
                    By subscribing you agree to our <a href="#" className="underline hover:text-black">Terms & Conditions</a>.
                </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;