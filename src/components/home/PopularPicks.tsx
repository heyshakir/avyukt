import React from 'react';
import { ArrowRight } from 'lucide-react';
import { menuItems } from '../../data/menu';
import { FoodCard } from '../common/FoodCard';
import { useOrder } from '../../context/OrderContext';

export const PopularPicks: React.FC = () => {
  const { setActiveTab } = useOrder();
  
  // Show known highlights (Shahi Paneer, Dal Tadka, Biryani, Roti, etc.)
  const highlightItems = menuItems.filter((item) => item.isHighlight).slice(0, 8);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Minimal Header */}
      <div className="flex items-center justify-between gap-2 mb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
            Popular Highlights
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            North Indian & Café favorites
          </p>
        </div>

        <button
          onClick={() => setActiveTab('menu')}
          className="inline-flex items-center gap-1 text-xs font-semibold text-burgundy-800 hover:text-burgundy-900 group"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Grid of Food Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {highlightItems.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
