'use client';

import Link from 'next/link';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { HERO, SOCIAL_LINKS } from '@/lib/portfolio-config';

export function HeroSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-32">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
          {HERO.name}
        </h1>
        
        <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground mb-6">
          {HERO.title}
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          {HERO.intro}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={HERO.resumeLink}
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded hover:bg-accent/90 transition-colors"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded hover:bg-muted transition-colors"
          >
            View My Work
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors animate-bounce">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
