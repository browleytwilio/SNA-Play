'use client';

import { useState } from 'react';
import { useCases } from '@/lib/data';

type UseCaseKey = keyof typeof useCases;

export default function UseCases() {
  const [activeCase, setActiveCase] = useState<UseCaseKey>('onboarding');
  const data = useCases[activeCase];

  return (
    <section id="use-cases" className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Pillar 1: Top SNA Use Cases</h2>
        <p className="text-slate-600 mt-2 max-w-3xl">
          Beyond simple login, SNA transforms critical user journeys by removing the {"\"OTP Gap.\""} Explore the specific
          workflows below to see how SNA replaces legacy SMS methods.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="flex border-b border-slate-200 overflow-x-auto">
          {Object.entries(useCases).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveCase(key as UseCaseKey)}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                activeCase === key
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {value.title}
            </button>
          ))}
        </div>

        <div className="p-8 bg-slate-50 min-h-[300px]">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900">{data.title}</h3>
            <p className="text-blue-600 font-medium mt-1">✨ Impact: {data.benefit}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {data.steps.map((step, index) => (
              <div key={index} className="flex-1 min-w-[200px] relative group fade-in">
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm z-10 relative">
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">{step.label}</h4>
                  <p className="text-slate-600 text-xs">{step.text}</p>
                </div>
                {index < data.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
