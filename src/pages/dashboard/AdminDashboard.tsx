import { useAuth } from '../../contexts/AuthContext';
import { LogOut, School, BarChart3, Award, Users, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <School className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3">
              <School className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-gray-500">Active Schools</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-yellow-600" />
              <div>
                <p className="text-sm text-gray-500">Badges Earned</p>
                <p className="text-2xl font-bold text-gray-900">4</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Total Points</p>
                <p className="text-2xl font-bold text-gray-900">2,750</p>
              </div>
            </div>
          </div>
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <School className="h-8 w-8 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">School Management</h3>
            </div>
            <p className="text-gray-600 mb-4">Manage schools, teachers, and student enrollments</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Manage Schools
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart3 className="h-8 w-8 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900">Platform Analytics</h3>
            </div>
            <p className="text-gray-600 mb-4">View comprehensive platform usage and impact reports</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              View Analytics
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="h-8 w-8 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">Content Management</h3>
            </div>
            <p className="text-gray-600 mb-4">Create and manage modules, challenges, and badges</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              Manage Content
            </button>
          </div>
        </div>

        {/* Monthly Impact Report */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">September 2025 Impact Report</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Top Performing Schools</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Riverside Academy</p>
                    <p className="text-sm text-gray-600">Alex Thompson leading with 1,250 points</p>
                  </div>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">1st</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Greenwood High School</p>
                    <p className="text-sm text-gray-600">Emma Watson with 850 points</p>
                  </div>
                  <span className="bg-gray-400 text-white px-3 py-1 rounded-full text-sm font-semibold">2nd</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Tech Valley School</p>
                    <p className="text-sm text-gray-600">Priya Sharma with 650 points</p>
                  </div>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">3rd</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Environmental Impact</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">~230 Liters</p>
                  <p className="text-sm text-blue-800">Water Saved This Month</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">12 Trees</p>
                  <p className="text-sm text-green-800">Planted by Students</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">4 Badges</p>
                  <p className="text-sm text-purple-800">New Achievements Unlocked</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Recognition & Awards</h4>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg">
              <p className="text-lg font-semibold text-orange-800 mb-2">🏆 Monthly School Champions</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-900">🥇 Alex Thompson</p>
                  <p className="text-sm text-gray-600">Riverside Academy</p>
                  <p className="text-xs text-green-600">1,250 points • 3 badges</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-900">🥈 Emma Watson</p>
                  <p className="text-sm text-gray-600">Greenwood High School</p>
                  <p className="text-xs text-green-600">850 points • 2 badges</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-900">🥉 Priya Sharma</p>
                  <p className="text-sm text-gray-600">Tech Valley School</p>
                  <p className="text-xs text-green-600">650 points • 1 badge</p>
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