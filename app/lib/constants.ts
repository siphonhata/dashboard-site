// lib/constants.ts
import { Code, Monitor, Smartphone, Blocks, Search, Shield } from 'lucide-react';
import { Service, Feature } from './types';

export const SERVICES: Service[] = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with modern technologies and best practices",
    link: "/services/web-development"
  },
  {
    icon: Monitor,
    title: "Web Applications",
    description: "Scalable and secure applications for your business needs",
    link: "/services/web-applications"
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring perfect display on all devices",
    link: "/services/responsive-design"
  }
];

export const FEATURES: Feature[] = [
  {
    icon: Blocks,
    title: "Modern Technology Stack",
    description: "Using the latest and most reliable technologies"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Built-in best practices for search engine visibility"
  },
  {
    icon: Shield,
    title: "Security Focused",
    description: "Implementing best security practices for your peace of mind"
  }
];