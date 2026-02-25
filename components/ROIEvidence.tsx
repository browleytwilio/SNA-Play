'use client';

import { useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Chart from 'chart.js/auto';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

export default function ROIEvidence() {
  useEffect(() => {
    const conversionCtx = document.getElementById('conversionChart') as HTMLCanvasElement;
    const costCtx = document.getElementById('costChart') as HTMLCanvasElement;

    if (conversionCtx && !conversionCtx.dataset.initialized) {
      conversionCtx.dataset.initialized = 'true';
      new Chart(conversionCtx, {
        type: 'bar',
        data: {
          labels: ['SMS OTP', 'SNA (Silent Auth)'],
          datasets: [
            {
              label: 'Conversion Rate (%)',
              data: [72, 91],
              backgroundColor: ['#cbd5e1', '#3b82f6'],
              borderRadius: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: { beginAtZero: true, max: 100 }
          }
        }
      });
    }

    if (costCtx && !costCtx.dataset.initialized) {
      costCtx.dataset.initialized = 'true';
      new Chart(costCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'SMS Costs (Volatile + Toll Fraud)',
              data: [5000, 5200, 8500, 5100, 12000, 5300],
              borderColor: '#ef4444',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              fill: true,
              tension: 0.4
            },
            {
              label: 'SNA Costs (Predictable)',
              data: [4500, 4600, 4700, 4800, 4900, 5000],
              borderColor: '#22c55e',
              backgroundColor: 'transparent',
              borderWidth: 3,
              tension: 0.1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  return context.dataset.label + ': $' + context.parsed.y;
                }
              }
            }
          }
        }
      });
    }
  }, []);

  return (
    <section id="roi-evidence" className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Pillar 3: Quantitative Evidence & ROI</h2>
        <p className="text-slate-600 mt-2">Data-driven proof points to build the business case for Budget Holders.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Conversion Rate: SMS vs. SNA</h3>
          <div className="chart-container">
            <canvas id="conversionChart"></canvas>
          </div>
          <p className="text-xs text-slate-500 mt-4 italic text-center">
            Source: Industry Aggregated Data (Fintech/E-comm benchmarks)
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Cumulative Cost: SMS Fraud Impact vs. SNA</h3>
          <div className="chart-container">
            <canvas id="costChart"></canvas>
          </div>
          <p className="text-xs text-slate-500 mt-4 italic text-center">
            Scenario: Enterprise with 100k auths/mo, suffering 5% AIT attacks on SMS.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
          <div className="text-2xl font-bold text-blue-700">+18%</div>
          <div className="text-xs text-blue-600 uppercase font-semibold">Avg. Conversion Lift</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
          <div className="text-2xl font-bold text-blue-700">-85%</div>
          <div className="text-xs text-blue-600 uppercase font-semibold">Support Tickets (OTP Issues)</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
          <div className="text-2xl font-bold text-blue-700">0%</div>
          <div className="text-xs text-blue-600 uppercase font-semibold">Toll Fraud Liability</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
          <div className="text-2xl font-bold text-blue-700">2.1s</div>
          <div className="text-xs text-blue-600 uppercase font-semibold">Avg. Verify Time</div>
        </div>
      </div>
    </section>
  );
}
