'use client';

import { useState } from 'react';
import { countryData } from '@/lib/data';

type CountryKey = keyof typeof countryData;

const countryList = Object.keys(countryData) as CountryKey[];

export default function CountryDeepDive() {
  const [selectedCountry, setSelectedCountry] = useState<CountryKey>('Singapore');
  const country = countryData[selectedCountry];

  return (
    <section id="country-deep-dive" className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Pillar 4: APAC Country-by-Country Matrix</h2>
        <p className="text-slate-600 mt-2">
          Click on a market to view specific Regulatory Drivers, MNO Readiness, and Ideal Customer Profiles.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 h-auto lg:h-[600px]">
        {/* Country Selector Grid */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-3 content-start">
          {countryList.map((key) => {
            const c = countryData[key];
            return (
              <button
                key={key}
                onClick={() => setSelectedCountry(key)}
                className={`country-card bg-white p-4 rounded-xl border shadow-sm hover:shadow-md transition-all text-left flex items-center space-x-3 ${
                  selectedCountry === key
                    ? 'border-blue-600 bg-blue-50 transform scale-102'
                    : 'border-slate-200'
                }`}
              >
                <span className="text-2xl">{c.flag}</span>
                <span className="font-semibold text-slate-700 text-sm">{c.name}</span>
              </button>
            );
          })}
        </div>

        {/* Detail Panel */}
        <div className="lg:col-span-8 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-full">
          <div className="bg-slate-50 px-8 py-6 border-b border-slate-200">
            <div className="flex justify-between items-center fade-in">
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{country.flag}</span>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{country.name}</h3>
                  <p className="text-slate-500 text-sm">Deep Dive Analysis</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500 uppercase font-semibold">MNO Readiness</div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600" style={{ width: `${country.readiness}%` }}></div>
                  </div>
                  <span className="text-sm font-bold text-blue-600">{country.readiness}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 overflow-y-auto custom-scroll flex-grow">
            <div className="space-y-6 fade-in">
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <h4 className="font-bold text-yellow-800 text-sm mb-2 flex items-center">
                  <span className="mr-2">⚖️</span> Regulatory Drivers
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">{country.regulations}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-800 text-sm mb-2 flex items-center">
                    <span className="mr-2">📡</span> MNO Landscape
                  </h4>
                  <p className="text-slate-600 text-sm">{country.mno_status}</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                  <h4 className="font-bold text-red-800 text-sm mb-2 flex items-center">
                    <span className="mr-2">🛡️</span> Local Fraud Trends
                  </h4>
                  <p className="text-slate-700 text-sm">{country.fraud}</p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-bold text-blue-800 text-sm mb-2 flex items-center">
                  <span className="mr-2">🎯</span> ICP (Ideal Customer Profile)
                </h4>
                <p className="text-blue-900 text-sm font-medium">{country.icp}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
