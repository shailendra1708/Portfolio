import photographyBackground from "../assets/services-background.png";
import ugcBackground from "../assets/services-ugc.png";
import storytellingBackground from "../assets/services-storytelling.png";

const services = [
  {
    number: "01",
    title: "VIDEO EDITS",
    image: photographyBackground,
    description: "A collection of edits, experiments, and stories I've put together frame by frame.",
    href: "#video-edits",
  },
  {
    number: "02",
    title: "PROJECTS",
    image: ugcBackground,
    description: "Things I've built while learning, experimenting, and trying to understand how things work beneath the surface.",
    href: "#projects",
  },
  {
    number: "03",
    title: "GALLERY",
    image: storytellingBackground,
    description: "Somewhere along the way, I started collecting memories.",
    secondaryDescription: "PLACES • PEOPLE • STORIES • MOMENTS",
    href: "#gallery",
  },
];

export default function Services() {
  return (
    <section id="work" className="bg-black px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
          WHAT I'M UP TO
        </p>
        <div className="mt-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="instrument-serif max-w-2xl text-[2.35rem] leading-[0.96] tracking-tight text-white sm:text-[3rem] md:text-[4rem] lg:max-w-none lg:text-[5rem]">
            A few things I&apos;ve been <span className="italic text-[#4D6CFA]">into</span>
          </h2>
          <p className="max-w-sm text-sm font-bold leading-6 tracking-[0.01em] text-neutral-400 md:text-right">
            There&apos;s still so much I haven&apos;t seen.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service) => {
            const cardClasses = "group relative block h-full min-h-56 overflow-hidden border border-white/15 p-5 transition duration-300 ease-out hover:-translate-y-1 hover:rotate-[1deg] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4D6CFA] sm:p-6 lg:p-7";
            const content = service.title === "GALLERY" ? (
              <>
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-55 brightness-110 transition duration-500 group-hover:scale-105 group-hover:opacity-65"
                  style={{ objectPosition: "70% 70%" }}
                />
                <div className="relative z-10">
                  <span className="text-xs font-medium tracking-[0.2em] text-neutral-500 transition-colors group-hover:text-white/70">
                    {service.number}
                  </span>
                  <h3 className="instrument-serif mt-12 text-[2.2rem] leading-none sm:text-[2.5rem]">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-[1rem] leading-[1.45] text-white/90 transition-colors group-hover:text-white/95 sm:text-[1.1rem]">
                    Somewhere along the way,
                    <br />
                    I started collecting memories.
                  </p>
                  <p className="mt-3 text-[0.58rem] uppercase tracking-[0.28em] text-white/65 transition-colors group-hover:text-white/75 sm:text-[0.62rem]">
                    {service.secondaryDescription}
                  </p>
                </div>
              </>
            ) : (
              <>
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-55 brightness-110 transition duration-500 group-hover:scale-105 group-hover:opacity-65"
                  style={{ objectPosition: "70% 70%" }}
                />
                <div className="relative z-10">
                  <span className="text-xs font-medium tracking-[0.2em] text-neutral-500 transition-colors group-hover:text-white/70">
                    {service.number}
                  </span>
                  <h3 className="instrument-serif mt-12 text-[2.2rem] leading-none sm:text-[2.5rem]">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-400 transition-colors group-hover:text-white/85 sm:text-[0.95rem] sm:leading-7">
                    {service.description}
                  </p>
                </div>
              </>
            );

            if (service.href) {
              return (
                <a
                  key={service.number}
                  href={service.href}
                  onClick={(event) => {
                    if (!service.href.startsWith("#")) return;
                    const target = document.getElementById(service.href.slice(1));
                    if (!target) return;
                    event.preventDefault();
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={cardClasses}
                >
                  {content}
                </a>
              );
            }

            return (
              <article key={service.number} className={cardClasses}>
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
