const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Tales", "#tales"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-end px-6 py-5 lg:px-12">
        <div className="flex items-center gap-5 text-xs font-medium tracking-wide text-neutral-300 sm:gap-8 sm:text-sm">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="transition-colors hover:text-white">
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
