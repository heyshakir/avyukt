import React from 'react';
import type { MenuItem } from '../../types';
import { VegBadge } from './VegBadge';
import { useOrder } from '../../context/OrderContext';

interface FoodCardProps {
  item: MenuItem;
  variant?: 'grid' | 'compact' | 'horizontal';
}

export const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  const { openOrderModal } = useOrder();

  return (
    <div className="group bg-white rounded-2xl p-3 sm:p-3.5 border border-stone-200/80 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Image */}
        <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden mb-3 bg-stone-100">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 left-2">
            <div className="bg-white/90 backdrop-blur-xs p-1 rounded-md shadow-xs">
              <VegBadge type={item.dietary} size="sm" />
            </div>
          </div>
        </div>

        {/* Dish Title & Description */}
        <div className="space-y-1">
          <h3 className="font-semibold text-stone-900 text-sm sm:text-base leading-snug group-hover:text-burgundy-800 transition-colors">
            {item.name}
          </h3>
          <p className="text-xs text-stone-500 line-clamp-1 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Price & Simple Order CTA */}
      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-stone-100">
        <span className="text-base sm:text-lg font-bold text-stone-900">
          ₹{item.price}
        </span>

        <button
          onClick={() => openOrderModal({ item })}
          className="px-3.5 py-1.5 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-white text-xs font-semibold shadow-xs transition-all active:scale-95"
        >
          Order
        </button>
      </div>
    </div>
  );
};
