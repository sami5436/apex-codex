"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { classMeta, legends, type Legend, type LegendClass } from "../data/legends";

const CLASS_ORDER: (LegendClass | "All")[] = [
  "All",
  "Assault",
  "Skirmisher",
  "Recon",
  "Support",
  "Controller",
];

export default function LegendsBrowser() {
  const [filter, setFilter] = useState<LegendClass | "All">("All");
  const [selectedId, setSelectedId] = useState<string>(legends[0].id);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return legends
      .filter((l) =>
        filter === "All" ? true : l.legendClass === filter,
      )
      .filter((l) =>
        query.trim()
          ? (l.name + l.realName + l.title)
              .toLowerCase()
              .includes(query.toLowerCase())
          : true,
      );
  }, [filter, query]);

  // If filter hides current selection, snap to first visible legend
  useEffect(() => {
    if (!filtered.find((l) => l.id === selectedId) && filtered[0]) {
      setSelectedId(filtered[0].id);
    }
  }, [filtered, selectedId]);

  const selected =
    legends.find((l) => l.id === selectedId) ?? legends[0];

  return (
    <section
      id="legends"
      className="relative px-6 sm:px-10 md:px-14 lg:px-20 py-12 md:py-16"
    >
      <SectionHeading
        eyebrow="01 / Roster"
        title="The Legends"
        sub="Tap a Legend to read their dossier. Filter by class to find your role."
      />

      {/* Class filter + search */}
      <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4">
        <div
          className="flex gap-2 overflow-x-auto no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 snap-x"
          role="tablist"
        >
          {CLASS_ORDER.map((c) => {
            const isActive = filter === c;
            const accent =
              c === "All"
                ? "var(--color-apex-orange)"
                : classMeta[c].color;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={isActive}
                onClick={() => setFilter(c)}
                className={`shrink-0 snap-start clip-bevel-sm px-5 py-3 text-sm font-display uppercase tracking-[0.2em] border transition-colors cursor-pointer hover:scale-touch ${
                  isActive
                    ? "text-apex-bg"
                    : "text-apex-fg/80 hover:text-apex-fg hover:border-apex-orange/50"
                }`}
                style={{
                  background: isActive ? accent : "var(--color-apex-panel)",
                  borderColor: isActive ? accent : "var(--color-apex-line)",
                  minHeight: 44,
                }}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="relative md:ml-auto">
          <input
            type="search"
            placeholder="Search legends..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="clip-bevel-sm w-full md:w-72 bg-apex-panel border border-apex-line px-4 py-3 text-sm placeholder:text-apex-mute focus:outline-none focus:border-apex-orange"
            style={{ minHeight: 44 }}
          />
        </div>
      </div>

      {/* Layout: grid + sticky detail (desktop / iPad landscape) */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_1fr] xl:grid-cols-[1.1fr_1fr]">
        <div
          className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 content-start"
          role="tablist"
          aria-label="Legends grid"
        >
          {filtered.map((legend, i) => (
            <LegendCard
              key={legend.id}
              legend={legend}
              selected={legend.id === selectedId}
              onClick={() => setSelectedId(legend.id)}
              index={i}
            />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-10 text-center text-apex-mute">
              No legends match that filter.
            </div>
          )}
        </div>

        <div className="lg:sticky lg:top-6 self-start">
          <LegendDetail legend={selected} />
        </div>
      </div>
    </section>
  );
}

function LegendCard({
  legend,
  selected,
  onClick,
  index,
}: {
  legend: Legend;
  selected: boolean;
  onClick: () => void;
  index: number;
}) {
  const cls = classMeta[legend.legendClass];
  return (
    <button
      onClick={onClick}
      className={`group relative clip-bevel-md text-left overflow-hidden border transition-all duration-300 cursor-pointer hover:scale-touch hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_var(--accent)] fade-up ${
        selected ? "glow-edge" : ""
      }`}
      style={{
        ["--accent" as string]: legend.accent,
        animationDelay: `${Math.min(index * 30, 400)}ms`,
        background: "var(--color-apex-panel)",
        borderColor: selected ? legend.accent : "var(--color-apex-line)",
        minHeight: 220,
      }}
      aria-pressed={selected}
    >
      <div className="relative aspect-[3/4]">
        <Image
          src={legend.image}
          alt={legend.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={index < 4}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/0" />
        <div
          className="absolute top-2 left-2 clip-tag px-2.5 py-1 text-[10px] font-display tracking-[0.25em] uppercase"
          style={{ background: cls.color, color: "#08080c" }}
        >
          {legend.legendClass}
        </div>
        {selected && (
          <div className="absolute top-2 right-2 size-2 rounded-full bg-apex-orange shadow-[0_0_12px_var(--color-apex-orange)]" />
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-3">
        <div className="font-display text-xl font-semibold leading-none">
          {legend.name}
        </div>
        <div className="text-[10px] tracking-[0.25em] uppercase text-apex-mute mt-1.5">
          {legend.title}
        </div>
      </div>
    </button>
  );
}

function LegendDetail({ legend }: { legend: Legend }) {
  const cls = classMeta[legend.legendClass];
  return (
    <article
      key={legend.id}
      className="fade-up clip-bevel-md border border-apex-line bg-apex-panel relative overflow-hidden"
      style={{ ["--accent" as string]: legend.accent }}
    >
      <div className="relative h-56 sm:h-72 md:h-80">
        <Image
          src={legend.image}
          alt={legend.name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-apex-panel via-apex-panel/40 to-transparent" />
        <div
          className="absolute top-4 left-4 clip-tag px-3 py-1.5 text-[11px] font-display tracking-[0.3em] uppercase"
          style={{ background: cls.color, color: "#08080c" }}
        >
          {legend.legendClass}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-[11px] tracking-[0.35em] uppercase text-apex-mute">
            {legend.title}
          </div>
          <h3
            className="font-display font-bold uppercase leading-[0.9] text-5xl sm:text-6xl"
            style={{ color: legend.accent }}
          >
            {legend.name}
          </h3>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        <dl className="grid grid-cols-3 gap-3 text-xs">
          <Meta label="Real name" value={legend.realName} />
          <Meta label="Homeworld" value={legend.homeworld} />
          <Meta label="Age" value={String(legend.age)} />
        </dl>

        <p className="text-sm leading-relaxed text-apex-fg/85">{legend.bio}</p>

        <div className="space-y-3">
          <Ability
            kind="Tactical"
            name={legend.tactical.name}
            desc={legend.tactical.description}
            accent={legend.accent}
          />
          <Ability
            kind="Passive"
            name={legend.passive.name}
            desc={legend.passive.description}
            accent={legend.accent}
          />
          <Ability
            kind="Ultimate"
            name={legend.ultimate.name}
            desc={legend.ultimate.description}
            accent={legend.accent}
          />
        </div>

        <div className="border-t border-apex-line pt-4">
          <div className="text-[10px] tracking-[0.3em] uppercase text-apex-mute mb-2">
            Class perk
          </div>
          <p className="text-sm text-apex-fg/85">{cls.perk}</p>
        </div>

        {legend.heirloom ? (
          <div
            className="clip-bevel-sm p-4 border"
            style={{
              borderColor: legend.accent,
              background:
                "linear-gradient(135deg, rgba(255,176,32,0.08), rgba(255,91,31,0.05))",
            }}
          >
            <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-apex-amber">
              <span
                className="size-1.5 rounded-full"
                style={{ background: "var(--color-apex-amber)" }}
              />
              Heirloom / Mythic
            </div>
            <div className="mt-1 font-display text-2xl">
              {legend.heirloom.name}
            </div>
            <div className="text-xs text-apex-mute uppercase tracking-[0.2em] mt-0.5">
              {legend.heirloom.type}
            </div>
            <p className="text-sm mt-2 text-apex-fg/85">
              {legend.heirloom.description}
            </p>
          </div>
        ) : (
          <div className="text-xs text-apex-mute italic border border-dashed border-apex-line p-3">
            No heirloom yet for {legend.name}. Keep cracking those packs.
          </div>
        )}
      </div>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] tracking-[0.25em] uppercase text-apex-mute">
        {label}
      </dt>
      <dd className="mt-1 font-display text-sm sm:text-base">{value}</dd>
    </div>
  );
}

function Ability({
  kind,
  name,
  desc,
  accent,
}: {
  kind: "Tactical" | "Passive" | "Ultimate";
  name: string;
  desc: string;
  accent: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="shrink-0 mt-0.5">
        <KindBadge kind={kind} accent={accent} />
      </div>
      <div>
        <div className="font-display text-base sm:text-lg leading-tight">
          {name}
        </div>
        <p className="text-sm text-apex-mute mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function KindBadge({
  kind,
  accent,
}: {
  kind: "Tactical" | "Passive" | "Ultimate";
  accent: string;
}) {
  const isUlt = kind === "Ultimate";
  return (
    <div
      className={`size-12 sm:size-14 grid place-items-center clip-bevel-sm border`}
      style={{
        borderColor: isUlt ? accent : "var(--color-apex-line)",
        background: isUlt ? `${accent}22` : "var(--color-apex-panel-2)",
      }}
      aria-label={kind}
    >
      <KindGlyph kind={kind} color={accent} />
    </div>
  );
}

function KindGlyph({
  kind,
  color,
}: {
  kind: "Tactical" | "Passive" | "Ultimate";
  color: string;
}) {
  if (kind === "Tactical") {
    return (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke={color}
          strokeWidth="1.5"
          opacity="0.6"
        />
        <circle cx="12" cy="12" r="2.5" fill={color} />
        <path
          d="M12 3v3M12 18v3M3 12h3M18 12h3"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "Passive") {
    return (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
        <path
          d="M12 3l8 4v6c0 4.5-3.5 7.5-8 8-4.5-.5-8-3.5-8-8V7l8-4z"
          stroke={color}
          strokeWidth="1.5"
          opacity="0.7"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="size-7" fill={color} aria-hidden>
      <path d="M13 2L3 14h7l-1 8 11-13h-7l1-7z" />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-xs tracking-[0.4em] uppercase text-apex-orange font-display">
        {eyebrow}
      </div>
      <h2 className="title-stripe pl-7 font-display text-4xl sm:text-5xl md:text-6xl uppercase font-bold leading-[0.95]">
        {title}
      </h2>
      {sub && (
        <p className="text-apex-mute max-w-2xl mt-1 text-sm sm:text-base">
          {sub}
        </p>
      )}
    </div>
  );
}
