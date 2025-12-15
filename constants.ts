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
    // Realistic white marble with gold veining
    imageUrl: 'https://images.unsplash.com/photo-1615800098779-1be82877bbe1?q=80&w=800&auto=format&fit=crop',
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
    // Clean white marble with distinct grey veins
    imageUrl: 'https://images.unsplash.com/photo-1596429188177-802555547433?q=80&w=800&auto=format&fit=crop',
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
    // Brecciated marble texture
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    supplier: 'Global Stone Imports'
  }
];

export const PROVENANCE_STEPS = [
  { id: 1, label: 'Extraction', entity: 'Carrara Quarry #4', date: 'Oct 12, 2025', location: 'Italy', verified: true },
  { id: 2, label: 'Fabrication', entity: 'Master Artisans S.p.A', date: 'Nov 03, 2025', location: 'Milan', verified: true },
  { id: 3, label: 'Quality Audit', entity: 'AI Visual Scan v2.4', date: 'Nov 05, 2025', location: 'Digital', verified: true },
  { id: 4, label: 'Logistics', entity: 'Global Freight Partners', date: 'Pending', location: 'Transit', verified: false },
];