'use client';

import { useState } from 'react';
import { useCases } from '@/lib/data';

type UseCaseKey = keyof typeof useCases;

export default function UseCases() {
  const [activeCase, setActiveCase] = useState<UseCaseKey>('onboarding');
  const data = useCases[activeCase];

  return (
    <section id="use-cases" className="scroll-mt-24 space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Pillar 1: Top SNA Use Cases</h2>
        <p className="text-slate-600 text-lg max-w-3xl">
          Beyond simple login, SNA transforms critical user journeys by removing the {"\"OTP Gap.\""} Explore the specific
          workflows below to see how SNA replaces legacy SMS methods.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-200/50 overflow-hidden card-base">
        <div className="flex border-b border-slate-200 overflow-x-auto bg-gradient-to-r from-slate-50 to-blue-50/30">
          {Object.entries(useCases).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveCase(key as UseCaseKey)}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
                activeCase === key
                  ? 'text-blue-700 border-blue-600 bg-gradient-to-br from-blue-50 to-cyan-50 font-semibold'
                  : 'text-slate-600 border-transparent hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              {value.title}
            </button>
          ))}
        </div>

        <div className="p-8 md:p-12 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/10 min-h-[400px]">
          <div className="mb-8 space-y-2">
            <h3 className="text-2xl font-bold text-slate-900 slide-up">{data.title}</h3>
            <p className="text-base font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">✨ Impact: {data.benefit}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-4">
            {data.steps.map((step, index) => (
              <div key={index} className="flex-1 relative group fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-smooth card-base h-full hover:border-blue-300">
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">{step.icon}</div>
                  <h4 className="font-bold text-slate-800 text-sm mb-2 uppercase tracking-wider text-blue-600">{step.label}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
                </div>
                {index < data.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-gradient-to-r from-blue-300 to-cyan-300 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
