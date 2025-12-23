
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface RoadmapItem {
  phase: string;
  title: string;
  items: string[];
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface TokenomicsData {
  label: string;
  percentage: number;
  value: string;
  color: string;
}
