'use client';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              SNA Market Intelligence <span className="text-blue-600">APAC</span>
            </h1>
            <span className="text-xs text-slate-500">Enterprise Sales Strategy & Research Report</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('use-cases')}
              className="nav-item text-slate-500 hover:text-slate-800 px-1 py-4 text-sm font-medium transition-colors"
            >
              Use Cases
            </button>
            <button
              onClick={() => scrollToSection('pain-points')}
              className="nav-item text-slate-500 hover:text-slate-800 px-1 py-4 text-sm font-medium transition-colors"
            >
              Pain Points
            </button>
            <button
              onClick={() => scrollToSection('roi-evidence')}
              className="nav-item text-slate-500 hover:text-slate-800 px-1 py-4 text-sm font-medium transition-colors"
            >
              Quantitative ROI
            </button>
            <button
              onClick={() => scrollToSection('country-deep-dive')}
              className="nav-item text-slate-500 hover:text-slate-800 px-1 py-4 text-sm font-medium transition-colors"
            >
              APAC Geo Matrix
            </button>
            <button
              onClick={() => scrollToSection('ai-copilot')}
              className="nav-item text-blue-600 hover:text-blue-800 px-1 py-4 text-sm font-bold transition-colors"
            >
              ✨ AI Copilot
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
