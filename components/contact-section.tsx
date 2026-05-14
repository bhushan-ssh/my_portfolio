'use client';

import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT } from '@/lib/portfolio-config';

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">{CONTACT.title}</h2>
        <p className="text-center text-muted-foreground mb-12">{CONTACT.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <a 
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="flex flex-col items-center gap-3 p-6 bg-background border border-border rounded-lg hover:border-accent/70 hover:bg-accent/5 transition-all"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
              <Mail className="text-accent" size={24} />
            </div>
            <h3 className="font-semibold text-foreground">Email</h3>
            <p className="text-sm text-muted-foreground text-center hover:text-accent transition-colors">{SOCIAL_LINKS.email}</p>
          </a>

          {/* Phone */}
          <a 
            href={`tel:${SOCIAL_LINKS.phone}`}
            className="flex flex-col items-center gap-3 p-6 bg-background border border-border rounded-lg hover:border-accent/70 hover:bg-accent/5 transition-all"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
              <Phone className="text-accent" size={24} />
            </div>
            <h3 className="font-semibold text-foreground">Phone</h3>
            <p className="text-sm text-muted-foreground text-center hover:text-accent transition-colors">{SOCIAL_LINKS.phone}</p>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center gap-3 p-6 bg-background border border-border rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
              <MapPin className="text-accent" size={24} />
            </div>
            <h3 className="font-semibold text-foreground">Location</h3>
            <p className="text-sm text-muted-foreground text-center">{SOCIAL_LINKS.location}</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center mb-6">Connect on social media</p>
          <div className="flex justify-center gap-6">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-full hover:border-accent/70 hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-full hover:border-accent/70 hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
