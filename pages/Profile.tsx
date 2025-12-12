import React from 'react';
import { User, Package, MapPin, CreditCard, Settings, LogOut, Heart, Bell, ChevronRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const Profile: React.FC = () => {
    const { wishlist, cart } = useShop();

    // Dummy order data
    const recentOrders = [
        { id: "#ORD-7721", date: "Oct 24, 2023", total: 320.00, status: "Delivered", items: 3 },
        { id: "#ORD-7720", date: "Sep 12, 2023", total: 85.50, status: "Processing", items: 1 },
        { id: "#ORD-7619", date: "Aug 05, 2023", total: 120.00, status: "Cancelled", items: 2 },
    ];

    const getStatusColor = (status: string) => {
        switch(status) {
            case 'Delivered': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
            case 'Processing': return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'Cancelled': return 'bg-red-50 text-red-600 border-red-100';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    }

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Header */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-8">
            {/* Rich Cover Image */}
            <div className="h-48 relative overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop" 
                    className="w-full h-full object-cover" 
                    alt="Cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button className="absolute top-6 right-6 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors">
                    <Settings className="w-5 h-5" />
                </button>
            </div>
            
            <div className="px-8 pb-8">
                <div className="flex flex-col md:flex-row items-end md:items-center -mt-12 mb-6 relative z-10">
                    <div className="w-24 h-24 rounded-2xl bg-white p-1.5 shadow-xl">
                        <div className="w-full h-full bg-zinc-900 rounded-xl flex items-center justify-center text-white text-2xl font-bold border border-zinc-700">
                            JD
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6 flex-1">
                        <div className="flex items-center space-x-2">
                            <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
                            <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-0.5 rounded-full font-bold border border-indigo-200">GOLD MEMBER</span>
                        </div>
                        <p className="text-gray-500 flex items-center text-sm mt-1">
                            <MapPin className="w-3 h-3 mr-1" /> New York, USA
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0 flex gap-3">
                        <button className="px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-colors shadow-sm">
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-100 pt-6">
                    {[
                        { icon: Package, label: 'Total Orders', value: '12' },
                        { icon: Heart, label: 'Wishlist', value: wishlist.length },
                        { icon: ShoppingBag, label: 'Cart Items', value: cart.length },
                        { icon: Bell, label: 'Notifications', value: '3' }
                    ].map((stat, idx) => (
                        <div key={idx} className="flex items-center p-4 rounded-2xl bg-gray-50 hover:bg-indigo-50/50 hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-indigo-100 group">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="ml-4">
                                <div className="text-xl font-bold text-gray-900 leading-none">{stat.value}</div>
                                <div className="text-xs text-gray-500 font-medium mt-1">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1 space-y-6">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4">
                    <nav className="space-y-1">
                        {[
                            { name: 'Account Overview', icon: User, active: true },
                            { name: 'My Orders', icon: Package, active: false },
                            { name: 'Wishlist', icon: Heart, active: false },
                            { name: 'Addresses', icon: MapPin, active: false },
                            { name: 'Payment Methods', icon: CreditCard, active: false },
                        ].map((item) => (
                            <button 
                                key={item.name}
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                                    item.active 
                                    ? 'bg-zinc-900 text-white shadow-md' 
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                            >
                                <item.icon className={`w-5 h-5 ${item.active ? 'text-indigo-400' : ''}`} />
                                <span>{item.name}</span>
                                {item.active && <ChevronRight className="w-4 h-4 ml-auto text-gray-500" />}
                            </button>
                        ))}
                    </nav>
                    <div className="border-t border-gray-100 mt-4 pt-4 px-2">
                         <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-medium transition-colors">
                            <LogOut className="w-5 h-5" />
                            <span>Sign Out</span>
                        </button>
                    </div>
                </div>

                {/* Security Card */}
                 <div className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl shadow-sm border border-indigo-100 p-6">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-white rounded-full shadow-sm">
                            <ShieldCheck className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Secure Account</h3>
                            <p className="text-sm text-gray-500 mt-1">Two-factor authentication is currently disabled.</p>
                            <button className="text-indigo-600 text-sm font-bold mt-3 hover:underline">Enable 2FA</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
                {/* Recent Orders Table */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                        <h3 className="font-bold text-gray-900 text-lg">Recent Orders</h3>
                        <button className="text-sm text-indigo-600 font-bold hover:text-indigo-800 flex items-center transition-colors">
                            View All <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-gray-600">
                            <thead className="bg-gray-50 text-xs uppercase font-bold text-gray-400 tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">Order ID</th>
                                    <th className="px-6 py-4">Date</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Total</th>
                                    <th className="px-6 py-4"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {recentOrders.map(order => (
                                    <tr key={order.id} className="hover:bg-gray-50/80 transition-colors group">
                                        <td className="px-6 py-5 font-bold text-gray-900">{order.id}</td>
                                        <td className="px-6 py-5">{order.date}</td>
                                        <td className="px-6 py-5">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 font-medium text-gray-900">${order.total.toFixed(2)}</td>
                                        <td className="px-6 py-5 text-right">
                                            <button className="text-gray-400 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-all">
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Promo Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Fashion" />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 to-transparent" />
                    <div className="relative z-10 p-10 max-w-lg">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/20">
                            <ShoppingBag className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Member Exclusive Offer</h3>
                        <p className="text-gray-200 mb-6 leading-relaxed">You've reached Gold Tier! Enjoy an exclusive 20% off your next purchase of Accessories from the new collection.</p>
                        <button className="bg-white text-zinc-900 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-xl">
                            Browse Accessories
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;