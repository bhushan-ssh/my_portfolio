'use client';

import { Award, Zap } from 'lucide-react';
import { ACHIEVEMENTS } from '@/lib/portfolio-config';

export function HackathonsSection() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Achievements & Hackathons</h2>

      <div className="space-y-6">
        {ACHIEVEMENTS.map((event, index) => (
          <div
            key={event.title}
            className="flex gap-4 p-6 border border-border rounded-lg bg-card hover:border-accent/70 hover:shadow-md transition-all duration-200"
          >
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                {index === 0 ? <Award size={24} className="text-accent" /> : <Zap size={24} className="text-accent" />}
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-foreground text-lg">{event.title}</h3>
              <p className="text-muted-foreground mt-2">{event.description}</p>
              <p className="text-xs text-accent font-semibold mt-3">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
