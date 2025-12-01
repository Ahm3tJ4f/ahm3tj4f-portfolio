export const ExternalLinks = {
  FerrumCapital: "https://www.ferrumcapital.az/az",
  ThreeBlueOneBrown: "https://www.3blue1brown.com/",
  TikTokGuitar: "https://www.tiktok.com/@ahm3tj4f/video/7519449555486690568",
  Goodreads: "https://www.goodreads.com/user/show/63307480-ahmad-jafarov",
  "4You": "https://4youcare.com/",
  InnoSight: "https://www.linkedin.com/company/innosight-llc/",
  YeloBank: "https://www.yelo.az/",
} as const;

export const ASCII_WAVE_CONFIG = {
  colors: ["#001524", "#15616d", "#ff7d00", "#78290f"],
  chars: " .:-=+*#%@",
  height: 400,
  fontSize: 14,
  fontFamily:
    'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  threshold: 0.2,
  speed: 0.01,
  colorCycleRate: 10,

  wave1: { x: 0.1 },
  wave2: { y: 0.15, time: 0.5 },
  wave3: { mix: 0.05, time: 0.2 },
} as const;
