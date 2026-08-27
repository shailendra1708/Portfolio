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
  { text: "I LOVE GHAZALS THAT MAKE YOU LISTEN TO THE SAME LINE TWICE.", position: "top-[32%]" },
  { text: "I LOVE BOOKS THAT LEAVE ME THINKING AFTER I CLOSE THEM.", position: "top-[41%]" },
  { text: "I LOVE BEING A BEGINNER AT SOMETHING I FIND INTERESTING.", position: "top-[50%]" },
  { text: "I LOVE RASMALAI. 🍮", position: "top-[59%]" },
  { text: "I LOVE MARVEL — DOCTOR STRANGE IS MY FAVOURITE.", position: "top-[68%]" },
  { text: "I WANT TO TRAVEL THE WORLD, ONE PLACE AT A TIME.", position: "top-[77%]" },
  { text: "I WANT TO TREK MERA PEAK — JUST TO TEST MYSELF.", position: "top-[86%]" },
];

export default function Hero() {
  const [skillsVisible, setSkillsVisible] = useState(false);

  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden">

      <div className="mx-auto flex h-screen max-w-7xl flex-col items-center px-6 lg:flex-row lg:px-12">

        {/* LEFT */}
        <div className="z-10 flex w-full flex-[0.8] -translate-y-5 flex-col justify-center pb-4 pt-24 text-center lg:w-auto lg:flex-1 lg:translate-y-0 lg:justify-center lg:pb-0 lg:pt-0 lg:text-left">

          <h1 className="instrument-serif text-white font-normal tracking-wide
                         text-5xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span>VERMA</span><span className="ml-5 italic text-[#4D6CFA]">SHAILENDRA</span>
          </h1>

          <p className="mt-3 text-xs font-medium uppercase tracking-[0.28em] text-neutral-400 sm:text-sm text-left leading-tight">
            <span className="block">CURIOUS ABOUT TECHNOLOGY, PEOPLE &</span>
            <span className="block"><span className="">HOW THINGS WORK </span><span className="text-neutral-400">| INDORE, INDIA</span></span>
          </p>

          {/* <p className="mt-5 max-w-xl text-base leading-7 text-neutral-300 sm:text-lg">
            <span className="font-semibold text-white">Niche:</span> Photography, Travelling,
            Storytelling, Poetry, Writing
          </p> */}

          <div className="mt-3 flex flex-col items-center gap-3 lg:items-start">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm lg:justify-start">
              <span className="font-medium uppercase tracking-[0.18em] text-neutral-500">Follow me on</span>
              <a href="https://www.instagram.com/its_shailendra_17/" target="_blank" rel="noreferrer" className="font-medium text-white transition hover:text-[#4D6CFA]">
                Instagram
              </a>
              <span className="text-neutral-600">/</span>
              <a href="https://www.linkedin.com/in/shailendra-lodhi-80a2802a7/" target="_blank" rel="noreferrer" className="font-medium text-white transition hover:text-[#4D6CFA]">
                LinkedIn
              </a>
            </div>

            <div className="mt-2 flex items-center gap-3">
              <a href="mailto:shailendraverma1708@gmail.com?subject=Portfolio%20enquiry" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4D6CFA] hover:bg-[#4D6CFA]">
                <MailIcon /> Email me
              </a>
              <a href="tel:+919406705427" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4D6CFA] hover:bg-[#4D6CFA]">
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
        <div className="absolute inset-x-0 bottom-0 flex w-full items-end justify-center lg:inset-x-auto lg:left-1/2 lg:w-auto lg:-translate-x-1/2">

          <div className="w-[min(190vw,900px)] max-w-none sm:w-[min(170vw,820px)] lg:w-[520px]">

            <video
              autoPlay
              loop
              muted
              playsInline
              className={`h-auto w-full pointer-events-none select-none transition-[filter] duration-700 ${skillsVisible ? "grayscale" : "grayscale-0"}`}
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

    </section>
  );
}
