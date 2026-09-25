export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-center lg:px-12">

      {/* Quote */}
      <blockquote className="instrument-serif mx-auto max-w-2xl text-2xl leading-tight text-neutral-200">
        "Every dream needs a dreamer. So do I." ~ Shailendra
      </blockquote>

      {/* Social Icons */}
      <div className="mt-8 flex items-center justify-center gap-7">

        {/* GitHub */}
        <a
          href="https://github.com/shailendra1708"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white transition hover:scale-110 hover:text-neutral-400"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current"
            aria-hidden="true"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.5 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shailendra-lodhi-80a2802a7/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white transition hover:scale-110 hover:text-neutral-400"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current"
            aria-hidden="true"
          >
            <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.68H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.98H3.56v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/its_shailendra_17/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white transition hover:scale-110 hover:text-neutral-400"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current"
            aria-hidden="true"
          >
            <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:Shailendraverma1708@gmail.com"
          aria-label="Email"
          className="text-white transition hover:scale-110 hover:text-neutral-400"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-none stroke-current"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </a>

      </div>

      {/* Bottom section */}
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 sm:flex-row">
        <a href="#home" className="transition hover:text-white">
          Shailendra
        </a>

        <p>© {new Date().getFullYear()} All rights reserved</p>
      </div>

    </footer>
  );
}