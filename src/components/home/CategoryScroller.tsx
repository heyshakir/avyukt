import React from 'react';
import { menuCategories } from '../../data/menu';
import { useOrder } from '../../context/OrderContext';

export const CategoryScroller: React.FC = () => {
  const { selectedCategory, setSelectedCategory, setActiveTab } = useOrder();

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    setActiveTab('menu');
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1">
        {menuCategories.map((category) => {
          const isSelected = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                isSelected
                  ? 'bg-burgundy-800 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200/80 shadow-xs'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
