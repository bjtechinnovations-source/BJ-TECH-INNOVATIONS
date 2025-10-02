import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Palette, 
  Eye,
  Layers,
  Image,
  Printer,
  Monitor,
  CheckCircle,
  ArrowRight,
  Zap,
  Heart,
  Award
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface GraphicDesignProps {
  onPageChange: (page: string) => void;
}

export function GraphicDesign({ onPageChange }: GraphicDesignProps) {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description: "Complete brand identity packages including logos, color schemes, and brand guidelines",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography Selection"]
    },
    {
      icon: Printer,
      title: "Print Design",
      description: "Professional print materials for your business marketing needs",
      features: ["Business Cards", "Brochures", "Flyers", "Banners & Posters"]
    },
    {
      icon: Monitor,
      title: "Digital Graphics",
      description: "Eye-catching digital designs for web and social media platforms",
      features: ["Social Media Graphics", "Web Banners", "Email Templates", "Digital Ads"]
    },
    {
      icon: Image,
      title: "Marketing Materials",
      description: "Complete marketing collateral to promote your business effectively",
      features: ["Presentation Design", "Infographics", "Product Catalogs", "Annual Reports"]
    }
  ];

  const designProcess = [
    {
      step: "1",
      title: "Discovery & Brief",
      description: "Understanding your brand, goals, and target audience",
      icon: Eye
    },
    {
      step: "2", 
      title: "Concept Development",
      description: "Creating initial design concepts and mood boards",
      icon: Palette
    },
    {
      step: "3",
      title: "Design & Refinement",
      description: "Developing designs with your feedback and revisions",
      icon: Layers
    },
    {
      step: "4",
      title: "Final Delivery",
      description: "Delivering final files in all required formats",
      icon: Award
    }
  ];

  const portfolio = [
    {
      category: "Logo Design",
      title: "Tech Startup Branding",
      description: "Modern logo design for a fintech startup",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc1OTM2MDIxNnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      category: "Print Design",
      title: "Restaurant Menu Design",
      description: "Elegant menu design for fine dining restaurant",
      image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbWVudXxlbnwxfHx8fDE3NTkzNjAyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      category: "Digital Design",
      title: "Social Media Campaign",
      description: "Instagram campaign graphics for fashion brand",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRlc2lnbnxlbnwxfHx8fDE3NTkzNjAyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      category: "Brand Identity",
      title: "Coffee Shop Branding",
      description: "Complete brand identity for local coffee shop",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzU5MzYwMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const packages = [
    {
      name: "Starter Package",
      price: "$299",
      description: "Perfect for small businesses and startups",
      features: [
        "Logo Design (3 concepts)",
        "2 Revisions",
        "Basic Brand Guidelines",
        "High-res Files (PNG, JPG)",
        "5-day Delivery"
      ],
      popular: false
    },
    {
      name: "Professional Package",
      price: "$599",
      description: "Complete branding solution for growing businesses",
      features: [
        "Logo Design (5 concepts)",
        "Complete Brand Identity",
        "Brand Guidelines Document",
        "Business Card Design",
        "All File Formats (AI, EPS, PDF, PNG)",
        "Unlimited Revisions",
        "7-day Delivery"
      ],
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "$999",
      description: "Comprehensive design package for established companies",
      features: [
        "Complete Brand Identity System",
        "Logo + 5 Brand Variations",
        "Marketing Materials Package",
        "Website Design Elements",
        "Social Media Templates",
        "Presentation Templates",
        "Ongoing Design Support",
        "10-day Delivery"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 gradient-bg-2 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 gradient-bg-4 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="gradient-bg-2 text-white px-4 py-2 rounded-full mb-4">
            🎨 Creative Design Solutions
          </Badge>
          <h1 className="text-5xl mb-6 gradient-text">Professional Graphic Design Services ✨</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your brand with stunning visual designs that capture attention and 
            communicate your message effectively. From logos to complete brand identities.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="glass-card backdrop-blur-sm border-white/30 shadow-xl group">
            <CardContent className="p-8 text-center">
              <div className="gradient-bg-2 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3">Fast Turnaround</h3>
              <p className="text-gray-600">Quick delivery without compromising on quality and creativity</p>
            </CardContent>
          </Card>

          <Card className="glass-card backdrop-blur-sm border-white/30 shadow-xl group">
            <CardContent className="p-8 text-center">
              <div className="gradient-bg-3 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3">Custom Designs</h3>
              <p className="text-gray-600">Unique designs tailored specifically for your brand and audience</p>
            </CardContent>
          </Card>

          <Card className="glass-card backdrop-blur-sm border-white/30 shadow-xl group">
            <CardContent className="p-8 text-center">
              <div className="gradient-bg-4 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3">Award-Winning</h3>
              <p className="text-gray-600">Professional designs that stand out and win recognition</p>
            </CardContent>
          </Card>
        </div>

        {/* Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 gradient-text">Our Design Services 🛠️</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive graphic design solutions for all your visual communication needs
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

        {/* Design Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 gradient-text">Our Design Process 🎯</h2>
            <p className="text-lg text-gray-600">
              A proven process that ensures exceptional results every time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {designProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <Card key={index} className="modern-card glass-card backdrop-blur-sm border-white/30 text-center p-6 group hover:scale-105 transition-transform">
                  <div className={`gradient-bg-${(index % 4) + 1} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold`}>
                    {process.step}
                  </div>
                  <h3 className="text-lg mb-3">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Portfolio */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 gradient-text">Our Portfolio 🎨</h2>
            <p className="text-lg text-gray-600">
              See some of our recent design work across different categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-xl group overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-500 text-white">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 gradient-text">Design Packages 💎</h2>
            <p className="text-lg text-gray-600">
              Choose the perfect package for your design needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`modern-card glass-card backdrop-blur-sm border-white/30 shadow-xl relative ${pkg.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="gradient-bg-2 text-white px-4 py-1 rounded-full">
                      🌟 Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <h3 className="text-2xl mb-2">{pkg.name}</h3>
                  <div className="text-3xl gradient-text mb-2">{pkg.price}</div>
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => onPageChange('contact')}
                    className={`w-full modern-button ${pkg.popular ? 'gradient-bg-2 text-white' : 'glass-card border-2 border-purple-300 text-purple-600'} hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Get Started 🎨
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative gradient-bg-2 rounded-3xl p-12 text-center text-white shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-12 -translate-y-12"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 translate-y-16"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl mb-4">Ready to Transform Your Brand? 🌟</h3>
            <p className="text-purple-100 mb-8 text-xl max-w-2xl mx-auto">
              Get a free design consultation and bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => onPageChange('contact')}
                className="modern-button bg-white text-purple-600 hover:scale-105 hover:shadow-2xl px-10 py-4 text-lg rounded-xl transition-all duration-300"
              >
                🎨 Start Design Project
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