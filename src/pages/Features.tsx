import React from 'react';
import { 
  BookOpen, 
  TreePine, 
  Trophy, 
  Users,
  BarChart,
  Shield,
  Zap,
  Globe,
  Camera,
  MessageSquare
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: <BookOpen className="h-12 w-12 text-green-600" />,
      title: 'Interactive Learning Modules',
      description: 'Comprehensive curriculum covering climate science, biodiversity, renewable energy, and sustainable practices.',
      details: [
        'Gamified quizzes and assessments',
        'Interactive simulations',
        'Video lessons from experts',
        'Downloadable resources'
      ]
    },
    {
      icon: <TreePine className="h-12 w-12 text-green-600" />,
      title: 'Real-World Challenges',
      description: 'Action-oriented projects that create measurable environmental impact in local communities.',
      details: [
        'Tree planting initiatives',
        'Community clean-up drives',
        'Waste reduction challenges',
        'Energy conservation projects'
      ]
    },
    {
      icon: <Trophy className="h-12 w-12 text-green-600" />,
      title: 'Gamification & Rewards',
      description: 'Engaging point system with badges, achievements, and leaderboards to motivate continued participation.',
      details: [
        'Eco-points for all activities',
        'Collectible achievement badges',
        'School and individual leaderboards',
        'Seasonal challenge tournaments'
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: 'Teacher Dashboard',
      description: 'Comprehensive management tools for educators to track progress and manage classroom activities.',
      details: [
        'Student progress tracking',
        'Assignment creation tools',
        'Achievement verification',
        'Detailed analytics reports'
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: <BarChart className="h-8 w-8 text-blue-600" />,
      title: 'Analytics & Insights',
      description: 'Detailed reporting on student engagement, learning outcomes, and environmental impact metrics.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Safe & Secure',
      description: 'COPPA-compliant platform with robust privacy protection and secure data handling.'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Instant Feedback',
      description: 'Real-time progress updates and immediate feedback on quiz performance and challenge completion.'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: 'Global Community',
      description: 'Connect with schools worldwide to share experiences and collaborate on environmental projects.'
    },
    {
      icon: <Camera className="h-8 w-8 text-blue-600" />,
      title: 'Impact Documentation',
      description: 'Photo and video submission tools to document and verify real-world environmental actions.'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: 'Discussion Forums',
      description: 'Moderated discussion spaces for students to share ideas and collaborate on sustainability topics.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Environmental Education
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover all the tools and features that make GreenQuest the leading platform 
            for gamified sustainability education in schools and colleges.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="flex-shrink-0 bg-green-50 p-4 rounded-xl">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Even more tools and capabilities to enhance the learning experience and create lasting environmental impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of educators and students who are already transforming environmental education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;