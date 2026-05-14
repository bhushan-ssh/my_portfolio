'use client';

import Link from 'next/link';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { HERO, SOCIAL_LINKS } from '@/lib/portfolio-config';

export function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
          {HERO.name}
        </h1>
        
        <h2 className="text-xl sm:text-2xl font-semibold text-accent mb-6">
          {HERO.title}
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          {HERO.intro}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={HERO.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-200"
          >
            View My Work
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border rounded-full hover:border-accent/70 hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border rounded-full hover:border-accent/70 hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="p-3 border border-border rounded-full hover:border-accent/70 hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-8 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
