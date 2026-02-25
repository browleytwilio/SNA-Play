'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-24 border-t border-slate-200/50 py-12 text-center bg-gradient-to-t from-slate-50 via-white to-transparent">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed">
          Powered by Interactive Canvas | Strategic Market Research
        </p>
        <p className="text-slate-500 text-xs">
          © {year} SNA Market Intelligence. All rights reserved.
        </p>
        <div className="flex justify-center gap-1 text-2xs">
          <span>•</span>
          <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-xs">Privacy</a>
          <span>•</span>
          <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-xs">Terms</a>
          <span>•</span>
          <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-xs">Contact</a>
          <span>•</span>
        </div>
      </div>
    </footer>
  );
}
