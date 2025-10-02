import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle
} from 'lucide-react';
// Formspree React Hook
import { useForm } from '@formspree/react';

export function Contact() {


  // Formspree Hook का उपयोग
  const [state, handleSubmit] = useForm("meorkadg");

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Mathura Nagar", "Sodal Road", "Jalandhar City", "India"],
      color: "blue"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 8699586385"],
      color: "green"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["bjtechinnovations@gmail.com"],
      color: "purple"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["24/7 Hours"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-100", text: "text-blue-600" },
      green: { bg: "bg-green-100", text: "text-green-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-600" },
      orange: { bg: "bg-orange-100", text: "text-orange-600" }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };
  // SUCCESS CONDITION: फॉर्म सबमिट होने पर Success Card दिखाओ
  if (state.succeeded) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden min-h-[500px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <Card className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-2xl max-w-lg mx-auto">
            <CardContent className="p-8">
              <div className="text-center py-12">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-3xl gradient-text mb-2 font-bold">Message Sent Successfully! 🎉</h3>
                <p className="text-gray-600 text-lg">
                  Thank you for contacting BJ Tech Innovations. We'll get back to you soon.
                </p>
              </div>
              <Button
                onClick={() => window.location.reload()} // पेज को रीलोड करने का बटन
                className="w-full modern-button gradient-bg-4 text-white py-3 text-lg mt-4"
              >
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-48 h-48 gradient-bg-2 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 gradient-bg-3 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 gradient-text">Get In Touch 📞</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your project or have questions about our services? We'd love to hear from you! ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const colorClasses = getColorClasses(info.color);

                return (
                  <Card key={index} className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-2xl group">
                    <CardContent className="p-8">
                      <div className="flex items-start">
                        <div className={`gradient-bg-${index + 1} p-4 rounded-2xl mr-4 flex-shrink-0 pulse-glow group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl gradient-text mb-3 group-hover:scale-105 transition-transform">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 mb-2 hover:text-gray-800 transition-colors">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* WhatsApp Button */}
            <div className="mt-6">
              <Button
                className="w-full modern-button gradient-bg-4 hover:scale-105 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-4 text-lg"
                onClick={() => {
                  // मैसेज को URL-एन्कोड फॉर्मेट में परिभाषित किया गया है
                  const prefilledMessage = 'Hello%20BJ%20Tech%20Innovations%2C%20I%20am%20interested%20in%20your%20IT%20Courses.';

                  // whatsappLink में नंबर और मैसेज जोड़ा गया है
                  const whatsappLink = `https://wa.me/917814271615?text=${prefilledMessage}`;

                  // नए टैब में लिंक खोलें
                  window.open(whatsappLink, '_blank');
                }}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                💬 Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="modern-card glass-card backdrop-blur-sm border-white/30 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl gradient-text">✉️ Send Us a Message</CardTitle>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours! 🚀
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">


                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500 transition duration-150"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="_replyto"
                        type="email"
                        required
                        className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500 transition duration-150"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500 transition duration-150"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="_subject"
                        type="text"
                        required
                        className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500 transition duration-150"
                        placeholder="What is this about?"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      className="mt-2 min-h-32 border-gray-300 focus:border-purple-500 focus:ring-purple-500 transition duration-150"
                      placeholder="Please provide details about your project or inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full modern-button gradient-bg-1 hover:scale-105 text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    🚀 Send Message
                  </Button>
                </form>



              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="bg-white border-0 shadow-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Find Us</CardTitle>
              <p className="text-gray-600">
                Visit our office in the heart of San Francisco's Innovation District
              </p>
            </CardHeader>
            <CardContent className="p-0">

              {/* यहाँ पर Google Maps Embed का iFrame डाला गया है */}
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                <iframe
                  // NOTE: यह URL सिर्फ एक प्लेसहोल्डर है।
                  // आपको अपने वास्तविक स्थान (Mathura Nagar, Jalandhar) का URL Google Maps Embed API से लेना होगा।
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.5164235060906!2d75.5759061!3d31.3447255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a7d0a549f85%3A0x9131e1666187c35a!2sMathura%20Nagar%2C%20Shiv%20Nagar%2C%20Industrial%20Area%2C%20Jalandhar%2C%20Punjab%20144008!5e0!3m2!1sen!2sin!4v1759387616626!5m2!1sen!2sin"

                  // Map को पूरी चौड़ाई देने के लिए इसे 100% कर दिया गया है
                  width="100%"
                  height="100%"

                  // React में inline style को एक JavaScript Object के रूप में लिखते हैं
                  style={{ border: 0 }}

                  // HTML के 'allowfullscreen' को React में 'allowFullScreen' लिखते हैं (CamelCase)
                  allowFullScreen

                  loading="lazy"

                  // HTML के 'referrerpolicy' को React में 'referrerPolicy' लिखते हैं (CamelCase)
                  referrerPolicy="no-referrer-when-downgrade"

                  // एक्सेसिबिलिटी के लिए title attribute ज़रूरी है
                  title="Our Business Location on Google Map"

                  // पुराने placeholder div को हटा दिया गया है। 
                  // iFrame को पूरी div पर फैला दिया गया है।
                  className="absolute top-0 left-0"
                >
                </iframe>

                {/* पुराने placeholder text को iframe के ऊपर दिखाने के लिए, अगर iframe लोड न हो पाए */}
                {/* यह div अब optional है, अगर आप चाहते हैं कि केवल मैप ही दिखे */}
                {
    <div className="text-center absolute z-10 bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-md">
      <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-600">
        Interactive Google Maps should be embedded here
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Mathura Nagar, Sodal Road, Jalandhar City, India
      </p>
    </div>
    }
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl text-gray-900 mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg text-gray-900 mb-2">How long does a typical project take?</h4>
              <p className="text-gray-600 mb-4">
                Project timelines vary based on complexity. Simple websites take 2-4 weeks,
                while complex applications can take 8-16 weeks.
              </p>
            </div>
            <div>
              <h4 className="text-lg text-gray-900 mb-2">Do you offer ongoing support?</h4>
              <p className="text-gray-600 mb-4">
                Yes! We provide ongoing maintenance, updates, and technical support
                for all our projects and training programs.
              </p>
            </div>
            <div>
              <h4 className="text-lg text-gray-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600 mb-4">
                We accept all major credit cards, bank transfers, and can arrange
                flexible payment plans for larger projects.
              </p>
            </div>
            <div>
              <h4 className="text-lg text-gray-900 mb-2">Can I get a free consultation?</h4>
              <p className="text-gray-600 mb-4">
                Absolutely! We offer free initial consultations to discuss your
                project requirements and provide recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

