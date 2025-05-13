// app/about/page.tsx
'use client';
import { Users, Award, Calendar, Globe, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const stats = [
  {
    icon: Users,
    value: '10+',
    label: 'Satisfied Clients',
    description: 'Businesses transformed with our digital solutions'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Projects Completed',
    description: 'Successful deployments across industries'
  },
  {
    icon: Calendar,
    value: '3+ Years',
    label: 'Industry Experience',
    description: 'Delivering cutting-edge solutions since 2021'
  },
  {
    icon: Globe,
    value: '2+',
    label: 'Countries Served',
    description: 'Expanding our global footprint'
  },
];

const teamMembers = [
  {
    name: 'Dineo Mathibela',
    role: 'Lead Developer',
    image: 'https://avatars.githubusercontent.com/u/92311415?v=4',
    description: 'Full-stack specialist with expertise in modern web technologies',
    skills: ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB"],
    linkedin: "https://www.linkedin.com/in/dineo-mathibela-53aa191a5/",
    github: "https://github.com/MathibelaD"
  },
  {
    name: 'Sipho Ndlalane',
    role: 'Full Stack Developer',
    image: 'https://avatars.githubusercontent.com/u/123639497?v=4',
    description: 'Passionate about creating seamless user experiences',
    skills: ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB"],
    linkedin: "https://www.linkedin.com/in/sipho-ndlalane-802534187/",
    github: "https://github.com/siphonhata"
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              About Smart WebSync
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              We transform ideas into powerful digital experiences that drive business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center">
                  <stat.icon className="h-10 w-10 text-blue-600" />
                </div>
                <p className="mt-4 text-4xl font-bold text-gray-900">{stat.value}</p>
                <p className="mt-2 text-lg font-medium text-gray-700">{stat.label}</p>
                <p className="mt-2 text-sm text-gray-500">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-x-16">
            <motion.div
              className="lg:w-1/2"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-600">
                To empower businesses with innovative web solutions that drive growth and success
                in the digital age through cutting-edge technology and exceptional service.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Client-Centric Approach</h3>
                    <p className="mt-1 text-gray-600">
                      We prioritize understanding your unique business needs to deliver tailored solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Technical Excellence</h3>
                    <p className="mt-1 text-gray-600">
                      Our team stays ahead of industry trends to implement the most effective technologies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Measurable Results</h3>
                    <p className="mt-1 text-gray-600">
                      We focus on delivering solutions that provide tangible business value and ROI.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-10 lg:mt-0 lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-w-16 aspect-h-9 rounded-xl shadow-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              The talented professionals behind Smart WebSync's success
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    width={320}  // Explicit width
                    height={320} // Explicit height
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
                    priority={index < 2}
                    style={{
                      objectPosition: 'top center' // Ensures faces are always visible
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <p className="mt-3 text-gray-600">{member.description}</p>

                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900">Key Skills:</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {member.skills.map((skill, i) => (
                        <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 flex justify-start space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <svg className="w-5 h-5 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                  </a>

                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-white">Ready to Transform Your Digital Presence?</h2>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
              Let's collaborate to build something extraordinary for your business
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}