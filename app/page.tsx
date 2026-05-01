import Hero from "./components/Hero";
import LegendsBrowser from "./components/LegendsBrowser";
import Heirlooms from "./components/Heirlooms";
import Movement from "./components/Movement";
import Classes from "./components/Classes";

export default function Home() {
  return (
    <main className="relative">
      <TopNav />
      <Hero />
      <LegendsBrowser />
      <Classes />
      <Heirlooms />
      <Movement />
      <Footer />
    </main>
  );
}

function TopNav() {
  const links = [
    { href: "#legends", label: "Roster" },
    { href: "#classes", label: "Classes" },
    { href: "#heirlooms", label: "Heirlooms" },
    { href: "#movement", label: "Movement" },
  ];
  return (
    <nav className="sticky top-0 z-30 backdrop-blur-md bg-apex-bg/70 border-b border-apex-line">
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 h-14 flex items-center gap-3">
        <a href="#" className="flex items-center gap-2 font-display cursor-pointer">
          <span className="size-3 bg-apex-orange clip-tag" />
          <span className="text-sm tracking-[0.4em] uppercase font-semibold">
            Apex / Codex
          </span>
        </a>
        <div className="ml-auto flex items-center gap-1 sm:gap-3 overflow-x-auto no-scrollbar">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-xs sm:text-sm tracking-[0.25em] uppercase text-apex-mute hover:text-apex-fg transition-colors cursor-pointer"
              style={{ minHeight: 44, display: "inline-flex", alignItems: "center" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-apex-line px-6 sm:px-10 md:px-14 lg:px-20 py-10 text-xs text-apex-mute">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="font-display tracking-[0.35em] uppercase">
          Apex / Codex
        </div>
        <div className="sm:ml-auto">
          A fan-made field manual. Apex Legends, Legend names and likenesses are
          property of Respawn Entertainment and Electronic Arts. Imagery sourced
          from official EA channels.
        </div>
      </div>
    </footer>
  );
}
