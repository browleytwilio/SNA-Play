'use client';

export default function ExecutiveSummary() {
  return (
    <section className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 bg-blue-900/50 rounded-full px-3 py-1 mb-4 border border-blue-700">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-semibold text-blue-100">Live Research Data</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 leading-tight">
            The "Silent" Revolution in APAC Authentication
          </h2>
          <p className="text-slate-300 text-lg mb-6 max-w-xl">
            Traditional SMS OTP is failing due to toll fraud, latency, and poor UX. Silent Network Authentication (SNA) leverages direct carrier connections to verify users deterministically—without user input.
          </p>
          <div className="flex space-x-4 text-sm font-semibold">
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="block text-2xl text-green-400">0s</span>
              <span className="text-slate-400">User Friction</span>
            </div>
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="block text-2xl text-blue-400">100%</span>
              <span className="text-slate-400">Phishing Proof</span>
            </div>
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="block text-2xl text-purple-400">Verified</span>
              <span className="text-slate-400">Direct Carrier Signal</span>
            </div>
          </div>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
          <h3 className="text-lg font-semibold mb-4 border-b border-slate-600 pb-2">
            Sales Play: Key Takeaways
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span className="text-slate-300 text-sm">
                Position SNA not just as "security" but as a <strong>Conversion Driver</strong>.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span className="text-slate-300 text-sm">
                Target <strong>Fintech & E-commerce</strong> in SE Asia where SMS latency kills deals.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span className="text-slate-300 text-sm">
                Leverage <strong>AIT (SMS Pumping)</strong> fear—SNA eliminates this vector entirely.
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* Decorative circle */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
}
