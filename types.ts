export interface Material {
  id: string;
  name: string;
  type: string;
  origin: string;
  matchScore: number;
  pricePerSqFt: number;
  currency: string;
  leadTimeWeeks: number;
  verified: boolean;
  provenanceId: string;
  imageUrl: string;
  supplier: string;
}

export interface Project {
  id: string;
  name: string;
  status: 'Draft' | 'In Progress' | 'Committed';
  location: string;
  lastActivity: string;
}

export enum AppScreen {
  DASHBOARD = 'DASHBOARD',
  UPLOAD_SPECS = 'UPLOAD_SPECS',
  RESULTS = 'RESULTS',
  COMMITMENT = 'COMMITMENT',
  SUCCESS = 'SUCCESS',
  ORDERS = 'ORDERS',
  WALLET = 'WALLET',
  ANALYTICS = 'ANALYTICS',
  SUPPLIERS = 'SUPPLIERS',
  SETTINGS = 'SETTINGS'
}

export interface OrderDetails {
  materialId: string;
  quantity: number;
  totalPrice: number;
  projectAddress: string;
}