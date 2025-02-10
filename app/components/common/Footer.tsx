import Link from 'next/link';
import { Globe, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
}

const socialLinks: SocialLink[] = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center">
              <Globe className="w-6 h-6 text-blue-600" />
              <span className="ml-2 text-gray-900 font-medium">No Name Solutions</span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Creating innovative digital solutions for businesses across South Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/services" className="text-base text-gray-600 hover:text-blue-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-base text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-600 hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/services/web-development" className="text-base text-gray-600 hover:text-blue-600">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-applications" className="text-base text-gray-600 hover:text-blue-600">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services/responsive-design" className="text-base text-gray-600 hover:text-blue-600">
                  Responsive Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-600">
                Gauteng, South Africa
              </li>
              <li>
                <a href="tel:+27123456789" className="text-base text-gray-600 hover:text-blue-600">
                  +27 12 345 6789
                </a>
              </li>
              <li>
                <a href="mailto:info@webcraft.co.za" className="text-base text-gray-600 hover:text-blue-600">
                  info@noname.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-blue-600"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} No Name Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}