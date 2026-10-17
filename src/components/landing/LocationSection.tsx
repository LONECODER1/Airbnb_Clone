'use client';

import React, { useRef, useState, useEffect } from 'react';
import './LocationSection.css';
import { getImageSrc } from '../../utils/image';

import mirashyaImg from '../../assets/landing/left_side_photos/mirashya_homes.jpeg';
import co1 from '../../assets/landing/location/cohost_images/co1.jpg';
import co2 from '../../assets/landing/location/cohost_images/co2.jpg';
import co3 from '../../assets/landing/location/cohost_images/co3.jpg';
import rev1 from '../../assets/landing/location/cohost_images/rev1.jpeg';
import rev2 from '../../assets/landing/location/cohost_images/rev2.jpeg';
import rev5 from '../../assets/landing/location/cohost_images/rev5.jpeg';

// Nearby images
import s1 from '../../assets/landing/location/nearby/s1.jpeg';
import s2 from '../../assets/landing/location/nearby/s2.jpeg';
import s3 from '../../assets/landing/location/nearby/s3.jpeg';
import s4 from '../../assets/landing/location/nearby/s4.jpeg';
import s5 from '../../assets/landing/location/nearby/s5.jpeg';
import s6 from '../../assets/landing/location/nearby/s6.jpeg';
import s7 from '../../assets/landing/location/nearby/s7.jpeg';
import s8 from '../../assets/landing/location/nearby/s8.jpeg';

// Co-hosts list
const coHostsData = [
  { name: 'Sharath', image: getImageSrc(co1) },
  { name: 'Aman Dev Pahwa', image: getImageSrc(co2) },
  { name: 'Maria Karen Priyanka', image: getImageSrc(co3) },
  { name: 'Simran', image: getImageSrc(rev1) },
  { name: 'Pallavi', image: getImageSrc(rev2) },
  { name: 'Sanyukta', image: getImageSrc(rev5) },
  { name: 'Shruti', letter: 'S', bg: '#fde8ef', color: '#d70466' },
  { name: 'Amisha', letter: 'A', bg: '#e6f0fa', color: '#1877f2' },
];

// Icons
const HomePinIcon = () => (
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    style={{
      display: "block",
      height: "100%",
      width: "100%",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      overflow: "visible",
    }}
  >
    <path
      d="M6 29h20M9 29V15l7-6 7 6v14M13 29v-7h6v7"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    style={{
      display: "block",
      height: "50%",
      width: "50%",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      overflow: "visible",
    }}
  >
    <circle
      cx="14"
      cy="14"
      r="9"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 21l7 7"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    style={{
      display: "block",
      height: "50%",
      width: "50%",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      overflow: "visible",
    }}
  >
    <path
      d="M16 6v20M6 16h20"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    style={{
      display: "block",
      height: "50%",
      width: "50%",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      overflow: "visible",
    }}
  >
    <path
      d="M6 16h20"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const VerifiedBadgeIcon = () => (
  <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', display: 'block', fill: '#fff' }}>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

const BornIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentColor' }}>
    <path d="M16 0c5.9 0 11 5.28 11 11 0 4.85-3.23 9.27-9.55 13.28l2.2 2.92a1.13 1.13 0 0 1-.9 1.8H17v3h-2v-3h-1.75a1.13 1.13 0 0 1-.9-1.8l2.14-2.86C8.2 20.92 5 16.46 5 11A11 11 0 0 1 16 0zm0 25.67L15 27h2zM16 2a9 9 0 0 0-9 9c0 4.6 2.72 8.43 8.3 11.5l.38.21.28.14.3-.19c5.62-3.53 8.48-7.24 8.72-11.12l.02-.27V11c0-4.64-4.21-9-9-9z" />
  </svg>
);

const SchoolIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentColor' }}>
    <path d="m31.47 10.12-15-8a1 1 0 0 0-.94 0l-15 8a1 1 0 0 0 0 1.76L4 13.73V23a1 1 0 0 0 .52.88l11 6a1 1 0 0 0 .96 0l11-6A1 1 0 0 0 28 23v-9.27l2-1.06V23h2V11a1 1 0 0 0-.53-.88zM26 22.4l-10 5.45-10-5.45V14.8l9.53 5.08a1 1 0 0 0 .94 0L26 14.8v7.6zm-10-4.54L3.12 11 16 4.13 28.88 11 16 17.87z" />
  </svg>
);

const ProtectIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentColor' }}>
    <path d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm-1 3a22.2 22.2 0 0 1-9.65 3.15L5 6.97V17.5c0 6.56 4.35 11 10 11.46zm2 0v25.16c5.65-.47 10-4.9 10-11.46V6.97l-.35-.02A22.2 22.2 0 0 1 17 3.8z" />
  </svg>
);

const RulesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentColor' }}>
    <path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z" />
  </svg>
);

const SafetyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentColor' }}>
    <path d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm-1 3a22.2 22.2 0 0 1-9.65 3.15L5 6.97V17.5c0 6.56 4.35 11 10 11.46zm2 0v25.16c5.65-.47 10-4.9 10-11.46V6.97l-.35-.02A22.2 22.2 0 0 1 17 3.8z" />
  </svg>
);

const CalendarCancelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentColor' }}>
    <path d="M26 4h-2V2h-2v2H10V2H8v2H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 22H6V12h20v14zm0-16H6V6h20v2zM13.41 16.41 16 19l2.59-2.59L20 17.82 17.41 20.41 20 23l-1.41 1.41L16 21.82l-2.59 2.59L12 23l2.59-2.59L12 17.82z" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ display: 'block', height: '12px', width: '12px', fill: 'currentColor' }}>
    <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ display: 'block', height: '12px', width: '12px', fill: 'currentColor' }}>
    <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
  </svg>
);

const RatingStarIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '12px', width: '12px', fill: 'currentColor' }}>
    <path d="M15.094 1.579l-4.124 8.354-9.22 1.34c-1.65.24-2.31 2.27-1.11 3.437l6.67 6.502-1.58 9.182c-.28 1.645 1.45 2.9 2.92 2.128L16 28.179l8.25 4.343c1.47.772 3.2-0.483 2.92-2.128l-1.58-9.182 6.67-6.502c1.2-1.167.54-3.197-1.11-3.437l-9.22-1.34-4.124-8.354c-.74-1.498-2.88-1.498-3.62 0z" />
  </svg>
);

const nearbyListings = [
  { id: 1, img: getImageSrc(s1), title: 'Beautiful Studio with a view to die for', price: '₹23,600', rating: '4.91' },
  { id: 2, img: getImageSrc(s2), title: 'NAQAB - 1bhk with private pool', price: '₹24,500', rating: '4.98' },
  { id: 3, img: getImageSrc(s3), title: 'Greentique Luxury Flat with plunge pool, Calangute', price: '₹19,200', rating: '4.92' },
  { id: 4, img: getImageSrc(s4), title: 'The Tropical Studio | 5 mins to Beach', price: '₹31,000', rating: '5.0' },
  { id: 5, img: getImageSrc(s5), title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute', price: '₹14,800', rating: '4.89' },
  { id: 6, img: getImageSrc(s6), title: 'Kanso by Earthen Window | Jacuzzi | Terrace | Pool', price: '₹36,500', rating: '4.96' },
  { id: 7, img: getImageSrc(s7), title: 'Luxury Apt | Private Pool | 6 Mins from Beach', price: '₹17,000', rating: '4.94' },
  { id: 8, img: getImageSrc(s8), title: 'Serendipity Cottage - Calm Stay in Calangute-Baga.', price: '₹42,000', rating: '4.99' },
];

const LocationSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atLeft, setAtLeft] = useState(true);
  const [atRight, setAtRight] = useState(false);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setAtLeft(scrollLeft <= 5);
    setAtRight(scrollLeft + clientWidth >= scrollWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="location-section" id="location">
      <div className="location-inner">
        <div className="section-divider" />

        {/* Where you'll be Map Section */}
        <h2 className="location-title">Where you’ll be</h2>
        <p className="location-subtitle">Candolim, Goa, India</p>

        <div className="map-container">
          <div className="map-bg _pLIPHL" />

          <button type="button" className="map-btn-search" aria-label="Search map">
            <SearchIcon />
          </button>

          <div className="map-pin">
            <HomePinIcon />
          </div>

          <div className="map-zoom-controls">
            <button type="button" className="map-btn-zoom" aria-label="Zoom in">
              <PlusIcon />
            </button>
            <button type="button" className="map-btn-zoom" aria-label="Zoom out">
              <MinusIcon />
            </button>
          </div>
        </div>

        <div>
          <div className="location-info-row">
            <span>Exact location will be provided after booking.</span>
            <p className="location-exact !mt-8">Neighbourhood highlights</p>
            <p className="location-detail !font-medium !mb-6">
              Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
            </p>

            <div className='mt-10 font-semibold underline cursor-pointer text-lg flex items-center gap-2'>
              <span>Show more</span>
              <div className='!w-4 !h-4'>
                <svg
                  viewBox="0 0 18 18"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    display: "block",
                    height: "100%",
                    width: "100%",
                    fill: "currentColor",
                  }}
                >
                  <path
                    d="m4.29 1.71a1 1 0 0 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1-1.42-1.41l7.29-7.29z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="section-divider" style={{ margin: '40px 0' }} />

        {/* Meet your host Section */}
        <h2 className="host-section-title">Meet your host</h2>

        <div className="host-section-wrapper">
          {/* Left column: Host Card + Highlights */}
          <div className="host-left-column">
            <div className="host-card">
              <div className="host-card-left">
                <div className="host-avatar-wrap">
                  <img src={getImageSrc(mirashyaImg)} alt="Mirashya Homes" className="host-avatar" />
                  <div className="host-tick-badge">
                    <VerifiedBadgeIcon />
                  </div>
                </div>
                <h3 className="host-name">Mirashya<br />Homes</h3>
                <p className="host-role">Host</p>
              </div>

              <div className="host-card-right">
                <div className="host-stat-row">
                  <span className="stat-value">1,463</span>
                  <span className="stat-label">Reviews</span>
                </div>
                <div className="host-stat-row">
                  <span className="stat-value">4.68★</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="host-stat-row">
                  <span className="stat-value">2</span>
                  <span className="stat-label">Years hosting</span>
                </div>
              </div>
            </div>

            <div className="host-left-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <BornIcon />
                </div>
                <span>Born in the 80s</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <SchoolIcon />
                </div>
                <span>Where I went to school: NICMAR GOA</span>
              </div>
            </div>
          </div>

          {/* Right column: Co-Hosts + Host details + Message host + Protection */}
          <div className="host-right-column">
            <div className="cohosts-section">
              <h3 className="cohosts-title">Co-Hosts</h3>
              <div className="cohosts-grid">
                {coHostsData.map((cohost, idx) => (
                  <div key={idx} className="cohost-item">
                    {cohost.image ? (
                      <img src={cohost.image} alt={cohost.name} className="cohost-avatar" />
                    ) : (
                      <div
                        className="cohost-letter-avatar"
                        style={{ backgroundColor: cohost.bg, color: cohost.color }}
                      >
                        {cohost.letter}
                      </div>
                    )}
                    <span className="cohost-name">{cohost.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="host-details-section">
              <h3 className="host-details-title">Host details</h3>
              <p className="host-detail-line">Response rate: 100%</p>
              <p className="host-detail-line">Responds within an hour</p>
            </div>

            <button id="message-host-btn" className="message-host-btn">
              Message host
            </button>

            <div className="host-protect-row">
              <div className="protect-icon-wrap">
                <ProtectIcon />
              </div>
              <p className="protect-text">
                To help protect your payment, always use Airbnb to send money and communicate with hosts.
              </p>
            </div>
          </div>
        </div>

        <div className="section-divider" style={{ margin: '48px 0' }} />

        {/* Things to know */}
        <h2 className="things-title">Things to know</h2>
        <div className="things-grid">
          <div className="things-col">
            <div className="things-col-icon">
              <CalendarCancelIcon />
            </div>
            <h3 className="things-col-title">Cancellation policy</h3>
            <div className="things-col-text">
              <p>Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.</p>
              <p>Review this host's full policy for details.</p>
            </div>
            <a href="#cancellation-policy" className="things-learn-more" onClick={(e) => e.preventDefault()}>
              Learn more
            </a>
          </div>

          <div className="things-col">
            <div className="things-col-icon">
              <RulesIcon />
            </div>
            <h3 className="things-col-title">House rules</h3>
            <div className="things-col-text">
              <p>Check-in after 2:00 pm</p>
              <p>Checkout before 11:00 am</p>
              <p>3 guests maximum</p>
            </div>
            <a href="#house-rules" className="things-learn-more" onClick={(e) => e.preventDefault()}>
              Learn more
            </a>
          </div>

          <div className="things-col">
            <div className="things-col-icon">
              <SafetyIcon />
            </div>
            <h3 className="things-col-title">Safety & property</h3>
            <div className="things-col-text">
              <p>Carbon monoxide alarm not reported</p>
              <p>Smoke alarm not reported</p>
              <p>Exterior security cameras on property</p>
            </div>
            <a href="#safety-property" className="things-learn-more" onClick={(e) => e.preventDefault()}>
              Learn more
            </a>
          </div>
        </div>

        <div className="section-divider" style={{ margin: '48px 0 40px' }} />

        {/* More stays nearby */}
        <div className="nearby-header">
          <h2 className="nearby-title">More stays nearby</h2>
          <div className="nearby-controls">
            <span className="nearby-page-indicator">{atRight ? 2 : 1} / 2</span>
            <button
              id="nearby-scroll-left"
              className={`nearby-arrow-btn ${atLeft ? 'nearby-arrow-btn--disabled' : ''}`}
              onClick={handleScrollLeft}
              disabled={atLeft}
              aria-label="Previous stays"
            >
              <ArrowLeftIcon />
            </button>
            <button
              id="nearby-scroll-right"
              className={`nearby-arrow-btn ${atRight ? 'nearby-arrow-btn--disabled' : ''}`}
              onClick={handleScrollRight}
              disabled={atRight}
              aria-label="Next stays"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <div className="nearby-gallery" ref={scrollRef}>
          {nearbyListings.map((item) => (
            <div key={item.id} className="nearby-card">
              <div className="nearby-img-wrap">
                <img src={item.img} alt={item.title} className="nearby-img" />
              </div>
              <div className="nearby-card-body">
                <h3 className="nearby-card-title">{item.title}</h3>
                <div className="nearby-card-price-row">
                  <span className="nearby-card-price">{item.price}</span>
                  <span className="nearby-card-rating">
                    <RatingStarIcon />
                    <span>{item.rating}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
