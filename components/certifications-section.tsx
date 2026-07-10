'use client';

import { Award } from 'lucide-react';
import { CERTIFICATIONS } from '@/lib/portfolio-config';

export function CertificationsSection() {
  return (
    <section className="border-t border-border bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <a
              key={cert.name}
              href={cert.credentialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-background border border-border rounded-lg hover:border-accent/70 hover:shadow-md transition-all duration-200"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                    <Award size={24} className="text-accent" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-foreground text-base group-hover:text-accent transition-colors">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{cert.organization}</p>
                  <p className="text-xs text-muted-foreground mt-2">{cert.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
