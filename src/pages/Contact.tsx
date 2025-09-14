import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, BookOpen, Leaf, TreePine, Flower2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    school: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  // Animated leaves component with enhanced animations
  const AnimatedLeaves = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Enhanced CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float-1 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25% { transform: translateY(-25px) translateX(15px) rotate(8deg); }
            50% { transform: translateY(-15px) translateX(-10px) rotate(-8deg); }
            75% { transform: translateY(-35px) translateX(20px) rotate(5deg); }
          }
          
          @keyframes float-2 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            33% { transform: translateY(-30px) translateX(-15px) rotate(12deg); }
            66% { transform: translateY(-20px) translateX(12px) rotate(-12deg); }
          }
          
          @keyframes float-3 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { transform: translateY(-40px) translateX(18px) rotate(15deg); }
          }
          
          @keyframes drift-up {
            0% { 
              transform: translateX(-50px) translateY(100vh) rotate(0deg) scale(0.5); 
              opacity: 0;
            }
            10% { opacity: 0.7; }
            90% { opacity: 0.7; }
            100% { 
              transform: translateX(50px) translateY(-100px) rotate(360deg) scale(1.2); 
              opacity: 0;
            }
          }
          
          @keyframes sway-gentle {
            0%, 100% { transform: translateX(0px) rotate(0deg); }
            25% { transform: translateX(12px) rotate(3deg); }
            75% { transform: translateX(-12px) rotate(-3deg); }
          }
          
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }
          
          @keyframes spiral {
            0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
          }
          
          @keyframes wave {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-10px) rotate(2deg); }
            50% { transform: translateY(-5px) rotate(0deg); }
            75% { transform: translateY(-15px) rotate(-2deg); }
          }
          
          .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
          .animate-float-2 { animation: float-2 10s ease-in-out infinite; }
          .animate-float-3 { animation: float-3 12s ease-in-out infinite; }
          .animate-drift-up { animation: drift-up 25s linear infinite; }
          .animate-sway-gentle { animation: sway-gentle 6s ease-in-out infinite; }
          .animate-twinkle { animation: twinkle 4s ease-in-out infinite; }
          .animate-spiral { animation: spiral 20s linear infinite; }
          .animate-wave { animation: wave 7s ease-in-out infinite; }
        `
      }} />
      
      {/* Background environmental elements with gentle sway */}
      <div className="absolute top-8 left-8">
        <TreePine className="h-12 w-12 text-green-300/30 animate-sway-gentle" />
      </div>
      <div className="absolute top-16 right-16">
        <TreePine className="h-16 w-16 text-emerald-200/25 animate-sway-gentle" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute bottom-20 left-12">
        <TreePine className="h-14 w-14 text-green-200/35 animate-sway-gentle" style={{ animationDelay: '4s' }} />
      </div>
      <div className="absolute top-1/3 right-8">
        <TreePine className="h-10 w-10 text-teal-300/25 animate-sway-gentle" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Enhanced floating leaves with realistic motion */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`leaf-${i}`}
          className={`absolute animate-float-${(i % 3) + 1} opacity-40`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
          }}
        >
          <Leaf 
            className={`h-${4 + Math.floor(Math.random() * 4)} w-${4 + Math.floor(Math.random() * 4)} ${
              ['text-green-400', 'text-emerald-500', 'text-teal-400', 'text-lime-500', 'text-forest-green'][i % 5]
            } drop-shadow-sm`}
            style={{
              filter: 'blur(0.3px)',
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        </div>
      ))}
      
      {/* Colorful floating flowers with spiral motion */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`flower-${i}`}
          className={`absolute animate-spiral opacity-50`}
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        >
          <Flower2 
            className={`h-${3 + Math.floor(Math.random() * 4)} w-${3 + Math.floor(Math.random() * 4)} ${
              ['text-pink-400', 'text-yellow-400', 'text-purple-400', 'text-rose-400', 'text-orange-400', 'text-cyan-400'][i % 6]
            } drop-shadow-lg`}
          />
        </div>
      ))}
      
      {/* Drifting particles with upward motion */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full animate-drift-up opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `100%`,
            width: `${2 + Math.random() * 6}px`,
            height: `${2 + Math.random() * 6}px`,
            background: `linear-gradient(45deg, ${
              ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#86efac', '#bbf7d0'][i % 6]
            }, ${
              ['#065f46', '#047857', '#059669', '#0d9488', '#0f766e', '#115e59'][i % 6]
            })`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${20 + Math.random() * 15}s`,
            boxShadow: '0 0 10px rgba(16, 185, 129, 0.4)',
          }}
        />
      ))}
      
      {/* Twinkling environmental sparkles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
          }}
        >
          <div 
            className={`w-1 h-1 rounded-full ${
              ['bg-green-400', 'bg-emerald-400', 'bg-teal-400', 'bg-lime-400', 'bg-cyan-400'][i % 5]
            }`}
            style={{
              boxShadow: `0 0 8px ${
                ['#10b981', '#34d399', '#14b8a6', '#65a30d', '#06b6d4'][i % 5]
              }`,
            }}
          />
        </div>
      ))}
      
      {/* Floating grass blades with wave motion */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`grass-${i}`}
          className="absolute animate-wave opacity-25"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 30}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 3}s`,
          }}
        >
          <div 
            className="w-1 bg-gradient-to-t from-green-600 to-green-300 rounded-full"
            style={{ height: `${20 + Math.random() * 30}px` }}
          />
        </div>
      ))}
      
      {/* Butterflies with complex flight patterns */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`butterfly-${i}`}
          className="absolute opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float-${(i % 3) + 1} ${8 + i * 2}s ease-in-out infinite, spiral ${15 + i * 5}s linear infinite`,
            animationDelay: `${i * 3}s`,
          }}
        >
          <div className="relative">
            <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-80 animate-twinkle" />
            <div className="absolute top-0 left-1 w-2 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-70" />
            <div className="absolute top-0 right-1 w-2 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-70" />
          </div>
        </div>
      ))}
    </div>
  );

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: 'Email Us',
      details: 'greequest@gmail.com',
      description: 'Send us an email anytime; we typically respond within 24 hours'
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: 'Call Us',
      details: '+91 93926 xxxxx',
      description: 'Mon–Fri: 9:30 AM – 6:00 PM IST'
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      title: 'Visit Us',
      details: 'Hyderabad, Telangana, India',
      description: 'Primary operations in Hyderabad; virtual meetings available across India'
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: 'Business Hours',
      details: 'Mon–Fri: 9:30 AM – 6:00 PM IST',
      description: 'Support available in English, Hindi, and Telugu'
    }
  ];

  const inquiryTypes = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'School Partnerships',
      description: 'Interested in implementing GreenQuest at your school or university in India?',
      contact: 'greequest@gmail.com'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      title: 'Product Support',
      description: 'Need help with the platform or have technical questions? (India support)',
      contact: 'greequest@gmail.com'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-600" />,
      title: 'Educational Resources',
      description: 'Questions about curriculum, lesson plans, or educational content for Indian boards?',
      contact: 'greequest@gmail.com'
    }
  ];

  return (
    <div className="min-h-screen pt-20 relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Animated Background */}
      <AnimatedLeaves />
      
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-br from-green-100/80 via-emerald-100/70 to-teal-100/80 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 opacity-20">
            <Leaf className="h-12 w-12 text-green-500 animate-pulse" />
          </div>
          <div className="absolute top-8 right-8 opacity-20">
            <Flower2 className="h-10 w-10 text-emerald-500 animate-bounce" />
          </div>
          
          <div className="relative z-10 backdrop-blur-sm bg-white/30 rounded-3xl p-8 border border-green-200/50">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6 animate-pulse">
              🌱 Get in Touch
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ready to bring gamified environmental education to your school? 
              We're here to help you get started and answer any questions you may have.
              <span className="block mt-2 text-green-600 font-semibold">🌍 Let's make learning about our planet fun and engaging!</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 relative z-10 bg-gradient-to-br from-white/90 via-green-50/80 to-emerald-50/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative">
              {/* Decorative background for form */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-emerald-100/50 rounded-3xl transform rotate-1"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-green-200/50">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-green-100 p-2 rounded-full">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                    🌿 Send Us a Message
                  </h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-medium text-green-700 mb-2">
                        🙋‍♂️ Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-400 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:shadow-lg"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-medium text-green-700 mb-2">
                        📧 Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-400 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:shadow-lg"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-green-700 mb-2">
                        👤 Your Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-400 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:shadow-lg"
                      >
                        <option value="">Select your role</option>
                        <option value="teacher">🍎 Teacher</option>
                        <option value="administrator">🏫 School Administrator</option>
                        <option value="student">🎓 Student</option>
                        <option value="parent">👨‍👩‍👧‍👦 Parent</option>
                        <option value="other">🤝 Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="school" className="block text-sm font-medium text-green-700 mb-2">
                        🏫 School/Organization
                      </label>
                      <input
                        type="text"
                        id="school"
                        name="school"
                        value={formData.school}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-400 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:shadow-lg"
                        placeholder="Your school or organization"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-green-700 mb-2">
                      💬 Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-400 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:shadow-lg"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-green-700 mb-2">
                      📝 Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-400 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:shadow-lg resize-none"
                      placeholder="Tell us more about how we can help you make environmental education exciting..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center group transform hover:scale-105 hover:shadow-2xl"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    🚀 Send Message
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="relative">
              {/* Decorative background for info */}
              <div className="absolute inset-0 bg-gradient-to-bl from-emerald-100/50 to-green-100/50 rounded-3xl transform -rotate-1"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-emerald-200/50">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent">
                    🌍 Contact Information
                  </h2>
                </div>
                
                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50/80 to-emerald-50/80 rounded-2xl backdrop-blur-sm border border-green-200/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="flex-shrink-0 bg-white/80 p-3 rounded-xl shadow-md">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-green-800">{info.title}</h3>
                        <p className="text-emerald-700 font-medium">{info.details}</p>
                        <p className="text-green-600 text-sm leading-relaxed">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-green-100/80 via-emerald-100/80 to-teal-100/80 p-6 rounded-2xl border border-green-200/50 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">⚡</span>
                    <h3 className="text-xl font-semibold text-green-800">
                      Quick Response Guarantee
                    </h3>
                  </div>
                  <p className="text-green-700 leading-relaxed">
                    We understand that implementing new educational technology is important for your institution. 
                    Our team is committed to responding to all inquiries within 24 hours during business days. 
                    <span className="block mt-2 font-semibold text-emerald-600">
                      🌱 For urgent matters, please call us directly and let's grow together!
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="py-20 relative z-10 bg-gradient-to-br from-emerald-50/80 via-green-50/80 to-teal-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-3 mb-6">
              <Leaf className="h-8 w-8 text-green-500 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                🤝 How Can We Help You?
              </h2>
              <Flower2 className="h-8 w-8 text-emerald-500 animate-bounce" />
            </div>
            <p className="text-lg text-green-700 max-w-2xl mx-auto leading-relaxed">
              Choose the best way to reach us based on your specific needs and questions.
              <span className="block mt-2 font-semibold text-emerald-600">🌱 Together, we can make environmental education amazing!</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {inquiryTypes.map((type, index) => (
              <div key={index} className="group relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-green-100/60 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-green-200/50 transform group-hover:scale-105">
                  <div className="mb-6 flex justify-center">
                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-2xl shadow-lg">
                      {type.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    {type.title}
                  </h3>
                  <p className="text-green-600 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-xl border border-green-200/50">
                    <p className="text-sm font-medium text-green-800">📧 {type.contact}</p>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative z-10 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4">
            <TreePine className="h-16 w-16 text-white animate-pulse" />
          </div>
          <div className="absolute bottom-4 right-4">
            <Leaf className="h-20 w-20 text-white animate-bounce" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Flower2 className="h-24 w-24 text-white/30 animate-spin" style={{ animationDuration: '20s' }} />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            🚀 Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Let's discuss how GreenQuest can transform environmental education at your institution.
            <span className="block mt-2 font-semibold text-white">🌍 Join the green revolution in education today!</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
              <span className="flex items-center justify-center">
                📅 Schedule Demo
                <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">🎯</div>
              </span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
              <span className="flex items-center justify-center">
                📄 Download Brochure
                <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">📥</div>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;