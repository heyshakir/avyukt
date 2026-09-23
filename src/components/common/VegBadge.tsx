import React from 'react';
import type { DietaryType } from '../../types';

interface VegBadgeProps {
  type: DietaryType;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const VegBadge: React.FC<VegBadgeProps> = ({ type, showLabel = false, size = 'sm' }) => {
  const isVeg = type === 'veg';

  const sizeClasses = {
    sm: 'w-3.5 h-3.5 p-0.5',
    md: 'w-4 h-4 p-0.5',
    lg: 'w-5 h-5 p-1',
  };

  const dotSizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5',
  };

  return (
    <div className="inline-flex items-center gap-1.5" title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}>
      <div
        className={`border ${sizeClasses[size]} rounded-sm flex items-center justify-center transition-transform hover:scale-110 ${
          isVeg ? 'border-emerald-600 bg-emerald-50/50' : 'border-rose-700 bg-rose-50/50'
        }`}
        aria-label={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
      >
        <div className={`${dotSizes[size]} rounded-full ${isVeg ? 'bg-emerald-600' : 'bg-rose-700'}`} />
      </div>
      {showLabel && (
        <span className={`text-xs font-medium ${isVeg ? 'text-emerald-700' : 'text-rose-800'}`}>
          {isVeg ? 'Veg' : 'Non-Veg'}
        </span>
      )}
    </div>
  );
};
