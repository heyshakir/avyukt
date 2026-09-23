import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { menuCategories, menuItems } from '../data/menu';
import { FoodCard } from '../components/common/FoodCard';
import { VegBadge } from '../components/common/VegBadge';
import { useOrder } from '../context/OrderContext';

export const MenuPage: React.FC = () => {
  const { selectedCategory, setSelectedCategory, vegOnlyFilter, setVegOnlyFilter } = useOrder();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' ? true : item.category === selectedCategory;

    const matchesVeg = vegOnlyFilter ? item.dietary === 'veg' : true;

    const matchesSearch =
      searchQuery.trim() === ''
        ? true
        : item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesVeg && matchesSearch;
  });

  const shouldGroup = selectedCategory === 'all' && !searchQuery.trim();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
      {/* Menu Header */}
      <div className="text-center max-w-2xl mx-auto space-y-1.5">
        <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900">
          Our Menu
        </h1>
        <p className="text-xs sm:text-sm text-stone-500">
          North Indian favorites, thalis, dosas, and shakes (₹1–200 / person)
        </p>
      </div>

      {/* Clean Search & Veg Filter */}
      <div className="bg-white rounded-2xl p-3 sm:p-4 border border-stone-200/80 shadow-soft space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes (e.g. Shahi Paneer, Dosa, Cold Coffee)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FAF7F2] border border-stone-200 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-burgundy-800"
            />
          </div>

          <button
            onClick={() => setVegOnlyFilter((prev) => !prev)}
            className={`flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all active:scale-95 ${
              vegOnlyFilter
                ? 'bg-emerald-700 text-white border-emerald-800'
                : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border-stone-200'
            }`}
          >
            <VegBadge type="veg" size="sm" />
            <span>Veg Only</span>
          </button>
        </div>

        {/* Minimal Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-0.5">
          {menuCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                  isSelected
                    ? 'bg-stone-900 text-white'
                    : 'bg-[#FAF7F2] text-stone-600 hover:text-stone-900 border border-stone-200/80'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Dishes */}
      {shouldGroup ? (
        <div className="space-y-10">
          {menuCategories
            .filter((cat) => cat.id !== 'all')
            .map((cat) => {
              const catItems = menuItems.filter((item) => {
                const matchesCat = item.category === cat.id;
                const matchesVeg = vegOnlyFilter ? item.dietary === 'veg' : true;
                return matchesCat && matchesVeg;
              });

              if (catItems.length === 0) return null;

              return (
                <div key={cat.id} className="space-y-3.5">
                  <div className="border-b border-stone-200 pb-2 flex items-center justify-between">
                    <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900 flex items-center gap-1.5">
                      <span>{cat.icon}</span>
                      <span>{cat.name}</span>
                    </h2>
                    <span className="text-xs text-stone-400">
                      {catItems.length} items
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
                    {catItems.map((item) => (
                      <FoodCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div>
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
              {filteredItems.map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-4 space-y-2 bg-white rounded-2xl border border-stone-200">
              <p className="text-sm font-semibold text-stone-700">
                No dishes found matching your search
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setVegOnlyFilter(false);
                }}
                className="px-3.5 py-1.5 rounded-xl bg-burgundy-800 text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
