export type VpnCard = {
  rank: number;
  name: string;
  badge: string;
  score: string;
  summary: string;
  highlights: string[];
  price: string;
  cta: string;
  accent: string;
};

export const vpnList: VpnCard[] = [
  {
    rank: 1,
    name: "ExpressVPN",
    badge: "Best Overall",
    score: "9.9/10",
    summary:
      "Fast, polished, and easy to trust for everyday privacy, streaming, and travel.",
    highlights: ["Ultra-fast servers", "Beginner-friendly apps", "30-day guarantee"],
    price: "$3.49/mo",
    cta: "View Deal",
    accent: "from-emerald-500/20 to-emerald-400/5",
  },
  {
    rank: 2,
    name: "ProtonVPN",
    badge: "Best for Privacy",
    score: "9.7/10",
    summary:
      "Strong privacy positioning with a premium feel and a clean, modern product experience.",
    highlights: ["Privacy-first", "Secure Core", "Great free tier reputation"],
    price: "$4.99/mo",
    cta: "See Offer",
    accent: "from-violet-400/25 to-fuchsia-300/10",
  },
  {
    rank: 3,
    name: "VpnMentor",
    badge: "Best Features",
    score: "9.5/10",
    summary:
      "A strong all-rounder with advanced security features and broad appeal.",
    highlights: ["Threat protection", "Large server network", "Good speed"],
    price: "$3.99/mo",
    cta: "Check Price",
    accent: "from-sky-400/20 to-cyan-300/10",
  },
  {
    rank: 4,
    name: "CyberGhost",
    badge: "Best for Beginners",
    score: "9.2/10",
    summary:
      "Simple onboarding and clear use-case targeting for streaming and everyday use.",
    highlights: ["Easy setup", "Streaming profiles", "Long-term value"],
    price: "$2.19/mo",
    cta: "Compare Plans",
    accent: "from-amber-300/25 to-orange-200/10",
  },
  {
    rank: 5,
    name: "Private Internet Access",
    badge: "Best Customization",
    score: "9.0/10",
    summary:
      "Flexible settings and solid value for users who want more control.",
    highlights: ["Highly configurable", "Good price", "Trusted reputation"],
    price: "$2.03/mo",
    cta: "Open Review",
    accent: "from-slate-400/20 to-slate-300/5",
  },
];

export const comparisonRows = [
  {
    label: "Best for",
    values: [
      "Overall balance",
      "Privacy",
      "Advanced features",
      "Beginners",
      "Customization",
    ],
  },
  {
    label: "Ease of use",
    values: ["Excellent", "Very good", "Very good", "Excellent", "Good"],
  },
  {
    label: "Streaming",
    values: ["Excellent", "Very good", "Excellent", "Very good", "Good"],
  },
  {
    label: "Privacy focus",
    values: ["High", "Excellent", "High", "Good", "High"],
  },
  {
    label: "Value for money",
    values: ["Very good", "Good", "Very good", "Excellent", "Excellent"],
  },
  {
    label: "Starting price",
    values: ["$3.49/mo", "$4.99/mo", "$3.99/mo", "$2.19/mo", "$2.03/mo"],
  },
];

export const trustItems = [
  {
    title: "Hands-on review process",
    text:
      "Every recommendation is presented like a real buying guide: clear criteria, digestible summaries, and decision-first UX.",
  },
  {
    title: "Built for global users",
    text:
      "The homepage prioritizes fast scanning, price comparison, device coverage, and clear CTAs for international audiences.",
  },
  {
    title: "Conversion without clutter",
    text:
      "The layout balances editorial trust signals with commercial intent, so the page feels like a product, not a mockup.",
  },
];
