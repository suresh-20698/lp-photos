import React from 'react'

export function ServiceIcon({ name, className = 'w-4 h-4' }) {
  // SVG fallbacks for guaranteed rendering alongside Material Symbols font
  switch (name) {
    case 'favorite':
      return (
        <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    case 'explore':
      return (
        <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2.19-12.19L6.5 14.5l6.69-2.19L17.5 6.5l-3.31 3.31zM12 10.9c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </svg>
      )
    case 'child_care':
      return (
        <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="14.5" cy="10.5" r="1.25" />
          <circle cx="9.5" cy="10.5" r="1.25" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37 2.15 2.12 5.12 3.43 8.39 3.43.34 0 .67-.02 1-.05.88 3.16.27 6.64-1.92 8.85-1.34 1.32-3.05 2-4.73 2zm0-4.5c-1.48 0-2.75-.81-3.45-2h6.9c-.7 1.19-1.97 2-3.45 2z" />
        </svg>
      )
    case 'history_edu':
      return (
        <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 4v1.38c-.83-.33-1.72-.5-2.67-.5-3.8 0-6.33 3.06-6.33 6.62 0 3.33 2.15 5.92 5.27 6.42L3 21h2l1.64-2.46c.45.06.91.09 1.36.09 3.82 0 6.33-3.07 6.33-6.63 0-.74-.11-1.44-.33-2.09l4.5-4.5 1.41 1.41-3.09 3.09 1.42 1.41 3.09-3.09 1.41 1.41-3.09 3.09 1.42 1.41 3.09-3.09 2.12 2.12L22 4.12 19.88 2 9 4zm-1.67 12.63c-2.49 0-4.33-1.93-4.33-4.63 0-2.69 1.84-4.62 4.33-4.62s4.33 1.93 4.33 4.62c0 2.7-1.84 4.63-4.33 4.63z" />
        </svg>
      )
    case 'local_florist':
      return (
        <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3c-1.66 0-3 1.34-3 3 0 .78.3 1.49.79 2.02-.95.12-1.8.59-2.42 1.28C6.54 8.78 5.86 8.5 5.1 8.5 3.39 8.5 2 9.89 2 11.6c0 1.25.75 2.32 1.81 2.8-.23.63-.36 1.31-.36 2.02 0 3.09 2.51 5.6 5.6 5.6 1.76 0 3.32-.82 4.34-2.09.43.06.87.09 1.31.09 3.04 0 5.5-2.46 5.5-5.5 0-1.28-.44-2.46-1.18-3.4.67-.85 1.08-1.92 1.08-3.1 0-2.76-2.24-5-5-5-.48 0-.94.07-1.38.2C13.25 3.5 12.66 3 12 3zm0 7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
        </svg>
      )
    case 'door_open':
      return (
        <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-4-8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
        </svg>
      )
    case 'account_balance':
      return (
        <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" />
        </svg>
      )
    case 'school':
      return (
        <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
        </svg>
      )
    default:
      return <span className="material-symbols-outlined text-base">{name}</span>
  }
}
