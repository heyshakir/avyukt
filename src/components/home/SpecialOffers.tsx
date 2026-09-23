import React from 'react';
import { specialOffers } from '../../data/offers';
import { useOrder } from '../../context/OrderContext';

export const SpecialOffers: React.FC = () => {
  const { openOrderModal } = useOrder();

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-5">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
          Featured Combos
        </h2>
        <p className="text-xs text-stone-500 mt-0.5">
          Curated meal combinations & savings
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {specialOffers.map((offer) => (
          <div
            key={offer.id}
            className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-soft flex flex-col justify-between"
          >
            <div>
              <div className="relative h-40 w-full overflow-hidden bg-stone-100">
                <img
                  src={offer.image}
                  alt={offer.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 text-[10px] font-bold bg-burgundy-900 text-white px-2 py-0.5 rounded-md">
                  {offer.badge}
                </span>
              </div>

              <div className="p-4 space-y-1.5">
                <h3 className="font-serif text-base font-bold text-stone-900">
                  {offer.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {offer.description}
                </p>
              </div>
            </div>

            <div className="p-4 pt-0 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-700">
                {offer.discountText}
              </span>

              <button
                onClick={() => openOrderModal({ offerTitle: offer.title })}
                className="px-3.5 py-1.5 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-white text-xs font-semibold transition-all active:scale-95"
              >
                Order Combo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
