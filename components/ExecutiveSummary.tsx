'use client';

export default function ExecutiveSummary() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden card-base">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600 rounded-full opacity-5 blur-3xl -z-10"></div>
      <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-900/40 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-700/50 fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 pulse-subtle"></span>
            <span className="text-xs font-semibold text-blue-100">Live Research Data</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            The {"\"Silent\""} Revolution in APAC Authentication
          </h2>
          <p className="text-slate-300 text-lg mb-6 max-w-xl">
            Traditional SMS OTP is failing due to toll fraud, latency, and poor UX. Silent Network Authentication (SNA) leverages direct carrier connections to verify users deterministically—without user input.
          </p>
          <div className="flex space-x-4 text-sm font-semibold">
            <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <span className="block text-2xl bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent font-bold">0s</span>
              <span className="text-slate-400">User Friction</span>
            </div>
            <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <span className="block text-2xl bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent font-bold">100%</span>
              <span className="text-slate-400">Phishing Proof</span>
            </div>
            <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <span className="block text-2xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-bold">Verified</span>
              <span className="text-slate-400">Direct Signal</span>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-smooth card-base">
          <h3 className="text-lg font-semibold mb-4 border-b border-white/10">
            Sales Play: Key Takeaways
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span className="text-slate-300 text-sm">
                Position SNA not just as {"\"security\""} but as a <strong>Conversion Driver</strong>.
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
