import { Material, Project } from './types';

export const MOCK_PROJECTS: Project[] = [
  { id: 'p1', name: 'Sterling Residence', status: 'In Progress', location: 'Aspen, CO', lastActivity: '2 mins ago' },
  { id: 'p2', name: 'Apex Tower Penthouse', status: 'Draft', location: 'New York, NY', lastActivity: '4 hours ago' },
  { id: 'p3', name: 'Vanguard Estate', status: 'Committed', location: 'London, UK', lastActivity: '1 day ago' },
];

export const MOCK_MATERIALS: Material[] = [
  {
    id: 'm1',
    name: 'Calacatta Oro Marble',
    type: 'Natural Stone',
    origin: 'Carrara, Italy',
    matchScore: 94,
    pricePerSqFt: 395,
    currency: 'USD',
    leadTimeWeeks: 8,
    verified: true,
    provenanceId: '0x7f3...9a2',
    // Detailed texture showing white stone with warm golden/beige veining
    imageUrl: 'https://images.unsplash.com/photo-1615800098779-1be32e60cca3?auto=format&fit=crop&q=80&w=800',
    supplier: 'Tuscany Stoneworks'
  },
  {
    id: 'm2',
    name: 'Statuario Venato',
    type: 'Natural Stone',
    origin: 'Tuscany, Italy',
    matchScore: 91,
    pricePerSqFt: 420,
    currency: 'USD',
    leadTimeWeeks: 12,
    verified: true,
    provenanceId: '0x8b4...2c1',
    // Pure white background with bold, dramatic dark grey veining
    imageUrl: 'https://images.unsplash.com/photo-1605218427306-eea998d78908?auto=format&fit=crop&q=80&w=800',
    supplier: 'Apex Materials'
  },
  {
    id: 'm3',
    name: 'Arabescato Corchia',
    type: 'Natural Stone',
    origin: 'Apuan Alps, Italy',
    matchScore: 86,
    pricePerSqFt: 310,
    currency: 'USD',
    leadTimeWeeks: 6,
    verified: true,
    provenanceId: '0x1c9...5d4',
    // High contrast, busy brecciated grey and white pattern
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    supplier: 'Global Stone Imports'
  }
];

export const PROVENANCE_STEPS = [
  { id: 1, label: 'Extraction', entity: 'Carrara Quarry #4', date: 'Oct 12, 2025', location: 'Italy', verified: true },
  { id: 2, label: 'Fabrication', entity: 'Master Artisans S.p.A', date: 'Nov 03, 2025', location: 'Milan', verified: true },
  { id: 3, label: 'Quality Audit', entity: 'AI Visual Scan v2.4', date: 'Nov 05, 2025', location: 'Digital', verified: true },
  { id: 4, label: 'Logistics', entity: 'Global Freight Partners', date: 'Pending', location: 'Transit', verified: false },
];

export const SUPPLY_RISK_DATA = {
  "risk_radar_data": [
    {
      "material": "Italian Marble",
      "supply_volatility_score": 45,
      "geopolitical_risk_score": 20,
      "lead_time_days": 45
    },
    {
      "material": "Exotic Hardwood",
      "supply_volatility_score": 75,
      "geopolitical_risk_score": 65,
      "lead_time_days": 60
    },
    {
      "material": "Structural Steel",
      "supply_volatility_score": 30,
      "geopolitical_risk_score": 40,
      "lead_time_days": 25
    },
    {
      "material": "Smart Home Tech",
      "supply_volatility_score": 85,
      "geopolitical_risk_score": 55,
      "lead_time_days": 90
    },
    {
      "material": "Architectural Glass",
      "supply_volatility_score": 40,
      "geopolitical_risk_score": 30,
      "lead_time_days": 35
    }
  ],
  "cost_forecast_data": [
    {
      "month": "May 2025",
      "baseline_cost_index": 100.0,
      "forecast_cost_index": 100.0
    },
    {
      "month": "Jun 2025",
      "baseline_cost_index": 100.2,
      "forecast_cost_index": 100.4
    },
    {
      "month": "Jul 2025",
      "baseline_cost_index": 100.5,
      "forecast_cost_index": 101.1
    },
    {
      "month": "Aug 2025",
      "baseline_cost_index": 100.8,
      "forecast_cost_index": 101.8
    },
    {
      "month": "Sep 2025",
      "baseline_cost_index": 101.1,
      "forecast_cost_index": 102.6
    },
    {
      "month": "Oct 2025",
      "baseline_cost_index": 101.4,
      "forecast_cost_index": 103.5
    }
  ]
};