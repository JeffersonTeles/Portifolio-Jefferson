import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true });

  return (
    <section
      id="projects"
      className="py-24 bg-black text-white border-t border-white/5"
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
            <article key={project.title} className="border-b border-white/5 pb-12 last:border-0">
              <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
                    >
                      Ver projeto
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>

                <div>
                  <p className="text-xs text-white/40 font-mono mb-2">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-white/60 border border-white/10 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
