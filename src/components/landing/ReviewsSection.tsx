import React from 'react';
import './ReviewsSection.css';
import { getImageSrc } from '../../utils/image';

import ileft from '../../assets/landing/reviews/ileft.png';
import iright from '../../assets/landing/reviews/iright.png';

// Import review user images
import mohdImg from '../../assets/landing/reviews/user_images/mohd.jpeg';
import vaibhavImg from '../../assets/landing/reviews/user_images/vaibhav_s.jpeg';
import aheeshImg from '../../assets/landing/reviews/user_images/aheesh.jpeg';
import samikshaImg from '../../assets/landing/reviews/user_images/samiksha.jpeg';

// Import slidable icon images
import accuracyTagIcon from '../../assets/landing/reviews/slidable/icons_image/accuracy.png';
import amenitiesTagIcon from '../../assets/landing/reviews/slidable/icons_image/amenities.png';
import cleanlinessTagIcon from '../../assets/landing/reviews/slidable/icons_image/cleanliness.png';
import comfortTagIcon from '../../assets/landing/reviews/slidable/icons_image/comfort.png';
import conditionTagIcon from '../../assets/landing/reviews/slidable/icons_image/condition.png';
import decorTagIcon from '../../assets/landing/reviews/slidable/icons_image/decor.png';
import hospitalityTagIcon from '../../assets/landing/reviews/slidable/icons_image/hospitality.png';
import hotTubTagIcon from '../../assets/landing/reviews/slidable/icons_image/hot_tub.png';
import indoorSpacesTagIcon from '../../assets/landing/reviews/slidable/icons_image/indoor_spaces.png';
import locationTagIcon from '../../assets/landing/reviews/slidable/icons_image/location.png';

// Rating SVG icons
const CleanlinessIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'currentColor' }}>
    <path d="M24 0v6h-4.3c.13 1.4.67 2.72 1.52 3.78l.2.22-1.5 1.33a9.05 9.05 0 0 1-2.2-5.08c-.83.38-1.32 1.14-1.38 2.2v4.46l4.14 4.02a5 5 0 0 1 1.5 3.09l.01.25.01.25v8.63a3 3 0 0 1-2.64 2.98l-.18.01-.21.01-12-.13A3 3 0 0 1 4 29.2L4 29.02v-8.3a5 5 0 0 1 1.38-3.45l.19-.18L10 12.9V8.85l-4.01-3.4.02-.7A5 5 0 0 1 10.78 0H11zm-5.03 25.69a8.98 8.98 0 0 1-6.13-2.41l-.23-.23A6.97 6.97 0 0 0 6 21.2v7.82c0 .51.38.93.87 1H7l11.96.13h.13a1 1 0 0 0 .91-.88l.01-.12v-3.52c-.34.04-.69.06-1.03.06zM17.67 2H11a3 3 0 0 0-2.92 2.3l-.04.18-.01.08 3.67 3.1h2.72l.02-.1a4.29 4.29 0 0 1 3.23-3.4zM30 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0h-2.33v2H22zm8-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM20 20.52a3 3 0 0 0-.77-2l-.14-.15-4.76-4.61v-4.1H12v4.1l-5.06 4.78a3 3 0 0 0-.45.53 9.03 9.03 0 0 1 7.3 2.34l.23.23A6.98 6.98 0 0 0 20 23.6z" />
  </svg>
);

const AccuracyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'currentColor' }}>
    <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z" />
  </svg>
);

const CheckInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'currentColor' }}>
    <path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z" />
  </svg>
);

const CommunicationIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="m25.5 3.5c2.2091 0 4 1.79086 4 4v13.8333c0 2.2092-1.7909 4-4 4h-5.8192l-3.6808 4.5-3.6832-4.5h-5.8168c-2.20914 0-4-1.7908-4-4v-13.8333c0-2.20914 1.79086-4 4-4z" />
  </svg>
);

const LocationRatingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'currentColor' }}>
    <path d="M30.95 3.81a2 2 0 0 0-2.38-1.52l-7.58 1.69-10-2-8.42 1.87A1.99 1.99 0 0 0 1 5.8v21.95a1.96 1.96 0 0 0 .05.44 2 2 0 0 0 2.38 1.52l7.58-1.69 10 2 8.42-1.87A1.99 1.99 0 0 0 31 26.2V4.25a1.99 1.99 0 0 0-.05-.44zM12 4.22l8 1.6v21.96l-8-1.6zM3 27.75V5.8l-.22-.97.22.97 7-1.55V26.2zm26-1.55-7 1.55V5.8l7-1.55z" />
  </svg>
);

const ValueIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'currentColor' }}>
    <path d="M16.17 2a3 3 0 0 1 1.98.74l.14.14 11 11a3 3 0 0 1 .14 4.1l-.14.14L18.12 29.3a3 3 0 0 1-4.1.14l-.14-.14-11-11A3 3 0 0 1 2 16.37l-.01-.2V5a3 3 0 0 1 2.82-3h11.35zm0 2H5a1 1 0 0 0-1 .88v11.29a1 1 0 0 0 .2.61l.1.1 11 11a1 1 0 0 0 1.31.08l.1-.08L27.88 16.7a1 1 0 0 0 .08-1.32l-.08-.1-11-11a1 1 0 0 0-.58-.28L16.17 4zM9 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '12px', width: '12px', fill: 'currentColor' }}>
    <path d="M15.094 1.579l-4.124 8.354-9.22 1.34c-1.65.24-2.31 2.27-1.11 3.437l6.67 6.502-1.58 9.182c-.28 1.645 1.45 2.9 2.92 2.128L16 28.179l8.25 4.343c1.47.772 3.2-0.483 2.92-2.128l-1.58-9.182 6.67-6.502c1.2-1.167.54-3.197-1.11-3.437l-9.22-1.34-4.124-8.354c-.74-1.498-2.88-1.498-3.62 0z"/>
  </svg>
);

const ratingCategories = [
  { name: 'Cleanliness', score: '5.0', icon: CleanlinessIcon },
  { name: 'Accuracy', score: '5.0', icon: AccuracyIcon },
  { name: 'Check-in', score: '5.0', icon: CheckInIcon },
  { name: 'Communication', score: '5.0', icon: CommunicationIcon },
  { name: 'Location', score: '4.8', icon: LocationRatingIcon },
  { name: 'Value', score: '4.8', icon: ValueIcon },
];

const slidableTags = [
  { name: 'Comfort', icon: getImageSrc(comfortTagIcon), count: 6 },
  { name: 'Accuracy', icon: getImageSrc(accuracyTagIcon), count: 5 },
  { name: 'Hot tub', icon: getImageSrc(hotTubTagIcon), count: 5 },
  { name: 'Condition', icon: getImageSrc(conditionTagIcon), count: 4 },
  { name: 'Hospitality', icon: getImageSrc(hospitalityTagIcon), count: 8 },
  { name: 'Cleanliness', icon: getImageSrc(cleanlinessTagIcon), count: 4 },
  { name: 'Amenities', icon: getImageSrc(amenitiesTagIcon), count: 2 },
  { name: 'Decor', icon: getImageSrc(decorTagIcon), count: 2 },
  { name: 'Indoor spaces', icon: getImageSrc(indoorSpacesTagIcon), count: 2 },
  { name: 'Location', icon: getImageSrc(locationTagIcon), count: 5 },
];

interface ReviewItem {
  id: number;
  name: string;
  avatar?: string;
  letter?: string;
  bg?: string;
  color?: string;
  timeOnAirbnb: string;
  date: string;
  content: string;
  hasShowMore?: boolean;
}

const reviews: ReviewItem[] = [
  {
    id: 1,
    name: 'Amit',
    letter: 'A',
    bg: '#f7f2ea',
    color: '#8d5b28',
    timeOnAirbnb: '2 months on Airbnb',
    date: '1 week ago',
    content: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.',
    hasShowMore: false,
  },
  {
    id: 2,
    name: 'Aheesh',
    avatar: getImageSrc(aheeshImg),
    timeOnAirbnb: '3 years on Airbnb',
    date: '2 weeks ago',
    content: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.',
    hasShowMore: true,
  },
  {
    id: 3,
    name: 'Samiksha',
    avatar: getImageSrc(samikshaImg),
    timeOnAirbnb: '8 months on Airbnb',
    date: 'May 2026',
    content: 'the host nitish was really great help',
    hasShowMore: false,
  },
  {
    id: 4,
    name: 'Vedant',
    letter: 'V',
    bg: '#f1ecf8',
    color: '#6d46a6',
    timeOnAirbnb: '4 years on Airbnb',
    date: 'May 2026',
    content: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....',
    hasShowMore: true,
  },
  {
    id: 5,
    name: 'Vaibhav S',
    avatar: getImageSrc(vaibhavImg),
    timeOnAirbnb: '3 years on Airbnb',
    date: 'May 2026',
    content: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
    hasShowMore: false,
  },
  {
    id: 6,
    name: 'Mohd',
    avatar: getImageSrc(mohdImg),
    timeOnAirbnb: '5 years on Airbnb',
    date: 'May 2026',
    content: 'Great place. Exactly as described in the listing.',
    hasShowMore: false,
  },
];

const ReviewsSection: React.FC = () => {
  return (
    <section className="reviews-section " id="reviews">
      <div className="reviews-inner">
        <div className="section-divider" />

        {/* Hero Laurel Rating Banner */}
        <div className="reviews-hero !pt-10">
          <img src={getImageSrc(ileft)} alt="laurel left" className="laurel-img" />
          <div className="rating-center">
            <span className="rating-score">4.95</span>
          </div>
          <img src={getImageSrc(iright)} alt="laurel right" className="laurel-img" />
        </div>

        <div className="reviews-hero-subtitle">
          <h2 className="hero-title">Guest favourite</h2>
          <p className="hero-desc">
            This home is a guest favourite based on ratings, reviews and reliability
          </p>
          <a href="#how-reviews-work" className="reviews-work-link">
            How reviews work
          </a>
        </div>

        {/* 7 Category Breakdown Grid */}
        <div className="ratings-grid">
          {/* Column 1: Overall Rating */}
          <div className="rating-item overall-rating-item">
            <span className="rating-cat-name">Overall rating</span>
            <div className="overall-bars">
              <div className="bar-row">
                <span className="bar-num">5</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: '100%' }} />
                </div>
              </div>
              <div className="bar-row">
                <span className="bar-num">4</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: '4%' }} />
                </div>
              </div>
              <div className="bar-row">
                <span className="bar-num">3</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: '0%' }} />
                </div>
              </div>
              <div className="bar-row">
                <span className="bar-num">2</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: '0%' }} />
                </div>
              </div>
              <div className="bar-row">
                <span className="bar-num">1</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: '0%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* 6 Category Items */}
          {ratingCategories.map((cat, index) => {
            const IconComponent = cat.icon;
            return (
              <div key={index} className="rating-item">
                <div className="rating-info">
                  <span className="rating-cat-name">{cat.name}</span>
                  <span className="rating-cat-score">{cat.score}</span>
                </div>
                <div className="rating-icon-wrap">
                  <IconComponent />
                </div>
              </div>
            );
          })}
        </div>


        {/* Slidable Tag Filters */}
        <div className="slidable-container">
          <div className="slidable-track">
            {slidableTags.map((tag, idx) => (
              <button key={idx} className="slidable-tag-btn" id={`review-tag-${idx}`}>
                <img src={tag.icon} alt={tag.name} className="tag-icon" />
                <span className="tag-name">{tag.name}</span>
                {tag.count !== undefined && (
                  <span className="tag-count">{tag.count}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-list">
          {reviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="review-user-row">
                {rev.avatar ? (
                  <img src={rev.avatar} alt={rev.name} className="user-avatar" />
                ) : (
                  <div
                    className="user-letter-avatar"
                    style={{ backgroundColor: rev.bg, color: rev.color }}
                  >
                    {rev.letter}
                  </div>
                )}
                <div className="user-meta">
                  <h3 className="user-name">{rev.name}</h3>
                  <p className="user-time">{rev.timeOnAirbnb}</p>
                </div>
              </div>

              <div className="review-rating-row">
                <div className="stars-flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <span className="review-dot">·</span>
                <span className="review-date">{rev.date}</span>
              </div>

              <p className="review-text">{rev.content}</p>

              {rev.hasShowMore && (
                <button
                  type="button"
                  className="review-show-more-btn"
                >
                  Show more
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Show all 19 reviews button */}
        <button id="show-all-reviews-btn" className="show-all-reviews-btn">
          Show all 19 reviews
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;
