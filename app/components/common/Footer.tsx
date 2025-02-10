import { Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center">
              <Globe className="w-6 h-6 text-blue-400" />
              <span className="ml-2 font-medium">WebCraft Solutions</span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Creating innovative digital solutions for businesses across South Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="text-gray-400">
                Cape Town, South Africa
              </li>
              <li>
                <a href="tel:+27123456789" className="text-gray-400 hover:text-white transition-colors">
                  +27 12 345 6789
                </a>
              </li>
              <li>
                <a href="mailto:info@webcraft.co.za" className="text-gray-400 hover:text-white transition-colors">
                  info@webcraft.co.za
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Office Hours
            </h3>
            <ul className="mt-4 space-y-4 text-gray-400">
              <li>Monday - Friday: 9:00 - 17:00</li>
              <li>Saturday: 9:00 - 13:00</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} WebCraft Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}