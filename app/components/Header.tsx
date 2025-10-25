'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-fg/10">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">PP</span>
          </div>
          <span className="font-bold text-lg text-fg">PricePoint</span>
        </div>
        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 hover:bg-fg/5 rounded-lg transition-colors duration-200"
          aria-label="Menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-fg" />
          ) : (
            <Menu className="w-6 h-6 text-fg" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface border-b border-fg/10 animate-fade-in">
          <nav className="px-4 py-3 space-y-2">
            <a href="#" className="block py-2 px-3 hover:bg-fg/5 rounded-lg text-fg transition-colors duration-200">
              Profile
            </a>
            <a href="#" className="block py-2 px-3 hover:bg-fg/5 rounded-lg text-fg transition-colors duration-200">
              Settings
            </a>
            <a href="#" className="block py-2 px-3 hover:bg-fg/5 rounded-lg text-fg transition-colors duration-200">
              Help
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
