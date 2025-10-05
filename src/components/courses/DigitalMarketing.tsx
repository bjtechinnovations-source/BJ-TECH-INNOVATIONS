import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  // Imported Icons
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
  BookOpen,
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface DigitalMarketingProps {
  onPageChange: (page: string) => void;
}

// FIX: Create a map to link string names in the data to the actual Lucide components
const iconMap = {
    Search: Search,         // For SEO
    Target: Target,         // For Meta Ads/Targeting
    Users: Users,           // For Audience/Social
    BarChart3: BarChart3,   // For Analytics/Performance
    Globe: Globe,           // For Link Building/Off-Page SEO
    TrendingUp: TrendingUp, // For Scaling/Growth
};

export function DigitalMarketing({ onPageChange }: DigitalMarketingProps) {
    const courseDetails = {
        title: "Advanced SEO & Meta Ads Mastery",
        duration: "8 weeks (approx. 2 months)", // Updated to include approx. months
        level: "Basic to Advanced",
        price: "₹3500",
        originalPrice: "₹5000",
        instructor: "Ankit Anand",
        language: "English,Hindi,Punjabi",
    };

    const modules = [
        {
            week: "Week 1",
            title: "Advanced SEO Strategy & Auditing",
            topics: ["In-depth Keyword Strategy", "Competitor Analysis", "Technical SEO Audit", "Site Structure & Siloing"],
            duration: "14 hours"
        },
        {
            week: "Week 2",
            title: "Advanced On-Page & Off-Page SEO",
            topics: ["Schema Markup Implementation", "Core Web Vitals Optimization", "Advanced Link Building Tactics", "Content Gap Analysis"],
            duration: "16 hours"
        },
        {
            week: "Week 3",
            title: "Meta Ads Fundamentals & Setup",
            topics: ["Facebook & Instagram Ad Policy", "Pixel Implementation & Debugging", "Campaign Structure Mastery", "Ad Account Best Practices"],
            duration: "12 hours"
        },
        {
            week: "Week 4",
            title: "Advanced Meta Targeting & Audiences",
            topics: ["Custom & Lookalike Audiences", "Detailed Targeting Strategies", "Exclusion Strategies", "Audience Sizing & Health"],
            duration: "16 hours"
        },
        {
            week: "Week 5",
            title: "Ad Creative & Copy Mastery",
            topics: ["Direct Response Copywriting", "Creative Testing Frameworks", "UGC & Dynamic Creative Ads", "Landing Page Optimization"],
            duration: "14 hours"
        },
        {
            week: "Week 6",
            title: "Meta Ads Scaling & Optimization",
            topics: ["Budget Optimization (CBO/ABO)", "Scaling Strategies (Vertical & Horizontal)", "Troubleshooting Low Performance", "Attribution Models"],
            duration: "16 hours"
        },
        {
            week: "Week 7",
            title: "SEO & Meta Analytics Deep Dive",
            topics: ["Google Search Console Advanced Usage", "Google Analytics 4 for SEO & Paid", "Meta Ads Reporting & Custom Metrics", "Data-Driven Decision Making"],
            duration: "12 hours"
        },
        {
            week: "Week 8",
            title: "Final Capstone Project & Automation",
            topics: ["Full SEO Strategy Development", "End-to-End Meta Campaign Build-out", "Marketing Automation for Leads", "Client Reporting & Final Project Review"],
            duration: "20 hours"
        }
    ];

    // FIX: Updated skills data to use string names that match the iconMap keys
    const skills = [
        {
            icon: "Search", // Fixed: Used string name
            title: "Advanced Technical SEO",
            description: "Master site audits, Core Web Vitals, and structured data"
        },
        {
            icon: "Target", // Fixed: Used string name
            title: "Meta Ads (Facebook/Instagram)",
            description: "Design, launch, and scale profitable Meta ad campaigns"
        },
        {
            icon: "Users", // Fixed: Used string name
            title: "Audience & Targeting Strategy",
            description: "Create high-converting Custom and Lookalike Audiences"
        },
        {
            icon: "BarChart3", // Fixed: Used string name
            title: "Performance & ROI Optimization",
            description: "Measure, attribute, and maximize campaign ROI"
        },
        {
            icon: "Globe", // Fixed: Used string name
            title: "Advanced Link Building",
            description: "Develop scalable and safe off-page SEO strategies"
        },
        {
            icon: "TrendingUp", // Fixed: Used string name
            title: "Scaling & Budget Management",
            description: "Implement CBO and scaling tactics to grow ad spend profitably"
        }
    ];

    const projects = [
        {
            title: "Technical SEO Audit & Strategy",
            description: "Conduct a full technical SEO audit for a live site, focusing on Core Web Vitals and Schema.",
            skills: ["Technical SEO", "Core Web Vitals", "GSC Analysis"]
        },
        {
            title: "End-to-End Meta Ads Campaign",
            description: "Build and run a complete Facebook/Instagram campaign from Pixel setup to creative testing.",
            skills: ["Meta Ads", "Custom Audiences", "Creative Testing"]
        },
        {
            title: "Advanced Link Building Campaign",
            description: "Develop a pitch and outreach strategy for high-authority link acquisition.",
            skills: ["Off-Page SEO", "Content Marketing", "Outreach"]
        },
        {
            title: "Performance Scaling & Optimization Report",
            description: "Analyze a running Meta campaign and propose data-backed scaling and optimization strategies.",
            skills: ["Meta Analytics", "Budget Management", "A/B Testing"]
        }
    ];

    const careerPaths = [
        {
            title: "Advanced SEO Specialist",
            salary: "$55,000 - $85,000",
            growth: "20% job growth",
            description: "Focus on technical and content SEO for large-scale websites"
        },
        {
            title: "Paid Social Media Manager",
            salary: "$60,000 - $90,000",
            growth: "23% job growth",
            description: "Specializes in managing and scaling advertising budgets on Meta platforms"
        },
        {
            title: "Digital Marketing Consultant",
            salary: "$70,000 - $120,000",
            growth: "25% job growth",
            description: "Advises companies on their overall SEO, PPC, and paid media strategy"
        },
        {
            title: "Performance Marketing Manager",
            salary: "$65,000 - $95,000",
            growth: "22% job growth",
            description: "Focuses on measurable ROI from all digital channels, with a strong focus on paid ads and search"
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
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtYW4lMjBtYXJrZXRpbmd8ZW58MXx8fHwxNzU5MzYwMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
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
                            Master the **Advanced SEO** techniques and **Meta (Facebook/Instagram) Ads** strategies to drive high-impact business growth and maximize ROI.
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
                                    <Award className="w-5 h-5 text-purple-600 mr-1" />
                                    <span className="text-sm text-gray-600">{courseDetails.level}</span>
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="text-4xl gradient-text">{courseDetails.price}</div>
                            <div className="text-xl text-gray-400 line-through">{courseDetails.originalPrice}</div>
                            <Badge className="bg-red-100 text-red-600">Save ₹1500</Badge>
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
                            // FIX: Get the component from the map using the string name
                            const Icon = iconMap[skill.icon as keyof typeof iconMap] || BookOpen; // Fallback icon
                            
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
                            8-week intensive program covering all aspects of Advanced SEO and Meta Ads
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
                                📈 Enroll for {courseDetails.price}
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