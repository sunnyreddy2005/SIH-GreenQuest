import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  TreePine, 
  Trophy, 
  Users, 
  Play, 
  Award, 
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Globe,
  Zap,
  Heart,
  Target,
  TrendingUp,
  Shield,
  Leaf
} from 'lucide-react';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <BookOpen className="h-12 w-12 text-emerald-600" />,
      title: 'Interactive Learning',
      description: 'Engage with gamified quizzes, eco-lessons, and interactive content that makes environmental education fun and memorable.',
      gradient: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      delay: 'delay-100'
    },
    {
      icon: <TreePine className="h-12 w-12 text-green-600" />,
      title: 'Real-World Impact',
      description: 'Participate in tree planting, clean-up drives, and sustainability projects that create measurable environmental change.',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      delay: 'delay-200'
    },
    {
      icon: <Trophy className="h-12 w-12 text-amber-600" />,
      title: 'Rewards & Recognition',
      description: 'Earn eco-points, unlock exclusive badges, and climb dynamic leaderboards as you complete sustainability challenges.',
      gradient: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      delay: 'delay-300'
    },
    {
      icon: <Users className="h-12 w-12 text-indigo-600" />,
      title: 'Collaborative Community',
      description: 'Connect with like-minded students, join environmental clubs, and participate in school-wide sustainability initiatives.',
      gradient: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      delay: 'delay-400'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Students Engaged', icon: <Users className="h-6 w-6" />, color: 'text-blue-600' },
    { number: '1,200+', label: 'Schools Participating', icon: <BookOpen className="h-6 w-6" />, color: 'text-emerald-600' },
    { number: '125,000+', label: 'Trees Planted', icon: <TreePine className="h-6 w-6" />, color: 'text-green-600' },
    { number: '35+', label: 'Countries Reached', icon: <Globe className="h-6 w-6" />, color: 'text-indigo-600' }
  ];

  const steps = [
    {
      icon: <BookOpen className="h-20 w-20 text-emerald-600" />,
      title: 'Learn & Explore',
      description: 'Dive into interactive lessons about climate science, biodiversity conservation, and sustainable living practices.',
      number: '01',
      delay: 'delay-100'
    },
    {
      icon: <Target className="h-20 w-20 text-blue-600" />,
      title: 'Take Action',
      description: 'Complete real-world environmental challenges, document your impact, and inspire others to join your mission.',
      number: '02',
      delay: 'delay-200'
    },
    {
      icon: <Award className="h-20 w-20 text-amber-600" />,
      title: 'Earn Recognition',
      description: 'Collect eco-points, unlock achievement badges, compete on leaderboards, and showcase your environmental leadership.',
      number: '03',
      delay: 'delay-300'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Grade 10 Student',
      school: 'Greenwood High School',
      quote: 'GreenQuest transformed how I see environmental issues! The gamification made me excited about sustainability, and I\'ve earned 15 badges so far. Our school climate club grew from 5 to 50 members!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      badge: '🌱 Eco Champion'
    },
    {
      name: 'Ms. Rodriguez',
      role: 'Environmental Science Teacher',
      school: 'Lincoln Middle School',
      quote: 'The teacher dashboard is incredible! I can track 120 students across 5 classes, verify their projects instantly, and the engagement levels have tripled. Best educational tool I\'ve used in 15 years.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      badge: '👩‍🏫 Educator Pro'
    },
    {
      name: 'Alex Thompson',
      role: 'Grade 8 Student',
      school: 'Riverside Academy',
      quote: 'Our school\'s reforestation challenge was amazing! We planted 300 trees, cleaned 2 beaches, and I unlocked the \'Forest Guardian\' legendary badge. My parents are so proud!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      badge: '🏆 Action Hero'
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-blue-50 to-cyan-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-30 animate-bounce delay-1000">
          <TreePine className="h-16 w-16 text-green-600" />
        </div>
        <div className="absolute top-32 right-20 opacity-30 animate-bounce delay-2000">
          <Leaf className="h-12 w-12 text-emerald-600" />
        </div>
        <div className="absolute bottom-32 left-20 opacity-30 animate-bounce delay-1500">
          <Globe className="h-14 w-14 text-blue-600" />
        </div>
        <div className="absolute bottom-20 right-16 opacity-30 animate-bounce delay-500">
          <Trophy className="h-18 w-18 text-amber-600" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-blue-100 border border-emerald-200 rounded-full px-6 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-emerald-600 mr-2" />
              
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
                Green
              </span>
              <span className="text-gray-900">Quest</span>
            </h1>
            
            <div className="relative mb-6">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-700 mb-4">
                Gamify Sustainability. 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Inspire Change.</span>
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto font-medium leading-relaxed">
              Transform environmental education with our cutting-edge gamified platform. 
              <span className="text-emerald-600 font-semibold">Engage students</span>, 
              <span className="text-blue-600 font-semibold"> track real impact</span>, and 
              <span className="text-purple-600 font-semibold"> build environmental champions</span> of tomorrow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link
                to="/login"
                className="group relative bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  <Zap className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  Start Your Journey
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
              
              <Link
                to="/about"
                className="group bg-white/80 backdrop-blur-sm text-gray-700 px-10 py-5 rounded-2xl text-lg font-bold border-2 border-gray-200 hover:border-emerald-300 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center"
              >
                <Play className="mr-3 h-6 w-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 hover:bg-white/90 transition-all duration-300">
                  <div className={`flex items-center justify-center mb-2 ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full px-6 py-2 mb-6">
              <Heart className="h-4 w-4 text-red-500 mr-2" />
              <span className="text-gray-700 font-medium">Why Students & Teachers Love Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Environmental 
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Education</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive platform combines interactive learning, real-world action, 
              and gamification to create the most engaging sustainability curriculum available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group relative ${feature.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 hover:-translate-y-2 ${feature.delay}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center text-emerald-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full px-6 py-2 mb-6">
              <Target className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-gray-700 font-medium">Simple. Effective. Engaging.</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It 
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"> Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Getting started with GreenQuest is effortless. Follow our proven three-step methodology 
              to transform environmental education in your institution.
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-1/3 w-1/3 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 transform -translate-y-1/2 z-0"></div>
            <div className="hidden lg:block absolute top-1/2 right-1/3 w-1/3 h-1 bg-gradient-to-r from-blue-400 to-amber-400 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`text-center group ${step.delay} animate-fade-in-up`}
                >
                  {/* Step Number */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center text-3xl font-bold text-gray-400 border-4 border-gray-200 shadow-lg">
                      {step.number}
                    </div>
                    <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-8 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <div className="p-6 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-emerald-200">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-emerald-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-6 py-2 mb-6">
              <Star className="h-4 w-4 text-amber-600 mr-2 fill-current" />
              <span className="text-gray-700 font-medium">5.0 Rating from 1,200+ Schools</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Students & 
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> Teachers Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the transformative impact GreenQuest has had on educational institutions 
              and environmental awareness across the globe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 hover:-translate-y-2"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  {/* Badge */}
                  <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full px-4 py-1 mb-6">
                    <span className="text-sm font-medium text-emerald-700">{testimonial.badge}</span>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-gray-500 font-medium">5.0</span>
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-8 italic leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="flex items-center border-t border-gray-200 pt-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 font-medium">{testimonial.role}</p>
                      <p className="text-sm text-emerald-600 font-bold">{testimonial.school}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center bg-gray-100 rounded-full px-8 py-4">
              <Shield className="h-6 w-6 text-emerald-600 mr-3" />
              <span className="text-gray-700 font-medium">Trusted by educational institutions in 35+ countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-20 opacity-20 animate-bounce delay-1000">
          <TreePine className="h-16 w-16 text-white" />
        </div>
        <div className="absolute top-32 right-20 opacity-20 animate-bounce delay-2000">
          <Trophy className="h-14 w-14 text-white" />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-20 animate-bounce delay-1500">
          <Globe className="h-12 w-12 text-white" />
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <TrendingUp className="h-4 w-4 text-white mr-2" />
              <span className="text-white font-medium">Join the Environmental Education Revolution</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Environmental Education?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto">
              Join thousands of progressive schools and passionate students already making a 
              <span className="text-yellow-300 font-semibold"> measurable impact</span> on our planet. 
              Start your sustainability journey today and become part of the solution!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              to="/login"
              className="group relative bg-white text-emerald-600 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-emerald-50 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center transform hover:scale-105"
            >
              <CheckCircle className="mr-3 h-6 w-6 group-hover:text-emerald-700 transition-colors duration-300" />
              <span className="group-hover:text-emerald-700 transition-colors duration-300">Start Learning Today</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 group-hover:text-emerald-700 transition-all duration-300" />
            </Link>
            
            <Link
              to="/features"
              className="group border-2 border-white text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white hover:text-emerald-600 transition-all duration-300 flex items-center transform hover:scale-105"
            >
              Explore Features
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-200 text-sm font-medium">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1.2K+</div>
              <div className="text-blue-200 text-sm font-medium">Partner Schools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">125K+</div>
              <div className="text-blue-200 text-sm font-medium">Trees Planted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">35+</div>
              <div className="text-blue-200 text-sm font-medium">Countries</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;