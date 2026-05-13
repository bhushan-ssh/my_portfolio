'use client';

import Link from 'next/link';
import { Github } from 'lucide-react';
import { PROJECTS } from '@/lib/portfolio-config';

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Featured Projects</h2>

        <div className="space-y-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mt-2">{project.description}</p>
                </div>
                <div className="flex gap-3">

                  <a
                    href={project.github}
                    className="p-2 text-muted-foreground hover:text-accent hover:bg-muted rounded transition-colors"
                    aria-label="View source"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
