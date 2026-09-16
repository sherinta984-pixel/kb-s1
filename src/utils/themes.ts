import { ScoreboardThemeId } from '../types';

export interface ThemeConfig {
  id: ScoreboardThemeId;
  name: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  description: string;
  identity: string;
  behavior: string;
  iconName: string;
  primaryAccent: string;
  previewBg: string;
}

export const ARENA_THEMES: Record<ScoreboardThemeId, ThemeConfig> = {
  'sleek-obsidian': {
    id: 'sleek-obsidian',
    name: 'Sleek Obsidian',
    subtitle: 'Stealth Esports Arena',
    badge: 'MINIMALIST HUD',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    description:
      'Ultra-clean obsidian hull with organic radial feather vignette, precision chamfer corners, and specular horizon rails. Zero visual clutter.',
    identity: 'Aero Minimalism, Unclipped Feather Falloff & Maximum Text Clarity',
    behavior: 'Subtle laser scanner sweep, smooth breathing aura, crisp instant flip numerals.',
    iconName: 'Shield',
    primaryAccent: '#00f0ff',
    previewBg: 'from-slate-950 via-slate-900 to-black',
  },
  'turbo-velocity': {
    id: 'turbo-velocity',
    name: 'Turbo Velocity',
    subtitle: 'Pro Fast-Track HUD',
    badge: 'PREVIOUS RACING HUD',
    badgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/40',
    description:
      'The high-octane broadcast HUD with anisotropic metallic speed plates, 45° speed streak beams, aerodynamic chevron fins, and dot matrix telemetry arrays.',
    identity: 'Motorsport Broadcast Telemetry & Aerodynamic Speed Chevrons',
    behavior: 'High-speed diagonal beam flashes, radiant flare blooms, supersonic scoring surge.',
    iconName: 'Zap',
    primaryAccent: '#ff1753',
    previewBg: 'from-blue-950/80 via-slate-950 to-red-950/80',
  },
  'titan-mech': {
    id: 'titan-mech',
    name: 'Titan Heavy Armor',
    subtitle: 'Industrial Battle Plate',
    badge: 'HEAVY MECHA',
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
    description:
      'Heavy industrial mecha battle plating featuring metallic corner rivet bolts, diagonal carbon-fiber hazard weave, and segmented hydraulic armor brackets.',
    identity: 'Heavy Gunmetal Armor, Industrial Rivets & High-Torque Mechanical Feel',
    behavior: 'Heavy hydraulic stomp impact shockwaves on scoring, hazard LED armor bar illumination.',
    iconName: 'Layers',
    primaryAccent: '#f59e0b',
    previewBg: 'from-zinc-950 via-neutral-900 to-amber-950/40',
  },
  'cyber-glitch': {
    id: 'cyber-glitch',
    name: 'Neon Cyberpunk',
    subtitle: 'Glitch Circuit Matrix',
    badge: 'SYNTHWAVE GRID',
    badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40',
    description:
      'Futuristic cybernetic terminal featuring glowing PCB bus traces, digital hexadecimal telemetry, scanline matrix grid, and animated electric signal pulses.',
    identity: 'Glowing Electronic Traces, Hexadecimal Readouts & Dual-Tone Neon',
    behavior: 'Pulsing electron flow along circuit conduits, electric spark shockwave, digital glitch jitter.',
    iconName: 'Cpu',
    primaryAccent: '#06b6d4',
    previewBg: 'from-cyan-950/50 via-slate-950 to-fuchsia-950/50',
  },
  'apex-gold': {
    id: 'apex-gold',
    name: 'Apex Championship',
    subtitle: 'Royal Grand Arena',
    badge: 'PRESTIGE LUXURY',
    badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
    description:
      'Grand championship arena broadcast with 24K polished gold bevel frames, diamond faceted corner insets, 5-star laurel insignias, and royal specular shimmer.',
    identity: 'Imperial 24K Gold Chamfers, Diamond Facets & Championship Laurel Insignias',
    behavior: 'Radiant golden gleam sweeping across polished bevels, warm amber-gold radiance on scoring.',
    iconName: 'Crown',
    primaryAccent: '#eab308',
    previewBg: 'from-amber-950/40 via-slate-950 to-yellow-950/40',
  },
};

export const ARENA_THEME_LIST: ThemeConfig[] = Object.values(ARENA_THEMES);
