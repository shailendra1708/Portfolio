import { useState } from "react";
import taleThumbnail from "../assets/Black White and Red Typographic Truth YouTube Thumbnail.png";

const videos = [
  {
    title: "Conversation with Mathew Bentley",
    duration: "21:27",
    image: taleThumbnail,
    youtubeId: "K3jil977xZg",
  },
];

export default function Tales() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <main id="tales" className="min-h-screen bg-black px-6 pb-24 pt-32 lg:px-12 lg:pb-32 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <p className="uppercase tracking-[8px] text-neutral-500">Tales</p>
        <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="instrument-serif text-[3.5rem] leading-[0.95] tracking-tight text-white md:text-[5rem]">
            Stories worth <span className="italic text-[#4D6CFA]">watching.</span>
          </h2>
          <p className="max-w-sm text-base leading-7 text-neutral-400">
            A few Conversations along my journey
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {videos.map((video) => (
            <article key={video.title} className="group">
              <div className="relative aspect-video overflow-hidden bg-neutral-900">
                <img
                  src={video.image}
                  alt=""
                  className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-95"
                />
                <button
                  type="button"
                  aria-label={video.youtubeId ? `Play ${video.title}` : undefined}
                  onClick={() => video.youtubeId && setActiveVideo(video.youtubeId)}
                  className="absolute inset-0 grid place-items-center"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-white/70 bg-black/35 pl-0.5 text-sm text-white backdrop-blur-sm transition group-hover:bg-white group-hover:text-black">
                    ▶
                  </span>
                </button>
                <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 text-xs text-white">
                  {video.duration}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{video.title}</h3>
            </article>
          ))}
          <article className="flex min-h-56 flex-col justify-end border border-dashed border-white/20 p-6 sm:p-7 md:col-span-2">
            <h3 className="instrument-serif mt-4 text-4xl leading-none text-white sm:text-[2.75rem]">More on the way.</h3>
            <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-400">
              New conversations, lessons, and stories.
            </p>
          </article>
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setActiveVideo(null)}
              className="absolute -right-2 -top-11 grid h-9 w-9 place-items-center rounded-full border border-white/30 text-xl text-white transition hover:bg-white hover:text-black"
            >
              ×
            </button>
            <div className="aspect-video overflow-hidden rounded-xl bg-neutral-900 shadow-2xl">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1`}
                title="Conversation with Mathew Bentley"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
