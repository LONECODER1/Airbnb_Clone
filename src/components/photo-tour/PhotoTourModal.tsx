'use client';

import React, { useEffect, useRef, useState } from 'react';
import './PhotoTourModal.css';
import { ALL_PHOTOS, PHOTO_SECTIONS } from './photoTourData';

const BackIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, overflow: 'visible' }}>
    <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" fill="none" />
  </svg>
);

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: filled ? '#ff385c' : 'none', stroke: filled ? '#ff385c' : 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z" />
  </svg>
);

interface PhotoTourModalProps {
  onClose: () => void;
  onOpenCarousel: (photoIndex: number) => void;
  initialSectionId?: string;
}

/**
 * Render images in a section with dynamic block pattern:
 * - 3 images => 1 full-width (2 cols) + 2 half-width (1 col each)
 * - 2 images => 2 half-width (1 col each)
 * - 1 image  => 1 full-width (2 cols)
 * Recursively applied for N images (3+3+1, etc.)
 */
const SectionPhotoGrid: React.FC<{
  photos: string[];
  sectionName: string;
  startGlobalIndex: number;
  onOpenCarousel: (idx: number) => void;
}> = ({ photos, sectionName, startGlobalIndex, onOpenCarousel }) => {
  if (photos.length === 0) return null;

  // Build dynamic row blocks based on photo count rules
  const blocks: Array<
    | { type: 'full'; photo: string; globalIdx: number }
    | { type: 'pair'; photos: Array<{ photo: string; globalIdx: number }> }
  > = [];

  let i = 0;
  const total = photos.length;

  while (i < total) {
    const rem = total - i;

    if (rem >= 3) {
      blocks.push({
        type: 'full',
        photo: photos[i],
        globalIdx: startGlobalIndex + i,
      });
      blocks.push({
        type: 'pair',
        photos: [
          { photo: photos[i + 1], globalIdx: startGlobalIndex + i + 1 },
          { photo: photos[i + 2], globalIdx: startGlobalIndex + i + 2 },
        ],
      });
      i += 3;
    } else if (rem === 2) {
      blocks.push({
        type: 'pair',
        photos: [
          { photo: photos[i], globalIdx: startGlobalIndex + i },
          { photo: photos[i + 1], globalIdx: startGlobalIndex + i + 1 },
        ],
      });
      i += 2;
    } else if (rem === 1) {
      blocks.push({
        type: 'full',
        photo: photos[i],
        globalIdx: startGlobalIndex + i,
      });
      i += 1;
    }
  }

  return (
    <div className="section-photo-grid">
      {blocks.map((block, bIdx) => {
        if (block.type === 'full') {
          return (
            <div
              key={`full-${block.globalIdx}`}
              className="section-photo-item section-photo-item--full"
              onClick={() => onOpenCarousel(block.globalIdx)}
            >
              <img
                src={block.photo}
                alt={`${sectionName} ${block.globalIdx + 1}`}
                className="section-photo-img"
              />
            </div>
          );
        }

        return (
          <div key={`pair-${bIdx}`} className="section-photo-row-group">
            {block.photos.map((item) => (
              <div
                key={item.globalIdx}
                className="section-photo-item section-photo-item--half"
                onClick={() => onOpenCarousel(item.globalIdx)}
              >
                <img
                  src={item.photo}
                  alt={`${sectionName} ${item.globalIdx + 1}`}
                  className="section-photo-img"
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

const PhotoTourModal: React.FC<PhotoTourModalProps> = ({
  onClose,
  onOpenCarousel,
  initialSectionId,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [heartFilled, setHeartFilled] = useState(false);

  useEffect(() => {
    if (initialSectionId) {
      setTimeout(() => {
        const el = document.getElementById(`photo-section-${initialSectionId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [initialSectionId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If image carousel modal is currently open, do not close PhotoTourModal
      if (document.querySelector('.carousel-modal-overlay')) {
        return;
      }

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        if (containerRef.current) {
          containerRef.current.scrollBy({ top: 200, behavior: 'smooth' });
        }
      } else if (e.key === 'ArrowUp') {
        if (containerRef.current) {
          containerRef.current.scrollBy({ top: -200, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const scrollToSection = (secId: string) => {
    const el = document.getElementById(`photo-section-${secId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="photo-tour-modal" ref={containerRef}>
      {/* Navbar */}
      <header className="tour-navbar">
        <div className="tour-navbar-inner">
          <button
            id="photo-tour-back-btn"
            className="tour-icon-btn"
            onClick={onClose}
            aria-label="Back to listing"
          >
            <BackIcon />
          </button>

          <span className="tour-navbar-title">Photo tour</span>

          <div className="tour-navbar-actions">
            <button
              id="photo-tour-share-btn"
              className="tour-icon-btn"
              aria-label="Share listing"
            >
              <ShareIcon />
            </button>
            <button
              id="photo-tour-heart-btn"
              className="tour-icon-btn"
              onClick={() => setHeartFilled(!heartFilled)}
              aria-label="Save listing"
            >
              <HeartIcon filled={heartFilled} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Tour Content */}
      <div className="tour-content">
        <div className="tour-inner">

          {/* 9 Section Cover Grid */}
          <div className="tour-grid-summary">
            {PHOTO_SECTIONS.map((sec) => (
              <div
                key={sec.id}
                className="tour-grid-card"
                onClick={() => scrollToSection(sec.id)}
              >
                <div className="tour-grid-img-wrap">
                  <img
                    src={sec.coverImage}
                    alt={sec.name}
                    className="tour-grid-img"
                  />
                </div>
                <div className="tour-grid-info">
                  <h3 style={{color: "#6a6a6a"}} className="tour-grid-name ">{sec.name}</h3>
                  {/* <span className="tour-grid-count">{sec.count} photos</span> */}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="tour-divider" /> */}

          {/* All 9 Sections — 50/50 left/right layout */}
          <div className="tour-sections-list">
            {PHOTO_SECTIONS.map((sec) => {
              const sectionPhotos = ALL_PHOTOS.slice(
                sec.startIndex - 1,
                sec.startIndex - 1 + sec.count
              );

              return (
                <div
                  key={sec.id}
                  id={`photo-section-${sec.id}`}
                  className="tour-section-block"
                >
                  {/* Left: sticky heading */}
                  <div className="tour-section-left">
                    <div className="tour-section-header-sticky">
                      <h2 className="tour-section-title !text-3xl">{sec.name}</h2>
                      <p className="tour-section-subtext">{sec.subtext}</p>
                    </div>
                  </div>

                  {/* Right: photo grid */}
                  <div className="tour-section-right">
                    <SectionPhotoGrid
                      photos={sectionPhotos}
                      sectionName={sec.name}
                      startGlobalIndex={sec.startIndex}
                      onOpenCarousel={onOpenCarousel}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoTourModal;
