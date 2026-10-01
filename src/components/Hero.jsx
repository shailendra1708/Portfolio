import { useState } from "react";
import heroVideo from "../assets/hero.mp4";

function MailIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
}

function PhoneIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M6.6 3.8 9.1 3c.7-.2 1.4.2 1.6.9l1.1 3.2c.2.6 0 1.2-.5 1.5l-1.6 1a13.7 13.7 0 0 0 4.7 4.7l1-1.6c.3-.5.9-.7 1.5-.5l3.2 1.1c.7.2 1.1.9.9 1.6l-.8 2.5c-.3.9-1.1 1.5-2 1.4C10.2 18.2 5.8 13.8 5.2 5.8c-.1-.9.5-1.7 1.4-2Z" /></svg>;
}

const storyPoints = [
  { text: "I LOVE CHAI AND THE STORIES THAT COME WITH IT.", position: "top-[23%]" },
  { text: "I LOVE GHAZALS THAT MAKE YOU LISTEN TO THE SAME LINE TWICE.", position: "top-[33%]" },
  { text: "I LOVE BOOKS THAT LEAVE ME THINKING AFTER I CLOSE THEM.", position: "top-[43%]" },
  { text: "I LOVE BEING A BEGINNER AT SOMETHING I FIND INTERESTING.", position: "top-[53%]" },
  { text: "I LOVE MARVEL — DOCTOR STRANGE IS MY FAVOURITE.", position: "top-[63%]" },
  { text: "I WANT TO TRAVEL THE WORLD, ONE PLACE AT A TIME.", position: "top-[73%]" },
  { text: "I WANT TO TREK MERA PEAK — JUST TO TEST MYSELF.", position: "top-[83%]" },
];

export default function Hero() {
  const [skillsVisible, setSkillsVisible] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden bg-black">
      <style>{`
        @media (max-height: 500px) and (max-width: 1023px) {
          .hero-portrait-mobile-short {
            bottom: -2.25rem !important;
          }
        }
      `}</style>
      <div className="mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col items-center px-4 pb-16 pt-24 sm:px-6 lg:h-screen lg:flex-row lg:px-12 lg:pb-0 lg:pt-0">
        {/* LEFT */}
        <div className="z-10 flex w-full flex-[0.8] -translate-y-4 flex-col justify-center pb-4 text-center lg:w-auto lg:flex-1 lg:translate-y-0 lg:justify-start lg:pb-0 lg:text-left">
          <h1 className="instrument-serif text-white font-normal tracking-wide text-4xl leading-none sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block sm:inline">VERMA</span>
            <span className="mt-1 block italic text-[#4D6CFA] sm:mt-0 sm:ml-5 sm:inline">SHAILENDRA</span>
          </h1>

          <p className="mt-3 text-left text-[10px] font-medium uppercase leading-tight tracking-[0.18em] text-neutral-400 sm:text-xs md:text-sm md:tracking-[0.22em]">
            <span className="block">CURIOUS ABOUT TECHNOLOGY, PEOPLE &</span>
            <span className="block">
              <span>HOW THINGS WORK</span>
              <span className="text-neutral-400"> | INDORE, INDIA</span>
            </span>
          </p>

          <div className="mt-3 flex flex-col items-center gap-3 lg:items-start">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm lg:justify-start">
              <span className="font-medium uppercase tracking-[0.18em] text-neutral-500">Follow me on</span>
              <a href="https://www.instagram.com/its_shailendra_17/" target="_blank" rel="noreferrer" className="font-medium text-white transition hover:text-[#4D6CFA]">
                Instagram
              </a>
              <span className="text-neutral-600">/</span>
              <a href="https://www.linkedin.com/in/shailendra-lodhi-80a2802a7/" target="_blank" rel="noreferrer" className="font-medium text-white transition hover:text-[#4D6CFA]">
                LinkedIn
              </a>
            </div>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a href="mailto:shailendraverma1708@gmail.com?subject=Portfolio%20enquiry" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-xs font-semibold text-white transition hover:border-[#4D6CFA] hover:bg-[#4D6CFA] sm:px-5 sm:py-3 sm:text-sm">
                <MailIcon /> Email me
              </a>
              <a href="tel:+919406705427" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-xs font-semibold text-white transition hover:border-[#4D6CFA] hover:bg-[#4D6CFA] sm:px-5 sm:py-3 sm:text-sm">
                <PhoneIcon /> Call me
              </a>
              <button
                type="button"
                role="switch"
                aria-checked={skillsVisible}
                aria-label="Show creative disciplines"
                onClick={() => setSkillsVisible((visible) => !visible)}
                className={`group relative inline-flex h-10 w-[3.25rem] shrink-0 items-center rounded-full border p-1 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4D6CFA] ${skillsVisible ? "border-[#4D6CFA] bg-[#4D6CFA]" : "border-white/25 bg-white/5 hover:border-white/50"}`}
              >
                <span aria-hidden="true" className={`h-7 w-7 rounded-full bg-white shadow-sm transition-transform duration-300 ${skillsVisible ? "translate-x-[0.85rem]" : "translate-x-0"}`} />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-portrait-mobile-short absolute inset-x-0 bottom-[-1rem] flex w-full items-end justify-center sm:bottom-0 lg:inset-x-auto lg:left-[50%] lg:w-auto lg:translate-x-0 xl:left-[52%]">
          <div className="w-[min(190vw,900px)] max-w-none sm:w-[min(170vw,820px)] lg:w-[560px] xl:w-[590px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className={`h-auto w-full scale-[0.85] translate-x-0 translate-y-[8%] object-contain object-center pointer-events-none select-none transition-[filter,transform] duration-700 sm:scale-[0.9] sm:translate-x-0 md:translate-x-0 lg:scale-[0.84] lg:-translate-x-[40%] lg:translate-y-[8%] xl:scale-[0.86] xl:-translate-x-[42%] xl:translate-y-[8%] ${skillsVisible ? "grayscale" : "grayscale-0"}`}
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Desktop-only notes that use the open space beside the portrait. */}
        <aside aria-label="Creative disciplines" className="pointer-events-none absolute inset-y-0 left-[calc(50%+145px)] hidden w-[min(19vw,280px)] xl:block">
          {skillsVisible && storyPoints.map(({ text, position }, index) => (
            <div
              key={text}
              className={`absolute ${position} left-0 animate-[fade-in_450ms_ease-out_both]`}
              style={{ animationDelay: `${index * 180}ms` }}
            >
              <span className="relative inline-block whitespace-nowrap pb-2 text-left text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85 after:absolute after:bottom-0 after:left-0 after:h-px after:w-14 after:bg-white/75">
                {text}
              </span>
            </div>
          ))}
        </aside>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-5 left-1/2 z-30 inline-flex -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 p-3 text-white backdrop-blur-md transition hover:border-[#4D6CFA] hover:bg-[#4D6CFA]/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4D6CFA] animate-bounce"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
