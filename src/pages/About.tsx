import React from 'react';
import { Target, Heart, Users, Award, TreePine, BookOpen } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Passion for Planet',
      description: 'We believe in nurturing a deep love and respect for our environment through engaging education.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Collaborative Learning',
      description: 'Building communities where students, teachers, and schools work together toward sustainability goals.'
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: 'Excellence in Education',
      description: 'Commitment to providing high-quality, research-based environmental education resources.'
    },
    {
      icon: <TreePine className="h-8 w-8 text-green-500" />,
      title: 'Real Impact',
      description: 'Focusing on actionable learning that creates measurable positive change in local communities.'
    }
  ];

  const stats = [
    { number: 'SIH 2025', label: 'Project Initiative' },
    { number: '6', label: 'Team Members' },
    { number: '1', label: 'Shared Vision' },
    { number: 'KLU', label: 'University' }
  ];

  const team = [
    {
      name: 'Sannihith',
      role: 'Team Lead',
      description: 'Full-stack developer with expertise in gamification and educational technology.',
      avatar: 'SN'
    },
    {
      name: 'Varsha',
      role: 'Frontend Developer',
      description: 'React specialist focused on creating engaging user experiences.',
      avatar: 'VA'
    },
    {
      name: 'Harini',
      role: 'UI/UX Designer',
      description: 'Creative designer passionate about educational interfaces.',
      avatar: 'HA'
    },
    {
      name: 'Anand',
      role: 'Backend Developer',
      description: 'Backend specialist with focus on game mechanics and user progression.',
      avatar: 'AN'
    },
    {
      name: 'Sai Krishna',
      role: 'Full-stack Developer',
      description: 'Full-stack developer specializing in educational gaming systems.',
      avatar: 'SK'
    },
    {
      name: 'Vijay',
      role: 'Backend Developer',
      description: 'Backend developer focused on system architecture and performance.',
      avatar: 'VI'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About GreenQuest
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're on a mission to transform environmental education through gamification, 
              making sustainability learning engaging, actionable, and impactful for students worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At GreenQuest, we believe that environmental education should be more than just textbook learning. 
                Our platform combines the excitement of gaming with the urgency of environmental action to create 
                meaningful learning experiences.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                By gamifying sustainability education, we're empowering the next generation to become 
                environmental stewards who don't just understand the challenges our planet faces, 
                but are equipped and motivated to take action.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="h-12 w-12 text-green-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Goal</h3>
                  <p className="text-gray-600">Reach 1 million students by 2027</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our mission to create impactful environmental education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate educators, technologists, and environmental advocates working together 
              to revolutionize sustainability education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Story
          </h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              GreenQuest was born as an innovative project for Smart India Hackathon (SIH), 
              created by a team of six passionate students from KL University. We recognized 
              that traditional environmental education often fails to engage young learners 
              and create lasting impact.
            </p>
            <p>
              Our team envisioned a platform that would transform environmental education 
              through gamification. By combining educational content with gaming elements, 
              we created an engaging system where students can learn about sustainability 
              while actively participating in environmental challenges and seeing the real 
              impact of their actions.
            </p>
            <p>
              GreenQuest represents our commitment to making environmental education more 
              interactive, engaging, and impactful. Through our platform, we aim to empower 
              students across India and beyond to become active participants in creating a 
              more sustainable future, one challenge at a time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Be part of the movement to transform environmental education and create a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;