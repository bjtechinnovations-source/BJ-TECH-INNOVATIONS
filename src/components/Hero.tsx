import { Button } from './ui/button';
import { ArrowRight, Code, TrendingUp, Users, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onPageChange: (page: string) => void;
}

export function Hero({ onPageChange }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-20 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Particles */}
      <div className="particles">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-64 h-64 gradient-bg-3 rounded-full mix-blend-multiply filter blur-2xl opacity-10 float-animation"></div>
      <div className="absolute top-0 -right-4 w-64 h-64 gradient-bg-2 rounded-full mix-blend-multiply filter blur-2xl opacity-10 float-animation-delay"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 gradient-bg-4 rounded-full mix-blend-multiply filter blur-2xl opacity-10 float-animation"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="mb-12 lg:mb-0">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                <Award className="w-4 h-4 mr-2" />
                Leading IT Solutions Provider
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl mb-6 text-gray-900 leading-tight">
              Innovate. Transform. <span className="gradient-text animate-pulse">Excel.</span>
              <div className="absolute -top-2 -right-2 text-2xl animate-bounce">🚀</div>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Empowering businesses with cutting-edge IT services, professional web development, 
              digital marketing strategies, and comprehensive training programs.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center modern-card glass-card p-4 rounded-xl hover:scale-105 transition-all duration-300">
                <div className="text-3xl gradient-text mb-1">10+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
                <div className="text-xl mt-1">🎯</div>
              </div>
              <div className="text-center modern-card glass-card p-4 rounded-xl hover:scale-105 transition-all duration-300">
                <div className="text-3xl gradient-text mb-1">500+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
                <div className="text-xl mt-1">🎓</div>
              </div>
              {/* <div className="text-center modern-card glass-card p-4 rounded-xl hover:scale-105 transition-all duration-300">
                <div className="text-3xl gradient-text mb-1">50+</div>
                <div className="text-sm text-gray-600">Enterprise Clients</div>
                <div className="text-xl mt-1">🏢</div>
              </div> */}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => onPageChange('services')}
                className="modern-button gradient-bg-1 hover:scale-105 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
              >
                🔥 Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => onPageChange('courses')}
                className="modern-button glass-card border-2 border-blue-300 text-blue-600 hover:scale-105 px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group backdrop-blur-sm"
              >
                📚 View Training Courses
                <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1698047682129-c3e217ac08b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwdGVhbXxlbnwxfHx8fDE3NTkyNjgxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern tech team working together"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 glass-card p-4 rounded-2xl shadow-2xl border border-white/30 float-animation backdrop-blur-md">
              <div className="flex items-center">
                <div className="gradient-bg-4 p-2 rounded-xl mr-3 pulse-glow">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">💻 Web Development</div>
                  <div className="gradient-text font-semibold">Active Projects: 25+</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-2xl shadow-2xl border border-white/30 float-animation-delay backdrop-blur-md">
              <div className="flex items-center">
                <div className="gradient-bg-3 p-2 rounded-xl mr-3 pulse-glow">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">📈 Client Success</div>
                  <div className="gradient-text font-semibold">98% Satisfaction ⭐</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}