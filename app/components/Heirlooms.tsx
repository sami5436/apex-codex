import Image from "next/image";
import { legends } from "../data/legends";

export default function Heirlooms() {
  const owned = legends.filter((l) => l.heirloom);

  return (
    <section
      id="heirlooms"
      className="relative px-6 sm:px-10 md:px-14 lg:px-20 py-12 md:py-16 border-t border-apex-line"
    >
      <div className="flex flex-col gap-2">
        <div className="text-xs tracking-[0.4em] uppercase text-apex-amber font-display">
          02 / Mythic
        </div>
        <h2 className="title-stripe pl-7 font-display text-4xl sm:text-5xl md:text-6xl uppercase font-bold leading-[0.95]">
          Heirlooms
        </h2>
        <p className="text-apex-mute max-w-2xl mt-1 text-sm sm:text-base">
          Mythic-tier melee skins. Drop rate: vanishingly small. Pity timer:
          guaranteed at 500 packs. Each set ships with a banner pose, an intro
          quip, and a one-of-a-kind weapon.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {owned.map((l) => (
          <div
            key={l.id}
            className="group relative clip-bevel-md overflow-hidden border border-apex-line bg-apex-panel cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-apex-amber hover:shadow-[0_18px_40px_-20px_var(--accent)]"
            style={{ ["--accent" as string]: l.accent }}
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={l.image}
                alt={`${l.name} heirloom: ${l.heirloom!.name}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top opacity-70 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-apex-panel via-apex-panel/60 to-transparent" />
              <div
                className="absolute inset-x-0 bottom-0 p-4"
                style={{ borderTop: `1px solid ${l.accent}` }}
              >
                <div className="text-[10px] tracking-[0.3em] uppercase text-apex-amber">
                  {l.heirloom!.type}
                </div>
                <div className="font-display text-2xl sm:text-3xl">
                  {l.heirloom!.name}
                </div>
                <div className="text-xs text-apex-mute mt-0.5">
                  {l.name} / {l.title}
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-apex-fg/85 leading-relaxed">
                {l.heirloom!.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-xs text-apex-mute">
        Coming soon: heirloom sets for Mad Maggie, Newcastle, Vantage, Catalyst,
        Ballistic, Conduit, Alter, and Sparrow.
      </div>
    </section>
  );
}
