// Amenities icons - all as React functional components

const svgStyle = { display: 'block', height: '100%', width: '100%', fill: 'currentColor' } as const;

export const PoolIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M24 26c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 28c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 28c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 28c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 26c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 26c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 26zm0-5c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 23c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 23c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 23c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 21c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 21c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 21zM20 3a4 4 0 0 1 4 3.8V9h4v2h-4v5a4 4 0 0 1 2.5.86l.17.15c.3.27.71.44 1.14.48l.19.01v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 18c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 18c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 18c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 16c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5a3.96 3.96 0 0 1 2.44-1H16v-5H4V9h12V7a2 2 0 0 0-4-.15V7h-2a4 4 0 0 1 7-2.65A3.98 3.98 0 0 1 20 3z" />
  </svg>
);

export const KitchenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M26 1a5 5 0 0 1 5 5c0 6.39-1.6 13.19-4 14.7V31h-2V20.7c-2.36-1.48-3.94-8.07-4-14.36v-.56A5 5 0 0 1 26 1zm-9 0v18.12c2.32.55 4 3 4 5.88 0 3.27-2.18 6-5 6s-5-2.73-5-6c0-2.87 1.68-5.33 4-5.88V1zM2 1h1c4.47 0 6.93 6.37 7 18.5V21H4v10H2zm14 20c-1.6 0-3 1.75-3 4s1.4 4 3 4 3-1.75 3-4-1.4-4-3-4zM4 3.24V19h4l-.02-.96-.03-.95C7.67 9.16 6.24 4.62 4.22 3.36L4.1 3.3z" />
  </svg>
);

export const DedicatedWorkspaceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M26 2a2 2 0 0 1 2 1.85V18a2 2 0 0 1-1.85 2H18v2h3v2H11v-2h3v-2H6a2 2 0 0 1-2-1.85V4a2 2 0 0 1 1.85-2H6zm0 2H6v14h20z" />
  </svg>
);

export const PetsAllowedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M13.5 6a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm5 0a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm-10 5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm15 0a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM16 17c3.5 0 7 3 7 6.5 0 2.5-1.5 3.5-7 3.5s-7-1-7-3.5c0-3.5 3.5-6.5 7-6.5z" />
  </svg>
);

export const CarbonMonoxideAlarmIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M6 3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v17.59L22.59 6H6zm20 1a1 1 0 0 0-1-1h-.59L9.41 27H26a1 1 0 0 0 1-1V6zm-22.7 23.3 26-26 1.41 1.41-26 26z" />
  </svg>
);

export const WifiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z" />
  </svg>
);

export const AirConditioningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M17 1v4.03l4.03-2.32 1 1.73L17 7.34v6.93l6-3.47V5h2v4.65l3.49-2.02 1 1.74L26 11.38l4.03 2.33-1 1.73-5.03-2.9L18 16l6 3.46 5.03-2.9 1 1.73L26 20.62l3.49 2.01-1 1.74L25 22.35V27h-2v-5.8l-6-3.47v6.93l5.03 2.9-1 1.73L17 26.97V31h-2v-4.03l-4.03 2.32-1-1.73 5.03-2.9v-6.93L9 21.2V27H7v-4.65l-3.49 2.02-1-1.74L6 20.62l-4.03-2.33 1-1.73L8 19.46 14 16l-6-3.46-5.03 2.9-1-1.73L6 11.38 2.51 9.37l1-1.74L7 9.65V5h2v5.8l6 3.47V7.34l-5.03-2.9 1-1.73L15 5.03V1z" />
  </svg>
);

export const WashingMachineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M26 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2H6v4h20zm0 6H6v16h20zM9 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm1.5 1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" />
  </svg>
);

export const FreeParkingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M25 9.07 23.36 4.6A3 3 0 0 0 20.55 2.5H11.45a3 3 0 0 0-2.81 2.1L7 9.07A5 5 0 0 0 3 14v10a2 2 0 0 0 2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2h14v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0 2-2V14a5 5 0 0 0-4-4.93zM11.45 4.5h9.1a1 1 0 0 1 .94.7L22.84 9H9.16l1.35-3.8a1 1 0 0 1 .94-.7zM7 26H5v-2h2zm20 0h-2v-2h2zm2-4H3v-8a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3zm-21-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm16 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
  </svg>
);

export const GymIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M10 5a2 2 0 0 1 2 1.85V15h8V7a2 2 0 0 1 1.85-2H24a2 2 0 0 1 2 1.85V9h2a2 2 0 0 1 2 1.85V15h2v2h-2v4a2 2 0 0 1-1.85 2H26v2a2 2 0 0 1-1.85 2H22a2 2 0 0 1-2-1.85V17h-8v8a2 2 0 0 1-1.85 2H8a2 2 0 0 1-2-1.85V23H4a2 2 0 0 1-2-1.85V17H0v-2h2v-4a2 2 0 0 1 1.85-2H6V7a2 2 0 0 1 1.85-2H8zm14 2h-2v18h2zM10 7H8v18h2zm18 4h-2v10h2zM6 11H4v10h2z" />
  </svg>
);

export const HairdryerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M24 1c3.86 0 7 3.14 7 7s-3.14 7-7 7h-1.28l-4.37 14H15v-8H8v6H6v-6H4v-2h2v-4.18A7 7 0 0 1 2 8V1zm0 2H8v5.18A7 7 0 0 1 6.18 10H4.1A5 5 0 0 0 9 13h6V3zm7 5a5 5 0 0 0-4.9-5h-2.38A7 7 0 0 1 25 10h-1.1l-4.53 14.72.36.28H20l4-13H24a7 7 0 0 0 7-7zm-13.5 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
  </svg>
);

export const HangersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M16 1a4 4 0 0 1 4 3.72V6h-2v-.28a2 2 0 1 0-2.8 1.84l.26.1L28.84 15H31v2H3v-2h2.16L16 9.14V8a4 4 0 0 1-4-3.72V4a4 4 0 0 1 4-3zm0 10.24L7.6 15h16.8z" />
  </svg>
);

export const HotTubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M12 1a3 3 0 0 1 2.12 5.12L11.25 9H14v2H6v-2h2.75l3.54-3.54A1 1 0 0 0 12 4a1 1 0 0 0-.92.62L10.2 6H8.07l.84-2.11A3 3 0 0 1 12 1zM29 13v6h2v2h-2v8H3v-8H1v-2h2v-6zM12 15H5v12h7zm7 0h-5v12h5zm7 0h-5v12h5z" />
  </svg>
);

export const IronIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M6 8h10a12 12 0 0 1 12 12v2H2v-2a4 4 0 0 1 4-4zm10 2H6a2 2 0 0 0-2 2v8h22v-.42A10 10 0 0 0 16 10zm8-9a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);

export const SmokeAlarmIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M16 2a14 14 0 1 1 0 28A14 14 0 0 1 16 2zm0 2a12 12 0 0 0-9.88 18.82L22.82 6.12A11.94 11.94 0 0 0 16 4zm9.88 5.18L9.18 25.88A12 12 0 0 0 25.88 9.18zM4.7 25.89l22-22 1.41 1.41-22 22z" />
  </svg>
);

export const TvIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M28 6a2 2 0 0 1 2 1.85V22a2 2 0 0 1-1.85 2H20v2h4v2H8v-2h4v-2H4a2 2 0 0 1-2-1.85V8a2 2 0 0 1 1.85-2H4zm0 2H4v14h24z" />
  </svg>
);

export const SelfCheckInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M24.33 1.67a2 2 0 0 1 2 1.85v24.81h3v2H2.67v-2h3V3.67a2 2 0 0 1 1.85-2h.15zm-4 2H7.67v24.66h12.66zm4 0h-2v24.66h2zm-7 11a1.33 1.33 0 1 1 0 2.66 1.33 1.33 0 0 1 0-2.66z" />
  </svg>
);

export const OutdoorDiningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M16 2a14 14 0 0 1 0 28A14 14 0 0 1 16 2zm0 2a12 12 0 1 0 0 24A12 12 0 0 0 16 4zM9 9h14v2H9zm0 4h14v2H9zm0 4h14v2H9z" />
  </svg>
);

export const PatioIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M16 1 1 9h4v20h22V9h4L16 1zm0 2.54L28.34 9H3.66L16 3.54zM7 11h4v16H7zm6 0h4v16h-4zm6 0h4v16h-4z" />
  </svg>
);

export const ExteriorCamerasIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M26.84 2.84a3 3 0 0 1 2.12 5.12L24 12.93V14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h7.07l4.97-4.97a3 3 0 0 1 .8-.19zM14 10v4h8V10zm12.84-5.16a1 1 0 0 0-.63.3L20.8 10.6 21.41 12h.59v-1.59l5.47-5.47a1 1 0 0 0-.63-1.7zM18 18v2h-4v10H6V18zm-6 2H8v8h4zm12-2v12h-8V18zm-2 2h-4v8h4z" />
  </svg>
);

export const PrivateEntranceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M24.33 1.67a2 2 0 0 1 2 1.85v24.81h3v2H2.67v-2h3V3.67a2 2 0 0 1 1.85-2h.15zm-4 2H7.67v24.66h12.66zm4 0h-2v24.66h2zm-7 11a1.33 1.33 0 1 1 0 2.66 1.33 1.33 0 0 1 0-2.66z" />
  </svg>
);

export const RoomDarkeningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M28 2v28H4V2zm-2 2H6v24h20zM16 8a8 8 0 1 1 0 16A8 8 0 0 1 16 8zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 16 10z" />
  </svg>
);

export const LongTermIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M16 2a14 14 0 1 1 0 28A14 14 0 0 1 16 2zm0 2a12 12 0 1 0 0 24A12 12 0 0 0 16 4zm1 5v9h7v2H15V9z" />
  </svg>
);

export const MicrowaveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M28 5a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2H4v18h24zM20 9h6v14h-6zm-2 0v14H6V9zm-2 2H8v10h8zm4 0v10h4V11z" />
  </svg>
);

export const FridgeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M10 2h12a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v10h12V4zm0 12v12h12V16zm4-10h2v6h-2zm0 12h2v4h-2z" />
  </svg>
);

export const FreezerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M10 2h12a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v10h12V4zm4 2h2v6h-2z" />
  </svg>
);

export const CotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M29 17v6h-2v-2H5v2H3v-6a4 4 0 0 1 4-4h16a4 4 0 0 1 6 4zm-4 0a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2h18z" />
  </svg>
);

export const CrockeryCutleryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M16 2a14 14 0 1 1 0 28A14 14 0 0 1 16 2zm0 2a12 12 0 1 0 0 24A12 12 0 0 0 16 4zm0 3a9 9 0 1 1 0 18A9 9 0 0 1 16 7zm0 2a7 7 0 1 0 0 14A7 7 0 0 0 16 9z" />
  </svg>
);

export const CleaningProductsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M10 2h12v6l4 4v18H6V12l4-4zm2 2v4h8V4zm6.59 6H13.4L10 13.41V28h12V13.41z" />
  </svg>
);

export const ClothStorageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M28 2v28H4V2zm-2 2H6v24h20zM16 8a8 8 0 1 1 0 16A8 8 0 0 1 16 8zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 16 10z" />
  </svg>
);

export const CoffeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M23 10h5a4 4 0 0 1 0 8h-1.5a8 8 0 0 1-7.5 6H13a8 8 0 0 1-8-7.56V10zm2 2v4h3a2 2 0 0 0 0-4zm-4 12a6 6 0 0 0 5.65-4H7.03A6 6 0 0 0 13 24zm-11-6h14v-8H10z" />
  </svg>
);

export const CookerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M6 22h20v-2H6zm0-4h20v-2H6zm0-4h20v-2H6zm0-4h20V8H6zm-2-6h24a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v20h24V6z" />
  </svg>
);

export const CookingBasicsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M26 1a5 5 0 0 1 5 5c0 6.39-1.6 13.19-4 14.7V31h-2V20.7c-2.36-1.48-3.94-8.07-4-14.36v-.56A5 5 0 0 1 26 1zm-9 0v18.12c2.32.55 4 3 4 5.88 0 3.27-2.18 6-5 6s-5-2.73-5-6c0-2.87 1.68-5.33 4-5.88V1z" />
  </svg>
);

export const BlenderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M22 2v2h2l-5 10H9L4 4h2V2zm0 4H6.42l3.79 7.57.21.43H18l.21-.43 4-8zm-6 26a5 5 0 0 1-5-4.78V20h10v7.22A5 5 0 0 1 16 32zm0-2a3 3 0 0 0 3-2.78V22h-6v5.22A3 3 0 0 0 16 30z" />
  </svg>
);

export const KettleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M10 3h12l3 5H7zm16 7H6a4 4 0 0 0-4 4v7a4 4 0 0 0 4 4h1v5h18v-5h1a4 4 0 0 0 4-4v-7a4 4 0 0 0-4-4zm-3 18H9v-3h14zm5-7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2z" />
  </svg>
);

export const ShampooIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M20 1a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 2H12v26h8zm-4 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg>
);

export const ShowerGelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M18 2a2 2 0 0 1 2 1.85V8a2 2 0 0 1-1.6 1.96l-1.4.28V11h2v2h-6v-2h2V10.24l-1.4-.28A2 2 0 0 1 10 8V4a2 2 0 0 1 1.85-2H12zm0 2h-6v4l4 .8 4-.8zM9 14h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V17a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V17a1 1 0 0 0-1-1z" />
  </svg>
);

export const HotWaterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M16 2c.89 0 1.73.24 2.45.66a6.5 6.5 0 0 1 2.96 5.53 6.48 6.48 0 0 1-2.96 5.52A4.98 4.98 0 0 0 16 18.5c-.87 0-1.68-.24-2.37-.66a6.44 6.44 0 0 1-2.08-2.2 6.5 6.5 0 0 1-.88-3.32c0-2.3 1.16-4.3 2.96-5.52A5.02 5.02 0 0 0 16 2zm0 2a2.98 2.98 0 0 1-1.49-5.98zm4 30H12v-2h8z" />
  </svg>
);

export const BedLinenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M26 16V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10H2v12h28V16zm-2 0H8V6h16zm-20 2h24v8H4z" />
  </svg>
);

export const CleaningAvailableIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M13.54 3.06 15 9h2l1.46-5.94A14.01 14.01 0 0 1 30 16H2a14.01 14.01 0 0 1 11.54-12.94zM16 2a14 14 0 1 0 0 28A14 14 0 0 0 16 2zm0 2a12 12 0 1 1 0 24A12 12 0 0 1 16 4z" />
  </svg>
);

export const CeilingFanIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M20.33 3.08c1.5 2.24.96 5.55-1.38 9.9l-.12.2.18.18c.1.13.21.26.3.4l.23.38.14.02c.7.06 1.78-.11 2.87-.48.89-.3 1.78-.78 2.68-1.45l.66-.52a3 3 0 0 1 4.77 1.33l.12.44c.59 3.35.02 5.73-1.86 6.98-2.24 1.5-5.54.96-9.9-1.39a3 3 0 0 1-.27-.16l-.07.07-.39.3-.28.19V20c-.03.7.15 1.68.48 2.68.3.88.78 1.78 1.45 2.68l.26.33.26.33a3 3 0 0 1-.36 4.22C19 31 17.95 31 17 31h-.54l-1.39-.1c-1.24-.19-2.56-.65-3.36-1.84-1.5-2.25-.96-5.55 1.39-9.91.04-.09.1-.17.15-.25a4.12 4.12 0 0 1-.37-.4.82.82 0 0 0-.18-.23.5.5 0 0 0-.21-.11c-.7-.1-1.85.06-3.04.46-.88.3-1.78.78-2.68 1.45l-.66.52a3 3 0 0 1-4.77-1.33l-.12-.44c-.59-3.35-.02-5.73 1.86-6.98 2.24-1.5 5.55-.96 9.9 1.38l.1.05c.3-.3.55-.5.72-.61l.2-.13.03-.2c.06-.7-.11-1.78-.48-2.88a9.6 9.6 0 0 0-1.45-2.68l-.52-.66a3 3 0 0 1 1.33-4.77l.44-.12c3.35-.59 5.73-.02 6.98 1.86zm-5.31 16.8-.16.22c-2.04 3.77-2.5 6.45-1.49 7.85 1.13 1.55 4.63 1.55 5.44.77.38-.36.47-.89.2-1.31l-.37-.45a11.94 11.94 0 0 1-2.05-3.64 10.93 10.93 0 0 1-.59-3.03V20h-.14a4.01 4.01 0 0 1-.63-.07l-.21-.05zM16 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
  </svg>
);

export const WineGlassesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M9 2v9a6 6 0 0 0 5 5.91V27H9v2h14v-2h-5v-10.09A6 6 0 0 0 23 11V2zm12 2v7a4 4 0 0 1-8 0V4z" />
  </svg>
);

export const ToasterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}>
    <path d="M28 8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1l1 4H4l1-4H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2zm0 2H4v10h24zM12 4h8v2h-8zm-1-3h2v2h-2zm8 0h2v2h-2z" />
  </svg>
);
