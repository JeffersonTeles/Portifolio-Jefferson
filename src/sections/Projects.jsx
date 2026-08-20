import React from "react";
import { useTranslation } from "react-i18next";

const colors = ["#1a1520", "#151a1e", "#1a1815"];
const accents = ["#e2a63d", "#6ee7b7", "#93c5fd"];

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true });

  return (
    <section className="slide py-24 border-t border-white/[0.04]">
      <div className="max-w-[720px] mx-auto px-6 md:px-10">
        <h2 className="text-[1.6rem] font-bold text-white mb-16">
          {t("projects.heading")}
        </h2>

        <div className="space-y-28">
          {projects.map((project, i) => (
            <article key={project.title} className="group">
              {/* Image placeholder with gradient */}
              <div
                className="w-full aspect-[16/9] rounded-lg mb-6 overflow-hidden flex items-end p-6 relative"
                style={{ background: colors[i % colors.length] }}
              >
                {/* Decorative elements */}
                <div
                  className="absolute top-6 right-6 w-20 h-20 rounded-full opacity-20 blur-xl"
                  style={{ background: accents[i % accents.length] }}
                />
                <div className="absolute top-8 right-10 text-[0.7rem] font-mono text-white/15">
                  {project.title.toLowerCase().replace(/\s+/g, "-")}
                </div>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[0.65rem] font-mono text-white/40 bg-white/[0.05] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-[1.15rem] font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-[0.95rem] text-[#777] leading-relaxed mb-5">
                {project.desc}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[0.75rem] text-[#555] font-mono"
                  >
                    {tech}
                    {tech !== project.stack[project.stack.length - 1] && (
                      <span className="ml-2 text-[#333]">·</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-[0.85rem] text-[#888] hover:text-[#e2a63d] transition-colors duration-300 border-b border-[#333] hover:border-[#e2a63d]"
                >
                  {t("projects.viewProject")} →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
