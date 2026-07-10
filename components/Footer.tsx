export function Footer() {
  return (
    <footer className="bg-plum-deep border-t border-gold/30 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <a
          href="https://www.instagram.com/instaglaum?igsh=MXJ0NjVmNnY4aGQ5eA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-tokyo text-sm tracking-widest text-cream transition-opacity hover:opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          @instaglaum
        </a>
        <p className="font-tokyo text-lg text-cream">
          Glåüm.ca © 2022 – Sponsored by Shrimp™
        </p>
      </div>
    </footer>
  );
}
