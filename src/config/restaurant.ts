import type { RestaurantConfig } from '../types';

export const restaurantConfig: RestaurantConfig = {
  name: 'Avyukt Restaurant',
  hindiName: 'अव्युक्त रेस्टोरेंट',
  tagline: 'Authentic North Indian Dining & Café',
  subheading: 'Freshly prepared North Indian delicacies, hearty thalis, artisanal coffees, and quick bites served with warmth.',
  cuisine: 'North Indian & Fast Food',
  priceRange: '₹1–200 per person',
  rating: {
    score: 4.4,
    stars: '4.4★',
    reviewCount: 819,
    reviewText: '4.4 / 5 from 819+ Google Reviews',
  },
  phone: '09039121277',
  displayPhone: '090391 21277',
  whatsapp: '9039121277',
  whatsappMessage: 'Namaste Avyukt Restaurant team, I would like to inquire about table availability, takeaway, or placing an order.',
  email: 'avyuktvidisha@gmail.com',
  address: {
    floor: '3rd Floor',
    landmark: 'Hotel Grand Ashok, Bus Stand',
    road: 'Sanchi Road',
    area: 'Daulatpur',
    city: 'Vidisha',
    state: 'Madhya Pradesh',
    pincode: '464001',
    plusCode: 'GRC3+C7 Vidisha, Madhya Pradesh',
    full: '3rd Floor, Hotel Grand Ashok, Bus Stand, Sanchi Road, Daulatpur, Vidisha, Madhya Pradesh 464001',
    compact: '3rd Floor, Hotel Grand Ashok, Sanchi Road, Vidisha, MP',
  },
  services: [
    {
      title: 'Dine-in',
      description: 'Comfortable family seating with scenic 3rd-floor views atop Hotel Grand Ashok.',
      icon: 'UtensilsCrossed',
    },
    {
      title: 'Drive-through',
      description: 'Convenient quick curb-side and drive-through takeaway for travelers & locals.',
      icon: 'Car',
    },
    {
      title: 'No-contact Delivery',
      description: 'Hygienic and sealed packaging delivered promptly to your doorstep.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Online Ordering',
      description: 'Instant ordering via Swiggy and Zomato with live order tracking.',
      icon: 'Smartphone',
    },
  ],
  // Central Partner URLs
  zomatoUrl: 'https://www.zomato.com/vidisha/avyukt-restaurant-vidisha-locality/order',
  swiggyUrl: 'https://www.swiggy.com/search?query=Avyukt+Restaurant',
  mapsUrl: 'https://maps.google.com/?q=GRC3%2BC7+Vidisha,+Madhya+Pradesh', // GOOGLE_MAPS_URL
  mapsEmbedUrl: 'https://maps.google.com/maps?q=Hotel+Grand+Ashok+Bus+Stand+Sanchi+Road+Vidisha+Madhya+Pradesh+464001&t=&z=15&ie=UTF8&iwloc=&output=embed',
  openingHours: {
    days: 'Monday – Sunday',
    hours: '11:00 AM – 11:00 PM',
    fullText: 'Open Daily: 11:00 AM – 11:00 PM',
  },
  stats: {
    signatureDishes: '10+',
    freshIngredients: '100%',
    customerRating: '4.4★',
    totalReviews: '819+',
    yearsOfExcellence: 'Top Rated',
  },
  social: {
    instagram: 'https://instagram.com/avyuktrestaurant',
    facebook: 'https://facebook.com/avyuktrestaurant',
    google: 'https://maps.google.com/?q=GRC3%2BC7+Vidisha,+Madhya+Pradesh',
  },
};
