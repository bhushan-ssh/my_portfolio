'use client';

import Link from 'next/link';
import { ExternalLink, Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/portfolio-config';

export function CodingProfilesSection() {
  const profiles = [
    {
      name: 'GitHub',
      description: 'Full Stack & Data Science Projects',
      link: SOCIAL_LINKS.github,
      stats: 'Active open-source learner • Real-world projects',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      description: 'Professional Network & Internship Journey',
      link: SOCIAL_LINKS.linkedin,
      stats: 'IIT Madras BS Data Science • IT Student',
      icon: Linkedin,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Profiles & Links</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profiles.map((profile) => {
          const IconComponent = profile.icon;
          return (
            <a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border border-border rounded-lg hover:border-accent/70 bg-card hover:bg-accent/5 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                  {profile.name}
                </h3>
                <ExternalLink size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">{profile.description}</p>
              <div className="text-xs font-medium text-accent/80 group-hover:text-accent transition-colors">{profile.stats}</div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
