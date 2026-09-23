import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { useOrder } from '../../context/OrderContext';
import { restaurantConfig } from '../../config/restaurant';
import { VegBadge } from './VegBadge';

export const OrderModal: React.FC = () => {
  const { isOrderModalOpen, closeOrderModal, selectedOrderItem, selectedOfferTitle } = useOrder();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeOrderModal();
    };
    if (isOrderModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOrderModalOpen, closeOrderModal]);

  if (!isOrderModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeOrderModal}
        aria-hidden="true"
      />

      {/* Modal / Bottom Sheet Box */}
      <div className="relative w-full sm:max-w-lg bg-[#FAF7F2] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-stone-200/80 overflow-hidden z-10 animate-slide-up">
        {/* Top Handle bar on mobile */}
        <div className="w-12 h-1.5 bg-stone-300 rounded-full mx-auto mt-3 mb-1 sm:hidden" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-4 pb-3 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-stone-600 uppercase">
              Accepting Delivery Orders
            </span>
          </div>
          <button
            onClick={closeOrderModal}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {/* Selected Item / Offer Banner if available */}
          {selectedOrderItem ? (
            <div className="flex items-center gap-4 p-3.5 bg-white rounded-2xl border border-stone-200/80 shadow-soft">
              <img
                src={selectedOrderItem.image}
                alt={selectedOrderItem.name}
                className="w-16 h-16 rounded-xl object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <VegBadge type={selectedOrderItem.dietary} />
                  <span className="text-xs font-semibold text-burgundy-800">
                    {selectedOrderItem.category.toUpperCase()}
                  </span>
                </div>
                <h4 className="font-semibold text-stone-900 text-sm truncate">
                  {selectedOrderItem.name}
                </h4>
                <p className="text-sm font-bold text-burgundy-800">
                  ₹{selectedOrderItem.price}
                </p>
              </div>
            </div>
          ) : selectedOfferTitle ? (
            <div className="flex items-center gap-3 p-3.5 bg-amber-50 rounded-2xl border border-amber-200">
              <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                  Special Offer Selected
                </span>
                <p className="font-semibold text-stone-900 text-sm">{selectedOfferTitle}</p>
              </div>
            </div>
          ) : null}

          {/* Main Title & Subtitle */}
          <div className="text-center sm:text-left space-y-1">
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              Where would you like to order?
            </h3>
            <p className="text-sm text-stone-600">
              Choose your preferred delivery partner for seamless ordering and instant tracking.
            </p>
          </div>

          {/* Partner Action Buttons */}
          <div className="grid grid-cols-1 gap-3.5 pt-1">
            {/* ZOMATO BUTTON */}
            <a
              href={restaurantConfig.zomatoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-4 rounded-2xl bg-white border-2 border-[#E23744]/20 hover:border-[#E23744] hover:bg-rose-50/40 shadow-soft transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#E23744] flex items-center justify-center text-white font-black text-lg tracking-tighter shadow-sm shrink-0">
                  <span className="italic font-sans">zomato</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-900 group-hover:text-[#E23744] transition-colors">
                      Order on Zomato
                    </span>
                    <span className="text-[10px] font-bold bg-[#E23744]/10 text-[#E23744] px-1.5 py-0.5 rounded">
                      Fast Delivery
                    </span>
                  </div>
                  <p className="text-xs text-stone-500">Live order tracking & exclusive discounts</p>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-[#E23744] transition-colors shrink-0" />
            </a>

            {/* SWIGGY BUTTON */}
            <a
              href={restaurantConfig.swiggyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-4 rounded-2xl bg-white border-2 border-[#FC8019]/20 hover:border-[#FC8019] hover:bg-orange-50/40 shadow-soft transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#FC8019] flex items-center justify-center text-white font-black text-lg tracking-tighter shadow-sm shrink-0">
                  <span className="font-sans">SWIGGY</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-900 group-hover:text-[#FC8019] transition-colors">
                      Order on Swiggy
                    </span>
                    <span className="text-[10px] font-bold bg-[#FC8019]/10 text-[#FC8019] px-1.5 py-0.5 rounded">
                      Swiggy One
                    </span>
                  </div>
                  <p className="text-xs text-stone-500">Express delivery & online payment</p>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-[#FC8019] transition-colors shrink-0" />
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-2 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Contactless Delivery
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-600" />
              Avg. 25-35 mins
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
