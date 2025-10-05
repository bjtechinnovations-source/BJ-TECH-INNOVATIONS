import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Code, 
  Clock,
  Users,
  Star,
  CheckCircle,
  Play,
  Download,
  Award,
  BookOpen,
  Monitor,
  Database,
  Globe
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface FullStackDevelopmentProps {
  onPageChange: (page: string) => void;
}

export function FullStackDevelopment({ onPageChange }: FullStackDevelopmentProps) {
  const courseDetails = {
    title: "Full Stack Web Development Bootcamp",
    // FIX 1: Updated duration for 4 months clarity
    duration: "12 weeks (approx. 3-4 months)", 
    level: "Beginner to Advanced",
    price: "₹10,000",
    // FIX 2: Set original price to show a discount
    originalPrice: "₹15,000", 
    
    instructor: "Ankit Anand",
    language: "English ,Hindi,Punjabi",
    
  };

  const modules = [
    {
      week: "Week 1-2",
      title: "Frontend Fundamentals",
      topics: ["HTML5 & CSS3", "JavaScript ES6+", "Responsive Design", "Git & Version Control"],
      duration: "16 hours"
    },
    {
      week: "Week 3-4",
      title: "React.js Mastery",
      topics: ["Components & JSX", "State & Props", "Hooks & Context", "React Router"],
      duration: "20 hours"
    },
    {
      week: "Week 5-6",
      title: "Backend Development",
      topics: ["Node.js & Express", "RESTful APIs", "Authentication", "Middleware"],
      duration: "18 hours"
    },
    {
      week: "Week 7-8",
      title: "Database Integration",
      topics: ["MongoDB & Mongoose", "SQL Databases", "Database Design", "CRUD Operations"],
      duration: "16 hours"
    },
    {
      week: "Week 9-10",
      title: "Advanced Topics",
      topics: ["GraphQL", "WebSockets", "Testing", "Performance Optimization"],
      duration: "20 hours"
    },
    {
      week: "Week 11-12",
      title: "Deployment & Projects",
      topics: ["AWS Deployment", "Docker Containers", "CI/CD Pipeline", "Final Projects"],
      duration: "22 hours"
    }
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio with React and modern CSS",
      technologies: ["React", "CSS3", "JavaScript"]
    },
    {
      title: "Task Manager App",
      description: "Full-stack application with CRUD operations",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "E-commerce Platform",
      description: "Complete online store with payment integration",
      technologies: ["React", "Express", "Stripe", "MongoDB"]
    },
    
  ];

  const features = [
    {
      icon: Monitor,
      title: "Live Coding Sessions",
      description: "Interactive sessions with real-time coding"
    },
    {
      icon: Users,
      title: "1-on-1 Mentorship",
      description: "Personal guidance from industry experts"
    },
    {
      icon: Award,
      title: "Completion Certificate",
      description: "Recognized certification upon completion"
    },
    {
      icon: Globe,
      title: "Portfolio Projects",
      description: "real-world projects for your portfolio"
    },
    {
      icon: BookOpen,
      title: "Course Materials",
      description: "Comprehensive guides and resources"
    },
   
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Frontend Developer at Google",
      rating: 5,
      comment: "This course transformed my career! The hands-on projects and mentorship made all the difference.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b76f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTkzNjAyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Michael Rodriguez",
      role: "Full Stack Developer at Microsoft",
      rating: 5,
      comment: "Excellent curriculum and amazing instructor. I landed my dream job within 3 months of completion!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5MzYwMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 gradient-bg-1 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 gradient-bg-3 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Badge className="gradient-bg-1 text-white px-4 py-2 rounded-full mb-4">
              💻 Most Popular Course
            </Badge>
            <h1 className="text-5xl mb-6 gradient-text">{courseDetails.title} 🚀</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Master modern web development from frontend to backend. Build real-world projects 
              and get job-ready skills with our comprehensive full-stack bootcamp.
            </p>

            {/* Course Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-blue-600 mr-1" />
                  <span className="text-sm text-gray-600">{courseDetails.duration}</span>
                </div>
              </div>
              
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-purple-600 mr-1" />
                  <span className="text-sm text-gray-600">{courseDetails.level}</span>
                </div>
                
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl gradient-text">{courseDetails.price}</div>
              <div className="text-xl text-gray-400 line-through">{courseDetails.originalPrice}</div>
              {/* FIX 3: Updated Save badge to reflect the discount in Rupees */}
              <Badge className="bg-red-100 text-red-600">Save ₹5,000</Badge>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={() => onPageChange('contact')}
                className="modern-button gradient-bg-1 text-white hover:scale-105 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                🎯 Enroll Now
              </Button>
              <Button 
                onClick={() => onPageChange('contact')}
                className="modern-button glass-card border-2 border-blue-300 text-blue-600 hover:scale-105 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              >
                📞 Ask Questions
              </Button>
            </div>
          </div>

          <div>
            <Card className="glass-card backdrop-blur-sm border-white/30 shadow-2xl">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTkzMTE3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={courseDetails.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/40 rounded-t-lg flex items-center justify-center">
                  <Button className="bg-white text-blue-600 rounded-full w-16 h-16 p-0 hover:scale-110 transition-transform shadow-2xl">
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4">Course Preview</h3>
                <p className="text-gray-600 mb-4">
                  Watch a free preview to see what you'll learn in this comprehensive bootcamp.
                </p>
                <Button 
                  onClick={() => onPageChange('contact')}
                  className="w-full modern-button gradient-bg-1 text-white hover:scale-105 transition-all duration-300"
                >
                  🎬 Watch Free Preview
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Course Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 gradient-text">What You Get 🎁</h2>
            <p className="text-lg text-gray-600">
              Everything you need to become a successful full-stack developer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              // Icon is correctly passed as a component reference
              const Icon = feature.icon;
              return (
                <Card key={index} className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-xl group text-center p-6">
                  <div className={`gradient-bg-${(index % 4) + 1} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Curriculum */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 gradient-text">Course Curriculum 📚</h2>
            <p className="text-lg text-gray-600">
              Structured learning path from basics to advanced concepts
            </p>
          </div>

          <div className="space-y-6">
            {modules.map((module, index) => (
              <Card key={index} className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-xl group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`gradient-bg-${(index % 4) + 1} w-12 h-12 rounded-xl flex items-center justify-center mr-4`}>
                        <span className="text-white">{index + 1}</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{module.week}</div>
                        <h3 className="text-xl">{module.title}</h3>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{module.duration}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {module.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 gradient-text">Real-World Projects 🛠️</h2>
            <p className="text-lg text-gray-600">
              Build impressive projects for your portfolio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-xl group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`gradient-bg-${(index % 4) + 1} w-12 h-12 rounded-xl flex items-center justify-center mr-4`}>
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
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

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 gradient-text">Student Success Stories 🌟</h2>
            <p className="text-lg text-gray-600">
              Hear from our successful graduates
            </p>
            
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
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
            <h3 className="text-4xl mb-4">Ready to Start Your Developer Journey? 🚀</h3>
            <p className="text-blue-100 mb-8 text-xl max-w-2xl mx-auto">
              Join hundreds of successful graduates and land your dream job in tech
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => onPageChange('contact')}
                className="modern-button bg-white text-blue-600 hover:scale-105 hover:shadow-2xl px-10 py-4 text-lg rounded-xl transition-all duration-300"
              >
                {/* FIX 4: Updated CTA price to use dynamic Rupee price */}
                🎯 Enroll Today - {courseDetails.price}
              </Button>
              <Button 
                onClick={() => onPageChange('contact')}
                className="modern-button glass-card border-2 border-white/30 text-white hover:scale-105 hover:shadow-2xl px-10 py-4 text-lg rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                💬 Ask Questions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}