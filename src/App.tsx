'use client';

import { useState, useEffect, useRef } from 'react';
import './App.css';

import Navbar from './components/landing/Navbar';
import ListingSection from './components/landing/ListingSection';
import StickyNav from './components/landing/StickyNav';
import PhotosSection from './components/landing/PhotosSection';
import AmenitiesSection from './components/landing/AmenitiesSection';
import RightSidebar from './components/landing/RightSidebar';
import ReviewsSection from './components/landing/ReviewsSection';
import LocationSection from './components/landing/LocationSection';

import PhotoTourModal from './components/photo-tour/PhotoTourModal';
import ImageCarouselModal from './components/photo-tour/ImageCarouselModal';

function App() {
  // Modal states
  const [photoTourOpen, setPhotoTourOpen] = useState(false);
  const [carouselPhotoIndex, setCarouselPhotoIndex] = useState<number | null>(null);
  const [targetSectionId, setTargetSectionId] = useState<string | undefined>(undefined);

  // Sync with URL params on client mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('modal') === 'PHOTO_TOUR_SCROLLABLE') {
        setPhotoTourOpen(true);
      }
      const item = params.get('modalItem');
      if (item) {
        const idx = parseInt(item, 10);
        if (!isNaN(idx) && idx >= 1 && idx <= 43) {
          setCarouselPhotoIndex(idx);
        }
      }
    }
  }, []);

  // Sticky nav states
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [activeSection, setActiveSection] = useState('Photos');

  // Toast notification states
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toastHideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleShowToast = (msg: string) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    if (toastHideTimerRef.current) clearTimeout(toastHideTimerRef.current);

    setToastMessage(msg);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setToastVisible(true);
      });
    });

    toastTimerRef.current = setTimeout(() => {
      setToastVisible(false);
      toastHideTimerRef.current = setTimeout(() => {
        setToastMessage(null);
      }, 300);
    }, 2000);
  };

  // Sync URL search params
  const updateUrlParams = (tourOpen: boolean, itemIndex: number | null) => {
    const url = new URL(window.location.href);
    if (tourOpen) {
      url.searchParams.set('modal', 'PHOTO_TOUR_SCROLLABLE');
    } else {
      url.searchParams.delete('modal');
    }
    if (itemIndex !== null) {
      url.searchParams.set('modalItem', String(itemIndex));
    } else {
      url.searchParams.delete('modalItem');
    }
    window.history.pushState({}, '', url.toString());
  };

  const handleOpenPhotoTour = (sectionId?: string) => {
    setTargetSectionId(sectionId);
    setPhotoTourOpen(true);
    updateUrlParams(true, carouselPhotoIndex);
  };

  const handleClosePhotoTour = () => {
    setPhotoTourOpen(false);
    updateUrlParams(false, carouselPhotoIndex);
  };

  const handleOpenCarousel = (photoIndex: number) => {
    setCarouselPhotoIndex(photoIndex);
    updateUrlParams(photoTourOpen, photoIndex);
  };

  const handleCloseCarousel = () => {
    setCarouselPhotoIndex(null);
    updateUrlParams(photoTourOpen, null);
  };

  const handleListingImageClick = (sectionId: string) => {
    handleOpenPhotoTour(sectionId);
  };

  // Scroll listener for sticky navbar & active section highlight
  useEffect(() => {
    const handleScroll = () => {
      const listingSec = document.getElementById('listing-section');
      if (listingSec) {
        const rect = listingSec.getBoundingClientRect();
        // Show sticky nav when scrolled past listing grid bottom
        if (rect.bottom < 80) {
          setShowStickyNav(true);
        } else {
          setShowStickyNav(false);
        }
      }

      // Check section visibility for sticky nav highlight
      if (window.scrollY < 300) {
        setActiveSection('Photos');
      } else {
        const sections = [
          { id: 'photos', name: 'Photos' },
          { id: 'amenities', name: 'Amenities' },
          { id: 'reviews', name: 'Reviews' },
          { id: 'location', name: 'Location' },
        ];

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i].id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200) {
              setActiveSection(sections[i].name);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for landing page
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only process if no modal is open
      if (photoTourOpen || carouselPhotoIndex !== null) return;
      if (e.key === 'ArrowDown') {
        window.scrollBy({ top: 200, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp') {
        window.scrollBy({ top: -200, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photoTourOpen, carouselPhotoIndex]);

  const handleNavClick = (sectionName: string) => {
    if (sectionName === 'Photos') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionName.toLowerCase());
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="main-container">
      {/* Sticky Navigation bar */}
      <StickyNav
        showNav={showStickyNav}
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onShowToast={handleShowToast}
      />

      {/* Main Landing Navbar */}
      <Navbar />

      {/* Listing Page Section */}
      <ListingSection
        onShowAllPhotos={() => handleOpenPhotoTour()}
        onImageClick={handleListingImageClick}
        onShowToast={handleShowToast}
      />

      {/* Split section: Left Side (Photos & Amenities), Right Side (Sticky Reservation Card) */}
      <div className="photos-amenities-wrapper">
        <div className="left-column">
          <div id="photos">
            <PhotosSection />
          </div>
          <div id="amenities">
            <AmenitiesSection />
          </div>
        </div>
        <div className="right-column">
          <RightSidebar onShowToast={handleShowToast} />
        </div>
      </div>

      {/* Reviews Section */}
      <div id="reviews">
        <ReviewsSection />
      </div>

      {/* Location Section */}
      <div id="location">
        <LocationSection />
      </div>

      {/* Toast Notification Modal */}
      {toastMessage && (
        <div className={`toast-modal ${toastVisible ? 'toast-modal--visible' : ''}`}>
          {toastMessage}
        </div>
      )}

      {/* Photo Tour Full Page Modal */}
      {photoTourOpen && (
        <PhotoTourModal
          onClose={handleClosePhotoTour}
          onOpenCarousel={handleOpenCarousel}
          initialSectionId={targetSectionId}
        />
      )}

      {/* Image Carousel Modal */}
      {carouselPhotoIndex !== null && (
        <ImageCarouselModal
          photoIndex={carouselPhotoIndex}
          onClose={handleCloseCarousel}
          onNavigate={(newIdx) => {
            setCarouselPhotoIndex(newIdx);
            updateUrlParams(photoTourOpen, newIdx);
          }}
        />
      )}
    </div>
  );
}

export default App;
