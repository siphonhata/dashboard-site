import { CheckCircle, Clock, Globe, Shield, Zap, Headphones } from 'lucide-react';
import { Feature } from '@/app/lib/types';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Features',
};

const features: Feature[] = [
    {
        icon: Clock,
        title: "Quick Turnaround",
        description: "Fast development cycles with consistent communication and timely delivery of your projects."
    },
    {
        icon: Shield,
        title: "Security First",
        description: "Built-in security measures and best practices to protect your digital assets."
    },
    {
        icon: Globe,
        title: "Global Standards",
        description: "Following international web standards and best practices for optimal performance."
    },
    {
        icon: Zap,
        title: "High Performance",
        description: "Optimized code and efficient architecture for maximum speed and reliability."
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Round-the-clock technical support and maintenance for your peace of mind."
    },
    {
        icon: CheckCircle,
        title: "Quality Assured",
        description: "Rigorous testing and quality assurance processes for reliable solutions."
    }
];

export default function Features() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Why Choose Us
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Delivering excellence through our core strengths
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                                    <feature.icon className="w-5 h-5 text-blue-600" />
                                </div>
                                <h3 className="ml-4 text-lg font-semibold text-gray-900">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
                    >
                        Start Your Project
                    </a>
                </div>
            </div>
        </section>
    );
}