import { useEffect, useState } from "react";
import resume from "../assets/Shailendra_Resume.pdf";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Work", "#work"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
  ["Resume", "#resume"],
];

export default function Navbar() {
  const [activeHash, setActiveHash] = useState(() => window.location.hash || "#home");

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash || "#home");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-2 py-4 sm:justify-end sm:px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[10px] font-medium tracking-wide sm:gap-x-5 sm:text-[11px] md:gap-x-6 md:text-xs lg:gap-x-7 lg:text-sm">
          {links.map(([label, href]) => {
            const isActive = activeHash === href || (href === "#home" && (activeHash === "" || activeHash === "#home"));
            const destination = label === "Resume" ? resume : href;
            const isResumeLink = label === "Resume";

            return (
              <a
                key={label}
                href={destination}
                target={isResumeLink ? "_blank" : undefined}
                rel={isResumeLink ? "noopener noreferrer" : undefined}
                aria-current={isActive ? "page" : undefined}
                className={`relative whitespace-nowrap pb-1 transition-colors hover:text-white ${isActive ? "text-white after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-[#4D6CFA]" : "text-neutral-300"}`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
