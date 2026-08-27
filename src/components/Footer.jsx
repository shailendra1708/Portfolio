export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-center lg:px-12">
      <blockquote className="instrument-serif mx-auto max-w-2xl text-2xl leading-tight text-neutral-200 sm:text-2xl">
        “Creativity is human, and that is the magic no machine can copy.” ~ Shailendra
      </blockquote>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 sm:flex-row">
        <a href="#home" className="transition hover:text-white">Shailendra</a>
        <p>© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
}
