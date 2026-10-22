'use client';

import Link from 'next/link';
import Image from 'next/image';
import { portfolioProjects } from '@/config/projects';
import { MagneticTiltCard } from '@/components/ui/MagneticTiltCard';
import { HudLabel } from '@/components/ui/HudLabel';

export function ProjectBento() {
  return (
    <section id="projetos" className="px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3">
          <HudLabel>Projetos</HudLabel>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Trabalho em produção</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {portfolioProjects.map((project) => (
            <Link key={project.slug} href={`/projetos/${project.slug}`} className="block">
              <MagneticTiltCard className="glass overflow-hidden rounded-xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted">{project.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-2 py-0.5 font-mono text-[0.65rem] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </MagneticTiltCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
