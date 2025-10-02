import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Code, 
  Globe,
  Smartphone,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Monitor,
  Database,
  Layout
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface WebDevelopmentProps {
  onPageChange: (page: string) => void;
}

export function WebDevelopment({ onPageChange }: WebDevelopmentProps) {
  const services = [
    {
      icon: Globe,
      title: "Custom Website Development",
      description: "Fully responsive, SEO-optimized websites built with modern technologies",
      features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Loading"]
    },
    {
      icon: Smartphone,
      title: "Progressive Web Apps",
      description: "App-like experiences that work seamlessly across all devices",
      features: ["Offline Support", "Push Notifications", "App-like Experience", "Cross-Platform"]
    },
    {
      icon: Database,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration and inventory management",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Admin Dashboard"]
    },
    {
      icon: Layout,
      title: "CMS Development",
      description: "Easy-to-manage content management systems for your business",
      features: ["User-Friendly Interface", "Content Management", "SEO Tools", "Multi-User Access"]
    }
  ];

  const technologies = [
    { name: "React.js", icon: "⚛️", description: "Modern frontend framework" },
    { name: "Node.js", icon: "🟢", description: "Scalable backend development" },
    { name: "TypeScript", icon: "🔷", description: "Type-safe development" },
    { name: "Next.js", icon: "▲", description: "Full-stack React framework" },
    { name: "MongoDB", icon: "🍃", description: "NoSQL database solution" },
    { name: "AWS", icon: "☁️", description: "Cloud hosting & deployment" }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Complete online shopping solution with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc1OTM2MDIxNnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Business Portfolio",
      description: "Professional business website with CMS and contact forms",
      technologies: ["Next.js", "Tailwind CSS", "Contentful"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGV8ZW58MXx8fHwxNzU5MzYwMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course management and student tracking",
      technologies: ["React", "Express.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc1OTM2MDIxNnww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 gradient-bg-1 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 gradient-bg-3 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="gradient-bg-1 text-white px-4 py-2 rounded-full mb-4">
            💻 Professional Web Development Services
          </Badge>
          <h1 className="text-5xl mb-6 gradient-text">Custom Web Development Solutions 🚀</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge web applications. We create responsive, 
            scalable, and user-friendly websites that drive results and enhance your online presence.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="glass-card backdrop-blur-sm border-white/30 shadow-xl group">
            <CardContent className="p-8 text-center">
              <div className="gradient-bg-1 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3">Lightning Fast</h3>
              <p className="text-gray-600">Optimized for speed with 99% uptime guarantee and fast loading times</p>
            </CardContent>
          </Card>

          <Card className="glass-card backdrop-blur-sm border-white/30 shadow-xl group">
            <CardContent className="p-8 text-center">
              <div className="gradient-bg-2 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security with SSL encryption and regular backups</p>
            </CardContent>
          </Card>

          <Card className="glass-card backdrop-blur-sm border-white/30 shadow-xl group">
            <CardContent className="p-8 text-center">
              <div className="gradient-bg-3 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3">SEO Optimized</h3>
              <p className="text-gray-600">Built-in SEO optimization to improve your search engine rankings</p>
            </CardContent>
          </Card>
        </div>

        {/* Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 gradient-text">Our Web Development Services 🛠️</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From simple websites to complex web applications, we deliver solutions that meet your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-xl group">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className={`gradient-bg-${(index % 4) + 1} p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 gradient-text">Technologies We Use ⚡</h2>
            <p className="text-lg text-gray-600">
              We work with the latest and most reliable technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="modern-card glass-card backdrop-blur-sm border-white/30 text-center p-6 group hover:scale-105 transition-transform">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h4 className="text-lg mb-2">{tech.name}</h4>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Projects */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 gradient-text">Recent Projects 📱</h2>
            <p className="text-lg text-gray-600">
              Take a look at some of our successful web development projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-xl group overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} className="bg-blue-100 text-blue-600 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative gradient-bg-1 rounded-3xl p-12 text-center text-white shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-12 -translate-y-12"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 translate-y-16"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl mb-4">Ready to Build Your Dream Website? 🌟</h3>
            <p className="text-blue-100 mb-8 text-xl max-w-2xl mx-auto">
              Get a free consultation and detailed project proposal within 24 hours
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => onPageChange('contact')}
                className="modern-button bg-white text-blue-600 hover:scale-105 hover:shadow-2xl px-10 py-4 text-lg rounded-xl transition-all duration-300"
              >
                🚀 Start Your Project
              </Button>
              <Button 
                onClick={() => onPageChange('services')}
                className="modern-button glass-card border-2 border-white/30 text-white hover:scale-105 hover:shadow-2xl px-10 py-4 text-lg rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                📋 View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}