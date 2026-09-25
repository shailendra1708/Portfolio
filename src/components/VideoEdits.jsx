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
  .sort(([firstPath], [secondPath]) =>
    firstPath.localeCompare(secondPath, undefined, { numeric: true }),
  )
  .map(([path, src], index) => {
    const name = path.split("/").pop().replace(/\.mp4$/i, "");
    return { src, poster: postersByName[name], id: index };
  });

export default function VideoEdits() {
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [mountedVideoIds, setMountedVideoIds] = useState(() => (
    typeof IntersectionObserver === "undefined"
      ? new Set(videos.map((video) => video.id))
      : new Set()
  ));
  const [pendingPlayId, setPendingPlayId] = useState(null);
  const cardRefs = useRef([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const videoId = Number(entry.target.dataset.videoId);
          setMountedVideoIds((currentIds) => {
            if (currentIds.has(videoId)) return currentIds;
            const nextIds = new Set(currentIds);
            nextIds.add(videoId);
            return nextIds;
          });
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "200px 0px" },
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (pendingPlayId === null || !mountedVideoIds.has(pendingPlayId)) return;

    const video = videoRefs.current[pendingPlayId];
    if (!video) return;

    video.currentTime = 0;
    video.muted = false;
    video.volume = 1;
    void video.play();
    setPendingPlayId(null);
  }, [mountedVideoIds, pendingPlayId]);

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
            <article
              key={video.id}
              ref={(element) => {
                cardRefs.current[video.id] = element;
              }}
              data-video-id={video.id}
              className="group flex justify-center"
            >
              <div className="relative aspect-[9/16] w-[85%] overflow-hidden bg-neutral-900 border border-white/15 transition-all duration-300 ease-out hover:border-white hover:ring-2 hover:ring-white">
                {mountedVideoIds.has(video.id) ? (
                  <video
                    src={video.src}
                    poster={video.poster}
                    className="h-full w-full object-contain"
                    preload="metadata"
                    playsInline
                    ref={(element) => {
                      videoRefs.current[video.id] = element;
                    }}
                    onPlay={(event) => {
                      videoRefs.current.forEach((otherVideo) => {
                        if (otherVideo && otherVideo !== event.currentTarget) {
                          otherVideo.pause();
                        }
                      });
                      setPlayingVideoId(video.id);
                    }}
                    onPause={() => setPlayingVideoId(null)}
                    onEnded={() => setPlayingVideoId(null)}
                  />
                ) : (
                  <img
                    src={video.poster}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain"
                  />
                )}
                <div className="absolute inset-0 bg-black/15 transition duration-300 group-hover:bg-black/20" />
                {playingVideoId !== video.id && (
                  <button
                    type="button"
                    aria-label="Play video"
                    onClick={(event) => {
                      event.stopPropagation();
                      const cardVideo = event.currentTarget.closest("article").querySelector("video");
                      if (!cardVideo) {
                        setPendingPlayId(video.id);
                        setMountedVideoIds((currentIds) => {
                          const nextIds = new Set(currentIds);
                          nextIds.add(video.id);
                          return nextIds;
                        });
                        return;
                      }
                      videoRefs.current.forEach((otherVideo) => {
                        if (otherVideo && otherVideo !== cardVideo) {
                          otherVideo.pause();
                        }
                      });
                      cardVideo.currentTime = 0;
                      cardVideo.muted = false;
                      cardVideo.volume = 1;
                      void cardVideo.play();
                    }}
                    className="absolute inset-0 grid place-items-center"
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-full border border-white/50 bg-white/10 text-lg text-white backdrop-blur-sm transition duration-300 group-hover:border-white group-hover:bg-white/20 group-hover:scale-110">
                      ▶
                    </span>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

    </main>
  );
}
