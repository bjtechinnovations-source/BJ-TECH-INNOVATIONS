import { Button } from './ui/button';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const services = [
    "Web Development",
    "Digital Marketing",
    "Graphic Design",
    "SEO Services",
    "IT Consulting"
  ];

  const courses = [
    "Full Stack Development",
    "Digital Marketing",
    "Graphic Design",
    "Data Science",
    "UI/UX Design"
  ];

  const company = [
    { label: "About Us", page: "about" },
    { label: "Services", page: "services" },
    { label: "Courses", page: "courses" },
    { label: "Contact", page: "contact" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-48 h-48 gradient-bg-1 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 gradient-bg-2 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6 group">
              <div className="gradient-bg-1 text-white p-3 rounded-2xl mr-4 pulse-glow group-hover:scale-110 transition-transform duration-300">
                <span className="font-bold text-xl">BJ</span>
              </div>
              <div>
                <h3 className="text-2xl gradient-text font-bold">BJ Tech Innovations</h3>
                <p className="text-gray-300">🚀 IT Services & Training</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Empowering businesses and individuals through innovative technology 
              solutions and comprehensive training programs. ✨
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">Mathura Nagar,Sodal Road ,Jalandhar City,India</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">+91 8699586385</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">bjtechinnovations@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => onPageChange('services')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg mb-6">Training Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <button
                    onClick={() => onPageChange('courses')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {course}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Newsletter */}
          <div>
            <h4 className="text-lg mb-6">Company</h4>
            <ul className="space-y-3 mb-8">
              {company.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => onPageChange(item.page)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="glass-card backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h5 className="text-lg mb-3 gradient-text font-semibold">📧 Stay Updated</h5>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest news and updates about our services and courses! ✨
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors"
                />
                <Button className="modern-button gradient-bg-1 hover:scale-105 rounded-l-none px-4 shadow-lg transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} BJ Tech Innovations. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 pt-8 border-t border-gray-800">
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <button
                onClick={() => onPageChange('contact')}
                className="hover:text-white transition-colors"
              >
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}