"use client";

import Image from "next/image";

type LogoItem = {
  name: string;
  src: string;
};

const logoItems: LogoItem[] = [
  { name: "iPhone", src: "/iphone-1.png" },
  { name: "Android", src: "/android-1.png" },
  { name: "Xbox", src: "/xbox-1.png" },
  { name: "Mac", src: "/mac-1.png" },
  { name: "Linux", src: "/linux-1.png" },
  { name: "PlayStation", src: "/playstation-1.png" },
  { name: "Steam", src: "/staeam-1.png" },
  { name: "Nintendo", src: "/nintendo-1.png" },
];

function LogoMarqueeItem({ item }: { item: LogoItem }) {
  return (
    <div
      title={item.name}
      className="flex h-20 w-[180px] shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-3 transition-all duration-300 hover:-translate-y-3 hover:border-white/20 hover:bg-white/[0.08]"
    >
      <div className="relative h-20 w-full">
        <Image
          src={item.src}
          alt={item.name}
          fill
          className="object-contain"
          sizes="180px"
        />
      </div>
    </div>
  );
}

function LogoMarqueeRow({
  items,
  speed = "28s",
}: {
  items: LogoItem[];
  speed?: string;
}) {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div
        className="marquee-track flex w-max items-center gap-4 md:gap-6"
        style={{ ["--marquee-speed" as any]: speed }}
      >
        {repeated.map((item, idx) => (
          <LogoMarqueeItem key={`${item.name}-${idx}`} item={item} />
        ))}
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee-left var(--marquee-speed) linear infinite;
          will-change: transform;
        }

        @keyframes marquee-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}

export default function TechStackPreview() {
  return (
    <section className="relative w-full overflow-hidden bg-[#001d2f] ">
      <div className="mx-auto px-6 lg:px-8">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#001d2f] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#001d2f] to-transparent" />

          <LogoMarqueeRow items={logoItems} speed="30s" />
        </div>
      </div>
    </section>
  );
}