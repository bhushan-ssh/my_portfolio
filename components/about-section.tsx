'use client';

import { ABOUT } from '@/lib/portfolio-config';

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">{ABOUT.title}</h2>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {ABOUT.content}
        </p>
      </div>
    </section>
  );
}
