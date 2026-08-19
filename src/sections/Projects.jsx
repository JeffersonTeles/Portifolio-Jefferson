import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true });

  return (
    <section
      id="projects"
      className="border-b border-white/5"
      aria-labelledby="projects-heading"
    >
      <div className="page-container py-24">
        <h2
          id="projects-heading"
          className="text-3xl md:text-4xl font-bold text-white mb-16"
        >
          Projetos
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={project.title} className="grid md:grid-cols-[1.5fr_1fr] gap-12">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-amber-300">
                        {project.status === "Publicado" || project.status === "Published" || project.status === "Open source"
                          ? "LIVE"
                          : "PRIVATE"}
                      </span>
                    </div>
                    <span className="text-xs px-3 py-1 text-white/50 border border-white/10 rounded-full">
                      {project.status}
                    </span>
                  </div>

                  <p className="text-slate-300 leading-relaxed">
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

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 text-white/50 border border-white/5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {project.image && (
                <div className={`border border-white/5 rounded-lg overflow-hidden ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
