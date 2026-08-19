import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true });

  return (
    <section
      id="projects"
      className="section-padding border-b-section"
      aria-labelledby="projects-heading"
    >
      <div className="page-container">
        <p className="text-sm text-white/60 mb-3">{t("projects.label")}</p>
        <h2
          id="projects-heading"
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          {t("projects.heading")}
        </h2>

        <div className="space-y-16">
          {projects.map((project) => (
            <article key={project.title} className="group">
              <div className="border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors">
                <div className="grid md:grid-cols[2fr_1fr] gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-amber-300">
                        {project.status === "Publicado" || project.status === "Published" || project.status === "Open source"
                          ? "LIVE"
                          : "PRIVATE"}
                      </span>
                      <span className="tag">{project.status}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed">
                      {project.desc}
                    </p>

                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-amber-300 hover:text-amber-200"
                      >
                        Ver projeto
                        <FiExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  {project.image && (
                    <div className="rounded-lg overflow-hidden border border-white/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-48 object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
