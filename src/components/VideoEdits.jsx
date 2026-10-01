import { useEffect, useRef, useState } from "react";

const videoModules = import.meta.glob(
  "../assets/videos/*.mp4",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

const posterModules = import.meta.glob(
  "../assets/posters/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

// Build a filename (without extension) -> poster URL map so each poster is
// matched explicitly to its video, not by array index/order.
const postersByName = Object.fromEntries(
  Object.entries(posterModules).map(([path, url]) => {
    const name = path.split("/").pop().replace(/\.(jpg|jpeg|png|webp)$/i, "");
    return [name, url];
  }),
);

const videos = Object.entries(videoModules)
  .map(([path, src]) => {
    const name = path.split("/").pop().replace(/\.mp4$/i, "");
    const posterName = name.replace(/-h264$/i, "");

    return {
      name,
      src,
      poster: postersByName[posterName],
    };
  })
  .sort((first, second) =>
    first.name.localeCompare(second.name, undefined, {
      numeric: true,
      sensitivity: "base",
    }),
  );

function VideoCard({ video, activeVideoRef }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pendingPlay, setPendingPlay] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !pendingPlay || !videoRef.current) return;
    void videoRef.current.play();
    setPendingPlay(false);
  }, [isVisible, pendingPlay]);

  const handlePlay = () => {
    if (activeVideoRef.current && activeVideoRef.current !== videoRef.current) {
      activeVideoRef.current.pause();
    }
    activeVideoRef.current = videoRef.current;
    setIsPlaying(true);
  };

  const handlePause = () => {
    if (activeVideoRef.current === videoRef.current) {
      activeVideoRef.current = null;
    }
    setIsPlaying(false);
  };

  return (
    <article className="group flex justify-center">
      <div
        ref={cardRef}
        className="relative aspect-[9/16] w-[85%] overflow-hidden bg-neutral-900 border border-white/15 transition-all duration-300 ease-out hover:border-white hover:ring-2 hover:ring-white"
      >
        {isVisible ? (
          <video
            ref={videoRef}
            src={video.src}
            poster={video.poster}
            controls
            preload="metadata"
            playsInline
            onPlay={handlePlay}
            onPause={handlePause}
            className="h-full w-full object-contain"
          />
        ) : (
          video.poster && (
            <img
              src={video.poster}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain"
            />
          )
        )}
        <div className="pointer-events-none absolute inset-0 bg-black/15 transition duration-300 group-hover:bg-black/20" />
        {!isPlaying && (
          <button
            type="button"
            aria-label={`Play ${video.name}`}
            onClick={() => {
              setPendingPlay(true);
              setIsVisible(true);
            }}
            className="pointer-events-none absolute inset-0 grid place-items-center"
          >
            <span className="pointer-events-auto grid h-14 w-14 place-items-center rounded-full border border-white/50 bg-white/10 text-lg text-white backdrop-blur-sm transition duration-300 group-hover:border-white group-hover:bg-white/20 group-hover:scale-110">
              ▶
            </span>
          </button>
        )}
      </div>
    </article>
  );
}

export default function VideoEdits() {
  const activeVideoRef = useRef(null);

  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-32 lg:px-12 lg:pb-32 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <a
          href="#work"
          className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-white"
        >
          <span>←</span>
          <span>Back</span>
        </a>

        <p className="uppercase tracking-[8px] text-neutral-500">Video Edits</p>
        <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="instrument-serif text-[3.5rem] leading-[0.95] tracking-tight text-white md:text-[5rem]">
            Moments in <span className="italic text-[#4D6CFA]">motion</span>
          </h2>
          <p className="max-w-sm text-base leading-7 text-neutral-400">
            A few moments, shaped one frame at a time.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoCard
              key={video.name}
              video={video}
              activeVideoRef={activeVideoRef}
            />
          ))}
        </div>
      </div>

    </main>
  );
}
