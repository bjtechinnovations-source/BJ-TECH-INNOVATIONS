import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Code, 
  Search, 
  Palette, 
  TrendingUp, 
  GraduationCap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServicesProps {
  onPageChange: (page: string) => void;
}

export function Services({ onPageChange }: ServicesProps) {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development & Scalable Solutions",
      description: "We engineer high-performance custom websites and powerful web applications using modern technology stacks (MERN, Python/Django). Our focus is on delivering secure, fast, and SEO-friendly platforms designed for superior user experience and long-term business growth.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "API Integration"],
      image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTkzMTE3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "blue"
    },
    {
      icon: Search,
      title: "Organic SEO & Search Ranking Dominance",
      description: "Stop settling for low traffic. We deliver measurable organic growth by implementing advanced Technical SEO and Data-Driven Content Strategies to secure top-tier search rankings and maximize lead conversions",
      features: ["Technical SEO Audit", "High-Authority Link Building", "Advanced Keyword & Competitor Research", "Local SEO & Google My Business"],
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1OTMwNTIwNnww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "green"
    },
    
    {
      icon: TrendingUp,
      title: "High-Return Meta (Facebook/Instagram) Ads",
      description: "We specialize in driving sales and leads exclusively through highly optimized Facebook and Instagram advertising. Our data-driven approach focuses on audience psychology and dynamic creative strategy to maximize your return on ad spend (ROAS)",
      features: ["Advanced Audience Targeting", "Dynamic Ad & Creative Testing", "Sales Funnel Development (Meta)", "Pixel & Conversion API Setup"],
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1OTMwNTIwNnww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "orange"
    },
    {
      icon: GraduationCap,
      title: "Career-Ready IT & Data Science Bootcamps",
      description: "Future-proof your career with our comprehensive IT training programs. We offer specialized courses in Data, Development, and Design, empowering you with the practical skills demanded by top employers worldwide. Start your Digital Transformation journey with us.",
      features: ["Data Science, Analytics & Business Analysis", "FullStack Development (PHP, Python, MERN)", "UI/UX Design and Graphic Tools (CorelDRAW)", "Advanced Digital Marketing (Meta Ads & SEO)"],
      image: "https://images.unsplash.com/photo-1698047682129-c3e217ac08b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwdGVhbXxlbnwxfHx8fDE3NTkyNjgxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { icon: "text-blue-600", bg: "bg-blue-100", hover: "hover:bg-blue-50", border: "border-blue-200" },
      green: { icon: "text-green-600", bg: "bg-green-100", hover: "hover:bg-green-50", border: "border-green-200" },
      purple: { icon: "text-purple-600", bg: "bg-purple-100", hover: "hover:bg-purple-50", border: "border-purple-200" },
      orange: { icon: "text-orange-600", bg: "bg-orange-100", hover: "hover:bg-orange-50", border: "border-orange-200" },
      indigo: { icon: "text-indigo-600", bg: "bg-indigo-100", hover: "hover:bg-indigo-50", border: "border-indigo-200" }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 gradient-bg-1 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 gradient-bg-2 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 gradient-text">Our Services ✨</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to help your business thrive in the digital age 🚀
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <Card key={index} className={`modern-card glass-card backdrop-blur-sm transition-all duration-500 hover:shadow-2xl border-white/30 group relative overflow-hidden`}>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 gradient-bg-1"></div>
                
                <CardHeader className="relative z-10">
                  <div className={`gradient-bg-${index % 4 + 1} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 pulse-glow`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl gradient-text group-hover:scale-105 transition-transform">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-justify text-left">{service.description}</p>
                  
                  <div className="mb-6">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => {
                      if (service.title === "Web Development") {
                        onPageChange('web-development');
                      } else if (service.title === "SEO & Digital Marketing") {
                        onPageChange('seo-digital-marketing');
                      } else if (service.title === "Graphic Design") {
                        onPageChange('graphic-design');
                      } else {
                        onPageChange('contact');
                      }
                    }}
                    className="w-full modern-button gradient-bg-1 text-white hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                  >
                    🔥 Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative gradient-bg-1 rounded-3xl p-12 text-center text-white shadow-2xl overflow-hidden">
          {/* Simplified background effects */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-12 -translate-y-12"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 translate-y-16"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl mb-4 font-bold">Ready to Transform Your Business? 🚀</h3>
            <p className="text-blue-100 mb-8 text-xl max-w-2xl mx-auto leading-relaxed">
              Get a free consultation and discover how our services can help you achieve your goals ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => onPageChange('contact')}
                className="modern-button bg-white text-blue-600 hover:scale-105 hover:shadow-2xl px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                💬 Get Free Consultation
              </Button>
              <Button 
                onClick={() => onPageChange('courses')}
                className="modern-button glass-card border-2 border-white/30 text-white hover:scale-105 hover:shadow-2xl px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                🎓 View Training Programs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}