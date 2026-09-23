import React from 'react';
import { Star } from 'lucide-react';
import { customerReviews } from '../../data/reviews';

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-5">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
          Customer Reviews
        </h2>
        <p className="text-xs text-stone-500 mt-0.5">
          Rated 4.4 / 5 from 819+ diners in Vidisha
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {customerReviews.slice(0, 3).map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/80 shadow-soft flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-1 text-gold-500">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold-500" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                "{rev.comment}"
              </p>
            </div>

            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-stone-900">{rev.name}</span>
              <span className="text-stone-400">{rev.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
