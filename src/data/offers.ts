import type { OfferItem } from '../types';

export const specialOffers: OfferItem[] = [
  {
    id: 'off-1',
    badge: 'WEEKEND EXCLUSIVE',
    title: "Chef's Tasting Feast",
    tagline: 'A royal 4-course curated journey',
    description: 'Includes 2 Signature Starters, 2 Handi Gravies, Choice of 4 Naans, Handi Biryani and 2 Decadent Desserts.',
    code: 'WEEKENDROYAL',
    discountText: 'Flat 20% OFF on Swiggy & Zomato',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    validity: 'Valid Friday to Sunday',
  },
  {
    id: 'off-2',
    badge: 'FAMILY COMBO',
    title: 'Grand Avyukt Celebration Box',
    tagline: 'Perfect for 3-4 food lovers',
    description: 'Paneer Tikka, Murgh Malai Tikka, Dal Makhani, Butter Chicken, Garlic Naan basket and Gulab Jamun platter.',
    code: 'AVYUKTFAMILY',
    discountText: 'Save ₹350 on Combo Value',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    validity: 'Available Daily',
  },
  {
    id: 'off-3',
    badge: 'LUNCH SPECIAL',
    title: 'Executive Thali & Bowl Combos',
    tagline: 'Quick, gourmet lunchtime indulgence',
    description: 'Your choice of Biryani Bowl or Royal Curry Rice Bowl with crispy snacks, fresh salad, raita, and dessert.',
    code: 'LUNCHFAST',
    discountText: 'Starting at ₹249',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    validity: 'Mon – Fri (12 PM – 4 PM)',
  },
];
