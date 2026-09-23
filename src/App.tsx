import React from 'react';
import { OrderProvider, useOrder } from './context/OrderContext';
import { Header } from './components/layout/Header';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { FloatingOrderCTA } from './components/layout/FloatingOrderCTA';
import { Footer } from './components/layout/Footer';
import { OrderModal } from './components/common/OrderModal';
import { SearchModal } from './components/common/SearchModal';
import { Lightbox } from './components/common/Lightbox';

import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { OffersPage } from './pages/OffersPage';
import { GalleryPage } from './pages/GalleryPage';

const MainContent: React.FC = () => {
  const { activeTab } = useOrder();

  const renderActivePage = () => {
    switch (activeTab) {
      case 'menu':
        return <MenuPage />;
      case 'about':
        return <AboutPage />;
      case 'offers':
        return <OffersPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1917] font-sans selection:bg-burgundy-800 selection:text-white pb-16 md:pb-0">
      <Header />
      <main className="flex-1">{renderActivePage()}</main>
      <Footer />

      {/* Mobile App Navigation */}
      <MobileBottomNav />

      {/* Mobile Floating Action Button */}
      <FloatingOrderCTA />

      {/* Global Modals & Overlays */}
      <OrderModal />
      <SearchModal />
      <Lightbox />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <OrderProvider>
      <MainContent />
    </OrderProvider>
  );
};

export default App;
