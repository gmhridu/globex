import GlobexLogo from './components/icons/GlobexLogo';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Column 1 - Logo and Description */}
          <div className="lg:col-span-2">
            <GlobexLogo className="h-12 w-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Expanding Businesses, Elevating Success Globally</h2>
            <p className="text-gray-400 mb-6">
              We leverage years of expertise in global corporate services to help you find the right fit for your business needs.
            </p>
          </div>

          {/* Column 2 - Main Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">MAIN</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about-us" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">SERVICES</h3>
            <ul className="space-y-3">
              <li><a href="/manufacturing-services" className="text-gray-400 hover:text-primary transition-colors">Manufacturing Services</a></li>
              <li><a href="/contract-manufacturing" className="text-gray-400 hover:text-primary transition-colors">Contract Manufacturing</a></li>
              <li><a href="/software-solutions" className="text-gray-400 hover:text-primary transition-colors">Software Solutions</a></li>
            </ul>
          </div>

          {/* Column 4 - Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">COMPANY</h3>
            <ul className="space-y-3">
              <li><a href="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="/plant-a-tree" className="text-gray-400 hover:text-primary transition-colors">Plant A Tree</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/gdpr-statement" className="text-gray-400 hover:text-primary transition-colors">GDPR Statement</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} • We Are Globex™
          </div>
          <div>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;