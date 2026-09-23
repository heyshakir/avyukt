import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { galleryItems } from '../../data/gallery';
import { useOrder } from '../../context/OrderContext';

export const GallerySection: React.FC = () => {
  const { openLightbox } = useOrder();
  const [filter, setFilter] = useState<'all' | 'food' | 'interior' | 'drinks' | 'desserts'>('all');

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
            Ambience & Gallery
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Glimpses into our dining space & dishes
          </p>
        </div>

        {/* Minimal Category Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: 'All' },
            { id: 'food', label: 'Food' },
            { id: 'interior', label: 'Interior' },
            { id: 'drinks', label: 'Drinks' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                filter === tab.id
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clean 4-Column Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => openLightbox(item)}
            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-stone-100 border border-stone-200/80 shadow-soft"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <ZoomIn className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
