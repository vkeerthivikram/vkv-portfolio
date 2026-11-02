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
            Let’s talk <ArrowUpRight aria-hidden size={18} />
          </a>
          <ThemeToggle />
        </nav>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="intro-heading">
          <div className="hero-copy">
            <h1 id="intro-heading">
              Curiosity in.
              <br />
              Useful software
              <br />
              <span>out.</span>
            </h1>
            <p>
              I’m V Keerthi Vikram. I build apps, developer tools, and small
              experiments that make everyday things a little better.
            </p>
            <div className="hero-actions">
              <a className="button" href="#work">
                Explore my work <ArrowDown size={20} aria-hidden />
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
            <figcaption>Independent projects. Openly shared.</figcaption>
          </figure>
        </section>
        <SelectedWork />
        <ProjectArchive />
        <section
          className="about container"
          id="about"
          aria-labelledby="about-heading"
        >
          <h2 id="about-heading">
            A practical streak.
            <br />
            An open mind.
          </h2>
          <div className="about-copy">
            <p className="lead">
              I’m V Keerthi Vikram, a developer who likes turning small
              frustrations into useful software.
            </p>
            <p>
              My public work moves between Android apps, browser tools, terminal
              utilities, and interface themes. I care about clear interactions,
              thoughtful defaults, and making things that people can explore for
              themselves.
            </p>
          </div>
          <ul className="principles">
            <li>Build with purpose</li>
            <li>Keep it usable</li>
            <li>Share the work</li>
          </ul>
        </section>
        <section
          className="contact container"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="contact-inner">
            <div>
              <h2 id="contact-heading">Have something in mind?</h2>
              <p>Let’s talk about it.</p>
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
        <p>Built with curiosity. © 2026 V Keerthi Vikram</p>
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
