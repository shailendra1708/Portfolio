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
    title: "TRAVELLING",
    image: storytellingBackground,
    description: "Places I've been, places I want to see, and experiences I'm collecting along the way.",
    href: "#travelling",
  },
];

export default function Services() {
  return (
    <section className="bg-black px-6 py-20 text-white sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
          WHAT I'M UP TO
        </p>
        <div className="mt-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="instrument-serif max-w-2xl text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:max-w-none">
           A few things I&apos;ve been <span className="italic text-[#4D6CFA]">into</span>
          </h2>
          <p className="max-w-sm text-sm font-bold leading-6 tracking-[0.01em] text-neutral-400 md:text-right">
            There&apos;s still so much I haven&apos;t seen.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              href={service.href}
              key={service.number}
              className="group relative min-h-56 cursor-pointer overflow-hidden border border-white/15 p-6 transition-all duration-300 ease-out hover:rotate-[1.25deg] hover:border-white hover:ring-2 hover:ring-white sm:p-7"
            >
              <img
                src={service.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full scale-110 object-cover opacity-55 brightness-120 transition duration-500 group-hover:scale-100 group-hover:opacity-70 group-hover:brightness-130"
                style={{ objectPosition: "70% 70%" }}
              />
              <div className="relative z-10">
                <span className="text-xs font-medium tracking-[0.2em] text-neutral-500 transition-colors group-hover:text-white/70">
                  {service.number}
                </span>
                <h3 className="instrument-serif mt-12 text-4xl leading-none sm:text-[2.75rem]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-400 transition-colors group-hover:text-white/85">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
