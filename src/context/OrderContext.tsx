import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { MenuItem, GalleryItem } from '../types';

interface OrderModalOptions {
  item?: MenuItem | null;
  offerTitle?: string | null;
}

interface OrderContextType {
  // Order Modal State
  isOrderModalOpen: boolean;
  selectedOrderItem: MenuItem | null;
  selectedOfferTitle: string | null;
  openOrderModal: (options?: OrderModalOptions) => void;
  closeOrderModal: () => void;

  // Search Modal State
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;

  // Gallery Lightbox State
  lightboxImage: GalleryItem | null;
  openLightbox: (item: GalleryItem) => void;
  closeLightbox: () => void;

  // Active View Navigation (for SPA navigation)
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  vegOnlyFilter: boolean;
  setVegOnlyFilter: (val: boolean | ((prev: boolean) => boolean)) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedOrderItem, setSelectedOrderItem] = useState<MenuItem | null>(null);
  const [selectedOfferTitle, setSelectedOfferTitle] = useState<string | null>(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const [activeTab, setActiveTabState] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [vegOnlyFilter, setVegOnlyFilter] = useState(false);

  const setActiveTab = (tab: string) => {
    setActiveTabState(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openOrderModal = (options?: OrderModalOptions) => {
    setSelectedOrderItem(options?.item || null);
    setSelectedOfferTitle(options?.offerTitle || null);
    setIsOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedOrderItem(null);
    setSelectedOfferTitle(null);
  };

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const openLightbox = (item: GalleryItem) => setLightboxImage(item);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <OrderContext.Provider
      value={{
        isOrderModalOpen,
        selectedOrderItem,
        selectedOfferTitle,
        openOrderModal,
        closeOrderModal,
        isSearchOpen,
        openSearch,
        closeSearch,
        lightboxImage,
        openLightbox,
        closeLightbox,
        activeTab,
        setActiveTab,
        selectedCategory,
        setSelectedCategory,
        vegOnlyFilter,
        setVegOnlyFilter,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
