'use client';

import { Award } from 'lucide-react';
import { CERTIFICATIONS } from '@/lib/portfolio-config';

export function CertificationsSection() {
  return (
    <section className="border-t border-border bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <a
              key={cert.name}
              href={cert.credentialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-4 bg-background border border-border rounded hover:border-accent/50 hover:bg-background/80 transition-all group"
            >
              <div className="flex-shrink-0">
                <Award size={24} className="text-accent group-hover:text-accent/80 transition-colors" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-foreground text-sm">{cert.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cert.organization}</p>
                <p className="text-xs text-muted-foreground mt-2">{cert.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
