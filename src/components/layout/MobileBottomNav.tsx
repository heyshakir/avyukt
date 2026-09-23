import React from 'react';
import { Home, UtensilsCrossed, Info, Image, MapPin } from 'lucide-react';
import { useOrder } from '../../context/OrderContext';

export const MobileBottomNav: React.FC = () => {
  const { activeTab, setActiveTab } = useOrder();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'menu', label: 'Menu', icon: UtensilsCrossed },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'about', label: 'About', icon: Info },
    { id: 'contact', label: 'Location', icon: MapPin },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/90 py-1.5 px-2 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
      <nav className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 relative min-w-[56px] ${
                isActive ? 'text-burgundy-800 font-bold' : 'text-stone-500 hover:text-stone-800 font-medium'
              }`}
            >
              {isActive && (
                <span className="absolute -top-1.5 w-6 h-1 bg-burgundy-800 rounded-full" />
              )}
              <div
                className={`p-1 rounded-xl transition-transform ${
                  isActive ? 'scale-110' : ''
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 1.8} />
              </div>
              <span className="text-[10px] sm:text-[11px] tracking-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
