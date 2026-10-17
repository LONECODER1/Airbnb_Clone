'use client';

import React, { useState } from 'react';
import './AmenitiesSection.css';
import {
  PoolIcon, KitchenIcon, DedicatedWorkspaceIcon, PetsAllowedIcon, CarbonMonoxideAlarmIcon,
  WifiIcon, AirConditioningIcon, WashingMachineIcon, FreeParkingIcon, GymIcon,
  HairdryerIcon, HangersIcon, HotTubIcon, IronIcon, SmokeAlarmIcon, TvIcon,
  SelfCheckInIcon, OutdoorDiningIcon, PatioIcon, ExteriorCamerasIcon, PrivateEntranceIcon,
  RoomDarkeningIcon, LongTermIcon, MicrowaveIcon, FridgeIcon, FreezerIcon, CotIcon,
  CrockeryCutleryIcon, CleaningProductsIcon, ClothStorageIcon, CoffeeIcon, CookerIcon,
  CookingBasicsIcon, BlenderIcon, KettleIcon, ShampooIcon, ShowerGelIcon, HotWaterIcon,
  BedLinenIcon, CleaningAvailableIcon, CeilingFanIcon, WineGlassesIcon, ToasterIcon
} from './amenity-icons';

const CrossIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'block', height: '16px', width: '16px', fill: 'none', stroke: 'currentColor', strokeWidth: 3 }}>
    <path d="M6 6 26 26M26 6 6 26" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// First 10 visible amenities
const visibleAmenities = [
  { name: 'Kitchen', Icon: KitchenIcon },
  { name: 'Wifi', Icon: WifiIcon },
  { name: 'Dedicated workspace', Icon: DedicatedWorkspaceIcon },
  { name: 'Free parking on premises', Icon: FreeParkingIcon },
  { name: 'Pool', Icon: PoolIcon },
  { name: 'Hot tub', Icon: HotTubIcon },
  { name: 'Pets allowed', Icon: PetsAllowedIcon },
  { name: 'Exterior security cameras on property', Icon: ExteriorCamerasIcon },
  { name: 'Carbon monoxide alarm', Icon: CarbonMonoxideAlarmIcon, unavailable: true },
  { name: 'Smoke alarm', Icon: SmokeAlarmIcon, unavailable: true },
];

// All 50 amenities grouped by category
const amenityGroups = [
  {
    title: 'Bathroom',
    items: [
      { name: 'Hot water', Icon: HotWaterIcon },
      { name: 'Shampoo', Icon: ShampooIcon },
      { name: 'Shower gel', Icon: ShowerGelIcon },
      { name: 'Hairdryer', Icon: HairdryerIcon },
    ],
  },
  {
    title: 'Bedroom and laundry',
    items: [
      { name: 'Bed linen', Icon: BedLinenIcon },
      { name: 'Hangers', Icon: HangersIcon },
      { name: 'Clothes storage', Icon: ClothStorageIcon },
      { name: 'Washing machine', Icon: WashingMachineIcon },
      { name: 'Room-darkening blinds', Icon: RoomDarkeningIcon },
      { name: 'Iron', Icon: IronIcon },
      { name: 'Cot', Icon: CotIcon },
    ],
  },
  {
    title: 'Entertainment',
    items: [
      { name: 'TV', Icon: TvIcon },
      { name: 'Pool', Icon: PoolIcon },
      { name: 'Hot tub', Icon: HotTubIcon },
      { name: 'Gym', Icon: GymIcon, unavailable: true },
    ],
  },
  {
    title: 'Family',
    items: [
      { name: 'Cot', Icon: CotIcon },
      { name: 'Pets allowed', Icon: PetsAllowedIcon },
    ],
  },
  {
    title: 'Heating and cooling',
    items: [
      { name: 'Air conditioning', Icon: AirConditioningIcon },
      { name: 'Ceiling fan', Icon: CeilingFanIcon },
    ],
  },
  {
    title: 'Home safety',
    items: [
      { name: 'Carbon monoxide alarm', Icon: CarbonMonoxideAlarmIcon },
      { name: 'Smoke alarm', Icon: SmokeAlarmIcon },
      { name: 'Exterior security cameras', Icon: ExteriorCamerasIcon },
    ],
  },
  {
    title: 'Internet and office',
    items: [
      { name: 'Wifi', Icon: WifiIcon },
      { name: 'Dedicated workspace', Icon: DedicatedWorkspaceIcon },
    ],
  },
  {
    title: 'Kitchen and dining',
    items: [
      { name: 'Kitchen', Icon: KitchenIcon },
      { name: 'Refrigerator', Icon: FridgeIcon },
      { name: 'Freezer', Icon: FreezerIcon },
      { name: 'Microwave', Icon: MicrowaveIcon },
      { name: 'Cooking basics', Icon: CookingBasicsIcon },
      { name: 'Dishes and cutlery', Icon: CrockeryCutleryIcon },
      { name: 'Dishwasher', Icon: CleaningProductsIcon },
      { name: 'Coffee maker', Icon: CoffeeIcon },
      { name: 'Toaster', Icon: ToasterIcon },
      { name: 'Blender', Icon: BlenderIcon },
      { name: 'Kettle', Icon: KettleIcon },
      { name: 'Induction stove', Icon: CookerIcon },
      { name: 'Wine glasses', Icon: WineGlassesIcon },
      { name: 'Outdoor dining area', Icon: OutdoorDiningIcon },
    ],
  },
  {
    title: 'Location features',
    items: [
      { name: 'Private entrance', Icon: PrivateEntranceIcon },
      { name: 'Free parking on premises', Icon: FreeParkingIcon, unavailable: true },
      { name: 'Patio or balcony', Icon: PatioIcon },
    ],
  },
  {
    title: 'Services',
    items: [
      { name: 'Self check-in', Icon: SelfCheckInIcon },
      { name: 'Cleaning available during stay', Icon: CleaningAvailableIcon },
      { name: 'Long-term stays allowed', Icon: LongTermIcon },
    ],
  },
];

const AmenitiesSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="amenities-section" id="amenities-section">
      <h2 className="amenities-title">What this place offers</h2>
      <div className="amenities-grid">
        {visibleAmenities.map(({ name, Icon, unavailable }) => (
          <div key={name} className={`amenity-item ${unavailable ? 'amenity-item--unavailable' : ''}`}>
            <span className="amenity-icon">
              <Icon />
            </span>
            <span className="amenity-name">{name}</span>
          </div>
        ))}
      </div>
      <button
        id="show-all-amenities-btn"
        className="show-all-amenities-btn"
        onClick={() => setShowModal(true)}
      >
        Show all 50 amenities
      </button>

      {/* Amenities Modal */}
      {showModal && (
        <div className="amenities-modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="amenities-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="All amenities"
          >
            {/* Modal header */}
            <div className="amenities-modal-header">
              <button
                id="amenities-modal-close"
                className="amenities-modal-close"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <CrossIcon />
              </button>
              <h3 className="amenities-modal-title">What this place offers</h3>
            </div>

            {/* Modal content */}
            <div className="amenities-modal-body">
              {amenityGroups.map((group) => (
                <div key={group.title} className="amenity-group">
                  <h4 className="amenity-group-title">{group.title}</h4>
                  <div className="amenity-group-items">
                    {group.items.map(({ name, Icon, unavailable }) => (
                      <div key={`${group.title}-${name}`} className={`amenity-modal-item ${unavailable ? 'amenity-item--unavailable' : ''}`}>
                        <span className="amenity-modal-icon">
                          <Icon />
                        </span>
                        <span className="amenity-modal-name">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="section-divider" />

      {/* 5 nights in Candolim Calendar Section */}
      <div className="calendar-section">
        <h3 className="calendar-title">5 nights in Candolim</h3>
        <p className="calendar-subtitle">18 Oct 2026 - 23 Oct 2026</p>

        <div className="calendar-container">
          {/* October 2026 */}
          <div className="calendar-month">
            <div className="calendar-month-header">
              <button className="calendar-nav-btn" aria-label="Previous month">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'block', height: '12px', width: '12px', fill: 'none', stroke: 'currentColor', strokeWidth: 3 }}>
                  <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="calendar-month-title">October 2026</span>
              <span className="calendar-nav-spacer" />
            </div>
            <div className="calendar-weekdays">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>
            <div className="calendar-days-grid">
              {/* Empty slots for Thu start: 4 empty slots */}
              <div className="calendar-day-empty" />
              <div className="calendar-day-empty" />
              <div className="calendar-day-empty" />
              <div className="calendar-day-empty" />

              {/* Days 1 to 17 */}
              {Array.from({ length: 17 }, (_, i) => i + 1).map((day) => (
                <div key={`oct-${day}`} className="calendar-day">
                  <span className="day-number">{day}</span>
                </div>
              ))}

              {/* Day 18 (Range Start) */}
              <div className="calendar-day calendar-day--range-start">
                <div className="range-band-right" />
                <span className="day-number day-number--selected">18</span>
              </div>

              {/* Days 19 - 22 (In Range) */}
              {[19, 20, 21, 22].map((day) => (
                <div key={`oct-${day}`} className="calendar-day calendar-day--in-range">
                  <span className="day-number">{day}</span>
                </div>
              ))}

              {/* Day 23 (Range End) */}
              <div className="calendar-day calendar-day--range-end">
                <div className="range-band-left" />
                <span className="day-number day-number--selected">23</span>
              </div>

              {/* Days 24 to 31 */}
              {Array.from({ length: 8 }, (_, i) => i + 24).map((day) => (
                <div key={`oct-${day}`} className="calendar-day">
                  <span className="day-number">{day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* November 2026 */}
          <div className="calendar-month">
            <div className="calendar-month-header">
              <span className="calendar-nav-spacer" />
              <span className="calendar-month-title">November 2026</span>
              <button className="calendar-nav-btn" aria-label="Next month">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'block', height: '12px', width: '12px', fill: 'none', stroke: 'currentColor', strokeWidth: 3 }}>
                  <path d="M12 4l11.3 11.3a1 1 0 0 1 0 1.4L12 28" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="calendar-weekdays">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>
            <div className="calendar-days-grid">
              {/* Days 1 to 17 */}
              {Array.from({ length: 17 }, (_, i) => i + 1).map((day) => (
                <div key={`nov-${day}`} className="calendar-day">
                  <span className="day-number">{day}</span>
                </div>
              ))}

              {/* Days 18 to 24 (Stroked/Disabled) */}
              {[18, 19, 20, 21, 22, 23, 24].map((day) => (
                <div key={`nov-${day}`} className="calendar-day calendar-day--disabled">
                  <span className="day-number">{day}</span>
                </div>
              ))}

              {/* Days 25 to 28 */}
              {[25, 26, 27, 28].map((day) => (
                <div key={`nov-${day}`} className="calendar-day">
                  <span className="day-number">{day}</span>
                </div>
              ))}

              {/* Days 29, 30 (Stroked/Disabled) */}
              {[29, 30].map((day) => (
                <div key={`nov-${day}`} className="calendar-day calendar-day--disabled">
                  <span className="day-number">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer controls */}
        <div className="calendar-footer">
          <button className="keyboard-btn" aria-label="Keyboard shortcuts">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'block', height: '14px', width: '20px', fill: 'currentColor' }}>
              <path d="M29 6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3zm0 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-21 3v2H6v-2zm4 0v2h-2v-2zm4 0v2h-2v-2zm4 0v2h-2v-2zm4 0v2h-2v-2zm-16 4v2H6v-2zm4 0v2h-2v-2zm4 0v2h-2v-2zm4 0v2h-2v-2zm4 0v2h-2v-2zm-16 4v2h18v-2z" />
            </svg>
          </button>
          <button className="clear-dates-btn">Clear dates</button>
        </div>
      </div>

      {/* <div className="section-divider" /> */}
    </div>
  );
};

export default AmenitiesSection;
