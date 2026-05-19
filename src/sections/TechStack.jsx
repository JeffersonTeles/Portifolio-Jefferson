import React from 'react';
import { 
  SiJavascript, SiTypescript, SiNodedotjs, SiReact, 
  SiNextdotjs, SiPython, SiFirebase, SiSupabase,
  SiTailwindcss, SiGit, SiDocker, SiPostgresql
} from 'react-icons/si';

const TechStack = () => {
  const technologies = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Python", icon: SiPython },
    { name: "Firebase", icon: SiFirebase },
    { name: "Supabase", icon: SiSupabase },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit }
  ];

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden border-y border-lusion-text/5">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {technologies.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-4 mx-10 md:mx-16 group">
              <tech.icon size={32} className="text-lusion-text/10 group-hover:text-lusion-primary transition-colors duration-500" />
              <span className="text-3xl md:text-5xl font-bold tracking-lusion-tighter text-lusion-text/5 group-hover:text-lusion-text transition-colors duration-500 uppercase select-none">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {technologies.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-4 mx-10 md:mx-16 group">
              <tech.icon size={32} className="text-lusion-text/10 group-hover:text-lusion-primary transition-colors duration-500" />
              <span className="text-3xl md:text-5xl font-bold tracking-lusion-tighter text-lusion-text/5 group-hover:text-lusion-text transition-colors duration-500 uppercase select-none">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
