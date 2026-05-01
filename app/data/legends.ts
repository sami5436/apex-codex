export type LegendClass =
  | "Assault"
  | "Skirmisher"
  | "Recon"
  | "Support"
  | "Controller";

export type Legend = {
  id: string;
  name: string;
  realName: string;
  title: string;
  legendClass: LegendClass;
  homeworld: string;
  age: number | string;
  image: string;
  accent: string;
  tactical: { name: string; description: string };
  passive: { name: string; description: string };
  ultimate: { name: string; description: string };
  heirloom: { name: string; type: string; description: string } | null;
  bio: string;
};

export const classMeta: Record<
  LegendClass,
  { tagline: string; perk: string; color: string }
> = {
  Assault: {
    tagline: "Mid-range duelists who push fights and carry extra ammo.",
    perk: "Open hidden compartments in Weapon Supply Bins. Carry an extra stack of ammo per slot.",
    color: "#ef4444",
  },
  Skirmisher: {
    tagline: "Highly mobile flankers built for repositioning.",
    perk: "Spot Care Package contents from afar and identify the rarest item inside.",
    color: "#f59e0b",
  },
  Recon: {
    tagline: "Eyes of the squad. Reveal enemies and predict the ring.",
    perk: "Use Survey Beacons to scan nearby squads and reveal their position on the minimap.",
    color: "#22d3ee",
  },
  Support: {
    tagline: "Keep the team alive with revives, shields, and resources.",
    perk: "Open Support Bins, craft mobile respawn beacons, and revive faster.",
    color: "#a78bfa",
  },
  Controller: {
    tagline: "Lock down zones and deny enemy paths.",
    perk: "Read the next ring at Ring Consoles. Bonus shield and faster shield regen.",
    color: "#34d399",
  },
};

export const legends: Legend[] = [
  {
    id: "wraith",
    name: "Wraith",
    realName: "Renee Hope Blasey",
    title: "Interdimensional Skirmisher",
    legendClass: "Skirmisher",
    homeworld: "Typhon",
    age: 32,
    image:
      "https://drop-assets.ea.com/images/4J0UloeNHP6KD21QNrgMcj/cec0cb8949bb3cfe2149a6ca7c2d8a5d/apex-grid-tile-legends-Wraith.jpg",
    accent: "#7c3aed",
    tactical: {
      name: "Into the Void",
      description:
        "Reposition quickly through the safety of the void space, avoiding all damage.",
    },
    passive: {
      name: "Voices from the Void",
      description:
        "A voice warns you when danger approaches. As long as it's on your side.",
    },
    ultimate: {
      name: "Dimensional Rift",
      description:
        "Link two locations with portals for 60 seconds, allowing your team to use them.",
    },
    heirloom: {
      name: "Hope's Dawn",
      type: "Kunai",
      description: "A black kunai with a glowing edge that warps space with each strike.",
    },
    bio: "A former scientist who volunteered for IMC phase tech trials and lost her memories. The voids speak to her now, and she listens.",
  },
  {
    id: "bangalore",
    name: "Bangalore",
    realName: "Anita Williams",
    title: "Professional Soldier",
    legendClass: "Assault",
    homeworld: "Gridiron",
    age: 39,
    image:
      "https://drop-assets.ea.com/images/59uaaKwAaQVFS2Z5o6JPoM/788687f62d13fdfd3afd71639dcea271/apex-grid-tile-legends-Bangalore.jpg",
    accent: "#84cc16",
    tactical: {
      name: "Smoke Launcher",
      description: "Fires a high-velocity smoke canister that explodes into a smoke wall.",
    },
    passive: {
      name: "Double Time",
      description: "Taking fire while sprinting briefly increases your move speed.",
    },
    ultimate: {
      name: "Rolling Thunder",
      description: "Calls in an artillery strike that slowly creeps across the landscape.",
    },
    heirloom: {
      name: "Cold Steel",
      type: "Pilot's Knife",
      description: "A standard-issue pilot blade refinished with gold. Loyalty cuts deep.",
    },
    bio: "IMC frontline veteran stranded in the Outlands after the Battle of Gridiron. Fights to fund the search for her brother Jackson.",
  },
  {
    id: "bloodhound",
    name: "Bloodhound",
    realName: "Blasey Hjatlmar (alias)",
    title: "Technological Tracker",
    legendClass: "Recon",
    homeworld: "Talos",
    age: "Unknown",
    image:
      "https://drop-assets.ea.com/images/57Lw4lAodWsiNYTO1zvT6I/ec740d776b1d24172f5c9ed65f6d71af/apex-grid-tile-legends-Bloodhound.jpg",
    accent: "#dc2626",
    tactical: {
      name: "Eye of the Allfather",
      description: "Briefly reveals enemies, traps, and clues in structures ahead of you.",
    },
    passive: {
      name: "Tracker",
      description: "See the tracks left behind by your foes.",
    },
    ultimate: {
      name: "Beast of the Hunt",
      description:
        "Heightens your senses, granting speed and revealing recently used tracks in red.",
    },
    heirloom: {
      name: "Raven's Bite",
      type: "Axe",
      description: "An axe forged with raven motifs and a glowing red edge.",
    },
    bio: "A masked technological tracker from Talos who follows the path of the Allfather. Their gender and identity are not for the arena to know.",
  },
  {
    id: "gibraltar",
    name: "Gibraltar",
    realName: "Makoa Gibraltar",
    title: "Shielded Fortress",
    legendClass: "Support",
    homeworld: "Solace",
    age: 32,
    image:
      "https://drop-assets.ea.com/images/2uZ8i6QAJcG0twyVOIjC5S/80185d7d5cd8373684bf268c13f07fe0/apex-grid-tile-legends-Gibraltar.jpg",
    accent: "#0ea5e9",
    tactical: {
      name: "Dome of Protection",
      description: "Throws down a dome shield that blocks attacks for 12 seconds.",
    },
    passive: {
      name: "Gun Shield",
      description: "Aiming down sights deploys a gun shield that blocks incoming fire.",
    },
    ultimate: {
      name: "Defensive Bombardment",
      description: "Calls in a concentrated mortar strike on a marked position.",
    },
    heirloom: {
      name: "War Club",
      type: "Hatchet",
      description: "A koa-wood hatchet bearing his family's mark, glowing with island fire.",
    },
    bio: "A Samoan island rescue worker who joined the Apex Games to honor his father and protect his crew.",
  },
  {
    id: "lifeline",
    name: "Lifeline",
    realName: "Ajay Che",
    title: "Combat Medic",
    legendClass: "Support",
    homeworld: "Psamathe",
    age: 25,
    image:
      "https://drop-assets.ea.com/images/2CB26KqVrs5AahlXuSCSgl/c1b815b029a81b654a1ea34497cf8926/apex-grid-tile-legends-Lifeline.jpg",
    accent: "#f43f5e",
    tactical: {
      name: "D.O.C. Heal Drone",
      description: "Calls D.O.C. to a target location to automatically heal nearby teammates.",
    },
    passive: {
      name: "Combat Medic",
      description:
        "Faster heals from healing items. D.O.C. can revive teammates while you keep fighting.",
    },
    ultimate: {
      name: "Care Package",
      description: "Calls in a drop pod full of high-tier defensive gear.",
    },
    heirloom: {
      name: "Shock Sticks",
      type: "Drumsticks",
      description: "Modded drumsticks that double as defibrillators. Fast medicine, faster beats.",
    },
    bio: "Daughter of Frontier War profiteers, she rebels against her family by funding humanitarian work with arena winnings.",
  },
  {
    id: "pathfinder",
    name: "Pathfinder",
    realName: "MRVN unit (creator unknown)",
    title: "Forward Scout",
    legendClass: "Skirmisher",
    homeworld: "Unknown",
    age: "Unknown",
    image:
      "https://drop-assets.ea.com/images/6zanV6x46IQntfmXVJuxWs/08090312744a04dc243b138d0e8fe72a/apex-grid-tile-legends-Pathfinder.jpg",
    accent: "#3b82f6",
    tactical: {
      name: "Grappling Hook",
      description: "Grapple to get to out-of-reach places quickly.",
    },
    passive: {
      name: "Insider Knowledge",
      description: "Scanning a Survey Beacon reduces the cooldown of your Ultimate.",
    },
    ultimate: {
      name: "Zipline Gun",
      description: "Creates a zipline for everyone to use.",
    },
    heirloom: {
      name: "Boxing Gloves",
      type: "Gloves",
      description: "Cheery blue boxing gloves with an emoji-faced LED display.",
    },
    bio: "A friendly MRVN with no memory of his creator, joining the Apex Games to find out who built him.",
  },
  {
    id: "mirage",
    name: "Mirage",
    realName: "Elliott Witt",
    title: "Holographic Trickster",
    legendClass: "Support",
    homeworld: "Solace",
    age: 32,
    image:
      "https://drop-assets.ea.com/images/JVVgPeCz9D5hCuzdltvTW/8de2e63ef240ab578ff2cab7905918c9/apex-grid-tile-legends-Mirage.jpg",
    accent: "#fbbf24",
    tactical: {
      name: "Psyche Out",
      description: "Sends out a controllable holographic decoy.",
    },
    passive: {
      name: "Now You See Me...",
      description: "Automatically cloak when reviving teammates or using respawn beacons.",
    },
    ultimate: {
      name: "Life of the Party",
      description: "Deploys a team of decoys that mimic your movements to confuse enemies.",
    },
    heirloom: {
      name: "Too Much Witt",
      type: "Trophy",
      description: "A golden statuette of Mirage himself for 'Best Competitor in a Battle Royale'.",
    },
    bio: "Class clown of the Apex Games, raised by a mother with early-onset dementia. Holograms run in the family.",
  },
  {
    id: "octane",
    name: "Octane",
    realName: "Octavio Silva",
    title: "High-Speed Daredevil",
    legendClass: "Skirmisher",
    homeworld: "Psamathe",
    age: 24,
    image:
      "https://drop-assets.ea.com/images/15R4OhvkVEF8UgnM2x6iGO/cbfbadf786010c548a900b7cb2cc5960/apex-grid-tile-legends-Octane.jpg",
    accent: "#22c55e",
    tactical: {
      name: "Stim",
      description: "Move 30% faster for 6 seconds. Costs health to use.",
    },
    passive: {
      name: "Swift Mend",
      description: "Automatically restores health over time.",
    },
    ultimate: {
      name: "Launch Pad",
      description:
        "Deployable jump pad that catapults users high into the air. Double jump for extra distance.",
    },
    heirloom: {
      name: "Butterfly Knife",
      type: "Balisong",
      description: "Filled with Octane's signature Stim. Don't try this at home.",
    },
    bio: "A thrill-seeking heir who blew his legs off with a grenade for fun. Speed is the only thing that makes him feel alive.",
  },
  {
    id: "caustic",
    name: "Caustic",
    realName: "Alexander Nox",
    title: "Toxic Trapper",
    legendClass: "Controller",
    homeworld: "Gaea",
    age: 50,
    image:
      "https://drop-assets.ea.com/images/30vsaqTmflB9MEo7GTcgXB/96eb6e78a15a275cd7e85040986985f8/apex-grid-tile-legends-Caustic.jpg",
    accent: "#65a30d",
    tactical: {
      name: "Nox Gas Trap",
      description: "Drop canisters that release deadly Nox gas when shot or triggered.",
    },
    passive: {
      name: "Nox Vision",
      description: "Gain threat vision on enemies in your gas.",
    },
    ultimate: {
      name: "Nox Gas Grenade",
      description: "Blanket a large area in Nox gas.",
    },
    heirloom: {
      name: "Death Hammer",
      type: "Hammer",
      description: "A two-handed mallet topped with a skull that vents Nox gas.",
    },
    bio: "A brilliant chemist who poisoned his colleagues to study suffering. The Apex Games are his lab.",
  },
  {
    id: "wattson",
    name: "Wattson",
    realName: "Natalie Paquette",
    title: "Static Defender",
    legendClass: "Controller",
    homeworld: "Solace",
    age: 23,
    image:
      "https://drop-assets.ea.com/images/35A7Ebi3AQ5jtXhZlXcgfm/ddc8902fd90e0cf669e9ce4182ab8e1f/apex-grid-tile-legends-Wattson.jpg",
    accent: "#fde047",
    tactical: {
      name: "Perimeter Security",
      description: "Place electrified fences that damage and slow enemies.",
    },
    passive: {
      name: "Spark of Genius",
      description: "Ultimate Accelerants fully charge your Ultimate. Heals shields slowly over time.",
    },
    ultimate: {
      name: "Interception Pylon",
      description: "Deploys a pylon that destroys ordnance and recharges shields.",
    },
    heirloom: {
      name: "Energy Reader",
      type: "Diagnostic Device",
      description: "Her father's tool, lovingly modded to read voltage and crack skulls.",
    },
    bio: "Daughter of the engineer who designed the original Ring. She still talks to him through her electric fences.",
  },
  {
    id: "crypto",
    name: "Crypto",
    realName: "Tae Joon Park",
    title: "Surveillance Expert",
    legendClass: "Recon",
    homeworld: "Gaea",
    age: 31,
    image:
      "https://drop-assets.ea.com/images/xnWqynrhqueemWjVw44E9/a39d43a0bf4d58a040f3d1a51815f899/apex-grid-tile-legends-Crypto.jpg",
    accent: "#06b6d4",
    tactical: {
      name: "Surveillance Drone",
      description: "Deploy an aerial camera drone that lasts 30 seconds.",
    },
    passive: {
      name: "Neurolink",
      description: "What the drone detects, you and your team detect within 30 meters.",
    },
    ultimate: {
      name: "Drone EMP",
      description:
        "Charge an EMP from your drone that damages shields, slows, and disables traps.",
    },
    heirloom: {
      name: "Biwon Blade",
      type: "Korean Jikdo",
      description: "A collapsible high-tech blade. Compact justice for compact lives.",
    },
    bio: "A genius hacker framed for murder. He hides in the arena, planning revenge against the Syndicate.",
  },
  {
    id: "revenant",
    name: "Revenant",
    realName: "Kaleb Cross",
    title: "Synthetic Nightmare",
    legendClass: "Skirmisher",
    homeworld: "Solace",
    age: 313,
    image:
      "https://drop-assets.ea.com/images/40px8AHVKdZDFzG0v2IHSl/ae12ef0b2b3aa82d113d06f78885b345/apex-grid-tile-legends-Revenant.jpg",
    accent: "#9333ea",
    tactical: {
      name: "Shadow Pounce",
      description: "Lunge forward a great distance. Hold to charge for more range.",
    },
    passive: {
      name: "Stalker",
      description: "You crouch walk faster and can climb walls higher.",
    },
    ultimate: {
      name: "Forged Shadows",
      description: "Cloak your body in shadow armor that absorbs damage and regenerates over time.",
    },
    heirloom: {
      name: "Dead Man's Curve",
      type: "Scythe",
      description: "Two-handed scythe with an extendable glowing blade. Reaping personified.",
    },
    bio: "A simulacrum hitman who learned he is no longer human. He hunts the Hammond men who made him this way.",
  },
  {
    id: "rampart",
    name: "Rampart",
    realName: "Ramya Parekh",
    title: "Amped Modder",
    legendClass: "Controller",
    homeworld: "Gaea",
    age: 21,
    image:
      "https://drop-assets.ea.com/images/21QdZAxCn7qZWCLNPR4X3C/ec7c5e4cbf7a2aad48702b4fb4103878/apex-grid-tile-legends-Rampart.jpg",
    accent: "#fb923c",
    tactical: {
      name: "Amped Cover",
      description: "Build a wall of cover that blocks bullets below and amps your shots above.",
    },
    passive: {
      name: "Modded Loader",
      description: "Larger magazines and faster reloads for LMGs and miniguns.",
    },
    ultimate: {
      name: "Emplaced Minigun 'Sheila'",
      description: "Wield or place 'Sheila', a mounted minigun with a huge magazine.",
    },
    heirloom: {
      name: "Problem Solver",
      type: "Wrench",
      description: "Electric wrench that doubles as a gumball dispenser. Sweet justice.",
    },
    bio: "A hot-headed Mumbai modshop owner forced to flee her home. She'll mod anything that shoots.",
  },
  {
    id: "horizon",
    name: "Horizon",
    realName: "Dr. Mary Somers",
    title: "Gravitational Manipulator",
    legendClass: "Skirmisher",
    homeworld: "Psamathe",
    age: 137,
    image:
      "https://drop-assets.ea.com/images/3wEl6hnRZRfE0kpIhHe16Y/3dc98b90c70516c9a3ee563586c28d63/apex-grid-tile-legends-Horizon.jpg",
    accent: "#f472b6",
    tactical: {
      name: "Gravity Lift",
      description: "Reverses gravity and boosts you and your teammates upward.",
    },
    passive: {
      name: "Spacewalk",
      description: "Reduced fall stagger and increased air control.",
    },
    ultimate: {
      name: "Black Hole",
      description:
        "Deploys NEWT to create a singularity that pulls in nearby enemies and damages them.",
    },
    heirloom: {
      name: "Gravity Maw",
      type: "Reaper",
      description: "A sleek reaper-style melee carved with stars. Time bends, but love endures.",
    },
    bio: "Scottish astrophysicist trapped near a black hole for 87 years. She lost her son to time, not death.",
  },
  {
    id: "fuse",
    name: "Fuse",
    realName: "Walter Fitzroy",
    title: "Bombastic Explosives Expert",
    legendClass: "Assault",
    homeworld: "Salvo",
    age: 54,
    image:
      "https://drop-assets.ea.com/images/1ed5jzmnEE2F3VYADHiAb1/e2a5e038f7fe26d8cd1b6eab882e5247/apex-grid-tile-legends-Fuse.jpg",
    accent: "#ea580c",
    tactical: {
      name: "Knuckle Cluster",
      description: "Launch a cluster bomb that releases concussive grenades.",
    },
    passive: {
      name: "Grenadier",
      description: "Stack an extra grenade per inventory slot. Throw further and faster.",
    },
    ultimate: {
      name: "The Motherlode",
      description: "Fire a long-range bombardment that ignites a ring of fire.",
    },
    heirloom: {
      name: "Razor's Edge",
      type: "Electric Guitar",
      description: "A flaming axe-guitar wired with blades. Crank it to eleven.",
    },
    bio: "A one-armed Salvonian salt-of-the-earth merc. He brought the Apex Games to his home world. Things got loud.",
  },
  {
    id: "valkyrie",
    name: "Valkyrie",
    realName: "Kairi Imahara",
    title: "Winged Avenger",
    legendClass: "Recon",
    homeworld: "Angelia",
    age: 30,
    image:
      "https://drop-assets.ea.com/images/4FPEvAK1WOqJbMeQhaaGkq/cf3a24ed788f219b79974f20c1ef84f8/apex-grid-tile-legends-Valkyrie.jpg",
    accent: "#0284c7",
    tactical: {
      name: "Missile Swarm",
      description: "Launch a swarm of mini-rockets that damage and stun.",
    },
    passive: {
      name: "VTOL Jets",
      description: "Press jump while in the air to engage your jet pack.",
    },
    ultimate: {
      name: "Skyward Dive",
      description: "Press once to prepare. Press again to launch your team into the air to skydive.",
    },
    heirloom: {
      name: "Suzaku",
      type: "Yari Spear",
      description: "A spear shaped from Viper's helmet. Vengeance, at last.",
    },
    bio: "Daughter of the Apex Predator known as Viper. She wears her father's wings to fly above his shadow.",
  },
  {
    id: "seer",
    name: "Seer",
    realName: "Obi Edolasim",
    title: "Ambush Artist",
    legendClass: "Recon",
    homeworld: "Boreas",
    age: 28,
    image:
      "https://drop-assets.ea.com/images/4Lv7MVV4qMAK4elah1iZoz/10466b756099f26a00aff51cf23bd2f0/apex-grid-tile-legends-Seer.jpg",
    accent: "#10b981",
    tactical: {
      name: "Focus of Attention",
      description: "Send out micro-drones that briefly interrupt and reveal enemies.",
    },
    passive: {
      name: "Heart Seeker",
      description: "Hear and visualize the heartbeats of nearby enemies while aiming.",
    },
    ultimate: {
      name: "Exhibit",
      description:
        "Create a sphere of micro-drones that reveals moving and firing enemies inside.",
    },
    heirloom: {
      name: "Showstoppers",
      type: "Sickles",
      description: "High-tech sickles with built-in micro-drones. Cut the act.",
    },
    bio: "A celebrity tracker born under a black moon. The Outlands worship his eye, but his mother fears it.",
  },
  {
    id: "ash",
    name: "Ash",
    realName: "Dr. Ashleigh Reid",
    title: "Incisive Instigator",
    legendClass: "Assault",
    homeworld: "Olympus",
    age: 121,
    image:
      "https://drop-assets.ea.com/images/4WVk1SMnlzgjk2E3T7f7HC/2db236ad12e23d7a953fa5278b641d5d/apex-grid-tile-legends-Ash.jpg",
    accent: "#be123c",
    tactical: {
      name: "Arc Snare",
      description: "Throw a spinning snare that damages and tethers the first enemy who gets close.",
    },
    passive: {
      name: "Marked for Death",
      description: "Marks the location of recent kills. Mark survivors of nearby deathboxes.",
    },
    ultimate: {
      name: "Phase Breach",
      description: "Tear open a one-way portal to a targeted location.",
    },
    heirloom: {
      name: "Strongest Link",
      type: "Nunchaku",
      description: "Retractable bladed nunchaku. Old grudges, sharper now.",
    },
    bio: "A simulacrum villain pulled from the IMC's worst experiments. She lives to win, and to remember why.",
  },
  {
    id: "madmaggie",
    name: "Mad Maggie",
    realName: "Margaret Kohere",
    title: "Rebel Warlord",
    legendClass: "Assault",
    homeworld: "Salvo",
    age: 49,
    image:
      "https://drop-assets.ea.com/images/4X6EN7HLCByvyHbSVi5I6C/c881852cfd2ca864f578134212a23d55/apex-grid-tile-legends-MadMaggie.jpg",
    accent: "#e11d48",
    tactical: {
      name: "Riot Drill",
      description: "Drills through walls and burns enemies on the other side.",
    },
    passive: {
      name: "Warlord's Ire",
      description: "See enemies you've damaged briefly through walls. Sprint faster with shotguns.",
    },
    ultimate: {
      name: "Wrecking Ball",
      description:
        "Roll a giant ball that speed-boosts allies and explodes near enemies.",
    },
    heirloom: null,
    bio: "Salvo war chief and Fuse's best friend turned enemy. She's in the games against her will. Mostly.",
  },
  {
    id: "newcastle",
    name: "Newcastle",
    realName: "Jackson Williams",
    title: "Heroic Defender",
    legendClass: "Support",
    homeworld: "Gridiron",
    age: 47,
    image:
      "https://drop-assets.ea.com/images/2aqce7tHWCzjdVxcHl0iaS/dd4e76b7c8b007d5bcde01d4e4cae00f/apex-grid-tile-legends-Newcastle.jpg",
    accent: "#2563eb",
    tactical: {
      name: "Mobile Shield",
      description: "Throw a controllable drone that projects a moving energy shield.",
    },
    passive: {
      name: "Retrieve the Wounded",
      description: "Drag downed allies as you revive them, behind a protective shield.",
    },
    ultimate: {
      name: "Castle Wall",
      description:
        "Leap to an ally or area, slam down, and deploy a fortified wall around them.",
    },
    heirloom: null,
    bio: "Bangalore's missing brother, alive and hiding behind a hero's mask. Family fights for family.",
  },
  {
    id: "vantage",
    name: "Vantage",
    realName: "Xiomara Contreras",
    title: "Sniper Savant",
    legendClass: "Recon",
    homeworld: "Págos",
    age: 18,
    image:
      "https://drop-assets.ea.com/images/6wNJrehz7BfFeKFwWINpCD/e25ce64fad589ca8fee6e4024119cd92/apex-grid-tile-legends-Vantage.jpg",
    accent: "#0891b2",
    tactical: {
      name: "Echo Relocation",
      description: "Send Echo, your bat companion, to a position you can boost-jump to.",
    },
    passive: {
      name: "Spotter's Lens",
      description:
        "Use your custom rifle scope to scout enemies. Marks reveal info to your team.",
    },
    ultimate: {
      name: "Sniper's Mark",
      description: "Equip a custom sniper rifle. Bonus damage to marked enemies.",
    },
    heirloom: null,
    bio: "Born on a frozen world to a mother on the run. Raised wild, she fights for the family she's never met.",
  },
  {
    id: "catalyst",
    name: "Catalyst",
    realName: "Tressa Crystal Smith",
    title: "Defensive Conjurer",
    legendClass: "Controller",
    homeworld: "Boreas",
    age: 26,
    image:
      "https://drop-assets.ea.com/images/I01amfukfvzrqbSSg1xQB/6147400ff2102b3ddd5f5c931a374be8/apex-grid-tile-legends-Catalyst.jpg",
    accent: "#7e22ce",
    tactical: {
      name: "Piercing Spikes",
      description: "Throw a patch of ferrofluid that hardens into damaging spikes.",
    },
    passive: {
      name: "Barricade",
      description: "Reinforce doors so they can't be broken or kicked open.",
    },
    ultimate: {
      name: "Dark Veil",
      description:
        "Raise a long wall of ferrofluid that blocks vision and slows and impairs enemies.",
    },
    heirloom: null,
    bio: "A trans witch and saboteur from a dying moon. She protects what's left with iron and intent.",
  },
  {
    id: "ballistic",
    name: "Ballistic",
    realName: "August Brinkman",
    title: "Refined Gunslinger",
    legendClass: "Assault",
    homeworld: "Gaea",
    age: 64,
    image:
      "https://drop-assets.ea.com/images/2GzrmZx2WNaOzbrdvxf1XB/f7d4fe018c53977c08347bb4f8d92e0d/apex-grid-tile-legends-Ballistic.jpg",
    accent: "#a16207",
    tactical: {
      name: "Whistler",
      description:
        "Fire a slow projectile that tracks an enemy. Their gun overheats with sustained fire.",
    },
    passive: {
      name: "Sling",
      description: "Carry a third weapon in a sling slot.",
    },
    ultimate: {
      name: "Tempest",
      description:
        "Boost your team's reload, move speed, and gold-tier the weapon in your sling.",
    },
    heirloom: null,
    bio: "A retired Thunderdome champ pulled back into the games to save his son. The old guard reloads.",
  },
  {
    id: "conduit",
    name: "Conduit",
    realName: "Rowenna Adeoti",
    title: "Energetic Defender",
    legendClass: "Support",
    homeworld: "Gaea",
    age: 25,
    image:
      "https://drop-assets.ea.com/images/4Ksr2ZX6ImduJHxxeYONtU/277537c176c74b951319f92d86f4698e/apex-grid-tile-legends-Conduit.jpg",
    accent: "#06b6d4",
    tactical: {
      name: "Radiant Transfer",
      description:
        "Sprint to your teammate to grant them temporary shields. The further the run, the more shields.",
    },
    passive: {
      name: "Savior's Speed",
      description: "Sprint faster toward distant teammates who are low on shield.",
    },
    ultimate: {
      name: "Energy Barricade",
      description:
        "Deploy a wall of jamming pylons that damage and slow enemies who pass through.",
    },
    heirloom: null,
    bio: "A Nigerian engineer who joined the games to pay her sister's medical debts. She runs to save people.",
  },
  {
    id: "alter",
    name: "Alter",
    realName: "Ester Garcia Ortega",
    title: "Void Breacher",
    legendClass: "Skirmisher",
    homeworld: "Unknown",
    age: "Unknown",
    image:
      "https://drop-assets.ea.com/images/2IfZi30O5KjeTbAHqMGPys/dbd942301f0b723e4f3e30ce27569824/apex-grid-tile-legends-Alter.jpg",
    accent: "#a855f7",
    tactical: {
      name: "Void Passage",
      description: "Create a portal through a wall or surface for any squad to use.",
    },
    passive: {
      name: "Gift from the Rift",
      description: "Steal one item from a deathbox, even when far away.",
    },
    ultimate: {
      name: "Void Nexus",
      description:
        "Place a teleport beacon that lets your squad return to it from anywhere.",
    },
    heirloom: null,
    bio: "A warped traveler from a doomed timeline. She's seen every ending and is shopping for a better one.",
  },
  {
    id: "sparrow",
    name: "Sparrow",
    realName: "Asa Park",
    title: "Agile Archer",
    legendClass: "Recon",
    homeworld: "Solace",
    age: 22,
    image:
      "https://drop-assets.ea.com/images/ZpRorS2mnGb98mIt53sy9/0962732ad880c5f42754776e035316cc/apex-grid-tile-legends-sparrow.jpg",
    accent: "#65a30d",
    tactical: {
      name: "Tracker Dart",
      description: "Fire a dart that reveals enemies caught in its small radius.",
    },
    passive: {
      name: "Double Jump",
      description: "Press jump in mid-air to perform a second jump.",
    },
    ultimate: {
      name: "Stinger Bolt",
      description:
        "Equip a charged bow shot that pings any enemy it tags and creates a brief reveal field.",
    },
    heirloom: null,
    bio: "A wiry archer raised in Solace alleyways. She was the fastest kid on her block. Now she's the fastest in the arena.",
  },
];
