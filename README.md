# SNA-Play: Next.js Interactive Dashboard

A modern Next.js application for the SNA (Silent Network Authentication) APAC Market Intelligence Report - an interactive playbook for enterprise sales.

## Features

- **Executive Summary**: Market overview and key takeaways
- **Use Cases**: Interactive tabs showing different SNA implementation scenarios
- **Pain Points**: Comparative analysis of SMS vs SNA solutions
- **Quantitative ROI**: Chart.js visualizations of conversion rates and cost projections
- **Country Deep Dive**: Interactive matrix with 9 APAC markets' regulations, MNO readiness, and fraud trends
- **AI Sales Copilot**: Powered by Google Gemini API for generating contextual sales pitches and handling objections

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Chart.js** - Data visualization
- **React** - UI components
- **Google Generative AI (Gemini)** - AI-powered content generation

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Environment Setup

Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

Get your API key from [Google AI Studio](https://aistudio.google.com/apikey)

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── ExecutiveSummary.tsx
│   ├── UseCases.tsx
│   ├── PainPoints.tsx
│   ├── ROIEvidence.tsx
│   ├── CountryDeepDive.tsx
│   ├── AICopilot.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts             # Data definitions and types
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Building for Production

```bash
npm run build
npm start
```

## Features Detail

### Interactive Use Cases
Toggle between different authentication scenarios with animated step-by-step flows.

### Pain Points Comparison
Visual comparison of SMS OTP issues (Fraud, UX, Cost) with SNA solutions.

### Data Visualization
Chart.js integration showing:
- Conversion rate improvements
- Cost trends and fraud impact

### Country Matrix
Deep dive into 9 APAC markets:
- Australia, Singapore, Indonesia, Hong Kong, China, Thailand, Taiwan, India, Philippines

Each with:
- Regulatory drivers
- MNO (Mobile Network Operator) readiness
- Local fraud trends
- Ideal customer profiles

### AI Copilot
Generated with Gemini API:
- **Pitch Generator**: Create contextual cold emails for different personas (VP of Product, Head of Fraud, CTO)
- **Objection Handler**: Generate data-backed rebuttals to sales objections

All content is tailored to the selected country's market intelligence.

## License

MIT
