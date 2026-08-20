import React from "react";
import { useTranslation } from "react-i18next";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true });

  return (
    <section id="projects" className="section-gap border-t border-white/[0.04]">
      <div className="container-xl">
        <span className="section-label">{t("projects.label")}</span>
        <h2 className="section-title mb-16">{t("projects.heading")}</h2>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="group glass glass-hover p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <span
                      className={`px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full border ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-sm text-white/40 leading-relaxed max-w-2xl mb-5">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono text-white/30 bg-white/[0.03] border border-white/[0.05] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white/60 border border-white/10 rounded-full hover:bg-white/5 hover:text-white hover:border-white/20 transition-all"
                  >
                    {t("projects.launchApp")}
                    <FiExternalLink size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
