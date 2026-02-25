'use client';

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const conversionData = [
  { name: 'SMS OTP', rate: 72 },
  { name: 'SNA', rate: 91 },
];

const costData = [
  { month: 'Jan', sms: 5000, sna: 4500 },
  { month: 'Feb', sms: 5200, sna: 4600 },
  { month: 'Mar', sms: 8500, sna: 4700 },
  { month: 'Apr', sms: 5100, sna: 4800 },
  { month: 'May', sms: 12000, sna: 4900 },
  { month: 'Jun', sms: 5300, sna: 5000 },
];

const barColors = ['#cbd5e1', '#2563eb'];
const lineColors = { sms: '#ef4444', sna: '#22c55e' };

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-lg">
        <p className="text-sm font-semibold text-slate-900">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p
            key={index}
            className="text-sm font-medium"
            style={{ color: entry.color }}
          >
            {entry.name}: {typeof entry.value === 'number' && payload[0].dataKey === 'sms' ? `$${entry.value.toLocaleString()}` : `${entry.value}%`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function ROIEvidence() {
  return (
    <section id="roi-evidence" className="scroll-mt-24 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Pillar 3: Quantitative Evidence & ROI
        </h2>
        <p className="text-slate-600 text-lg">
          Data-driven proof points to build the business case for Budget Holders.
        </p>
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Conversion Rate Chart */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200/50 card-base hover:shadow-xl transition-smooth">
          <h3 className="text-xl font-bold text-slate-800 mb-6">
            📊 Conversion Rate: SMS vs. SNA
          </h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={conversionData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" label={{ value: 'Rate (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="rate" radius={[8, 8, 0, 0]} animationDuration={1000}>
                {conversionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={barColors[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-slate-500 mt-4 text-center italic">
            Source: Industry Aggregated Data (Fintech/E-comm benchmarks)
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm font-semibold text-blue-900">
              💡 Insight: SNA achieves 19 percentage points higher conversion rate, translating to significant revenue uplift.
            </p>
          </div>
        </div>

        {/* Cost Projection Chart */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200/50 card-base hover:shadow-xl transition-smooth">
          <h3 className="text-xl font-bold text-slate-800 mb-6">
            💰 Cumulative Cost: SMS Fraud Impact vs. SNA
          </h3>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={costData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis
                stroke="#64748b"
                label={{ value: 'Cost ($)', angle: -90, position: 'insideLeft' }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Line
                type="monotone"
                dataKey="sms"
                name="SMS Costs (Volatile)"
                stroke={lineColors.sms}
                strokeWidth={3}
                dot={{ fill: lineColors.sms, r: 5 }}
                activeDot={{ r: 7 }}
                animationDuration={1000}
              />
              <Line
                type="monotone"
                dataKey="sna"
                name="SNA Costs (Predictable)"
                stroke={lineColors.sna}
                strokeWidth={3}
                dot={{ fill: lineColors.sna, r: 5 }}
                activeDot={{ r: 7 }}
                animationDuration={1000}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-xs text-slate-500 mt-4 text-center italic">
            Scenario: Enterprise with 100k auths/mo, suffering 5% AIT attacks on SMS.
          </p>
          <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-100">
            <p className="text-sm font-semibold text-red-900">
              ⚠️ Risk: SMS fraud spikes cause unpredictable billing. SNA provides cost stability and predictability.
            </p>
          </div>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: '📈', value: '+18%', label: 'Avg. Conversion Lift', color: 'from-blue-500 to-cyan-500' },
          { icon: '🎯', value: '-85%', label: 'Support Tickets (OTP)', color: 'from-green-500 to-emerald-500' },
          { icon: '🛡️', value: '0%', label: 'Toll Fraud Liability', color: 'from-purple-500 to-pink-500' },
          { icon: '⚡', value: '2.1s', label: 'Avg. Verify Time', color: 'from-orange-500 to-red-500' },
        ].map((metric, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${metric.color} p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-smooth card-base`}
          >
            <div className="text-3xl mb-2">{metric.icon}</div>
            <div className="text-3xl font-bold mb-1">{metric.value}</div>
            <div className="text-sm opacity-90 font-medium">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* ROI Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 card-base">
        <h3 className="text-xl font-bold text-slate-900 mb-4">📊 ROI Summary</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Revenue Impact',
              stats: [
                { label: 'Conversion Uplift', value: '18%' },
                { label: 'Per 1M Users', value: '+$540k' },
              ],
            },
            {
              title: 'Cost Savings',
              stats: [
                { label: 'SMS Elimination', value: '100%' },
                { label: 'Support Reduction', value: '-$200k/yr' },
              ],
            },
            {
              title: 'Risk Mitigation',
              stats: [
                { label: 'Fraud Protection', value: '100%' },
                { label: 'Compliance Ready', value: '✓ Yes' },
              ],
            },
          ].map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="font-bold text-slate-900">{section.title}</h4>
              {section.stats.map((stat, sidx) => (
                <div key={sidx} className="flex justify-between items-center py-2 border-b border-blue-200/50">
                  <span className="text-slate-600 text-sm">{stat.label}</span>
                  <span className="font-bold text-blue-600">{stat.value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
