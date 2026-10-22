import { HudLabel } from '@/components/ui/HudLabel';

const skillGroups = [
  { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { label: 'Backend & Data', items: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'REST APIs'] },
  { label: 'Infra & QA', items: ['Docker', 'Linux', 'Git', 'QA Automation', 'CI/CD'] },
  { label: 'Outros', items: ['Java', 'Python', 'C++', 'Arduino/ESP32'] },
];

export function SkillsTerminal() {
  return (
    <section className="px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3">
          <HudLabel>Skills</HudLabel>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Stack técnico</h2>
        </div>
        <div className="glass rounded-xl p-6 font-mono text-sm">
          <div className="mb-4 flex items-center gap-2 text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span>jefferson@portfolio:~$ skills --list</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-2">
                <span className="text-accent">{group.label}</span>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-border px-2 py-1 text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
