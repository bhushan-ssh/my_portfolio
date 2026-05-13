'use client';

import { Award } from 'lucide-react';
import { ACHIEVEMENTS } from '@/lib/portfolio-config';

export function HackathonsSection() {
  return (
    <section id="achievements" className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Achievements & Hackathons</h2>

      <div className="space-y-6">
        {ACHIEVEMENTS.map((event) => (
          <div
            key={event.title}
            className="flex gap-4 pb-6 border-b border-border last:border-b-0"
          >
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10">
                <Award size={20} className="text-accent" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-foreground">{event.title}</h3>
              <p className="text-muted-foreground mt-1">{event.description}</p>
              <p className="text-xs text-muted-foreground mt-2">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
