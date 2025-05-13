import React from 'react';
import { Check, Zap, Sparkles, Code } from 'lucide-react';
import Link from 'next/link';

type Plan = {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  icon?: React.ReactNode;
  cta?: string;
};

export default function Pricing() {
  const plans: Plan[] = [
    {
      title: 'Starter Website',
      price: '3,499',
      description: 'Perfect for small businesses and personal brands',
      features: [
        '5-page responsive website',
        'Mobile-optimized design',
        'Basic SEO setup',
        'Contact form integration',
        '3 months technical support',
        '1 round of revisions'
      ],
      icon: <Code className="h-6 w-6 text-blue-600" />,
      cta: 'Launch My Starter Site'
    },
    {
      title: 'Business Solution',
      price: '6,999',
      description: 'Ideal for growing businesses and e-commerce',
      features: [
        'Everything in Starter, plus:',
        'Up to 15 pages',
        'E-commerce functionality',
        'Advanced SEO optimization',
        'CMS integration',
        'Payment gateway setup',
        '6 months support',
        '3 rounds of revisions'
      ],
      highlighted: true,
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      cta: 'Boost My Business'
    },
    {
      title: 'Enterprise Package',
      price: '10,999+',
      description: 'Custom solutions for large businesses',
      features: [
        'Everything in Business, plus:',
        'Unlimited pages',
        'Custom web application',
        'API integrations',
        'Premium security features',
        'Database development',
        '12 months priority support',
        'Dedicated account manager'
      ],
      icon: <Sparkles className="h-6 w-6 text-purple-600" />,
      cta: 'Build Custom Solution'
    }
  ];

  const PricingCard = ({ title, price, description, features, highlighted, icon, cta }: Plan) => (
    <div className={`relative flex flex-col rounded-xl border bg-white shadow-lg transition-all hover:shadow-xl ${
      highlighted ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-200'
    }`}>
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="p-6">
        <div className="mb-4 flex items-center gap-2">
          {icon}
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        
        <div className="mb-6">
          <p className="text-4xl font-bold text-gray-900">
            R{price}
            <span className="text-base font-normal text-gray-600">/once-off</span>
          </p>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
        
        <ul className="mb-8 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              <span className="ml-2 text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto border-t border-gray-200 p-6">
        <Link
          href="#contact"
          className={`block w-full rounded-lg px-6 py-3 text-center font-medium transition-colors ${
            highlighted 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          {cta}
        </Link>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transparent Pricing, No Surprises
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Professional web solutions with clear deliverables and fixed pricing
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need something custom?{' '}
            <Link href="#contact" className="font-medium text-blue-600 hover:text-blue-500">
              Get a personalized quote
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}