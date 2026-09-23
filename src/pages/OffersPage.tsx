import React from 'react';
import { Tag, ShoppingBag } from 'lucide-react';
import { specialOffers } from '../data/offers';
import { useOrder } from '../context/OrderContext';

export const OffersPage: React.FC = () => {
  const { openOrderModal } = useOrder();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-burgundy-800 text-xs font-bold uppercase tracking-wider">
          <Tag className="w-3.5 h-3.5" />
          <span>Exclusive Savings</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900">
          Offers & Dining Combos
        </h1>
        <p className="text-sm sm:text-base text-stone-600">
          Save on our chef-curated family meals, lunch thalis, and weekend royal feasts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {specialOffers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-soft hover:shadow-soft-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-xs font-bold bg-burgundy-900 text-white px-3 py-1 rounded-full">
                  {offer.badge}
                </span>
                <span className="absolute bottom-3 left-3 text-xs font-bold text-gold-300">
                  {offer.validity}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  {offer.title}
                </h3>
                <p className="text-xs font-bold text-burgundy-800 uppercase tracking-wider">
                  {offer.tagline}
                </p>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {offer.description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-4">
              <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-400 block">
                    Promo Savings
                  </span>
                  <span className="text-sm font-extrabold text-stone-900">
                    {offer.discountText}
                  </span>
                </div>
                {offer.code && (
                  <span className="text-xs font-mono font-bold bg-white px-2.5 py-1 rounded border border-stone-300 text-stone-800">
                    {offer.code}
                  </span>
                )}
              </div>

              <button
                onClick={() => openOrderModal({ offerTitle: offer.title })}
                className="w-full py-3 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-white font-bold text-sm shadow-burgundy flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <ShoppingBag className="w-4 h-4 text-gold-300" />
                <span>ORDER ON SWIGGY / ZOMATO</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
