import { Code, Monitor, Cpu, Globe, Gauge, Server } from 'lucide-react';
import { Service } from '@/app/lib/types';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Services',
};
const services: Service[] = [
  {
    icon: Code,
    title: "Custom Web Development",
    description: "Bespoke websites tailored to your specific business needs using cutting-edge technologies like React, Next.js, and TypeScript.",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning"],
    tag: "Most Popular",
    link: ''
  },
  {
    icon: Monitor,
    title: "Web Applications",
    description: "Powerful, scalable web applications built with modern frameworks to streamline your business processes.",
    features: ["Real-time Updates", "Cloud Integration", "User Authentication"],
    tag: "Enterprise",
    link: ''
  },
  {
    icon: Server,
    title: "Full-Stack Solutions",
    description: "End-to-end web solutions combining robust backend systems with intuitive frontend interfaces.",
    features: ["API Development", "Database Design", "System Architecture"],
    tag: "Comprehensive",
    link: ''
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Speed up your existing web applications and ensure they run at peak performance.",
    features: ["Load Time Analysis", "Code Optimization", "Caching Strategies"],
    tag: "Technical",
    link: ''
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description: "Custom online stores and marketplaces built to drive sales and enhance user experience.",
    features: ["Payment Integration", "Inventory Management", "Shopping Cart"],
    tag: "Business",
    link: ''
  },
  {
    icon: Cpu,
    title: "Student Development",
    description: "Professional development support for final year IT and Computer Science projects, focusing on real-world applications.",
    features: [
      "Full-stack Applications",
      "Mobile App Development",
      "System Integration"
    ],
    tag: "Academic",
    link: ''
  }
];

const technologies = [
  { name: "React", icon: "/tech/react.svg" },
  { name: "Next.js", icon: "/tech/nextjs.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "Node.js", icon: "/tech/nodejs.svg" },
  { name: "Tailwind CSS", icon: "/tech/tailwind.svg" },
  { name: "MongoDB", icon: "/tech/mongodb.svg" },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-down">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Expertise
          </span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
            Professional Web Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We craft modern, high-performance web solutions that help businesses thrive in the digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              className="relative group bg-white p-8 rounded-3xl transition-all duration-500 hover:translate-y-[-8px]"
              style={{
                boxShadow: '0 4px 20px -2px rgba(39, 111, 187, 0.08)',
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/[0.08] to-emerald-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="relative text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="relative text-gray-600 mb-8 line-clamp-2">
                {service.description}
              </p>

              <ul className="relative space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    data-aos="fade-right"
                    data-aos-delay={index * 50 + idx * 100}
                    className="flex items-center text-gray-600"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* <a
                href={`#contact`}
                className="relative inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-2 transition-all duration-300"
              >
                Get Started
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a> */}
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="mt-32 text-center hidden">
          <h3
            data-aos="fade-up"
            className="text-2xl font-semibold text-gray-900 mb-12"
          >
            Technologies We Work With
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
            {technologies.map((tech, index) => (
              <div
                key={index}
                data-aos="flip-left"
                data-aos-delay={index * 100}
                data-aos-duration="1000"
                className="flex flex-col items-center group"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-110">
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-600">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mt-32 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 md:p-16"
        >
          <h3
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Transform Your Web Presence?
          </h3>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg"
          >
            Let's discuss how our web solutions can help your business grow and succeed in the digital world.
          </p>
          <a
            href="#contact"
            data-aos="zoom-in"
            data-aos-delay="300"
            className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}