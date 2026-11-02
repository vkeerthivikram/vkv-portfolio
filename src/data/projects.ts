export const projectCategories = [
  "All",
  "Apps",
  "Developer tools",
  "Themes",
  "Experiments",
] as const;

export type ProjectCategory = Exclude<
  (typeof projectCategories)[number],
  "All"
>;

export interface Project {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory;
  label: string;
  status: string;
  summary: string;
  technologies: string[];
  features: string[];
  repository: string;
  link?: { label: string; url: string };
  note?: string;
}

const repository = (name: string) =>
  `https://github.com/vkeerthivikram/${name}`;

// Curated from the public repositories. See docs/project-research.md
// for sources and the distinction between shipped work
// and development checkpoints. Order also defines the initial six-row selection.
export const projects: Project[] = [
  {
    id: "browser-loot",
    name: "Browser Loot",
    description: "A curiosity cabinet for the small wonders of the web.",
    category: "Apps",
    label: "Browser extension",
    status: "Install from source",
    summary:
      "A Chrome and Firefox extension that collects the little design details worth keeping: colors, typography, shadows, favicons, cursors, and more. Finds stay in your browser, with no account or server.",
    technologies: ["TypeScript", "React", "WXT", "IndexedDB"],
    features: [
      "Explore a favicon garden and a searchable cabinet of visual specimens.",
      "Arrange finds into a quilt and export it as a PNG.",
      "Choose automatic collection, pause it, or exclude websites; move collections with ZIP backups.",
    ],
    repository: repository("browser-loot"),
    note: "Available through local installation in Chromium and Firefox.",
  },
  {
    id: "lazysnake",
    name: "Lazysnake",
    description: "A keyboard-driven Git interface for your terminal.",
    category: "Developer tools",
    label: "Developer tools",
    status: "Install from source",
    summary:
      "A lazygit-inspired terminal interface built with Python and Textual. Files, branches, commits, stashes, and an interactive diff stay within reach, with a command log that streams remote operations.",
    technologies: ["Python", "Textual", "Git", "pytest"],
    features: [
      "Stage individual lines or hunks from an interactive diff.",
      "Manage branches, rebases, worktrees, submodules, and conflicts.",
      "Undo and redo app actions using snapshots of repository state.",
    ],
    repository: repository("lazysnake"),
    note: "Inspired by lazygit; this is a separate implementation.",
  },
  {
    id: "brume",
    name: "Brume",
    description: "Six palettes. One coherent visual language.",
    category: "Themes",
    label: "Themes",
    status: "Public color system",
    summary:
      "An original, frost-inspired color system with six coordinated variants. Each palette provides 27 colors for building consistent interfaces and themes.",
    technologies: ["CSS", "JSON", "Color design"],
    features: [
      "Six light and dark palette variants.",
      "CSS custom properties and portable JSON palettes.",
      "An interactive palette reference for exploring the colors.",
    ],
    repository: repository("brume"),
    link: {
      label: "Explore the palette",
      url: "https://vkeerthivikram.github.io/brume/",
    },
  },
  {
    id: "sift-agent",
    name: "Sift Agent",
    description:
      "Turn spreadsheets into profiles, charts, and clearer answers.",
    category: "Developer tools",
    label: "Data & AI",
    status: "Install from source",
    summary:
      "An exploratory data analysis tool for CSV, Excel, and ODS files. It combines statistical profiling, charts, data-quality checks, and optional AI-assisted investigation behind a CLI and a Streamlit interface.",
    technologies: ["Python", "LangGraph", "pandas", "Streamlit"],
    features: [
      "Analyze column statistics, missing values, outliers, and potential data-quality problems.",
      "Generate self-contained HTML reports that open offline.",
      "Ask questions about the dataset, with deterministic offline analysis available without API keys.",
    ],
    repository: repository("sift-agent"),
  },
  {
    id: "clipit",
    name: "Clipit",
    description: "Searchable clipboard history for the COSMIC desktop.",
    category: "Apps",
    label: "Linux applet",
    status: "Install from source",
    summary:
      "A native clipboard-history applet for the COSMIC panel on Wayland. Keep text, rich-text alternatives, and images close at hand, then search and copy an earlier entry when you need it.",
    technologies: ["Rust", "libcosmic", "Wayland", "Tokio"],
    features: [
      "Search, pin, expand, delete, and undo history entries.",
      "Configure capture limits, expiry, and ignore patterns.",
      "Use keyboard controls, local exports, and Fluent-based localization.",
    ],
    repository: repository("clipit"),
    note: "Requires COSMIC on Wayland. Clipboard history stays local and is not encrypted.",
  },
  {
    id: "passage",
    name: "Passage",
    description: "A self-hosted highlight library and review workflow.",
    category: "Experiments",
    label: "In development",
    status: "Paused development checkpoint",
    summary:
      "An unfinished project exploring a self-hosted alternative for capturing, organizing, reviewing, and exporting highlights. The repository contains web, Android, API, and browser-extension work.",
    technologies: ["TypeScript", "React", "Expo", "Fastify", "PostgreSQL"],
    features: [
      "Planned web and Android workflows for a private highlight library.",
      "Direction includes offline capture, daily review, and portable exports.",
      "Shared domain code and a documented handoff for continuing development.",
    ],
    repository: repository("passage"),
    note: "This is unfinished source code, not a tested release. Features describe its direction, not a promise of production readiness.",
  },
  {
    id: "ballnote",
    name: "Ballnote",
    description:
      "Turf cricket scoring, from the first ball to the final result.",
    category: "Apps",
    label: "Android app",
    status: "Released · v1.2.0",
    summary:
      "A local-only Android scorer for casual turf cricket. Record deliveries, correct a score, run a series or tournament, and share the result. Matches save on the phone as you play.",
    technologies: ["Kotlin", "Jetpack Compose", "Room", "Material 3"],
    features: [
      "Delivery-by-delivery scoring, corrections, undo, chase targets, and match results.",
      "Competition fixtures, league tables, and independently optional match and tournament timers.",
      "Share result images or live-score snapshots; export and restore JSON backups.",
    ],
    repository: repository("Ballnote"),
    link: {
      label: "Download Android APK",
      url: "https://github.com/vkeerthivikram/Ballnote/releases/latest",
    },
    note: "Works offline with no internet permission, accounts, advertising, or analytics. Tracks team totals rather than individual player statistics.",
  },
  {
    id: "kilo-models",
    name: "Kilo Models",
    description: "Compare AI models and estimate the cost of your workload.",
    category: "Apps",
    label: "Web app",
    status: "Public web app",
    summary:
      "An unofficial model directory built around the Kilo Gateway. Explore model capabilities, compare options side by side, and estimate costs for the work you actually want to run.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
    ],
    features: [
      "Filter models by modality, context, capabilities, pricing, and workload fit.",
      "Compare up to ten models and inspect separate billing components.",
      "Save favorites, workloads, and directory views locally, with JSON backups and shareable filters.",
    ],
    repository: repository("kilo-models"),
    link: {
      label: "Visit Kilo Models",
      url: "https://kilo-models.vkvikram.com",
    },
    note: "An independent, unofficial project. Not affiliated with or endorsed by Kilo AI.",
  },
  {
    id: "taskly",
    name: "Taskly",
    description: "A complete personal task manager in one HTML file.",
    category: "Apps",
    label: "Offline web app",
    status: "Downloadable app",
    summary:
      "A self-contained task manager that opens directly in your browser. No installation, server, or account: just one HTML file with the tools to organize your work offline.",
    technologies: ["HTML", "CSS", "JavaScript", "Browser storage"],
    features: [
      "Board, List, and Calendar views with custom workflows and projects.",
      "Recurring tasks, checklists, priorities, tags, search, and a focus timer.",
      "Keyboard shortcuts, undo, JSON backup and restore, and CSV export.",
    ],
    repository: repository("Taskly"),
    note: "Data stays in the current browser on the current device. Export a backup before moving the file or clearing browser data.",
  },
  {
    id: "jj-skills",
    name: "Jujutsu Skills",
    description: "Practical version-control guidance for coding agents.",
    category: "Developer tools",
    label: "Agent skills",
    status: "Public developer resources",
    summary:
      "Three focused skills for working with Jujutsu version control: everyday workflows, revset expressions, and history restructuring. The instructions make the working-copy model and recovery tools explicit.",
    technologies: ["Jujutsu", "Git", "Markdown"],
    features: [
      "Everyday changes, bookmarks, and Git remote interoperability.",
      "Compose and debug revision-set expressions.",
      "Restructure history, resolve conflicts, and recover earlier states.",
    ],
    repository: repository("jj-skills"),
  },
  {
    id: "brume-vscode",
    name: "Brume for VS Code",
    description: "The Brume color system, brought into the editor.",
    category: "Themes",
    label: "Editor themes",
    status: "Source theme package",
    summary:
      "A VS Code theme package that adapts Brume into two light and four dark editor variants, carrying the same frost-inspired palette across the workbench and syntax highlighting.",
    technologies: ["VS Code", "JSON", "Color design"],
    features: [
      "Two light and four dark theme variants.",
      "A coordinated palette for the editor and workbench.",
      "Public theme source for inspection and customization.",
    ],
    repository: repository("brume-vscode"),
  },
  {
    id: "username-generator",
    name: "Username Generator",
    description: "A small CLI for readable, word-based usernames.",
    category: "Developer tools",
    label: "Go utility",
    status: "Public source",
    summary:
      "A compact Go command-line utility that pairs a word from the EFF word list with a three- or four-digit number to generate a username.",
    technologies: ["Go", "CLI"],
    features: [
      "Word-based names using the EFF word list.",
      "Three- or four-digit numeric suffixes.",
      "A small command-line workflow.",
    ],
    repository: repository("UsernameGenerator"),
  },
  {
    id: "file-to-base64",
    name: "File to Base64",
    description: "Convert a local file into a portable Base64 text file.",
    category: "Developer tools",
    label: "Go utility",
    status: "Public source",
    summary:
      "A focused Go command-line utility for encoding a local file as Base64. It saves the result in a timestamped text file beside the original.",
    technologies: ["Go", "CLI", "Base64"],
    features: [
      "Convert local file contents to Base64.",
      "Save the encoded output as a text file.",
      "Timestamp output filenames beside the source file.",
    ],
    repository: repository("FileToBase64Converter"),
  },
  ...[
    {
      id: "fedilab",
      app: "Fedilab",
      description: "A Dracula theme port for the Fedilab social client.",
    },
    {
      id: "harpy",
      app: "Harpy",
      description: "A Dracula theme port for Harpy for Twitter.",
    },
    {
      id: "infinity",
      app: "Infinity",
      description: "A Dracula theme port for Infinity for Reddit.",
    },
    {
      id: "nitter",
      app: "Nitter",
      description: "A Dracula theme port for the Nitter web frontend.",
    },
    {
      id: "libreddit",
      app: "Libreddit",
      description: "A Dracula theme port for the Libreddit web frontend.",
    },
  ].map(({ id, app, description }): Project => ({
    id,
    name: `Dracula for ${app}`,
    description,
    category: "Themes",
    label: "Theme port",
    status: "Public theme contribution",
    summary: `A Dracula color-theme port for ${app}, with V Keerthi Vikram listed as maintainer in the repository. This contribution brings an established dark palette into another interface.`,
    technologies: ["Dracula", "Interface theming"],
    features: [
      `A Dracula palette adapted to ${app}.`,
      "Public theme files and installation guidance.",
    ],
    repository: repository(id),
    link: ["harpy", "infinity"].includes(id)
      ? undefined
      : { label: "View the theme", url: `https://draculatheme.com/${id}` },
    note: `This is a theme contribution, not authorship of ${app} or the original Dracula color system.`,
  })),
];
