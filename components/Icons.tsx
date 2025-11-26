import React from 'react';

export const SparkleIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"/>
  </svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M4 16H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PaletteIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM6.5 11.5C7.33 11.5 8 10.83 8 10C8 9.17 7.33 8.5 6.5 8.5C5.67 8.5 5 9.17 5 10C5 10.83 5.67 11.5 6.5 11.5ZM9.5 7.5C10.33 7.5 11 6.83 11 6C11 5.17 10.33 4.5 9.5 4.5C8.67 4.5 8 5.17 8 6C8 6.83 8.67 7.5 9.5 7.5ZM14.5 7.5C15.33 7.5 16 6.83 16 6C16 5.17 15.33 4.5 14.5 4.5C13.67 4.5 13 5.17 13 6C13 6.83 13.67 7.5 14.5 7.5ZM17.5 11.5C18.33 11.5 19 10.83 19 10C19 9.17 18.33 8.5 17.5 8.5C16.67 8.5 16 9.17 16 10C16 10.83 16.67 11.5 17.5 11.5Z"/>
  </svg>
);

export const CodeIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z"/>
  </svg>
);

export const RocketIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.5C12 2.5 15.5 6 16.5 10C17.5 14 15.5 16.5 15.5 16.5L14 15L12 17L10 15L8.5 16.5C8.5 16.5 6.5 14 7.5 10C8.5 6 12 2.5 12 2.5ZM12 2.5V17"/>
    <path d="M12 17L12 21.5"/>
    <path d="M9 19L7 21"/>
    <path d="M15 19L17 21"/>
  </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5L19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowUpRightIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 7H17V17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MouseIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.69 2 6 4.69 6 8V16C6 19.31 8.69 22 12 22C15.31 22 18 19.31 18 16V8C18 4.69 15.31 2 12 2ZM16 16C16 18.21 14.21 20 12 20C9.79 20 8 18.21 8 16V8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8V16Z"/>
    <path d="M12 6C11.45 6 11 6.45 11 7V10C11 10.55 11.45 11 12 11C12.55 11 13 10.55 13 10V7C13 6.45 12.55 6 12 6Z"/>
  </svg>
);

export const StarIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export const CheckIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PlusIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MinusIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const GlobeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17.93C10.05 17.96 10.11 17.99 10.16 18.02C10.15 17.99 10.15 17.96 10.15 17.93V17.93ZM19.93 11C19.76 7.23 16.99 4.14 13.25 3.19C15.46 4.54 17.06 6.81 17.65 9.48C18.57 9.87 19.35 10.38 19.93 11ZM13 3.06C13.27 3.1 13.54 3.15 13.8 3.2C13.88 3.22 13.97 3.23 14.05 3.25C13.75 4.3 13.33 5.3 12.83 6.25C12.44 3.96 11.75 1.95 10.82 0.44C11.58 1.15 12.33 2.05 13 3.06ZM12 4.09C11.66 4.3 11.31 4.51 10.95 4.74C10.57 2.96 10.05 1.34 9.43 0H14.57C13.95 1.34 13.43 2.96 13.05 4.74C12.69 4.51 12.34 4.3 12 4.09ZM4.35 9.48C4.94 6.81 6.54 4.54 8.75 3.19C5.01 4.14 2.24 7.23 2.07 11C2.65 10.38 3.43 9.87 4.35 9.48ZM3 13C2.86 12.68 2.75 12.34 2.66 12H2.66C2.27 12.33 2.11 12.66 2.07 13C2.11 13.34 2.27 13.67 2.66 14H2.66C2.75 13.66 2.86 13.32 3 13ZM2.07 11C2.24 14.77 5.01 17.86 8.75 18.81C6.54 17.46 4.94 15.19 4.35 12.52C3.43 12.13 2.65 11.62 2.07 11ZM10 17.93V19H14V17.93C14 17.96 14 17.99 13.99 18.02C14.04 17.99 14.1 17.96 14.15 17.93C15.25 19.95 14.56 21.96 12 24C9.44 21.96 8.75 19.95 9.85 17.93C9.9 17.96 9.96 17.99 10.01 18.02C10 17.99 10 17.96 10 17.93ZM8.75 18.81C12.5 19.76 15.26 16.67 15.43 12.91C15.82 12.78 16.2 12.66 16.57 12.55C17.15 15.19 18.75 17.46 20.96 18.81C17.22 17.86 14.46 14.77 14.29 11C13.91 11.11 13.52 11.21 13.12 11.3C13.56 12.39 13.93 13.55 14.22 14.78C12.9 15.08 11.49 15.25 10 15.25C8.51 15.25 7.1 15.08 5.78 14.78C6.07 13.55 6.44 12.39 6.88 11.3C6.48 11.21 6.09 11.11 5.71 11C5.54 14.77 8.3 17.86 12.05 18.81H8.75ZM6.88 11.3C7.36 10.15 7.91 9.08 8.52 8.09C9.13 9.08 9.68 10.15 10.16 11.3C9.1 11.51 8 11.51 6.88 11.3ZM12 8.25C11.2 8.25 10.43 8.35 9.7 8.54C9.14 7.55 8.65 6.51 8.25 5.42C9.42 5.14 10.68 5 12 5C13.32 5 14.58 5.14 15.75 5.42C15.35 6.51 14.86 7.55 14.3 8.54C13.57 8.35 12.8 8.25 12 8.25Z"/>
  </svg>
);

export const PlayIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5V19L19 12L8 5Z"/>
  </svg>
);

export const QuoteIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z"/>
  </svg>
);

export const HeartIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

export const BellIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
  </svg>
);

export const GraphIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
  </svg>
);

export const BoltIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
  </svg>
);

export const HandshakeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.27 10.87l2.84 2.84 2.12-2.12-2.84-2.84-2.12 2.12zm9.19-2.83l-1.06 1.06c.71.71 1.06 1.77 1.06 2.83 0 1.06-.35 2.12-1.06 2.83l-2.83 2.83c-1.57 1.57-4.09 1.57-5.66 0l-3.53-3.53-1.42 1.41 3.54 3.54c2.34 2.34 6.14 2.34 8.49 0l2.83-2.83c2.34-2.34 2.34-6.14 0-8.49l-1.06 1.06zM7.17 11.17l2.83-2.83c.78-.78.78-2.05 0-2.83-.78-.78-2.05-.78-2.83 0l-1.06 1.06-1.06-1.06 1.06-1.06c1.37-1.37 3.58-1.37 4.95 0l2.83 2.83-1.41 1.41-2.83-2.83-2.12 2.12 2.83 2.83-1.41 1.41zM16.99 6.22l-1.41-1.41-1.41 1.41 1.41 1.41 1.41-1.41z"/>
  </svg>
);

export const CoffeeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7V9h1.5c.83 0 1.5.67 1.5 1.5S20.33 12 19.5 12H19v2h.5c1.93 0 3.5-1.57 3.5-3.5V4.5c0-.83-.67-1.5-1.5-1.5zM16 9v2H6V5h10v4z"/>
    <path d="M2 20h20v2H2z"/>
  </svg>
);

export const FileIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
  </svg>
);