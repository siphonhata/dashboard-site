// app/about/page.tsx
import { Users, Award, Calendar, Globe, Link } from 'lucide-react';
import Image from 'next/image';

const stats = [
  {
    icon: Users,
    value: '2+',
    label: 'Satisfied Clients',
  },
  {
    icon: Award,
    value: '2+',
    label: 'Projects Completed',
  },
  {
    icon: Calendar,
    value: '2+ Years',
    label: 'Industry Experience',
  },
  {
    icon: Globe,
    value: '1+',
    label: 'Countries Served',
  },
];

const teamMembers = [
  {
    name: 'Dineo Mathibela',
    role: 'Lead Developer',
    image: 'https://avatars.githubusercontent.com/u/92311415?v=4',
    description: 'Full-stack developer',
  },
  {
    name: 'Sipho Ndlalane',
    role: 'Full Stack Developer',
    image: 'https://avatars.githubusercontent.com/u/123639497?v=4',
    description: 'Full-stack Developer',
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              About No Name Solutions
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We are a passionate team of developers and designers dedicated to creating 
              exceptional digital experiences for businesses across South Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <p className="mt-4 text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="mt-1 text-base text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-x-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-600">
                To empower businesses with innovative web solutions that drive growth and success 
                in the digital age. We believe in creating websites and applications that not 
                only look great but also deliver measurable results for our clients.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900">Core Values</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-600">✓</span>
                    <span className="ml-3 text-gray-600">Excellence in every project we undertake</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-600">✓</span>
                    <span className="ml-3 text-gray-600">Innovation and continuous learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-600">✓</span>
                    <span className="ml-3 text-gray-600">Client satisfaction and long-term partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <Image 
                src="https://t3.ftcdn.net/jpg/04/18/52/88/360_F_418528804_xgyFvVsMSHeWk1UgDtR9aoccqSC7BrHy.jpg" 
                alt="Our Mission" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our talented team of professionals brings together years of experience 
              in web development, design, and project management.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                  <p className="mt-4 text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Start Your Project?</h2>
          <p className="mt-4 text-xl text-blue-100">
            Let's create something amazing together
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}