'use client';

import { SKILLS } from '@/lib/portfolio-config';

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Skills & Expertise</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS.map((category) => (
          <div key={category.category} className="bg-card border border-border rounded p-6">
            <h3 className="font-semibold text-foreground mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded hover:bg-accent/10 hover:text-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
