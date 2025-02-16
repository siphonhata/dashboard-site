import React from 'react';
import { Check } from 'lucide-react';
import { Plans } from '@/app/lib/types';
import Link from 'next/link';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Pricing',
};
export default function Pricing() {
  const plans: Plans[] = [
    {
      title: 'Basic Website',
      price: '900',
      description: 'Perfect for small businesses and personal websites',
      features: [
        'Responsive design',
        '3 pages website',
        'Contact form',
        'Basic SEO optimization',
        'Mobile-friendly design',
        '2 month of support'
      ]
    },
    {
      title: 'Advanced Website',
      price: '1700',
      description: 'Ideal for growing businesses and e-commerce',
      features: [
        'Everything in Basic, plus:',
        'Up to 10 pages',
        'E-commerce functionality',
        'Custom animations',
        'Advanced SEO package',
        'Content Management System',
        'Payment gateway integration',
        '4 months of support'
      ],
      highlighted: true
    },
    {
      title: 'Custom Solution',
      price: '3000',
      description: 'For large businesses with specific needs',
      features: [
        'Everything in Advanced, plus:',
        'Unlimited pages',
        'Custom backend development',
        'Third-party API integration',
        'Advanced security features',
        'Database design',
        '8 months of support'
      ]
    }
  ];

  const PricingTier = ({ title, price, description, features, highlighted = false }: Plans) => (
    <div className="group relative h-96 w-full">
      {/* Card Container */}
      <div className="absolute inset-0 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className={`absolute inset-0 flex items-center justify-center rounded-lg bg-white ${
          highlighted ? 'ring-2 ring-blue-600' : ''
        } [backface-visibility:hidden]`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            {highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white">
                  Most Popular
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 h-full w-full overflow-y-auto rounded-lg bg-white p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-gray-900">R{price}</span>
              <span className="ml-2 text-sm text-gray-600">/project</span>
            </div>
            <p className="text-gray-600">{description}</p>
            <ul className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button
  className={`w-full rounded-md px-8 py-3 text-base font-medium transition-colors duration-300 ${
    highlighted
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'border border-gray-300 bg-gray-50 text-gray-900 hover:bg-gray-100'
  }`}
>
  <Link href="#contact" className="block w-full h-full">
    Start Project
  </Link>
</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Web Development Packages
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Professional web development solutions tailored to your needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingTier key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}