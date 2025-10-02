import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Courses } from './components/Courses';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WebDevelopment } from './components/services/WebDevelopment';
import { SEODigitalMarketing } from './components/services/SEODigitalMarketing';
import { GraphicDesign } from './components/services/GraphicDesign';
import { FullStackDevelopment } from './components/courses/FullStackDevelopment';
import { DigitalMarketing } from './components/courses/DigitalMarketing';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onPageChange={handlePageChange} />
            {/* Quick Services Preview */}
            <div className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl mb-4 text-gray-900">What We Do</h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                  From web development to training programs, we provide comprehensive IT solutions
                </p>
                <Services onPageChange={handlePageChange} />
              </div>
            </div>
          </>
        );
      case 'about':
        return <About onPageChange={handlePageChange} />;
      case 'services':
        return <Services onPageChange={handlePageChange} />;
      case 'courses':
        return <Courses onPageChange={handlePageChange} />;
      case 'contact':
        return <Contact />;
      // Service Pages
      case 'web-development':
        return <WebDevelopment onPageChange={handlePageChange} />;
      case 'seo-digital-marketing':
        return <SEODigitalMarketing onPageChange={handlePageChange} />;
      case 'graphic-design':
        return <GraphicDesign onPageChange={handlePageChange} />;
      // Course Pages
      case 'full-stack-development':
        return <FullStackDevelopment onPageChange={handlePageChange} />;
      case 'digital-marketing-course':
        return <DigitalMarketing onPageChange={handlePageChange} />;
      default:
        return (
          <>
            <Hero onPageChange={handlePageChange} />
            <Services onPageChange={handlePageChange} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags - In a real app, you'd use React Helmet or similar */}
      <title>
        {currentPage === 'home' && 'BJ Tech Innovations - IT Services & Training in San Francisco'}
        {currentPage === 'about' && 'About Us - BJ Tech Innovations | Leading IT Solutions Provider'}
        {currentPage === 'services' && 'IT Services - Web Development, SEO, Digital Marketing | BJ Tech'}
        {currentPage === 'courses' && 'IT Training Courses - Web Development, Digital Marketing | BJ Tech'}
        {currentPage === 'contact' && 'Contact Us - BJ Tech Innovations | Get Your Free Consultation'}
        {currentPage === 'web-development' && 'Web Development Services - Custom Websites & Apps | BJ Tech'}
        {currentPage === 'seo-digital-marketing' && 'SEO & Digital Marketing Services | Boost Your Online Presence'}
        {currentPage === 'graphic-design' && 'Graphic Design Services - Logo, Branding & Visual Design | BJ Tech'}
        {currentPage === 'full-stack-development' && 'Full Stack Development Course - React, Node.js Bootcamp | BJ Tech'}
        {currentPage === 'digital-marketing-course' && 'Digital Marketing Course - SEO, PPC, Social Media Training | BJ Tech'}
      </title>

      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      
      <main>
        {renderPage()}
      </main>
      
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}