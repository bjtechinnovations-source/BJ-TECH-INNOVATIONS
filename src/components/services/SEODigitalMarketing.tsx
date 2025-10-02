import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Search, 
  TrendingUp,
  Target,
  BarChart3,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Eye,
  Users,
  Award
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface SEODigitalMarketingProps {
  onPageChange: (page: string) => void;
}

export function SEODigitalMarketing({ onPageChange }: SEODigitalMarketingProps) {
  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility and ranking on search engines",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"]
    },
    {
      icon: Target,
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Targeted advertising campaigns that deliver immediate results",
      features: ["Google Ads", "Facebook Ads", "Campaign Management", "ROI Optimization"]
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      description: "Build your brand presence across all major social platforms",
      features: ["Content Creation", "Community Management", "Paid Social Ads", "Analytics"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your marketing performance",
      features: ["Google Analytics", "Conversion Tracking", "Monthly Reports", "Performance Insights"]
    }
  ];

  const packages = [
    {
      name: "Startup Package",
      price: "$499/month",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "SEO Audit & Strategy",
        "5 Target Keywords",
        "Monthly SEO Report",
        "Basic Social Media Setup",
        "Google My Business Optimization"
      ],
      popular: false
    },
    {
      name: "Growth Package",
      price: "$999/month",
      description: "Comprehensive marketing for growing businesses",
      features: [
        "Advanced SEO Optimization",
        "15 Target Keywords",
        "PPC Campaign Management",
        "Social Media Marketing",
        "Content Marketing",
        "Monthly Analytics Report"
      ],
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "$1999/month",
      description: "Full-scale marketing for established businesses",
      features: [
        "Complete SEO Management",
        "Unlimited Keywords",
        "Multi-Platform PPC Campaigns",
        "Advanced Social Media Strategy",
        "Email Marketing Automation",
        "Weekly Reports & Consultations"
      ],
      popular: false
    }
  ];

  const results = [
    {
      metric: "300%",
      description: "Average Increase in Organic Traffic",
      icon: TrendingUp
    },
    {
      metric: "150%",
      description: "Improvement in Search Rankings",
      icon: Search
    },
    {
      metric: "250%",
      description: "Boost in Lead Generation",
      icon: Target
    },
    {
      metric: "400%",
      description: "Return on Ad Spend (ROAS)",
      icon: BarChart3
    }
  ];

  const caseStudies = [
    {
      title: "Local Restaurant Chain",
      industry: "Food & Beverage",
      result: "200% increase in online orders",
      description: "Comprehensive SEO and social media strategy that doubled their online presence",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbWFya2V0aW5nfGVufDF8fHx8MTc1OTM2MDIxNnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "E-commerce Fashion Brand",
      industry: "Retail & Fashion",
      result: "500% ROI on ad spend",
      description: "Strategic PPC campaigns and social media advertising that transformed their sales",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWNvbW1lcmNlfGVufDF8fHx8MTc1OTM2MDIxNnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Tech Startup",
      industry: "Technology",
      result: "1000+ qualified leads generated",
      description: "Complete digital marketing overhaul that established market presence",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cHxlbnwxfHx8fDE3NTkzNjAyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 gradient-bg-2 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 gradient-bg-4 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="gradient-bg-2 text-white px-4 py-2 rounded-full mb-4">
            📈 Digital Marketing Excellence
          </Badge>
          <h1 className="text-5xl mb-6 gradient-text">SEO & Digital Marketing Services 🚀</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Boost your online presence and drive qualified traffic with our comprehensive 
            SEO and digital marketing strategies. Get measurable results that grow your business.
          </p>
        </div>

        {/* Results Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <Card key={index} className="glass-card backdrop-blur-sm border-white/30 shadow-xl text-center p-6 group">
                <div className={`gradient-bg-${(index % 4) + 1} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl mb-2 gradient-text">{result.metric}</div>
                <div className="text-gray-600 text-sm">{result.description}</div>
              </Card>
            );
          })}
        </div>

        {/* Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 gradient-text">Our Marketing Services 📊</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions to grow your online presence
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

        {/* Pricing Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 gradient-text">Marketing Packages 💎</h2>
            <p className="text-lg text-gray-600">
              Choose the perfect package for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`modern-card glass-card backdrop-blur-sm border-white/30 shadow-xl relative ${pkg.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="gradient-bg-1 text-white px-4 py-1 rounded-full">
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
                    className={`w-full modern-button ${pkg.popular ? 'gradient-bg-1 text-white' : 'glass-card border-2 border-blue-300 text-blue-600'} hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Get Started 🚀
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 gradient-text">Success Stories 📈</h2>
            <p className="text-lg text-gray-600">
              See how we've helped businesses achieve their marketing goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-xl group overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="bg-green-500 text-white mb-2">
                      {study.industry}
                    </Badge>
                    <div className="text-lg">{study.result}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2">{study.title}</h3>
                  <p className="text-gray-600 text-sm">{study.description}</p>
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
            <h3 className="text-4xl mb-4">Ready to Dominate Your Market? 💪</h3>
            <p className="text-green-100 mb-8 text-xl max-w-2xl mx-auto">
              Get a free SEO audit and marketing strategy consultation worth $500
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => onPageChange('contact')}
                className="modern-button bg-white text-green-600 hover:scale-105 hover:shadow-2xl px-10 py-4 text-lg rounded-xl transition-all duration-300"
              >
                📊 Get Free SEO Audit
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