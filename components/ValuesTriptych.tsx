import Image from "next/image";

/* The three core values as folk-art arch shrines.
   Full-panel illustrations with titles and gold arches baked in. */

const PANELS = [
  { title: "Compassion", src: "/images/compassion.png", height: 1325 },
  { title: "Community", src: "/images/community.png", height: 1326 },
  { title: "Playfulness", src: "/images/playfulness.png", height: 1325 },
];

export function ValuesTriptych() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-8 sm:gap-6 sm:grid-cols-3 max-w-xs sm:max-w-none mx-auto">
        {PANELS.map((p) => (
          <Image
            key={p.title}
            src={p.src}
            alt={p.title}
            width={1187}
            height={p.height}
            quality={100}
            className="w-full h-auto [filter:drop-shadow(0_14px_36px_rgba(36,20,48,0.3))]"
          />
        ))}
      </div>

      {/* Ribbon */}
      <div className="flex justify-center mt-12">
        <div className="value-ribbon relative bg-plum text-cream font-tokyo tracking-[0.12em] sm:tracking-[0.2em] text-xs sm:text-base px-5 sm:px-12 py-3 text-center">
          Accept Glåüm into your heart.
        </div>
      </div>
    </div>
  );
}
