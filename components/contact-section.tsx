'use client';

import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT } from '@/lib/portfolio-config';

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">{CONTACT.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {SOCIAL_LINKS.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Phone className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <a href={`tel:${SOCIAL_LINKS.phone}`} className="text-muted-foreground hover:text-accent transition-colors">
                  {SOCIAL_LINKS.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Location</h3>
                <p className="text-muted-foreground">{SOCIAL_LINKS.location}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-white font-medium rounded hover:bg-accent/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center mb-6">Find me on social media</p>
          <div className="flex justify-center gap-6">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
