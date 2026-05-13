'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { HERO, NAV_ITEMS } from '@/lib/portfolio-config';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-semibold text-lg text-foreground hover:text-accent transition-colors">
            {HERO.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-muted/50 py-4">
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
