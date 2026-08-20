import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true });

  return (
    <section id="projetos" className="border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
          04 — Projetos
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-14">
          {t("projects.heading")}
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start"
            >
              {/* Text content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded">
                    {project.status === "Publicado" || project.status === "Published" || project.status === "Open source"
                      ? "LIVE"
                      : "WIP"}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 text-slate-500 bg-slate-50 border border-slate-100 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-amber-700 transition-colors"
                  >
                    Ver projeto
                    <FiExternalLink size={14} />
                  </a>
                )}
              </div>

              {/* Image placeholder */}
              {project.image && (
                <div
                  className={`border border-slate-100 rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 aspect-[16/10] flex items-center justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="text-center p-6">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                      <span className="text-lg font-bold text-slate-400">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-mono">
                      {project.title}
                    </p>
                  </div>
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
