const photoModules = import.meta.glob("../assets/galPhotos/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const photos = Object.entries(photoModules)
  .sort(([firstPath], [secondPath]) =>
    firstPath.localeCompare(secondPath, undefined, { numeric: true }),
  )
  .map(([, src], index) => ({
    src,
    alt: `Gallery photograph ${index + 1}`,
  }));

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pb-24 pt-32 lg:px-12 lg:pb-32 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <p className="uppercase tracking-[8px] text-neutral-500">Gallery</p>
        <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="instrument-serif text-[3.5rem] leading-[0.95] tracking-tight text-white md:text-[5rem]">
            Moments I&apos;ve <span className="italic text-[#4D6CFA]">captured.</span>
          </h2>
          <p className="max-w-sm text-base leading-7 text-neutral-400">
            A selection of photographs from along the way.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {photos.map((photo, index) => (
            <a
              key={photo.src}
              href={photo.src}
              target="_blank"
              rel="noreferrer"
              className="group block w-full overflow-hidden transition duration-500 ease-out md:hover:-translate-y-2 md:hover:scale-[1.015] md:hover:-rotate-[0.4deg] md:hover:brightness-105 md:hover:contrast-105 md:hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
              aria-label={photo.alt}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading={index < 3 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                className="block h-auto w-full"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
