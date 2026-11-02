import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  GithubLogo,
  MagnifyingGlass,
  X,
} from "./icons";
import { projectCategories, projects, type Project } from "../data/projects";
import "./project-archive.css";

const INITIAL_COUNT = 6;

export default function ProjectArchive() {
  const [category, setCategory] =
    useState<(typeof projectCategories)[number]>("All");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    const search = query.trim().toLocaleLowerCase();
    return projects.filter((project) => {
      const inCategory = category === "All" || project.category === category;
      const searchable = [
        project.name,
        project.description,
        project.summary,
        project.label,
        ...project.technologies,
      ]
        .join(" ")
        .toLocaleLowerCase();
      return inCategory && (!search || searchable.includes(search));
    });
  }, [category, query]);

  const visibleProjects = expanded
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_COUNT);
  const hasFilters = category !== "All" || query.trim().length > 0;

  useEffect(() => {
    if (!selectedProject || !dialogRef.current) return;
    if (!dialogRef.current.open) dialogRef.current.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  function resetFilters() {
    setCategory("All");
    setQuery("");
    setExpanded(false);
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleDialogClosed() {
    setSelectedProject(null);
    requestAnimationFrame(() => {
      if (triggerRef.current?.isConnected)
        triggerRef.current.focus({ preventScroll: true });
    });
  }

  function toggleExpanded() {
    if (expanded) {
      setExpanded(false);
      listRef.current?.scrollIntoView({ behavior: "instant", block: "start" });
    } else {
      setExpanded(true);
    }
  }

  return (
    <section className="archive" id="projects" aria-labelledby="archive-title">
      <div className="container">
        <div className="archive-heading">
          <h2 id="archive-title">All projects</h2>
          <p>Apps, tools, themes, and work in progress.</p>
        </div>

        <div className="archive-controls">
          <div
            className="archive-filters"
            role="group"
            aria-label="Filter projects by category"
          >
            {projectCategories.map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={category === item}
                onClick={() => {
                  setCategory(item);
                  setExpanded(false);
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="archive-search">
            <MagnifyingGlass size={20} aria-hidden="true" />
            <input
              type="search"
              aria-label="Find a project"
              placeholder="Find a project"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setExpanded(false);
              }}
            />
          </div>
        </div>

        <p
          className="archive-result-count"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {filteredProjects.length === 0
            ? "No matching projects"
            : `Showing ${visibleProjects.length} of ${filteredProjects.length} ${filteredProjects.length === 1 ? "project" : "projects"}${hasFilters ? " matching your filters" : ""}`}
        </p>

        <div className="archive-projects" ref={listRef}>
          {visibleProjects.map((project) => (
            <button
              type="button"
              className="archive-project"
              key={project.id}
              aria-haspopup="dialog"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setSelectedProject(project);
              }}
            >
              <span className="archive-project-copy">
                <span
                  className="archive-project-name"
                  id={`project-${project.id}-name`}
                >
                  {project.name}
                </span>
                <span
                  className="archive-project-description"
                  id={`project-${project.id}-description`}
                >
                  {project.description}
                </span>
              </span>
              <span className="archive-project-label">{project.label}</span>
              <ArrowRight
                className="archive-project-arrow"
                size={26}
                weight="regular"
                aria-hidden="true"
              />
            </button>
          ))}
          {filteredProjects.length === 0 && (
            <div className="archive-empty">
              <p>No projects found.</p>
              <span>Try a different name, technology, or category.</span>
              <button type="button" onClick={resetFilters}>
                Clear filters <X size={16} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        {filteredProjects.length > INITIAL_COUNT && (
          <div className="archive-expand-wrap">
            <button
              type="button"
              className="archive-expand"
              onClick={toggleExpanded}
              aria-expanded={expanded}
            >
              {expanded
                ? "Show fewer projects"
                : `Show all ${filteredProjects.length} projects`}
              {expanded ? (
                <ArrowUp size={20} aria-hidden="true" />
              ) : (
                <ArrowDown size={20} aria-hidden="true" />
              )}
            </button>
          </div>
        )}

        <dialog
          ref={dialogRef}
          className="project-dialog"
          aria-labelledby="project-dialog-title"
          aria-describedby="project-dialog-summary"
          onClose={handleDialogClosed}
          onClick={(event) => {
            if (event.target !== event.currentTarget) return;
            const bounds = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < bounds.left ||
              event.clientX > bounds.right ||
              event.clientY < bounds.top ||
              event.clientY > bounds.bottom
            )
              closeDialog();
          }}
        >
          {selectedProject && (
            <div className="project-dialog-content">
              <button
                type="button"
                className="project-dialog-close"
                aria-label="Close project details"
                onClick={closeDialog}
                autoFocus
              >
                <X size={22} aria-hidden="true" />
              </button>
              <p className="project-dialog-status">{selectedProject.status}</p>
              <h2 id="project-dialog-title">{selectedProject.name}</h2>
              <p className="project-dialog-summary" id="project-dialog-summary">
                {selectedProject.summary}
              </p>
              <ul
                className="project-dialog-technologies"
                aria-label="Technologies"
              >
                {selectedProject.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <h3>
                {selectedProject.category === "Experiments"
                  ? "Planned features"
                  : "Features"}
              </h3>
              <ul className="project-dialog-features">
                {selectedProject.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              {selectedProject.note && (
                <p className="project-dialog-note">{selectedProject.note}</p>
              )}
              <div className="project-dialog-links">
                {selectedProject.link && (
                  <a
                    className="project-dialog-primary"
                    href={selectedProject.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedProject.link.label}
                    <ArrowUpRight size={19} aria-hidden="true" />
                  </a>
                )}
                <a
                  className={
                    selectedProject.link
                      ? "project-dialog-secondary"
                      : "project-dialog-primary"
                  }
                  href={selectedProject.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogo size={20} aria-hidden="true" />
                  View on GitHub
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          )}
        </dialog>
      </div>
    </section>
  );
}
