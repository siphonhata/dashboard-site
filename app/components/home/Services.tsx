import { Code, Monitor, Smartphone, Database, Lock, Megaphone } from 'lucide-react';
import { Service } from '@/app/lib/types';


const services: Service[] = [
  {
    icon: Code,
    title: "Custom Web Development",
    description: "Bespoke websites tailored to your specific business needs using cutting-edge technologies and best practices.",
    link: "/services/web-development"
  },
  {
    icon: Monitor,
    title: "Web Applications",
    description: "Powerful, scalable web applications that streamline your business processes and enhance productivity.",
    link: "/services/web-applications"
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first designs that ensure your website looks and performs perfectly across all devices.",
    link: "/services/responsive-design"
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Robust database architecture and management systems to handle your data efficiently and securely.",
    link: "/services/database-solutions"
  },
  {
    icon: Lock,
    title: "Security Implementation",
    description: "Advanced security measures to protect your web assets and user data from modern threats.",
    link: "/services/security"
  },
  {
    icon: Megaphone,
    title: "SEO & Analytics",
    description: "Strategic SEO implementation and detailed analytics to improve your online visibility and track performance.",
    link: "/services/seo-analytics"
  }
];

export default function Services(){
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive web solutions tailored for your business success
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-md mb-4">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <a
                href={service.link}
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300"
              >
                Learn More 
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}