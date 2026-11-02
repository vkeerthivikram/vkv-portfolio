import { ArrowUpRight } from "./icons";

function SourceLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a className="project-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={19} aria-hidden />
    </a>
  );
}
function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function SelectedWork() {
  return (
    <section
      className="selected container"
      id="work"
      aria-labelledby="work-heading"
    >
      <div className="section-heading">
        <h2 id="work-heading">Selected work</h2>
        <p>A few things I’ve built.</p>
      </div>
      <article className="featured-project">
        <div className="featured-copy">
          <p className="project-index">01 / Android app</p>
          <h3>Ballnote</h3>
          <p className="project-tagline">Less scorekeeping. More cricket.</p>
          <p className="project-description">
            An offline cricket scorer for the matches that happen outside a
            stadium.
          </p>
          <ul className="feature-list">
            <li>Ball-by-ball scoring</li>
            <li>Tournament management</li>
            <li>Shareable match snapshots</li>
          </ul>
          <Tags items={["Kotlin", "Jetpack Compose", "Room"]} />
          <div className="project-links">
            <SourceLink href="https://github.com/vkeerthivikram/Ballnote">
              View project
            </SourceLink>
            <SourceLink href="https://github.com/vkeerthivikram/Ballnote/releases/latest">
              Download APK
            </SourceLink>
          </div>
        </div>
        <figure className="ballnote-visual">
          <div className="phone-pair">
            <img
              src="/images/ballnote-light.webp"
              alt="Ballnote light mode showing a live cricket match and scoring controls"
              width="432"
              height="912"
              loading="lazy"
            />
            <img
              src="/images/ballnote-dark.webp"
              alt="The same Ballnote scoring interface in dark mode"
              width="432"
              height="912"
              loading="lazy"
            />
          </div>
          <figcaption>Real app screens · Light & dark</figcaption>
        </figure>
      </article>
      <div className="project-pair">
        <article className="project-card">
          <a
            className="project-image taskly-visual"
            href="https://github.com/vkeerthivikram/Taskly"
            target="_blank"
            rel="noreferrer"
            aria-label="Explore Taskly on GitHub"
          >
            <img
              src="/images/taskly-desktop.webp"
              alt="Taskly’s task board with projects, columns, and example tasks"
              width="1200"
              height="751"
              loading="lazy"
            />
          </a>
          <p className="project-index">02 / Web app</p>
          <h3>Taskly</h3>
          <p className="project-tagline">A calmer home for everything to do.</p>
          <p className="project-description">
            An offline task manager with board, list, and calendar views. One
            HTML file. No account needed.
          </p>
          <Tags items={["HTML", "CSS", "JavaScript"]} />
          <SourceLink href="https://github.com/vkeerthivikram/Taskly">
            View project
          </SourceLink>
        </article>
        <article className="project-card">
          <a
            className="project-image kilo-visual"
            href="https://kilo-models.vkvikram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Explore the Kilo Models website"
          >
            <img
              src="/images/kilo-models-launch.webp"
              alt="Kilo Models launch artwork: compare models and estimate costs"
              width="1200"
              height="675"
              loading="lazy"
            />
          </a>
          <p className="project-index">03 / Developer tool</p>
          <h3>Kilo Models</h3>
          <p className="project-tagline">Find the model that fits.</p>
          <p className="project-description">
            Compare AI models, capabilities, and estimated costs in one place.
            An independent, unofficial Kilo directory.
          </p>
          <Tags items={["Next.js", "TypeScript", "React"]} />
          <div className="project-links">
            <SourceLink href="https://kilo-models.vkvikram.com">
              Visit website
            </SourceLink>
            <SourceLink href="https://github.com/vkeerthivikram/kilo-models">
              View source
            </SourceLink>
          </div>
        </article>
      </div>
    </section>
  );
}
