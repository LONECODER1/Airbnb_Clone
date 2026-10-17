'use client';

import React from 'react';
import './RightSidebar.css';

const ReportIcon = () => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '14px', width: '14px', fill: 'currentColor' }}>
    <path d="m7.5011 1c.5272 0 .9591.40794.99725.92537l.00275.07463v1h5.5c.31265 0 .5435.281645.4935.581075l-.01275.056285-.96125 3.36264.96125 3.36265c.08055.2818-.0967.5625-.36775.62465l-.0554.00945-.0576.00325h-5.5c-.5272 0-.9591-.40795-.99725-.92535l-.00275-.07465v-1h-5v6h-1v-14zm1 3h-1v4h1z" />
  </svg>
);

const TagIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'block', height: '24px', width: '24px', fill: '#599446' }}>
    <path d="M12.5 4h-7A1.5 1.5 0 0 0 4 5.5v7c0 .4.16.78.44 1.06l14 14a1.5 1.5 0 0 0 2.12 0l7-7a1.5 1.5 0 0 0 0-2.12l-14-14A1.5 1.5 0 0 0 12.5 4zm-4 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
  </svg>
);

const ChevronDown = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'block', height: '14px', width: '14px', fill: 'none', stroke: 'currentColor', strokeWidth: 3 }}>
    <path d="M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface RightSidebarProps {
  onShowToast?: (message: string) => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ onShowToast }) => {
  return (
    <div className="right-sidebar !pt-10">
      {/* Top Promo Banner */}
      <div className="right-promo-card">
        <div className="right-promo-left">
          <span className="right-promo-icon">
            <TagIcon />
          </span>
          <div className="right-promo-text">
            <div>Get 10% off your next stay.</div>
            <u className="right-promo-terms">Terms apply</u>
          </div>
        </div>
        <button id="claim-btn" className="right-promo-claim-btn">Claim</button>
      </div>

      {/* Main Booking Card */}
      <div className="right-card">
        {/* Price row */}
        <div className="right-price-row">
          <div className="right-price">
            <span className="right-price-amount"><u>₹28,499</u></span>
            <span className="right-price-per"> for 5 nights</span>
          </div>
        </div>

        {/* Date / Guests picker */}
        <div className="right-picker">
          <div className="right-picker-dates">
            <div className="right-picker-field right-picker-field--left">
              <div className="right-picker-label">CHECK-IN</div>
              <div className="right-picker-value">10/18/2026</div>
            </div>
            <div className="right-picker-field right-picker-field--right">
              <div className="right-picker-label">CHECKOUT</div>
              <div className="right-picker-value">10/23/2026</div>
            </div>
          </div>
          <div className="right-picker-guests">
            <div>
              <div className="right-picker-label">GUESTS</div>
              <div className="right-picker-value">2 guests</div>
            </div>
            <ChevronDown />
          </div>
        </div>

        {/* Free cancellation banner */}
        <div className="right-cancellation-banner">
          Free cancellation before <strong>17 October</strong>
        </div>

        {/* Reserve button */}
        <button
          id="right-reserve-btn"
          className="right-reserve-btn"
          onClick={() => onShowToast?.("You won't be charged yet")}
        >
          Reserve
        </button>

        <p className="right-charge-note">You won't be charged yet</p>
      </div>

      {/* Report listing */}
      <button id="report-listing-btn" className="report-btn">
        <span className="report-icon">
          <ReportIcon />
        </span>
        <u>Report this listing</u>
      </button>
    </div>
  );
};

export default RightSidebar;
