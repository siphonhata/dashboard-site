// lib/constants.ts
import { Code, Monitor, Smartphone, Blocks, Search, Shield } from 'lucide-react';
import { Service, Feature, Plans } from './types';

export const SERVICES: Service[] = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with modern technologies and best practices",
    link: "/services/web-development",
    tag: " ",
    features: []
  },
  {
    icon: Monitor,
    title: "Web Applications",
    description: "Scalable and secure applications for your business needs",
    link: "/services/web-applications",
    tag: " ",
    features: []
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring perfect display on all devices",
    link: "/services/responsive-design",
    tag: " ",
    features: []
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

export const PLANS: Plans[] = [
  {
    title: 'Basic Website',
    price: '999',
    description: 'Perfect for small businesses and personal websites',
    features: [
      'Responsive design',
      '5 pages website',
      'Contact form',
      'Basic SEO optimization',
      'Mobile-friendly design',
      '2 rounds of revisions',
      '1 month of support'
    ]
  },
  {
    title: 'Advanced Website',
    price: '2499',
    description: 'Ideal for growing businesses and e-commerce',
    features: [
      'Everything in Basic, plus:',
      'Up to 10 pages',
      'E-commerce functionality',
      'Custom animations',
      'Advanced SEO package',
      'Content Management System',
      'Payment gateway integration',
      '3 months of support'
    ],
    highlighted: true
  },
  {
    title: 'Custom Solution',
    price: '4999',
    description: 'For large businesses with specific needs',
    features: [
      'Everything in Advanced, plus:',
      'Unlimited pages',
      'Custom backend development',
      'Third-party API integration',
      'Advanced security features',
      'Database design',
      'Performance optimization',
      '6 months of support'
    ]
  }
];
