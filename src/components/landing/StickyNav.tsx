'use client';

import React from 'react';
import './StickyNav.css';

interface StickyNavProps {
  showNav: boolean;
  activeSection: string;
  onNavClick: (section: string) => void;
  onShowToast?: (message: string) => void;
}

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" style={{ display: 'block', height: '12px', width: '12px', fill: 'currentColor' }}>
      <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.483-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" />
    </svg>
  );

const StickyNav: React.FC<StickyNavProps> = ({ showNav, activeSection, onNavClick, onShowToast }) => {

  return (
    <div className={`sticky-nav ${showNav ? 'sticky-nav--visible' : ''}`}>
      <div className="sticky-nav-inner">
        <div className="sticky-nav-links">
          {['Photos', 'Amenities', 'Reviews', 'Location'].map((item) => (
            <button
              key={item}
              id={`sticky-nav-${item.toLowerCase()}`}
              className={`sticky-nav-item ${activeSection === item ? 'sticky-nav-item--active' : ''}`}
              onClick={() => onNavClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="sticky-nav-right">
          <div className="sticky-price-info">
            <div className="sticky-price-amount">₹28,499 for 5 nights</div>
            <div className="sticky-rating">
              <StarIcon />
              <span>4.95 · 19 reviews</span>
            </div>
          </div>
          <button
            id="sticky-reserve-btn"
            className="sticky-reserve-btn"
            onClick={() => onShowToast?.("You won't be charged yet")}
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
