'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'pain-points', label: 'Pain Points' },
    { id: 'roi-evidence', label: 'Quantitative ROI' },
    { id: 'country-deep-dive', label: 'APAC Geo Matrix' },
    { id: 'ai-copilot', label: '✨ AI Copilot', isSpecial: true },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50 transition-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              SNA Market Intelligence <span className="gradient-text bg-gradient-to-r from-blue-600 to-cyan-500">APAC</span>
            </h1>
            <span className="text-xs text-slate-500 font-medium">Enterprise Sales Strategy & Research Report</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-item px-4 py-2 text-sm font-medium transition-smooth rounded-lg ${
                  item.isSpecial
                    ? 'text-blue-600 hover:bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-smooth"
          >
            <svg
              className={`w-6 h-6 transition-transform ${mobileMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-smooth ${
                  item.isSpecial
                    ? 'text-blue-600 hover:bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
