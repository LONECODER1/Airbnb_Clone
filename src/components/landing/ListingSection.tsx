'use client';

import React, { useState } from 'react';
import './ListingSection.css';
import { getImageSrc } from '../../utils/image';

// Import grid images
import livingRoom from '../../assets/landing/listing_page_section/grid/living_room.jpeg';
import living1 from '../../assets/landing/listing_page_section/grid/living_1.jpeg';
import living2 from '../../assets/landing/listing_page_section/grid/living_2.jpeg';
import living3 from '../../assets/landing/listing_page_section/grid/living_3.jpeg';
import living4 from '../../assets/landing/listing_page_section/grid/living_4.jpeg';

const ShareIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" fill="none" />
  </svg>
);

const SaveIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z" />
  </svg>
);

const SavedIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: '#ff385c', stroke: '#ff385c', strokeWidth: 2, overflow: 'visible' }}>
    <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path fillRule="evenodd" d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
  </svg>
);

interface ListingSectionProps {
  onShowAllPhotos: () => void;
  onImageClick: (sectionId: string) => void;
  onShowToast?: (message: string) => void;
}

const ListingSection: React.FC<ListingSectionProps> = ({ onShowAllPhotos, onImageClick, onShowToast }) => {
  const [saved, setSaved] = useState(false);
  const [shareActive, setShareActive] = useState(false);
  const [saveActive, setSaveActive] = useState(false);

  const handleSave = () => {
    const nextSaved = !saved;
    setSaved(nextSaved);
    if (onShowToast) {
      onShowToast(nextSaved ? 'Saved to wishlist' : 'Removed from wishlist');
    }
  };

  const handleShare = () => {
    if (onShowToast) {
      onShowToast('Share options');
    }
  };

  return (
    <section className="listing-section" id="listing-section">
      <div className="listing-inner">
        {/* Header */}
        <div className="listing-header">
          <h1 className="listing-title">Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1>
          <div className="listing-actions">
            <button
              id="share-btn"
              className={`action-btn ${shareActive ? 'action-btn--active' : ''}`}
              onMouseDown={() => setShareActive(true)}
              onMouseUp={() => setShareActive(false)}
              onMouseLeave={() => setShareActive(false)}
              onClick={handleShare}
            >
              <span className="action-icon">
                <ShareIcon />
              </span>
              Share
            </button>
            <button
              id="save-btn"
              className={`action-btn ${saveActive ? 'action-btn--active' : ''}`}
              onMouseDown={() => setSaveActive(true)}
              onMouseUp={() => { setSaveActive(false); handleSave(); }}
              onMouseLeave={() => setSaveActive(false)}
            >
              <span className="action-icon">
                {saved ? <SavedIcon /> : <SaveIcon />}
              </span>
              {saved ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="listing-grid">
          {/* Main big image */}
          <div
            className="grid-main listing-img-wrap"
            onClick={() => onImageClick('living-room-2')}
          >
            <img src={getImageSrc(livingRoom)} alt="Living room" className="listing-img" />
          </div>
          {/* 4 smaller images */}
          <div className="grid-side">
            <div className="listing-img-wrap" onClick={() => onImageClick('living-room-1')}>
              <img src={getImageSrc(living1)} alt="Living room 1" className="listing-img" />
            </div>
            <div className="listing-img-wrap listing-img-wrap--top-right" onClick={() => onImageClick('living-room-2')}>
              <img src={getImageSrc(living2)} alt="Living room 2" className="listing-img" />
            </div>
            <div className="listing-img-wrap" onClick={() => onImageClick('bedroom')}>
              <img src={getImageSrc(living3)} alt="Bedroom" className="listing-img" />
            </div>
            <div className="listing-img-wrap listing-img-wrap--bottom-right" onClick={() => onImageClick('exterior')}>
              <img src={getImageSrc(living4)} alt="Exterior" className="listing-img" />
              {/* Show all photos button */}
              <button id="show-all-photos-btn" className="show-all-btn" onClick={(e) => { e.stopPropagation(); onShowAllPhotos(); }}>
                <span className="show-all-icon">
                  <MenuIcon />
                </span>
                Show all photos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingSection;
