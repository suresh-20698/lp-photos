import React from 'react'

function Heart({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

export function Footer({ brand }) {
  if (!brand) return null

  const currentYear = 2026

  const {
    email = 'lpphotography2020@gmail.com',
    contacts = [
      { name: 'G.Ram kumar', phone: '7418418491' },
      { name: 'M.Prabhakaran', phone: '8098068909' },
    ],
    instagramUrl = 'https://www.instagram.com/lp_photographytnj/',
    driveUrl = 'https://drive.google.com/drive/folders/1q6rBOcNgxzlk1l_NrnyNX4U7ERcKgr5W',
  } = brand

  const formatPhone = (phone) => {
    if (phone.length === 10) {
      return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`
    }
    return phone
  }

  return (
    <footer className="mt-8 pt-5 w-full flex flex-col items-center text-center border-t border-[#214b38]/12">
      {/* Decorative Champagne Sprig */}
      <div className="text-[#c4a87a] mb-2.5 flex items-center justify-center">
        <svg
          className="w-5 h-3.5 stroke-current fill-none stroke-[1.4]"
          viewBox="0 0 24 16"
          aria-hidden="true"
        >
          <path d="M12 15C12 9 8 3 2 2" strokeLinecap="round" />
          <path d="M12 15C12 9 16 3 22 2" strokeLinecap="round" />
          <path d="M12 15V1" strokeLinecap="round" />
        </svg>
      </div>

      <h3 className="text-xs uppercase tracking-[0.22em] text-[#063423] mb-3">
        Connect &amp; Explore
      </h3>

      {/* Google Drive Link for Exploring */}
      {driveUrl && (
        <a
          href={driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mb-3.5 py-3 px-4 rounded-xl bg-gradient-to-r from-[#fbf4e2] via-[#f7ecd2] to-[#fbf4e2] hover:from-[#f6ebd0] hover:to-[#f0e2be] border border-[#d1bc8a]/70 text-[#063423] flex items-center justify-center gap-2.5 shadow-[0_2px_10px_rgba(209,188,138,0.22)] transition-all duration-200 group active:scale-[0.99] cursor-pointer"
        >
          <svg
            className="w-4 h-4 fill-current text-[#c4a87a] group-hover:text-[#063423] transition-colors shrink-0"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
          </svg>
          <span className="text-[12px] font-semibold tracking-wide text-[#063423]">
            Explore Full Archive on Google Drive ↗
          </span>
        </a>
      )}

      {/* Refined Contact Channel Cards */}
      <div className="w-full flex flex-col gap-2.5">
        {/* Contact Numbers */}
        {contacts.map((c) => (
          <a
            key={c.phone}
            href={`tel:${c.phone}`}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbf7ec]/90 hover:bg-[#f5edd8] border border-[#d1bc8a]/50 flex items-center justify-between text-left transition-all duration-200 shadow-xs group active:scale-[0.99] cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#ebdcc0]/70 group-hover:bg-[#d1bc8a]/40 border border-[#d1bc8a]/60 text-[#063423] flex items-center justify-center shrink-0 transition-colors">
                <svg
                  className="w-3.5 h-3.5 text-[#063423]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10.5px] font-medium uppercase tracking-wider text-[#414943]/75">
                  {c.name}
                </span>
                <span className="text-[13px] font-semibold text-[#063423] tracking-wide">
                  {formatPhone(c.phone)}
                </span>
              </div>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#063423]/70 group-hover:text-[#063423] px-2.5 py-1 rounded-full bg-[#ebdcc0]/50 group-hover:bg-[#d1bc8a]/35 border border-[#d1bc8a]/45 transition-colors">
              Call
            </span>
          </a>
        ))}

        {/* Email Card */}
        {email && (
          <a
            href={`mailto:${email}`}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbf7ec]/90 hover:bg-[#f5edd8] border border-[#d1bc8a]/50 flex items-center justify-between text-left transition-all duration-200 shadow-xs group active:scale-[0.99] cursor-pointer"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#ebdcc0]/70 group-hover:bg-[#d1bc8a]/40 border border-[#d1bc8a]/60 text-[#063423] flex items-center justify-center shrink-0 transition-colors">
                <svg
                  className="w-3.5 h-3.5 text-[#063423]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10.5px] font-medium uppercase tracking-wider text-[#414943]/75">
                  Email
                </span>
                <span className="text-[12px] sm:text-[12.5px] font-semibold text-[#063423] tracking-tight truncate">
                  {email}
                </span>
              </div>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#063423]/70 group-hover:text-[#063423] px-2.5 py-1 rounded-full bg-[#ebdcc0]/50 group-hover:bg-[#d1bc8a]/35 border border-[#d1bc8a]/45 transition-colors shrink-0 ml-2">
              Mail
            </span>
          </a>
        )}

        {/* Instagram Card - No Underline, Refined Aesthetic */}
        {instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbf7ec]/90 hover:bg-[#f5edd8] border border-[#d1bc8a]/50 flex items-center justify-between text-left transition-all duration-200 shadow-xs group active:scale-[0.99] cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f58529]/15 via-[#dd2a7b]/15 to-[#8134af]/15 group-hover:from-[#f58529]/25 group-hover:to-[#8134af]/25 border border-[#d1bc8a]/60 text-[#063423] flex items-center justify-center shrink-0 transition-colors">
                <svg
                  className="w-3.5 h-3.5 fill-current text-[#063423]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10.5px] font-medium uppercase tracking-wider text-[#414943]/75">
                  Instagram
                </span>
                <span className="text-[13px] font-semibold text-[#063423] tracking-tight">
                  @lp_photographytnj
                </span>
              </div>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#063423]/70 group-hover:text-[#063423] px-2.5 py-1 rounded-full bg-[#ebdcc0]/50 group-hover:bg-[#d1bc8a]/35 border border-[#d1bc8a]/45 transition-colors shrink-0 ml-2">
              Follow ↗
            </span>
          </a>
        )}
      </div>

      {/* Copyright & Crafted by Squaredge Section */}
      <div className="w-full flex flex-col items-center justify-center gap-2 pt-5 mt-6 border-t border-[#214b38]/10 text-center">
        {/* Copyright Note */}
        <p className="text-[10.5px] sm:text-[11px] text-[#414943]/65 font-normal tracking-wide">
          © {currentYear} <span className="font-semibold text-[#063423]">{brand.name || 'LP Photography'}</span>. All rights reserved.
        </p>
        
        {/* Crafted with love by Squaredge - Refined Agency Badge (External link disabled) */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fbf7ec]/90 border border-[#d1bc8a]/50 text-[#063423] text-[11px] shadow-xs select-none">
          <span className="text-[#414943]/80">Crafted with</span>
          <Heart className="w-3 h-3 text-rose-500 fill-rose-500 shrink-0" />
          <span className="text-[#414943]/80">by</span>
          <div className="flex items-center gap-1">
            <svg
              className="w-3.5 h-3.5 text-[#063423] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="11"
                height="11"
                rx="2.5"
                stroke="currentColor"
                strokeWidth="2"
                className="opacity-70"
              />
              <rect
                x="10"
                y="10"
                width="11"
                height="11"
                rx="2.5"
                stroke="currentColor"
                strokeWidth="2"
                fill="currentColor"
                fillOpacity="0.25"
              />
            </svg>
            <span className="font-bold text-[#063423] tracking-wide text-[11.5px]">
              Squaredge
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
