import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  TrendingUp, 
  Clock,
  Users,
  Star,
  CheckCircle,
  Play,
  Target,
  BarChart3,
  Search,
  Globe,
  Award,
  BookOpen
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface DigitalMarketingProps {
  onPageChange: (page: string) => void;
}

export function DigitalMarketing({ onPageChange }: DigitalMarketingProps) {
  const courseDetails = {
    title: "Digital Marketing Mastery Course",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    price: "$899",
    originalPrice: "$1,199",
    rating: 4.8,
    students: 180,
    instructor: "Sarah Johnson",
    language: "English",
    access: "Lifetime Access"
  };

  const modules = [
    {
      week: "Week 1",
      title: "Digital Marketing Fundamentals",
      topics: ["Marketing Strategy", "Target Audience", "Customer Journey", "SMART Goals"],
      duration: "12 hours"
    },
    {
      week: "Week 2",
      title: "Search Engine Optimization (SEO)",
      topics: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
      duration: "14 hours"
    },
    {
      week: "Week 3",
      title: "Pay-Per-Click Advertising (PPC)",
      topics: ["Google Ads", "Facebook Ads", "Campaign Setup", "Bid Management"],
      duration: "16 hours"
    },
    {
      week: "Week 4",
      title: "Social Media Marketing",
      topics: ["Platform Strategies", "Content Creation", "Community Management", "Paid Social"],
      duration: "12 hours"
    },
    {
      week: "Week 5",
      title: "Content Marketing",
      topics: ["Content Strategy", "Blog Writing", "Video Marketing", "Email Marketing"],
      duration: "14 hours"
    },
    {
      week: "Week 6",
      title: "Analytics & Measurement",
      topics: ["Google Analytics", "Conversion Tracking", "ROI Measurement", "Reporting"],
      duration: "12 hours"
    },
    {
      week: "Week 7",
      title: "Marketing Automation",
      topics: ["Email Automation", "Lead Nurturing", "CRM Integration", "Workflow Design"],
      duration: "10 hours"
    },
    {
      week: "Week 8",
      title: "Campaign Management & Optimization",
      topics: ["A/B Testing", "Performance Optimization", "Budget Management", "Final Project"],
      duration: "16 hours"
    }
  ];

  const skills = [
    {
      icon: Search,
      title: "SEO Mastery",
      description: "Master search engine optimization techniques"
    },
    {
      icon: Target,
      title: "PPC Advertising",
      description: "Create and manage profitable ad campaigns"
    },
    {
      icon: Users,
      title: "Social Media",
      description: "Build engaged communities and drive traffic"
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Measure and optimize marketing performance"
    },
    {
      icon: Globe,
      title: "Content Strategy",
      description: "Create compelling content that converts"
    },
    {
      icon: TrendingUp,
      title: "Growth Hacking",
      description: "Implement strategies for rapid business growth"
    }
  ];

  const projects = [
    {
      title: "SEO Campaign Analysis",
      description: "Analyze and optimize a real website's SEO performance",
      skills: ["Keyword Research", "Technical SEO", "Content Optimization"]
    },
    {
      title: "PPC Campaign Management",
      description: "Create and manage Google Ads campaigns with budget optimization",
      skills: ["Google Ads", "Bid Management", "ROI Optimization"]
    },
    {
      title: "Social Media Strategy",
      description: "Develop a comprehensive social media marketing plan",
      skills: ["Content Planning", "Community Management", "Paid Social"]
    },
    {
      title: "Marketing Analytics Dashboard",
      description: "Build custom analytics dashboard for campaign tracking",
      skills: ["Google Analytics", "Data Visualization", "Reporting"]
    }
  ];

  const careerPaths = [
    {
      title: "Digital Marketing Manager",
      salary: "$65,000 - $95,000",
      growth: "22% job growth",
      description: "Lead digital marketing initiatives for companies"
    },
    {
      title: "SEO Specialist",
      salary: "$45,000 - $75,000", 
      growth: "20% job growth",
      description: "Optimize websites for search engine visibility"
    },
    {
      title: "PPC Manager",
      salary: "$55,000 - $85,000",
      growth: "18% job growth", 
      description: "Manage paid advertising campaigns across platforms"
    },
    {
      title: "Social Media Manager",
      salary: "$40,000 - $70,000",
      growth: "25% job growth",
      description: "Build and manage brand presence on social platforms"
    }
  ];

  const testimonials = [
    {
      name: "Emily Davis",
      role: "Marketing Manager at Adobe",
      rating: 5,
      comment: "This course completely transformed my marketing skills. I got promoted within 6 months!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NTkzNjAyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "James Wilson",
      role: "Digital Marketing Consultant",
      rating: 5,
      comment: "The practical approach and real-world projects helped me start my own marketing agency.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBtYXJrZXRpbmd8ZW58MXx8fHwxNzU5MzYwMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 gradient-bg-2 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 gradient-bg-4 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Badge className="gradient-bg-2 text-white px-4 py-2 rounded-full mb-4">
              📈 High-Demand Skills
            </Badge>
            <h1 className="text-5xl mb-6 gradient-text">{courseDetails.title} 🚀</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Master the art and science of digital marketing. Learn SEO, PPC, social media, 
              content marketing, and analytics to drive business growth in the digital age.
            </p>

            {/* Course Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-green-600 mr-1" />
                  <span className="text-sm text-gray-600">{courseDetails.duration}</span>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-blue-600 mr-1" />
                  <span className="text-sm text-gray-600">{courseDetails.students} students</span>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="text-sm text-gray-600">{courseDetails.rating} rating</span>
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
              <Badge className="bg-red-100 text-red-600">Save $300</Badge>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={() => onPageChange('contact')}
                className="modern-button gradient-bg-2 text-white hover:scale-105 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                📈 Enroll Now
              </Button>
              <Button 
                onClick={() => onPageChange('contact')}
                className="modern-button glass-card border-2 border-green-300 text-green-600 hover:scale-105 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              >
                📞 Get Info
              </Button>
            </div>
          </div>

          <div>
            <Card className="glass-card backdrop-blur-sm border-white/30 shadow-2xl">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1OTMwNTIwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={courseDetails.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/40 rounded-t-lg flex items-center justify-center">
                  <Button className="bg-white text-green-600 rounded-full w-16 h-16 p-0 hover:scale-110 transition-transform shadow-2xl">
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4">Course Preview</h3>
                <p className="text-gray-600 mb-4">
                  Get a sneak peek of what you'll learn in this comprehensive digital marketing course.
                </p>
                <Button 
                  onClick={() => onPageChange('contact')}
                  className="w-full modern-button gradient-bg-2 text-white hover:scale-105 transition-all duration-300"
                >
                  🎬 Watch Preview
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills You'll Learn */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 gradient-text">Skills You'll Master 🎯</h2>
            <p className="text-lg text-gray-600">
              Comprehensive digital marketing skills that are in high demand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card key={index} className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-xl group text-center p-6">
                  <div className={`gradient-bg-${(index % 4) + 1} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg mb-2">{skill.title}</h3>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
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
              8-week intensive program covering all aspects of digital marketing
            </p>
          </div>

          <div className="space-y-6">
            {modules.map((module, index) => (
              <Card key={index} className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-xl group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`gradient-bg-${(index % 4) + 1} w-12 h-12 rounded-xl flex items-center justify-center mr-4 text-white font-bold`}>
                        {index + 1}
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
            <h2 className="text-3xl mb-4 gradient-text">Hands-On Projects 🛠️</h2>
            <p className="text-lg text-gray-600">
              Apply your learning with real marketing campaigns and strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-xl group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`gradient-bg-${(index % 4) + 1} w-12 h-12 rounded-xl flex items-center justify-center mr-4`}>
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <Badge key={idx} className="bg-green-100 text-green-600 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 gradient-text">Career Opportunities 💼</h2>
            <p className="text-lg text-gray-600">
              Digital marketing offers excellent career prospects and growth opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPaths.map((career, index) => (
              <Card key={index} className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-xl text-center p-6">
                <h3 className="text-lg mb-2">{career.title}</h3>
                <div className="text-2xl gradient-text mb-2">{career.salary}</div>
                <Badge className="bg-green-100 text-green-600 mb-3">{career.growth}</Badge>
                <p className="text-gray-600 text-sm">{career.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 gradient-text">Student Success Stories 🌟</h2>
            <p className="text-lg text-gray-600">
              See how our students have transformed their careers
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
        <div className="relative gradient-bg-2 rounded-3xl p-12 text-center text-white shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-12 -translate-y-12"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 translate-y-16"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl mb-4">Ready to Become a Marketing Expert? 📈</h3>
            <p className="text-green-100 mb-8 text-xl max-w-2xl mx-auto">
              Join our proven program and start your digital marketing career today
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => onPageChange('contact')}
                className="modern-button bg-white text-green-600 hover:scale-105 hover:shadow-2xl px-10 py-4 text-lg rounded-xl transition-all duration-300"
              >
                📈 Enroll for $899
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