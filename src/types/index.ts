export type DietaryType = 'veg' | 'non-veg';

export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  description: string;
  price: number;
  category: string;
  dietary: DietaryType;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  isHighlight?: boolean;
  spiceLevel?: 0 | 1 | 2 | 3;
  image: string;
  servingSize?: string;
  preparationTime?: string;
  badge?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location?: string;
  rating: number;
  comment: string;
  date: string;
  dishMentioned?: string;
  avatarBg?: string;
}

export interface OfferItem {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  code?: string;
  discountText?: string;
  image: string;
  validity?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'interior' | 'drinks' | 'desserts' | 'ambience';
  image: string;
  description?: string;
}

export interface RestaurantService {
  title: string;
  description: string;
  icon: string;
}

export interface RestaurantConfig {
  name: string;
  hindiName: string;
  tagline: string;
  subheading: string;
  cuisine: string;
  priceRange: string;
  rating: {
    score: number;
    stars: string;
    reviewCount: number;
    reviewText: string;
  };
  phone: string;
  displayPhone: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  address: {
    floor: string;
    landmark: string;
    road: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    plusCode: string;
    full: string;
    compact: string;
  };
  services: RestaurantService[];
  zomatoUrl: string;
  swiggyUrl: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  openingHours: {
    days: string;
    hours: string;
    fullText: string;
  };
  stats: {
    signatureDishes: string;
    freshIngredients: string;
    customerRating: string;
    totalReviews: string;
    yearsOfExcellence: string;
  };
  social: {
    instagram: string;
    facebook: string;
    google: string;
  };
}
