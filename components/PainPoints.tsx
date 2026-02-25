'use client';

const painPointCards = [
  {
    title: '🚨 Fraud & Security',
    color: 'red',
    problems: [
      {
        label: 'SMS Pumping (AIT)',
        text: 'Bots trigger millions of OTPs, costing enterprises $$$ in bogus fees.'
      },
      {
        label: 'Phishing/MitM',
        text: 'Users tricked into revealing OTPs on fake sites.'
      }
    ],
    fix: 'SNA validates the SIM card itself via carrier signaling. No code to steal, no button to click for bots.'
  },
  {
    title: '📉 User Experience',
    color: 'orange',
    problems: [
      {
        label: 'Latency/Delivery',
        text: '10-30s delay in Indonesia/Philippines leads to drop-off.'
      },
      {
        label: 'App Switching',
        text: 'User leaves app to check SMS, gets distracted, doesn\'t return.'
      }
    ],
    fix: 'Verification happens in < 2 seconds within the app flow. Zero context switching.'
  },
  {
    title: '💰 Cost Volatility',
    color: 'green',
    problems: [
      {
        label: 'Rising Rates',
        text: 'International A2P SMS rates are hiking globally.'
      },
      {
        label: 'Unpredictable Bills',
        text: 'Fraud spikes (AIT) cause sudden 300% monthly bill increases.'
      }
    ],
    fix: 'SNA pricing is generally stable and predictable. Zero charge for pumped traffic (since bots fail verification).'
  }
];

export default function PainPoints() {
  const colorMap: Record<string, { bg: string; border: string; top: string; label: string }> = {
    red: { bg: 'bg-red-50', border: 'border-red-100', top: 'bg-red-500', label: 'text-red-800' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-100', top: 'bg-orange-500', label: 'text-orange-800' },
    green: { bg: 'bg-green-50', border: 'border-green-100', top: 'bg-green-500', label: 'text-green-800' }
  };

  return (
    <section id="pain-points" className="scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Pillar 2: Acute Pain Points Solved</h2>
        <p className="text-slate-600 mt-2">
          Enterprises in APAC are facing a "Perfect Storm" of fraud, cost, and friction. SNA is the direct antidote.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {painPointCards.map((card, idx) => {
          const colors = colorMap[card.color];
          return (
            <div key={idx} className="group relative bg-white rounded-xl shadow-sm border border-slate-200 p-6 transition-all hover:shadow-md">
              <div className={`absolute top-0 left-0 w-full h-1 ${colors.top} rounded-t-xl`}></div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
              </div>
              <ul className="space-y-4 mb-6">
                {card.problems.map((problem, pidx) => (
                  <li key={pidx} className={`${colors.bg} p-3 rounded-lg border ${colors.border}`}>
                    <span className={`text-xs font-bold ${colors.label} uppercase block mb-1`}>Status Quo (SMS)</span>
                    <p className="text-sm text-slate-700">
                      <strong>{problem.label}:</strong> {problem.text}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <h4 className="text-sm font-bold text-blue-600 mb-2">The SNA Fix:</h4>
                <p className="text-sm text-slate-600">{card.fix}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
