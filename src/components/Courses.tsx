import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import {
  Code,
  TrendingUp,
  Palette,
  Database,
  Clock,
  Users,
  Star,
  Award,
  CheckCircle,
  Calendar
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CoursesProps {
  onPageChange: (page: string) => void;
}

export function Courses({ onPageChange }: CoursesProps) {
  const courses = [
    {

      id: 1,
      title: "Full Stack Web Development",
      category: "Web Development",
      duration: "4 Months",
      level: "Beginner to Advanced",
      price: "₹10,000",
      rating: 4.9,
      students: 250,
      image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTkzMTE3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",

      // यह जानकारी जोड़ी गई है:
      delivery: "Live Online (Google Meet)",
      schedule: "Night Classes (Convenient for Working Professionals)",

      description: "Master modern web development with React, Node.js, and database technologies through our **live online night classes**. Build robust, scalable applications from scratch with flexible scheduling.",
      highlights: [
        "Live Online Sessions (Google Meet)",
        "React.js & JavaScript ES6+ (Frontend Mastery)",
        "Node.js & Express.js (Backend Development)",
        "MongoDB & SQL Databases (Data Management)",
        "RESTful APIs & GraphQL (Integration Techniques)",
        "Deployment & DevOps",
        "Real-world Projects & Portfolio Building"
      ],
      icon: Code,
      color: "blue",
    },
    {
      id: 2,
      title: "Advanced SEO & Meta Ads Mastery",
      category: "Digital Marketing",
      duration: "2 Months",
      level: "Beginner to Intermediate",
      price: "₹3500",
      rating: 4.8,
      students: 180,
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1OTMwNTIwNnww&ixlib=rb-4.1.0&q=80&w=1080",


      delivery: "Live Online (Google Meet)",
      schedule: "Night Classes (Convenient for Working Professionals)",

      description: "Master the highest-demand skills: **Organic SEO** and **High-Impact Meta (Facebook/Instagram) Ads**. Learn to drive targeted traffic and maximize ROI through our **live, flexible night sessions**.",

      highlights: [
        "Live Online Sessions (Google Meet)",
        "In-depth Technical SEO & Link Building",
        "Advanced Meta Ads (Targeting & Funnels)",
        "Keyword Research & Content Strategy",
        "Conversion API & Pixel Setup",
        "Analytics & Performance Reporting"
      ],
      icon: TrendingUp,
      color: "green"
    },
    {
      id: 3,
      title: "Advanced Excel Mastery & Automation",
      category: "Business Analytics",
      duration: "45 Days",
      level: "Intermediate to Professional",
      price: "₹1500",
      rating: 4.6,
      students: 150,
      image: "https://images.unsplash.com/photo-1551288258-c87a55230919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29ub21pY3MlMjBkJTI2JTIwc3RhdGlzdGljc3xlbnwxfHx8fDE3NTkzOTIwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080",


      delivery: "Live Online (Google Meet)",
      schedule: "Night Classes (Convenient for Working Professionals)",

      description: "Master **Advanced Excel functions** and **VBA Macros** to automate reports, streamline data analysis, and boost productivity. Essential training for finance, HR, and analytics roles.",

      highlights: [
        "Live Online Sessions (Google Meet)",
        "Pivot Tables, VLOOKUP, HLOOKUP & XLOOKUP",
        "Data Visualization & Dashboard Creation",
        "Introduction to VBA Macros & Report Automation",
        "Financial Modeling & Statistical Functions",
        "Case Studies & Real-time Data Projects"
      ],
      icon: TrendingUp,
      color: "indigo"
    },
    {
      id: 4,
      title: "Data Science & Machine Learning Bootcamp",
      category: "Data Science",
      duration: "5 Months",
      level: "Intermediate to Advanced",
      price: "₹15000",
      rating: 4.9,
      students: 95,
      image: "https://images.unsplash.com/photo-1698047682129-c3e217ac08b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwdGVhbXxlbnwxfHx8fDE3NTkyNjgxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      delivery: "Live Online (Google Meet)",
      schedule: "Night Classes (Convenient for Working Professionals)",
      description: "Master **Python**, **Statistical Modeling**, and **Machine Learning** to build predictive models and solve complex business problems. Hands-on projects included.",
      highlights: [
        "Live Online Sessions (Google Meet)",
        "Advanced Python (Pandas, NumPy, Scikit-learn)",
        "Supervised & Unsupervised Machine Learning",
        "Deep Learning Fundamentals",
        "A/B Testing & Statistical Inference",
        "Industry Case Studies & Capstone Project"
      ],
      icon: Database,
      color: "indigo"
    },
    {
      id: 5,
      title: "Professional Data Analysis using PowerBI & SQL",
      category: "Data Analysis",
      duration: "4 Months",
      level: "Beginner to Intermediate",
      price: "₹10000",
      rating: 4.8,
      students: 110,
      image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTkzMTE3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      delivery: "Live Online (Google Meet)",
      schedule: "Night Classes (Convenient for Working Professionals)",
      description: "Learn essential tools like **SQL, Python (Pandas)**, and visualization libraries to transform raw data into clear, actionable business insights.",
      highlights: [
        "Live Online Sessions (Google Meet)",
        "Advanced SQL Queries for Data Extraction",
        "Data Cleaning & Manipulation with Python Pandas",
        "Interactive Data Visualization (Matplotlib, Seaborn)",
        "A/B Testing & Basic Statistical Analysis",
        "Building Professional Dashboards"
      ],
      icon: Database,
      color: "blue"
    },
    {
      id: 6,
      title: "Business Analysis Certification Program",
      category: "Business Analysis",
      duration: "4 Months",
      level: "Beginner to Intermediate",
      price: "₹7,500",
      rating: 4.7,
      students: 75,
      image: "https://images.unsplash.com/photo-1698047682129-c3e217ac08b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwdGVhbXxlbnwxfHx8fDE3NTkyNjgxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      delivery: "Live Online (Google Meet)",
      schedule: "Night Classes (Convenient for Working Professionals)",
      description: "Learn to bridge the gap between business needs and technology solutions. Master **requirements gathering**, **process modeling**, and **stakeholder communication**.",
      highlights: [
        "Live Online Sessions (Google Meet)",
        "Requirements Elicitation & Documentation (BRD/SRS)",
        "Process Modeling (BPMN) & Workflow Mapping",
        "Stakeholder Management & Conflict Resolution",
        "Agile & Scrum Methodologies",
        "Effective Communication & Presentation Skills"
      ],
      icon: Database,
      color: "green"
    },

  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
      green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
      indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200" }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 gradient-bg-3 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 gradient-bg-4 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 gradient-text">Professional Training Courses 🎓</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Advance your career with our industry-focused training programs designed by experts 🚀
          </p>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-2xl text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-2xl text-gray-900 mb-2">95%</div>
            <div className="text-gray-600">
              Student Satisfaction Rate
            </div>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-2xl text-gray-900 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-2xl text-gray-900 mb-2">6+</div>
            <div className="text-gray-600">Courses Available</div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {courses.map((course) => {
            const colorClasses = getColorClasses(course.color);
            const Icon = course.icon;

            return (
              <Card key={course.id} className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-2xl group overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className={`gradient-bg-${course.id} text-white border-0 px-3 py-1 rounded-full shadow-lg`}>
                      ✨ {course.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 glass-card backdrop-blur-sm px-3 py-2 rounded-xl border border-white/20">
                    <div className="flex items-center text-white font-semibold">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {course.rating} ⭐
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center mb-2">
                      <div className={`${colorClasses.bg} p-2 rounded-lg mr-3`}>
                        <Icon className={`w-5 h-5 ${colorClasses.text}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{course.title}</CardTitle>
                      </div>
                    </div>
                    <div className="text-2xl text-blue-600">{course.price}</div>
                  </div>
                  <p className="text-gray-600">{course.description}</p>
                </CardHeader>

                <CardContent>
                  {/* Course Info */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {course.students} students
                    </div>
                    <div className="text-gray-600">
                      {course.level}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm text-gray-900 mb-3">What You'll Learn:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {course.highlights.slice(0, 4).map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <Button
                      onClick={() => onPageChange('contact')}
                      className="flex-1 modern-button gradient-bg-1 hover:scale-105 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      🎯 Enroll Now
                    </Button>
                    <Button
                      onClick={() => {
                        if (course.title === "Full Stack Web Development") {
                          onPageChange('full-stack-development');
                        } else if (course.title === "Advanced SEO & Meta Ads Mastery") {
                          onPageChange('Advanced SEO & Meta Ads Mastery');
                        } else {
                          onPageChange('contact');
                        }
                      }}
                      className="flex-1 modern-button glass-card border-2 border-blue-300 text-blue-600 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                    >
                      📖 Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl mb-4 text-gray-900">Why Choose Our Training Programs?</h3>
            <p className="text-lg text-gray-600">
              Comprehensive learning experience designed for your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg mb-2 text-gray-900">Expert Instructors</h4>
              <p className="text-gray-600">Learn from industry professionals with real-world experience</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Award className="w-8 h-8 text-green-600" />
              </div>
             
              <h4 className="text-lg mb-2 text-gray-900">
                BJTI Certificate of Completion
              </h4>
             
              <p className="text-gray-600">
                Receive a recognized certificate from **BJ Tech Innovations** upon successful course completion.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg mb-2 text-gray-900">Flexible Learning</h4>
              <p className="text-gray-600">Study at your own pace with online and offline options</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}