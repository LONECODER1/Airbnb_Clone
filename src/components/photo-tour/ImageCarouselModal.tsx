'use client';

import React, { useEffect } from 'react';
import './ImageCarouselModal.css';
import { ALL_PHOTOS, getSectionNameForPhotoIndex } from './photoTourData';

const BreadcrumbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentColor' }}>
    <path fillRule="evenodd" d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'none', stroke: 'currentColor', strokeWidth: 3, overflow: 'visible' }}>
    <path d="m6 6 20 20M26 6 6 26" />
  </svg>
);

const ChevronLeft = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'none', stroke: 'currentColor', strokeWidth: 3, overflow: 'visible' }}>
    <path d="M20 28 8 16 20 4" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'none', stroke: 'currentColor', strokeWidth: 3, overflow: 'visible' }}>
    <path d="m12 4 12 12-12 12" />
  </svg>
);

interface ImageCarouselModalProps {
  photoIndex: number; // 1-based (1 to 43)
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

const ImageCarouselModal: React.FC<ImageCarouselModalProps> = ({
  photoIndex,
  onClose,
  onNavigate,
}) => {
  const currentPhoto = ALL_PHOTOS[photoIndex - 1] || ALL_PHOTOS[0];
  const sectionName = getSectionNameForPhotoIndex(photoIndex);
  const isFirst = photoIndex <= 1;
  const isLast = photoIndex >= ALL_PHOTOS.length;

  const handlePrev = () => {
    if (!isFirst) {
      onNavigate(photoIndex - 1);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      onNavigate(photoIndex + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        if (!isFirst) {
          onNavigate(photoIndex - 1);
        }
      } else if (e.key === 'ArrowRight') {
        if (!isLast) {
          onNavigate(photoIndex + 1);
        }
      } else if (e.key === 'Escape') {
        e.stopPropagation();
        e.stopImmediatePropagation();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFirst, isLast, photoIndex, onNavigate, onClose]);

  return (
    <div className="carousel-modal-overlay">
      {/* Header */}
      <header className="carousel-header">
        <div className="carousel-header-left">
          <button
            id="carousel-breadcrumb-btn"
            className="carousel-icon-btn"
            onClick={onClose}
            aria-label="Back to photo tour grid"
          >
            <BreadcrumbIcon />
          </button>
        </div>

        <div className="carousel-header-center">
          <span className="carousel-section-name">{sectionName}</span>
        </div>

        <div className="carousel-header-right">
          <span className="carousel-counter">
            {photoIndex} / {ALL_PHOTOS.length}
          </span>
          <button
            id="carousel-close-btn"
            className="carousel-icon-btn"
            onClick={onClose}
            aria-label="Close photo modal"
          >
            <CloseIcon />
          </button>
        </div>
      </header>

      {/* Main Image Stage */}
      <div className="carousel-stage">
        <button
          id="carousel-prev-btn"
          className="carousel-nav-btn carousel-nav-btn--prev _KNOVTi"
          onClick={handlePrev}
          disabled={isFirst}
          aria-label="Previous photo"
        >
          <ChevronLeft />
        </button>

        <div className="carousel-image-container">
          <img
            src={currentPhoto}
            alt={`${sectionName} ${photoIndex}`}
            className="carousel-img"
          />
        </div>

        <button
          id="carousel-next-btn"
          className="carousel-nav-btn carousel-nav-btn--next _KNOVTi _VkQoEV"
          onClick={handleNext}
          disabled={isLast}
          aria-label="Next photo"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageCarouselModal;
