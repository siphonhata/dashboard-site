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
    skills: ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB"],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/"
  },
  {
    name: 'Sipho Ndlalane',
    role: 'Full Stack Developer',
    image: 'https://avatars.githubusercontent.com/u/123639497?v=4',
    description: 'Full-stack Developer',
    skills: ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB"],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/"
  }
];

export default function About() {

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
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   <div className="text-center" data-aos="fade-down">
     <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
     <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
       Our talented team of professionals brings together years of experience
       in web development, design, and project management.
     </p>
   </div>
   <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
     {teamMembers.map((member, index) => (
       <div 
         key={index} 
         className="bg-white rounded-lg shadow-md overflow-hidden"
         data-aos="fade-up"
         data-aos-delay={index * 200}
       >
         <div className="relative h-80">
           <Image
             src={member.image}
             alt={member.name}
             fill
             className="object-cover"
             sizes="(max-width: 768px) 100vw, 50vw"
           />
         </div>
         <div className="p-6">
           <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
           <p className="text-blue-600">{member.role}</p>
           <p className="mt-4 text-gray-600">{member.description}</p>
         </div>
         {/* Social Links */}
         <div className="px-6 pb-6 flex justify-end space-x-2">
           
          <a   href={member.linkedin}
             target="_blank"
             rel="noopener noreferrer"
             className="p-3 bg-white rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-200"
           >
             <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
               <path d="M20.25 2.25H3.75A1.5 1.5 0 002.25 3.75v16.5a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5V3.75a1.5 1.5 0 00-1.5-1.5zM8.25 18.75h-3v-9h3v9zM6.75 8.25a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm12 10.5h-3v-4.5c0-1.125-.025-2.575-1.575-2.575-1.575 0-1.825 1.225-1.825 2.5v4.575h-3v-9h2.875v1.325h.05c.4-.775 1.4-1.575 2.875-1.575 3.075 0 3.625 2.025 3.625 4.65v4.575z" />
             </svg>
           </a>
           
           <a  href={member.github}
             target="_blank"
             rel="noopener noreferrer"
             className="p-3 bg-white rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-200"
           >
             <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
             </svg>
           </a>
         </div>
       </div>
     ))}
   </div>
 </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 hidden">
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