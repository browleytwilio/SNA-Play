export const useCases = {
  onboarding: {
    title: "Frictionless Onboarding",
    steps: [
      { label: "Step 1", text: "User enters phone number in App.", icon: "📱" },
      { label: "Step 2", text: "App sends number to Twilio API (Background).", icon: "☁️" },
      { label: "Step 3", text: "Carrier verifies SIM session checks out.", icon: "📡" },
      { label: "Step 4", text: "User is verified instantly. No OTP input.", icon: "✅" }
    ],
    benefit: "Reduces drop-off by removing the 15-30s wait for SMS."
  },
  transaction: {
    title: "High-Value Transaction",
    steps: [
      { label: "Step 1", text: "User clicks 'Confirm Transfer'.", icon: "💸" },
      { label: "Step 2", text: "Risk engine triggers SNA check.", icon: "🛡️" },
      { label: "Step 3", text: "Carrier confirms live device presence.", icon: "📡" },
      { label: "Step 4", text: "Transaction approved securely.", icon: "🔒" }
    ],
    benefit: "Prevents remote attacks. The SIM must be physically present."
  },
  recovery: {
    title: "Account Recovery",
    steps: [
      { label: "Step 1", text: "User forgets password, requests reset.", icon: "❓" },
      { label: "Step 2", text: "System triggers SNA instead of email/SMS.", icon: "⚡" },
      { label: "Step 3", text: "Instant verification of possession.", icon: "🆔" },
      { label: "Step 4", text: "User lands on 'Set New Password' screen.", icon: "🔓" }
    ],
    benefit: "Eliminates MitM attacks where hackers intercept reset links."
  },
  stepup: {
    title: "Step-up Authentication",
    steps: [
      { label: "Step 1", text: "User accesses sensitive settings.", icon: "⚙️" },
      { label: "Step 2", text: "Silent check runs in background.", icon: "🕵️" },
      { label: "Step 3", text: "If valid, access granted.", icon: "👍" },
      { label: "Step 4", text: "If fail, fall back to Biometrics/OTP.", icon: "⚠️" }
    ],
    benefit: "Invisible security layer that doesn't annoy the user."
  }
};

export const countryData = {
  Australia: {
    flag: "🇦🇺",
    name: "Australia",
    regulations: "ACMA new rules strictly combat SMS scams. Sender ID registry is active. High scrutiny on A2P traffic makes compliant SNA attractive.",
    mno_status: "High. Telstra, Optus, and Vodafone have mature API capabilities. Coverage >95%.",
    fraud: "Smishing (SMS Phishing) is the #1 threat. 'Hi Mum' scams drove massive regulatory changes.",
    icp: "Banking (Big 4), Government Services, Insurance.",
    readiness: 90
  },
  Singapore: {
    flag: "🇸🇬",
    name: "Singapore",
    regulations: "SSIR (SMS Sender ID Registry) is mandatory. Non-registered SMS is labeled 'Likely Scam'. High cost/effort to maintain SMS compliance.",
    mno_status: "Excellent. Singtel, StarHub, M1 fully integrated. Very fast response times.",
    fraud: "Sophisticated social engineering and Malware targeting banking apps.",
    icp: "Fintech, Digital Government (SingPass equivalent flows), Logistics.",
    readiness: 95
  },
  Indonesia: {
    flag: "🇮🇩",
    name: "Indonesia",
    regulations: "Loose but tightening. Data privacy (PDP Law) gaining traction.",
    mno_status: "Moderate to High. Telkomsel, Indosat, XL Axiata support it. Essential because SMS delivery can be flaky in rural areas.",
    fraud: "Account Takeover (ATO) and massive SMS Pumping (AIT) due to cheap prepaid SIMs.",
    icp: "E-wallets (GoPay, OVO), E-commerce (Tokopedia), Digital Banking.",
    readiness: 80
  },
  HongKong: {
    flag: "🇭🇰",
    name: "Hong Kong",
    regulations: "Real-name registration for SIM cards is now mandatory, reducing anonymous burner SIM risks but increasing compliance checks.",
    mno_status: "High. CSL, CMHK, SmarTone. Very reliable infrastructure.",
    fraud: "Crypto-related fraud and high-value banking ATO.",
    icp: "Virtual Banks, Crypto Exchanges, Wealth Management.",
    readiness: 88
  },
  China: {
    flag: "🇨🇳",
    name: "China",
    regulations: "Extremely Strict. PIPL (Personal Information Protection Law). SMS content is heavily scrubbed/blocked.",
    mno_status: "High Technical Readiness (China Mobile/Unicom/Telecom), but access is strictly gated for foreign enterprises.",
    fraud: "Telecom fraud is a major state crackdown target.",
    icp: "Domestic Super-apps, MNCs with local entities (luxury retail).",
    readiness: 75
  },
  Thailand: {
    flag: "🇹🇭",
    name: "Thailand",
    regulations: "NBTC active in blocking scam SMS/calls. PDPA in effect.",
    mno_status: "Good. AIS and TrueMove leading.",
    fraud: "Call center gangs and SMS link scams.",
    icp: "Retail Banking, Super-apps (Grab/Line), E-commerce.",
    readiness: 70
  },
  Taiwan: {
    flag: "🇹🇼",
    name: "Taiwan",
    regulations: "NCC cracking down on roaming bulk SMS.",
    mno_status: "High. Chunghwa Telecom, Taiwan Mobile.",
    fraud: "Investment scams via SMS.",
    icp: "Gaming, E-commerce, Tech Hardware sector.",
    readiness: 85
  },
  India: {
    flag: "🇮🇳",
    name: "India",
    regulations: "DLT (Distributed Ledger Technology) scrubbing for SMS is a nightmare for delivery rates. SNA bypasses content scrubbing.",
    mno_status: "Complex. Jio, Airtel, Vi have capabilities but integration can be bureaucratic.",
    fraud: "Sim Swaps, UPI Fraud, KYC fraud.",
    icp: "Fintech (UPI apps), Neobanks, Gig Economy.",
    readiness: 65
  },
  Philippines: {
    flag: "🇵🇭",
    name: "Philippines",
    regulations: "SIM Registration Act recently implemented to curb scams.",
    mno_status: "Improving. Globe and Smart. Latency is the main driver for switching to SNA.",
    fraud: "Smishing is rampant. Prepaid market dominance makes ATO easier.",
    icp: "Remittance Apps, Digital Lending, BPO tools.",
    readiness: 70
  }
};
