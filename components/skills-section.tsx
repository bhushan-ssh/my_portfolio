'use client';

import { SKILLS } from '@/lib/portfolio-config';

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Skills & Expertise</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS.map((category) => (
          <div key={category.category} className="bg-card border border-border rounded-lg p-6 hover:border-accent/70 hover:shadow-md transition-all duration-200">
            <h3 className="font-semibold text-lg text-accent mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full hover:bg-accent/20 transition-colors"
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
