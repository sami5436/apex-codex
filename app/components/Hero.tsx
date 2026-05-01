import { legends } from "../data/legends";

export default function Hero() {
  const counts = legends.reduce<Record<string, number>>((acc, l) => {
    acc[l.legendClass] = (acc[l.legendClass] ?? 0) + 1;
    return acc;
  }, {});
  const totalHeirlooms = legends.filter((l) => l.heirloom).length;

  return (
    <header className="relative overflow-hidden">
      <div className="apex-grid-bg absolute inset-0" />
      <div className="relative px-6 pt-10 pb-16 sm:px-10 md:px-14 md:pt-16 md:pb-24 lg:px-20">
        <div className="flex items-center gap-3 text-xs tracking-[0.4em] text-apex-mute font-display uppercase">
          <span className="inline-block size-2 bg-apex-orange clip-tag" />
          Field Manual / v28
          <span className="hidden sm:inline-block ml-auto">
            Stay frosty, Legend.
          </span>
        </div>

        <h1 className="mt-6 font-display font-bold leading-[0.9] text-[clamp(3rem,11vw,9rem)] uppercase">
          <span className="block text-apex-fg">Apex</span>
          <span className="block text-apex-orange -mt-2">Codex</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-apex-mute leading-relaxed">
          Every Legend in the Outlands. Their abilities, their heirlooms, their
          movement. A field manual you can flip through with two thumbs on a
          tablet, or with one hand at the dropship door.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl">
          <Stat label="Legends" value={legends.length} />
          <Stat label="Heirlooms" value={totalHeirlooms} />
          <Stat label="Assault" value={counts.Assault ?? 0} accent="var(--color-class-assault)" />
          <Stat label="Skirmisher" value={counts.Skirmisher ?? 0} accent="var(--color-class-skirmisher)" />
          <Stat label="Recon" value={counts.Recon ?? 0} accent="var(--color-class-recon)" />
          <Stat label="Support / Ctrl" value={(counts.Support ?? 0) + (counts.Controller ?? 0)} accent="var(--color-class-support)" />
        </div>
      </div>
    </header>
  );
}

function Stat({
  label,
  value,
  accent = "var(--color-apex-orange)",
}: {
  label: string;
  value: number;
  accent?: string;
}) {
  return (
    <div
      className="clip-bevel-sm bg-apex-panel/80 backdrop-blur border border-apex-line px-4 py-3"
      style={{ borderColor: "var(--color-apex-line)" }}
    >
      <div
        className="font-display text-3xl sm:text-4xl font-bold"
        style={{ color: accent }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-apex-mute mt-1">
        {label}
      </div>
    </div>
  );
}
