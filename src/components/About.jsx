import meVideo from "../assets/Me.mp4";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-10">
        <div className="max-w-3xl lg:max-w-none">
          <p className="uppercase tracking-[8px] text-black">About</p>

          <h2
            className="instrument-serif mt-8 text-[2.25rem] leading-[0.96] font-normal tracking-tight text-black sm:text-[2.9rem] md:text-[3.4rem] lg:text-[4.4rem] xl:text-[5rem]"
          >
            I Judge a Book by its <span className="italic text-[#4D6CFA]">Cover</span>
          </h2>

          <p className="mt-8 text-left text-[0.97rem] leading-7 text-black sm:text-base sm:leading-8 lg:text-lg lg:leading-8 lg:text-justify">
            Hey! I&apos;m Shailendra. You can call me Shailendra — that&apos;s probably the easiest. I&apos;m 21, an engineering student, and honestly, I&apos;ve never been good at picking just one thing to focus on.
          </p>
          <p className="mt-6 text-left text-[0.97rem] leading-7 text-black sm:text-base sm:leading-8 lg:text-lg lg:leading-8 lg:text-justify">
            What I really love is people. Sitting with someone and hearing how they see the world. Most of what I know about life, I&apos;ve learned from other people&apos;s stories.
          </p>
          <p className="mt-6 text-left text-[0.97rem] leading-7 text-black sm:text-base sm:leading-8 lg:text-lg lg:leading-8 lg:text-justify">
            When I&apos;m not overthinking something small, I&apos;m usually traveling somewhere new, watching anime, or saving little video clips of moments I liked. That last one turned into video editing — I didn&apos;t plan it, it just happened, the way good habits sometimes do.
          </p>
          <p className="mt-6 text-left text-[0.97rem] leading-7 text-black sm:text-base sm:leading-8 lg:text-lg lg:leading-8 lg:text-justify">
            Technology found me a bit differently. I started with Java, learning to code the normal way — line by line, mistake by mistake. But soon I wasn&apos;t happy just making things work. I wanted to know why they worked. That curiosity led me to cybersecurity, and then to web penetration testing — learning to look at the internet not just as a user, but as someone checking what&apos;s underneath it.
          </p>
          <p className="mt-6 text-left text-[0.97rem] leading-7 text-black sm:text-base sm:leading-8 lg:text-lg lg:leading-8 lg:text-justify">
            So this website isn&apos;t a résumé pretending to be a personality. It&apos;s more like a window — a look at the person behind the screen: the things I enjoy, the things I&apos;m learning, and the journey I&apos;m still writing.
          </p>
          <p className="mt-6 text-left text-[0.97rem] leading-7 text-black sm:text-base sm:leading-8 lg:text-lg lg:leading-8 lg:text-justify">
            If you ever find yourself in Indore, let&apos;s grab a cup of tea and talk about something completely unrelated to technology. ☕
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-[22rem] lg:max-w-[280px] lg:translate-y-8">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <video
              src={meVideo}
              controls
              playsInline
              className="aspect-[9/16] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
