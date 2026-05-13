'use client';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/portfolio-config';

export function CodingProfilesSection() {
  // Create coding profiles from social links (you can customize these)
  const profiles = [
    {
      name: 'GitHub',
      description: 'Full Stack & Data Science Projects',
      link: 'https://github.com/bhushan-ssh/',
      stats: 'Active open-source learner • Portfolio & real-world projects',
    },
    {
      name: 'LinkedIn',
      description: 'Professional profile & internship journey',
      link: 'https://linkedin.com/in/bhushan-ssh',
      stats: 'Data Science Student @ IIT Madras',
    },
    {
      name: 'LeetCode',
      description: 'DSA & Competitive Programming Practice',
      link: 'https://leetcode.com/YOUR_USERNAME',
      stats: '105 problems solved',
    },
    {
      name: 'HackerRank',
      description: 'Python, SQL & Problem Solving Skills',
      link: 'https://hackerrank.com/YOUR_USERNAME',
      stats: '3 badges • 3⭐ in SQL',
    },
  ];

  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Coding Profiles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 border border-border rounded-lg hover:border-accent bg-card hover:bg-muted transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                {profile.name}
              </h3>
              <ExternalLink size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">{profile.description}</p>
            <div className="text-xs font-medium text-accent">{profile.stats}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
