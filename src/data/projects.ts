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
    description: "Save colors, typography, and other design details from websites.",
    category: "Apps",
    label: "Browser extension",
    status: "Install from source",
    summary:
      "A Chrome and Firefox extension for collecting website design details. Records colors, typography, shadows, favicons, and cursors in your browser.",
    technologies: ["TypeScript", "React", "WXT", "IndexedDB"],
    features: [
      "Search your collection and arrange saved items into PNG collages.",
      "Turn automatic collection on or off, and exclude individual websites.",
      "Back up and restore collections as ZIP files.",
    ],
    repository: repository("browser-loot"),
    note: "Install locally from source. Collections stay on your device; no account is needed.",
  },
  {
    id: "lazysnake",
    name: "Lazysnake",
    description: "A Git interface for the terminal, controlled with the keyboard.",
    category: "Developer tools",
    label: "Developer tools",
    status: "Install from source",
    summary:
      "A Git terminal interface built with Python and Textual, inspired by lazygit. Shows files, branches, commits, stashes, and diffs in one screen.",
    technologies: ["Python", "Textual", "Git", "pytest"],
    features: [
      "Stage individual lines or hunks from an interactive diff.",
      "Manage branches, rebases, worktrees, submodules, and conflicts.",
      "Undo and redo actions using saved repository snapshots.",
    ],
    repository: repository("lazysnake"),
  },
  {
    id: "brume",
    name: "Brume",
    description: "Six light and dark color palettes for interfaces and themes.",
    category: "Themes",
    label: "Themes",
    status: "Color palettes",
    summary:
      "A set of six light and dark palettes, each with 27 colors. Available as CSS custom properties and JSON files.",
    technologies: ["CSS", "JSON", "Color design"],
    features: [
      "Browse the colors in an interactive palette reference.",
    ],
    repository: repository("brume"),
    link: {
      label: "View palettes",
      url: "https://vkeerthivikram.github.io/brume/",
    },
  },
  {
    id: "sift-agent",
    name: "Sift Agent",
    description: "Data analysis and reports for CSV, Excel, and ODS files.",
    category: "Developer tools",
    label: "Data & AI",
    status: "Install from source",
    summary:
      "Profiles spreadsheet data from the command line or a Streamlit app. Produces statistics, charts, and data-quality checks, with optional AI analysis.",
    technologies: ["Python", "LangGraph", "pandas", "Streamlit"],
    features: [
      "Check column statistics, missing values, and outliers.",
      "Generate HTML reports that open offline.",
      "Ask an AI model questions about the data, or run offline analysis without API keys.",
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
      "A clipboard-history applet for the COSMIC panel on Wayland. Saves text, rich text, and images so you can find and copy earlier entries.",
    technologies: ["Rust", "libcosmic", "Wayland", "Tokio"],
    features: [
      "Search and pin entries, expand previews, or undo deletions.",
      "Configure capture limits, expiry, and ignore patterns.",
      "Navigate with the keyboard and export your history.",
    ],
    repository: repository("clipit"),
    note: "History is stored locally without encryption.",
  },
  {
    id: "passage",
    name: "Passage",
    description: "A self-hosted library for saved highlights. In development.",
    category: "Experiments",
    label: "In development",
    status: "Development paused",
    summary:
      "An unfinished app for saving, organizing, and reviewing highlights. The source includes web and Android clients, an API, and a browser extension.",
    technologies: ["TypeScript", "React", "Expo", "Fastify", "PostgreSQL"],
    features: [
      "Offline capture, daily review, and highlight exports.",
    ],
    repository: repository("passage"),
    note: "Development is paused. There is no tested release yet.",
  },
  {
    id: "ballnote",
    name: "Ballnote",
    description: "An offline Android scorer for turf cricket matches and tournaments.",
    category: "Apps",
    label: "Android app",
    status: "Released · v1.2.0",
    summary:
      "An Android app for scoring turf cricket. Records deliveries, saves matches on your phone, and handles series and tournaments without an internet connection.",
    technologies: ["Kotlin", "Jetpack Compose", "Room", "Material 3"],
    features: [
      "Score each delivery, correct mistakes, and track chase targets.",
      "Set up fixtures and league tables, with optional match and tournament timers.",
      "Share results and score snapshots; back up and restore matches as JSON.",
    ],
    repository: repository("Ballnote"),
    link: {
      label: "Download Android APK",
      url: "https://github.com/vkeerthivikram/Ballnote/releases/latest",
    },
    note: "Tracks team totals, not individual player statistics. No accounts, ads, or analytics.",
  },
  {
    id: "kilo-models",
    name: "Kilo Models",
    description: "Compare Kilo Gateway models and estimate their costs.",
    category: "Apps",
    label: "Web app",
    status: "Web app",
    summary:
      "An unofficial directory of models on the Kilo Gateway. Compare capabilities, context limits, and prices, then estimate costs for a workload.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
    ],
    features: [
      "Filter by supported inputs, context size, capabilities, and price.",
      "Compare up to ten models with a breakdown of billing costs.",
      "Save favorites and workloads locally, export JSON backups, and share filtered views.",
    ],
    repository: repository("kilo-models"),
    link: {
      label: "Visit Kilo Models",
      url: "https://kilo-models.vkvikram.com",
    },
    note: "Not affiliated with or endorsed by Kilo AI.",
  },
  {
    id: "taskly",
    name: "Taskly",
    description: "An offline task manager in one HTML file.",
    category: "Apps",
    label: "Offline web app",
    status: "Downloadable app",
    summary:
      "A task manager you open as an HTML file in your browser. Works offline without an installation or account.",
    technologies: ["HTML", "CSS", "JavaScript", "Browser storage"],
    features: [
      "Board, list, and calendar views with custom projects and workflows.",
      "Recurring tasks, checklists, priorities, tags, search, and a focus timer.",
      "Keyboard shortcuts, undo, JSON backup and restore, and CSV export.",
    ],
    repository: repository("Taskly"),
    note: "Tasks stay in your browser. Export a backup before moving the file or clearing browser data.",
  },
  {
    id: "jj-skills",
    name: "Jujutsu Skills",
    description: "Jujutsu version-control instructions for coding agents.",
    category: "Developer tools",
    label: "Agent skills",
    status: "Agent skills",
    summary:
      "Three instruction sets for coding agents using Jujutsu: everyday commands, revision queries, and editing history.",
    technologies: ["Jujutsu", "Git", "Markdown"],
    features: [
      "Working-copy changes, bookmarks, Git remotes, and revision-set expressions.",
      "Editing history, resolving conflicts, and recovering earlier states.",
    ],
    repository: repository("jj-skills"),
  },
  {
    id: "brume-vscode",
    name: "Brume for VS Code",
    description: "Two light and four dark Brume themes for VS Code.",
    category: "Themes",
    label: "Editor themes",
    status: "Theme source",
    summary:
      "Six VS Code themes based on the Brume palettes: two light and four dark.",
    technologies: ["VS Code", "JSON", "Color design"],
    features: [
      "Colors for syntax highlighting, the editor, and the workbench.",
    ],
    repository: repository("brume-vscode"),
  },
  {
    id: "username-generator",
    name: "Username Generator",
    description: "Generate usernames from words and numbers in the terminal.",
    category: "Developer tools",
    label: "Go utility",
    status: "Public source",
    summary:
      "A Go command-line tool for generating usernames.",
    technologies: ["Go", "CLI"],
    features: [
      "Pairs a word from the EFF word list with a three- or four-digit number.",
    ],
    repository: repository("UsernameGenerator"),
  },
  {
    id: "file-to-base64",
    name: "File to Base64",
    description: "Encode a file as Base64 from the command line.",
    category: "Developer tools",
    label: "Go utility",
    status: "Public source",
    summary:
      "A Go command-line tool that converts a file to Base64 text.",
    technologies: ["Go", "CLI", "Base64"],
    features: [
      "Saves a timestamped text file beside the original.",
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
    status: "Theme port",
    summary: `A port of the Dracula dark theme for ${app}.`,
    technologies: ["Dracula", "Interface theming"],
    features: [
      "Theme files and installation instructions are in the repository.",
    ],
    repository: repository(id),
    link: ["harpy", "infinity"].includes(id)
      ? undefined
      : { label: "View the theme", url: `https://draculatheme.com/${id}` },
  })),
];
