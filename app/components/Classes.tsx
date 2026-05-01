import { classMeta, legends, type LegendClass } from "../data/legends";

const ORDER: LegendClass[] = [
  "Assault",
  "Skirmisher",
  "Recon",
  "Support",
  "Controller",
];

export default function Classes() {
  return (
    <section
      id="classes"
      className="relative px-6 sm:px-10 md:px-14 lg:px-20 py-12 md:py-16 border-t border-apex-line"
    >
      <div className="flex flex-col gap-2">
        <div className="text-xs tracking-[0.4em] uppercase text-apex-orange font-display">
          04 / Doctrine
        </div>
        <h2 className="title-stripe pl-7 font-display text-4xl sm:text-5xl md:text-6xl uppercase font-bold leading-[0.95]">
          Classes
        </h2>
        <p className="text-apex-mute max-w-2xl mt-1 text-sm sm:text-base">
          Five class identities, each with a unique perk and a unique problem to
          solve. Pick the one that fits how you breathe between gunfights.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {ORDER.map((c) => {
          const meta = classMeta[c];
          const list = legends.filter((l) => l.legendClass === c);
          return (
            <article
              key={c}
              className="relative clip-bevel-md border border-apex-line bg-apex-panel p-5 flex flex-col gap-3 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_var(--accent)]"
              style={{ ["--accent" as string]: meta.color, borderColor: "var(--color-apex-line)" }}
            >
              <div
                className="absolute right-[-30px] top-[-30px] size-32 rounded-full blur-2xl opacity-40"
                style={{ background: meta.color }}
                aria-hidden
              />
              <div className="relative">
                <div
                  className="text-[10px] tracking-[0.35em] uppercase font-display"
                  style={{ color: meta.color }}
                >
                  Class {String(ORDER.indexOf(c) + 1).padStart(2, "0")}
                </div>
                <div
                  className="font-display text-3xl leading-none mt-1"
                  style={{ color: meta.color }}
                >
                  {c}
                </div>
              </div>
              <p className="text-sm text-apex-fg/85 leading-relaxed">
                {meta.tagline}
              </p>
              <div className="border-t border-apex-line pt-3">
                <div className="text-[10px] tracking-[0.3em] uppercase text-apex-mute mb-1">
                  Class perk
                </div>
                <p className="text-xs text-apex-fg/80 leading-relaxed">
                  {meta.perk}
                </p>
              </div>
              <div className="mt-auto pt-2 flex flex-wrap gap-1.5">
                {list.map((l) => (
                  <span
                    key={l.id}
                    className="text-[10px] tracking-[0.15em] uppercase px-2 py-1 border border-apex-line bg-apex-panel-2"
                  >
                    {l.name}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
