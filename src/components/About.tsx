import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import {
  Target,
  Eye,
  Award,
  Users,
  Clock,
  Shield,
  TrendingUp,
  Heart,
  CheckCircle
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutProps {
  onPageChange: (page: string) => void;
}

export function About({ onPageChange }: AboutProps) {
  const whyChooseUs = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "3+ years of experience delivering successful IT solutions"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with industry certifications"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "98% on-time project completion rate"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes"
    },
    {
      icon: TrendingUp,
      title: "Growth Focus",
      description: "Strategies designed to scale with your business"
    },
    {
      icon: Heart,
      title: "Client Satisfaction",
      description: "Dedicated support and long-term partnerships"
    }
  ];

  const achievements = [
    { number: "10+", label: "Projects Completed" },
    { number: "500+", label: "Students Trained" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "3+", label: "Years Experience" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 -left-20 w-48 h-48 gradient-bg-3 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-20 -right-20 w-48 h-48 gradient-bg-4 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 gradient-text">About BJ Tech Innovations 🌟</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading the digital transformation with innovative IT solutions and comprehensive training programs 🚀
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <Card className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-2xl group">
            <CardContent className="p-10">
              <div className="flex items-center mb-6">
                <div className="gradient-bg-1 p-4 rounded-2xl mr-4 pulse-glow group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl gradient-text">🎯 Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To empower businesses and individuals through innovative technology solutions and
                comprehensive training programs. We are committed to delivering excellence in IT
                services while fostering digital literacy and professional growth in our community. ✨
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-2xl group">
            <CardContent className="p-10">
              <div className="flex items-center mb-6">
                <div className="gradient-bg-2 p-4 rounded-2xl mr-4 pulse-glow group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl gradient-text">👁️ Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the leading IT solutions provider and training institute, recognized for our
                innovation, quality, and commitment to client success. We envision a future where
                technology bridges gaps and creates opportunities for all. 🌍
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Founder Section */}
        <div className="glass-card backdrop-blur-sm rounded-3xl p-8 lg:p-16 shadow-2xl mb-20 border border-white/30 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 gradient-bg-1 opacity-5"></div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-12 items-center relative z-10">
            <div className="lg:col-span-1 mb-8 lg:mb-0">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1698047682129-c3e217ac08b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwdGVhbXxlbnwxfHx8fDE3NTkyNjgxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Founder - BJ Tech Innovations"
                  className="w-72 h-72 object-cover rounded-3xl mx-auto shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 text-4xl">👨‍💻</div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-4xl mb-4 gradient-text">Visionary Leadership & Digital Mission 💡</h3>
              <h4 className="text-2xl text-blue-600 mb-6 font-semibold">
                Ankit Anand, CEO & Founder of BJ Tech Innovations 🚀
              </h4>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Founded by Ankit Anand, **BJ Tech Innovations** has a core focus on driving **Digital Transformation** for businesses. Our mission is to provide **Custom Web Development**, **Modern IT Solutions**, and expert **Digital Marketing** services. We are dedicated to bridging the technology gap, ensuring that every client gets a competitive edge through robust, scalable, and innovative software solutions. We specialize in building secure, high-performance platforms designed for sustained growth. 🌟
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="glass-card p-4 rounded-xl backdrop-blur-sm">
                  <div className="gradient-text font-semibold mb-2">🎯 Primary Services</div>
                  <div className="text-gray-600">Custom Web Development, SEO, and Digital Marketing.</div>
                </div>
                <div className="glass-card p-4 rounded-xl backdrop-blur-sm">
                  <div className="gradient-text font-semibold mb-2">📈 Core Vision</div>
                  <div className="text-gray-600">Leading the next wave of accessible digital transformation and innovation.</div>
                </div>
              </div>
              <Button
                onClick={() => onPageChange('contact')}
                className="modern-button gradient-bg-1 hover:scale-105 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                🤝 Partner with BJ Tech Innovations
              </Button>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl mb-4 text-gray-900">Why Choose BJ Tech Innovations?</h3>
            <p className="text-lg text-gray-600">
              Here's what sets us apart from the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border group-hover:border-blue-200">
                    <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl mb-3 text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl mb-4">Our Achievements</h3>
            <p className="text-blue-100 text-lg">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{achievement.number}</div>
                <div className="text-blue-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}