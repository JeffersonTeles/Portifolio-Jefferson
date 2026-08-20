import React from "react";
import { useTranslation } from "react-i18next";
import ProjectImage from "../components/ProjectImage";

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
            <article
              key={project.title}
              className="group rounded-xl p-6 -mx-6 hover:bg-white/[0.015] transition-colors duration-500"
            >
              <ProjectImage
                title={project.title}
                index={i}
                stack={project.stack}
              />

              <h3 className="text-[1.15rem] font-bold text-white mb-3 group-hover:text-[#e2a63d]/90 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-[0.95rem] text-[#777] leading-relaxed mb-5">
                {project.desc}
              </p>

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
