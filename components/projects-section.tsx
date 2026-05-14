'use client';

import Link from 'next/link';
import { Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/lib/portfolio-config';

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Featured Projects</h2>

        <div className="space-y-6">
          {PROJECTS.map((project, index) => (
            <div
              key={project.title}
              className="group bg-background border border-border rounded-lg p-6 hover:border-accent/70 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex-grow">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-semibold text-sm">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mt-3">{project.description}</p>
                </div>
                <div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 p-2 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded transition-colors"
                    aria-label="View source"
                  >
                    <Github size={20} />
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1.5 bg-accent/10 text-accent rounded-full font-medium">
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
