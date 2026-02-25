'use client';

import { useState } from 'react';
import { countryData } from '@/lib/data';

type CountryKey = keyof typeof countryData;

export default function AICopilot() {
  const [selectedPersona, setSelectedPersona] = useState('VP of Product');
  const [objectionInput, setObjectionInput] = useState('');
  const [pitchOutput, setPitchOutput] = useState('');
  const [objectionOutput, setObjectionOutput] = useState('');
  const [pitchLoading, setPitchLoading] = useState(false);
  const [objectionLoading, setObjectionLoading] = useState(false);
  const [showPitchOutput, setShowPitchOutput] = useState(false);
  const [showObjectionOutput, setShowObjectionOutput] = useState(false);
  const [currentCountry, setCurrentCountry] = useState<CountryKey>('Singapore');

  const callGeminiAPI = async (prompt: string, systemInstructionText: string) => {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return '⚠️ Error: Gemini API key is not configured. Add NEXT_PUBLIC_GEMINI_API_KEY to your .env.local file.';
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      systemInstruction: { parts: [{ text: systemInstructionText }] }
    };

    const maxRetries = 5;
    const baseDelay = 1000;

    for (let i = 0; i < maxRetries; i++) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result.candidates?.[0]?.content?.parts?.[0]?.text || 'No content generated.';
      } catch (error) {
        if (i === maxRetries - 1) {
          console.error('Gemini API Error after retries:', error);
          return '⚠️ Error generating response. Please try again later. Make sure the API environment is configured properly.';
        }
        await new Promise(res => setTimeout(res, baseDelay * Math.pow(2, i)));
      }
    }
  };

  const generatePitch = async () => {
    setPitchLoading(true);
    const country = countryData[currentCountry];

    const systemPrompt = `You are an elite Enterprise B2B SaaS Sales Executive for Twilio. You sell Silent Network Authentication (SNA). 
Your goal is to write a highly tailored, concise, and punchy cold email (max 150 words). Do not use placeholders like [Your Name] at the end, just sign off generally.`;

    const userPrompt = `Write a cold email to a ${selectedPersona} in ${country.name}. 
Here is the local market intelligence to weave in naturally:
- Regulations: ${country.regulations}
- Telecom/MNO Readiness: ${country.mno_status}
- Local Fraud Trends: ${country.fraud}
- Target ICPs: ${country.icp}

Make it sound human, consultative, and focused on solving their specific pain point using SNA.`;

    const result = await callGeminiAPI(userPrompt, systemPrompt);
    setPitchOutput(result);
    setShowPitchOutput(true);
    setPitchLoading(false);
  };

  const handleObjection = async () => {
    if (!objectionInput.trim()) {
      setObjectionOutput('Please enter an objection first.');
      setShowObjectionOutput(true);
      return;
    }

    setObjectionLoading(true);

    const systemPrompt = `You are a Senior Solutions Engineer and Sales Expert for Twilio Silent Network Authentication (SNA). 
Your goal is to provide a smooth, professional, and data-backed rebuttal to customer objections regarding SNA vs SMS OTP.
Structure your response as:
1. Acknowledge (empathize briefly)
2. Refute/Educate (use SNA value props like zero friction, SIM-level deterministic security, elimination of SMS Pumping/AIT fraud)
3. Discovery Question (turn it back to them to keep the conversation going).
Keep it conversational and under 150 words.`;

    const userPrompt = `The prospect just raised this objection: "${objectionInput}"`;

    const result = await callGeminiAPI(userPrompt, systemPrompt);
    setObjectionOutput(result);
    setShowObjectionOutput(true);
    setObjectionLoading(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <section id="ai-copilot" className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">✨ Pillar 5: AI Sales Copilot</h2>
        <p className="text-slate-600 mt-2 max-w-3xl">
          Powered by the Gemini API. Use these tools to instantly generate context-aware sales collateral and handle
          live objections based on the research above.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Tool 1: Contextual Pitch Generator */}
        <div className="bg-white rounded-xl shadow-sm border border-blue-200 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">📨 Contextual Pitch Drafter</h3>
            <p className="text-sm text-slate-600 mb-4">
              Generates a cold email leveraging the currently selected country's regulations, MNO readiness, and local
              fraud trends.
            </p>

            <div className="mb-4">
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Target Persona</label>
              <select
                value={selectedPersona}
                onChange={(e) => setSelectedPersona(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="VP of Product">VP of Product (Focus: UX & Conversion)</option>
                <option value="Head of Fraud">Head of Fraud (Focus: AIT & Security)</option>
                <option value="CTO">CTO (Focus: Implementation & API)</option>
              </select>
            </div>

            <button
              onClick={generatePitch}
              disabled={pitchLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex justify-center items-center space-x-2 disabled:opacity-75"
            >
              <span>✨ Generate Custom Pitch</span>
              {pitchLoading && <div className="loader"></div>}
            </button>

            {showPitchOutput && (
              <div className="mt-4">
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Generated Output</label>
                <div className="relative">
                  <textarea
                    value={pitchOutput}
                    readOnly
                    className="w-full h-48 bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-800 focus:outline-none resize-none custom-scroll"
                  />
                  <button
                    onClick={() => copyToClipboard(pitchOutput)}
                    className="absolute top-2 right-2 p-1.5 bg-white border border-slate-200 rounded text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    title="Copy to clipboard"
                  >
                    📋
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tool 2: Objection Handler */}
        <div className="bg-white rounded-xl shadow-sm border border-purple-200 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-purple-500"></div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">🛡️ Live Objection Handler</h3>
            <p className="text-sm text-slate-600 mb-4">
              Type in a prospect's objection and get a data-backed rebuttal using SNA value propositions.
            </p>

            <div className="mb-4">
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Prospect's Objection</label>
              <textarea
                value={objectionInput}
                onChange={(e) => setObjectionInput(e.target.value)}
                placeholder="e.g., 'WhatsApp is much cheaper for us than trying to implement this new SNA thing...'"
                className="w-full h-20 bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-purple-500 resize-none"
              />
            </div>

            <button
              onClick={handleObjection}
              disabled={objectionLoading}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex justify-center items-center space-x-2 disabled:opacity-75"
            >
              <span>✨ Generate Rebuttal</span>
              {objectionLoading && <div className="loader"></div>}
            </button>

            {showObjectionOutput && (
              <div className="mt-4">
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Suggested Talk Track</label>
                <div className="relative">
                  <textarea
                    value={objectionOutput}
                    readOnly
                    className="w-full h-32 bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-800 focus:outline-none resize-none custom-scroll"
                  />
                  <button
                    onClick={() => copyToClipboard(objectionOutput)}
                    className="absolute top-2 right-2 p-1.5 bg-white border border-slate-200 rounded text-slate-500 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                    title="Copy to clipboard"
                  >
                    📋
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
