import { useAuth } from '../../contexts/AuthContext';
import { LogOut, School, BarChart3, Award, Users, TrendingUp, Leaf, TreePine, Globe, Shield } from 'lucide-react';

const AdminDashboard = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  // Environmental Background Component
  const EnvironmentalBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"></div>
      
      {/* Floating Environmental Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-pulse">
        <TreePine className="h-16 w-16 text-green-400" />
      </div>
      <div className="absolute top-40 right-20 opacity-15 animate-bounce">
        <Globe className="h-12 w-12 text-emerald-400" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-20">
        <Leaf className="h-14 w-14 text-green-500 transform rotate-45" />
      </div>
      <div className="absolute top-60 left-1/3 opacity-10">
        <Shield className="h-20 w-20 text-teal-400" />
      </div>
      <div className="absolute bottom-40 right-32 opacity-15">
        <TreePine className="h-18 w-18 text-emerald-500 transform -rotate-12" />
      </div>
      
      {/* Animated Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-300 rounded-full opacity-40 animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-emerald-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-teal-400 rounded-full opacity-50 animate-bounce"></div>
    </div>
  );

  return (
    <div className="min-h-screen relative">
      <EnvironmentalBackground />
      
      {/* Header */}
      <header className="relative z-10 bg-white/90 backdrop-blur-sm shadow-lg border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-xl shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">Platform Administrator</p>
              </div>
              <button
                onClick={logout}
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-700"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 p-3 rounded-xl">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Total Students</p>
                <p className="text-3xl font-bold text-gray-800">3</p>
                <p className="text-xs text-blue-600 mt-1">Active learners</p>
              </div>
            </div>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-3 rounded-xl">
                <School className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Active Schools</p>
                <p className="text-3xl font-bold text-gray-800">3</p>
                <p className="text-xs text-green-600 mt-1">Educational partners</p>
              </div>
            </div>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-xl">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Badges Earned</p>
                <p className="text-3xl font-bold text-gray-800">4</p>
                <p className="text-xs text-yellow-600 mt-1">Achievements unlocked</p>
              </div>
            </div>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-3 rounded-xl">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Total Points</p>
                <p className="text-3xl font-bold text-gray-800">2,750</p>
                <p className="text-xs text-purple-600 mt-1">Platform engagement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Management Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 p-4 rounded-xl shadow-lg">
                <School className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">School Management</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">Manage schools, teachers, and student enrollments across the platform</p>
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
              Manage Schools
            </button>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-xl shadow-lg">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Platform Analytics</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">View comprehensive platform usage and environmental impact reports</p>
            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
              View Analytics
            </button>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-4 rounded-xl shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Content Management</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">Create and manage environmental modules, challenges, and badges</p>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
              Manage Content
            </button>
          </div>
        </div>

        {/* Enhanced Monthly Impact Report */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-green-100 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 opacity-10">
            <Leaf className="h-24 w-24 text-green-400 rotate-12" />
          </div>
          <div className="absolute -bottom-2 -left-2 opacity-10">
            <TreePine className="h-20 w-20 text-emerald-400 -rotate-12" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-3 rounded-xl shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                September 2025 Impact Report
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-green-50 shadow-md">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Top Performing Schools</span>
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:shadow-md transition-all duration-300">
                    <div>
                      <p className="font-bold text-gray-800">Riverside Academy</p>
                      <p className="text-sm text-gray-600">Alex Thompson leading with 1,250 points</p>
                    </div>
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      🥇 1st
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                    <div>
                      <p className="font-bold text-gray-800">Greenwood High School</p>
                      <p className="text-sm text-gray-600">Emma Watson with 850 points</p>
                    </div>
                    <span className="bg-gradient-to-r from-gray-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      🥈 2nd
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-100 hover:shadow-md transition-all duration-300">
                    <div>
                      <p className="font-bold text-gray-800">Tech Valley School</p>
                      <p className="text-sm text-gray-600">Priya Sharma with 650 points</p>
                    </div>
                    <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      🥉 3rd
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-green-50 shadow-md">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-green-500" />
                  <span>Environmental Impact</span>
                </h4>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-blue-500 rounded-lg">
                        <div className="h-3 w-3 bg-white rounded-full"></div>
                      </div>
                      <p className="text-2xl font-bold text-blue-600">~230 Liters</p>
                    </div>
                    <p className="text-sm text-blue-800 font-medium">Water Saved This Month</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border border-green-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <TreePine className="h-6 w-6 text-green-600" />
                      <p className="text-2xl font-bold text-green-600">12 Trees</p>
                    </div>
                    <p className="text-sm text-green-800 font-medium">Planted by Students</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border border-purple-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <Award className="h-6 w-6 text-purple-600" />
                      <p className="text-2xl font-bold text-purple-600">4 Badges</p>
                    </div>
                    <p className="text-sm text-purple-800 font-medium">New Achievements Unlocked</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-green-200 pt-8">
              <h4 className="text-lg font-bold text-gray-800 mb-6 flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <span>Recognition & Awards</span>
              </h4>
              <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 p-6 rounded-xl border border-yellow-200 shadow-md relative overflow-hidden">
                {/* Decorative sparkles */}
                <div className="absolute top-2 right-2 opacity-20">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="h-1 w-1 bg-orange-400 rounded-full animate-pulse delay-75"></div>
                    <div className="h-3 w-3 bg-amber-400 rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
                
                <p className="text-xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                  🏆 Monthly School Champions
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-yellow-100 hover:shadow-lg transition-all duration-300">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🥇</div>
                      <p className="font-bold text-gray-800">Alex Thompson</p>
                      <p className="text-sm text-gray-600 mb-2">Riverside Academy</p>
                      <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-2 rounded-lg">
                        <p className="text-xs font-bold text-green-700">1,250 points • 3 badges</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🥈</div>
                      <p className="font-bold text-gray-800">Emma Watson</p>
                      <p className="text-sm text-gray-600 mb-2">Greenwood High School</p>
                      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-2 rounded-lg">
                        <p className="text-xs font-bold text-blue-700">850 points • 2 badges</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-orange-100 hover:shadow-lg transition-all duration-300">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🥉</div>
                      <p className="font-bold text-gray-800">Priya Sharma</p>
                      <p className="text-sm text-gray-600 mb-2">Tech Valley School</p>
                      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-2 rounded-lg">
                        <p className="text-xs font-bold text-orange-700">650 points • 1 badge</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;