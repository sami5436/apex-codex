const techniques = [
  {
    name: "Bunny Hop Heal",
    diff: "Beginner",
    desc: "Hold heal, jump, then strafe-jump to keep horizontal momentum while syringes tick. Saves seconds in an open zone push.",
    keys: ["Heal", "Jump", "Strafe"],
  },
  {
    name: "Tap Strafe",
    diff: "Intermediate",
    desc: "Bind scroll wheel to forward. After a slide-jump, scroll-flick to redirect mid-air at sharp angles. Keyboard only.",
    keys: ["Slide", "Jump", "Scroll Forward"],
  },
  {
    name: "Wall Bounce",
    diff: "Intermediate",
    desc: "Sprint, jump into a wall at an angle, jump again the moment you touch. Carries momentum and breaks aim.",
    keys: ["Sprint", "Jump", "Jump"],
  },
  {
    name: "Mantle Jump",
    diff: "Beginner",
    desc: "Jump, then hold jump again as you grab a ledge. Boosts you up and over without losing tempo.",
    keys: ["Jump", "Mantle", "Jump"],
  },
  {
    name: "Super Glide",
    diff: "Advanced",
    desc: "At the top of a mantle, press jump and crouch within a single frame to launch at full speed across a roof.",
    keys: ["Mantle Top", "Jump+Crouch (1f)"],
  },
  {
    name: "Zip Cancel",
    diff: "Advanced",
    desc: "Detach a zipline mid-ride and immediately re-grab to pump speed. Pathfinder mains live here.",
    keys: ["Zip", "Detach", "Re-grab"],
  },
];

const diffColor: Record<string, string> = {
  Beginner: "var(--color-class-recon)",
  Intermediate: "var(--color-class-skirmisher)",
  Advanced: "var(--color-apex-orange)",
};

export default function Movement() {
  return (
    <section
      id="movement"
      className="relative px-6 sm:px-10 md:px-14 lg:px-20 py-12 md:py-16 border-t border-apex-line"
    >
      <div className="flex flex-col gap-2">
        <div className="text-xs tracking-[0.4em] uppercase text-apex-orange font-display">
          03 / Tempo
        </div>
        <h2 className="title-stripe pl-7 font-display text-4xl sm:text-5xl md:text-6xl uppercase font-bold leading-[0.95]">
          Movement
        </h2>
        <p className="text-apex-mute max-w-2xl mt-1 text-sm sm:text-base">
          The Outlands reward speed. Six techniques to keep enemies one step
          behind, ranked from drop-day basics to controller-burning tech.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {techniques.map((t, i) => (
          <div
            key={t.name}
            className="clip-bevel-md border border-apex-line bg-apex-panel p-5 fade-up flex flex-col gap-3 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-apex-orange/60 hover:shadow-[0_18px_40px_-20px_var(--color-apex-orange)]"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center gap-3">
              <div
                className="font-display font-bold text-3xl leading-none"
                style={{ color: diffColor[t.diff] }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <div className="font-display text-2xl leading-tight">
                  {t.name}
                </div>
                <div
                  className="text-[10px] tracking-[0.3em] uppercase mt-0.5"
                  style={{ color: diffColor[t.diff] }}
                >
                  {t.diff}
                </div>
              </div>
            </div>

            <p className="text-sm text-apex-fg/85 leading-relaxed">{t.desc}</p>

            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {t.keys.map((k) => (
                <span
                  key={k}
                  className="text-[10px] tracking-[0.2em] uppercase px-2 py-1 border border-apex-line bg-apex-panel-2 clip-tag"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
