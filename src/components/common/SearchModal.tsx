import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useOrder } from '../../context/OrderContext';
import { menuItems } from '../../data/menu';
import { VegBadge } from './VegBadge';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, closeSearch, openOrderModal } = useOrder();
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'veg' | 'non-veg'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      setQuery('');
      setFilterType('all');
      document.body.style.overflow = 'unset';
    }
  }, [isSearchOpen]);

  // Handle Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isSearchOpen) closeSearch();
        else {
          // Open search
          const event = new CustomEvent('open-search');
          window.dispatchEvent(event);
        }
      }
      if (e.key === 'Escape' && isSearchOpen) {
        closeSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, closeSearch]);

  if (!isSearchOpen) return null;

  const filteredItems = menuItems.filter((item) => {
    const matchesQuery =
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase());

    const matchesType =
      filterType === 'all' ? true : item.dietary === filterType;

    return matchesQuery && matchesType;
  });

  const handleOrderItem = (item: (typeof menuItems)[0]) => {
    closeSearch();
    openOrderModal({ item });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-20 animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeSearch}
        aria-hidden="true"
      />

      {/* Search Container */}
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-stone-200 overflow-hidden z-10 flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200/80 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search paneer, butter chicken, biryani, brownie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-base sm:text-lg text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-700 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={closeSearch}
            className="px-2.5 py-1 text-xs font-semibold text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Quick Filter Pills */}
        <div className="px-4 py-2.5 bg-stone-100/70 border-b border-stone-200/60 flex items-center justify-between text-xs overflow-x-auto no-scrollbar gap-2">
          <span className="font-semibold text-stone-500 shrink-0">Filter by:</span>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 rounded-full font-medium transition-all ${
                filterType === 'all'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:bg-stone-200'
              }`}
            >
              All Dishes
            </button>
            <button
              onClick={() => setFilterType('veg')}
              className={`px-3 py-1 rounded-full font-medium transition-all flex items-center gap-1.5 ${
                filterType === 'veg'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:bg-stone-200'
              }`}
            >
              <VegBadge type="veg" size="sm" /> Veg Only
            </button>
            <button
              onClick={() => setFilterType('non-veg')}
              className={`px-3 py-1 rounded-full font-medium transition-all flex items-center gap-1.5 ${
                filterType === 'non-veg'
                  ? 'bg-rose-800 text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:bg-stone-200'
              }`}
            >
              <VegBadge type="non-veg" size="sm" /> Non-Veg
            </button>
          </div>
        </div>

        {/* Search Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex items-center justify-between p-3 sm:p-3.5 bg-white hover:bg-stone-50 rounded-2xl border border-stone-200/80 transition-all hover:border-burgundy-800/30 hover:shadow-soft"
              >
                <div className="flex items-center gap-3.5 min-w-0 pr-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <VegBadge type={item.dietary} size="sm" />
                      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                        {item.category}
                      </span>
                      {item.isChefSpecial && (
                        <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded">
                          Chef Special
                        </span>
                      )}
                    </div>
                    <h4 className="font-semibold text-stone-900 text-sm sm:text-base truncate group-hover:text-burgundy-800 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-stone-500 line-clamp-1">
                      {item.description}
                    </p>
                    <div className="mt-1 font-bold text-sm text-stone-900">
                      ₹{item.price}
                    </div>
                  </div>
                </div>

                {/* Order Button */}
                <button
                  onClick={() => handleOrderItem(item)}
                  className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-white text-xs font-semibold shadow-sm transition-transform active:scale-95"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order</span>
                  <ArrowRight className="w-3 h-3 hidden sm:inline" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-12 px-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-stone-200/70 flex items-center justify-center mx-auto text-stone-400">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-base font-semibold text-stone-700">
                No matching dishes found
              </p>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Try searching for "butter chicken", "biryani", "paneer", or browse our full menu.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
