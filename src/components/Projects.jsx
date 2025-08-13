import React, { useMemo, useState } from "react";
import "../css/Projects.css";
import WotKImage from "../images/wizards_of_the_keyboard.png";
import LmsImage from "../images/library_managment_system.png";
import LprImage from "../images/license_plate_recognition.jpg";
import FakeStoreImage from "../images/ecommerce_store.png";
import TodoImage from "../images/to_do.png";
import TcImage from "../images/tip_calculator.png";
import HmImage from "../images/hive_mind.png";
import UwImage from "../images/university_website.png";


const DEFAULT_PROJECTS = [
  {
    title: "Parking Enforcement LPR",
    blurb:
      "Mobile-first plate scanner with OpenCV.js and an Express API. Real‑time OCR, permit lookup, and a clean field UI.",
    tags: ["React", "OpenCV.js", "Express", "AWS Rekognition"],
    image: LprImage,
    links: {
      live: "https://mr-reutcky.github.io/parking-enforcement-app/",
      repo: "https://github.com/mr-reutcky/parking-enforcement-app",
    },
  },
  {
    title: "Library Management System",
    blurb:
      "ASP.NET MVC app with role-based access (Librarian/User), inventory, and checkout/returns. CRUD operations with EF Core.",
    tags: ["C#", "ASP.NET MVC", "SQL", "Entity Framework Core"],
    image: LmsImage,
    links: {
      live: "https://github.com/femo-dev/library-management-system",
      repo: "https://github.com/femo-dev/library-management-system",
    },
  },
  {
    title: "Wizards of the Keyboard",
    blurb:
      "A fast-paced word game where players cast spells by typing words quickly and accurately with a leaderboard.",
    tags: ["JavaScript", "HTML5", "CSS", "Game Development"],
    image: WotKImage,
    links: {
      live: "https://mr-reutcky.github.io/word-game/",
      repo: "https://github.com/mr-reutcky/word-game"
    }
  },
  {
    title: "React Fake Store",
    blurb:
      "A modern eCommerce store built with React and the Fake Store API, featuring product browsing, category filtering and more.",
    tags: ["React", "JavaScript", "CSS", "API Integration"],
    image: FakeStoreImage,
    links: {
      live: "https://mr-reutcky.github.io/ecommerce-store/",
      repo: "https://github.com/mr-reutcky/ecommerce-store"
    }
  },
  {
    title: "React To-Do App",
    blurb:
      "A task management app built with React, featuring create, update, complete, and delete functionality.",
    tags: ["React", "JavaScript", "CSS", "State Management"],
    image: TodoImage,
    links: {
      live: "https://mr-reutcky.github.io/to-do/",
      repo: "https://github.com/mr-reutcky/to-do"
    }
  },
  {
    title: "Tip Calculator",
    blurb:
      "A simple and responsive tip calculator built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: TcImage,
    links: {
      live: "https://mr-reutcky.github.io/tip-calculator/",
      repo: "https://github.com/mr-reutcky/tip-calculator"
    }
  },
  {
    title: "Hive Mind (Vanilla JS)",
    blurb:
      "A LinkedIn-style networking UI with a hexagon theme, built in plain HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    image: HmImage,
    links: {
      live: "https://mr-reutcky.github.io/hive-mind/home.html",
      repo: "https://github.com/mr-reutcky/hive-mind"
    }
  },
  {
    title: "University Website",
    blurb:
      "A clean, responsive university website built using only HTML and CSS.",
    tags: ["HTML", "CSS", "Responsive Design"],
    image: UwImage,
    links: {
      live: "https://mr-reutcky.github.io/university-website/",
      repo: "https://github.com/mr-reutcky/university-website"
    }
  },
];

export default function Projects({ items = DEFAULT_PROJECTS }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.blurb.toLowerCase().includes(q) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(q))
    );
  }, [items, query]);

  return (
    <section className="projects" id="projects" aria-label="Projects">
      <div className="projects__fade" aria-hidden="true"></div>

      <div className="projects__inner">
        <header className="projects__header">
          <h2 className="projects__title">Projects</h2>
          <div className="projects__controls" role="search">
            <input
              className="projects__search"
              type="search"
              placeholder="Search projects or tech…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search projects"
            />
          </div>
        </header>

        <ul className="projects__grid">
          {filtered.map((p, i) => (
            <li key={p.title + i} className="project-card">
              <div className="project-card__media">
                {p.image ? (
                  <img src={p.image} alt={`${p.title} cover`} />
                ) : (
                  <div className="project-card__placeholder" aria-hidden="true">
                    <div className="project-card__rays"></div>
                  </div>
                )}
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__blurb">{p.blurb}</p>

                {p.tags?.length ? (
                  <div className="chips">
                    {p.tags.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                ) : null}

                <div className="project-card__actions">
                  {p.links?.live && (
                    <a className="btn btn--primary" href={p.links.live} target="_blank" rel="noreferrer" aria-label={`Open live demo of ${p.title}`}>
                      Live
                    </a>
                  )}
                  {p.links?.repo && (
                    <a className="btn btn--ghost" href={p.links.repo} target="_blank" rel="noreferrer" aria-label={`Open repository of ${p.title}`}>
                      Repo
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {filtered.length === 0 && (
          <p className="projects__empty" role="status">
            No results. Try a different keyword.
          </p>
        )}
      </div>

      <div className="projects__glow" aria-hidden="true"></div>
    </section>
  );
}
