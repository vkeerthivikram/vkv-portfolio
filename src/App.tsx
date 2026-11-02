import {
  ArrowDown,
  ArrowUpRight,
  ArrowUp,
  GithubLogo,
  LinkedinLogo,
} from "./components/icons";
import SelectedWork from "./components/SelectedWork";
import ProjectArchive from "./components/ProjectArchive";
import ThemeToggle from "./components/ThemeToggle";

const github = "https://github.com/vkeerthivikram";
const linkedin = "https://www.linkedin.com/in/v-keerthi-vikram/";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header container" id="top">
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#projects">All projects</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">
            Contact <ArrowUpRight aria-hidden size={18} />
          </a>
          <ThemeToggle />
        </nav>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="intro-heading">
          <div className="hero-copy">
            <h1 id="intro-heading">
              V Keerthi{" "}
              <br />
              <span>Vikram</span>
            </h1>
            <p>
              I build apps, developer tools, and themes. My projects include an
              offline cricket scorer, a single-file task manager, and a Git
              terminal interface.
            </p>
            <div className="hero-actions">
              <a className="button" href="#work">
                View projects <ArrowDown size={20} aria-hidden />
              </a>
              <a
                className="text-link"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={20} aria-hidden />
              </a>
            </div>
          </div>
          <figure className="hero-figure">
            <img
              className="hero-art"
              src="/images/building-blocks.webp"
              alt="Sculptural building blocks with a translucent green glass pane"
              width="1200"
              height="900"
              fetchPriority="high"
            />
          </figure>
        </section>
        <SelectedWork />
        <ProjectArchive />
        <section
          className="about container"
          id="about"
          aria-labelledby="about-heading"
        >
          <h2 id="about-heading">About me</h2>
          <div className="about-copy">
            <p className="lead">
              I’m a software developer. I work on Android apps, web apps, and
              tools for the terminal and Linux desktop.
            </p>
            <p>
              I use Kotlin, TypeScript, Python, Rust, and Go. The code for these
              projects is on GitHub, along with setup instructions and release
              downloads where available.
            </p>
          </div>
        </section>
        <section
          className="contact container"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="contact-inner">
            <div>
              <h2 id="contact-heading">Contact</h2>
              <p>You can reach me on LinkedIn.</p>
            </div>
            <a
              className="button"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <ArrowUpRight size={20} aria-hidden />
            </a>
          </div>
        </section>
      </main>
      <footer className="footer container">
        <p>© 2026 V Keerthi Vikram</p>
        <div className="footer-links">
          <a href={github} target="_blank" rel="noreferrer">
            <GithubLogo size={18} aria-hidden />
            GitHub
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <LinkedinLogo size={18} aria-hidden />
            LinkedIn
          </a>
          <a href="#top">
            Back to top <ArrowUp size={16} aria-hidden />
          </a>
        </div>
      </footer>
    </>
  );
}
