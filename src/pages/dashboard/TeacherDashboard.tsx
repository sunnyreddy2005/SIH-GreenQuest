import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { AuthService } from '../../utils/auth';
import { waterChallenges, badges } from '../../data/demoAccounts';
import { 
  LogOut, 
  Users, 
  BookOpen, 
  Target, 
  BarChart3,
  ClipboardList,
  CheckCircle,
  XCircle,
  Award,
  Trophy,
  Eye,
  FileText,
  Calendar,
  Star,
  TrendingUp,
  MessageSquare,
  Camera,
  Plus,
  Filter,
  Download
} from 'lucide-react';

const TeacherDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [students, setStudents] = useState<any[]>([]);
  const [pendingSubmissions, setPendingSubmissions] = useState<any[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);
  const [competitions, setCompetitions] = useState<any[]>([]);
  const [newCompetition, setNewCompetition] = useState({ title: '', description: '', points: 0, deadline: '' });
  const [showCompetitionForm, setShowCompetitionForm] = useState(false);

  useEffect(() => {
    if (user) {
      // Load students from the same school
      const schoolStudents = AuthService.getUsersBySchool(user.school);
      setStudents(schoolStudents);

      // Generate mock pending submissions
      const mockSubmissions = [
        {
          id: 'sub1',
          studentId: 'student1',
          studentName: 'Arjun Patel',
          challengeId: 'save-water-week',
          challengeTitle: 'Save 10 Liters a Day Challenge',
          description: 'I implemented water-saving techniques including shorter showers (5 minutes instead of 10), turning off tap while brushing teeth, and fixing a leaky faucet. Saved approximately 15 liters per day over the week. Also installed a low-flow showerhead which reduced water usage significantly.',
          photos: ['before_shower.jpg', 'after_shower.jpg', 'water_meter.jpg'],
          submittedAt: '2025-09-13',
          status: 'pending'
        },
        {
          id: 'sub2',
          studentId: 'student4',
          studentName: 'Ananya Reddy',
          challengeId: 'rain-harvest',
          challengeTitle: 'Rainwater Harvesting Setup',
          description: 'Set up a rainwater collection system using plastic containers and gutters in my backyard. Collected 85 liters during last week\'s monsoon and used it for watering our garden plants and cleaning the courtyard.',
          photos: ['harvest_setup.jpg', 'collected_water.jpg', 'plants_watered.jpg'],
          submittedAt: '2025-09-12',
          status: 'pending'
        },
        {
          id: 'sub3',
          studentId: 'student7',
          studentName: 'Vikram Das',
          challengeId: 'leak-detection',
          challengeTitle: 'Home Water Leak Detective',
          description: 'Conducted thorough inspection of our house and found 2 major leaks - one in kitchen sink and another in bathroom. Fixed them with my father\'s help. Water bill should reduce by 20% next month.',
          photos: ['leak_found.jpg', 'repair_process.jpg', 'fixed_faucet.jpg'],
          submittedAt: '2025-09-14',
          status: 'pending'
        }
      ];
      setPendingSubmissions(mockSubmissions);

      // Generate mock competitions
      const mockCompetitions = [
        {
          id: 'comp1',
          title: 'Water Conservation Week',
          description: 'School-wide challenge to save water for one week',
          participants: 45,
          startDate: '2025-09-15',
          endDate: '2025-09-22',
          status: 'upcoming',
          prize: 'Top 3 students get recognition certificate'
        },
        {
          id: 'comp2',
          title: 'Eco-Warrior Challenge',
          description: 'Complete 3 different environmental challenges',
          participants: 23,
          startDate: '2025-09-01',
          endDate: '2025-09-30',
          status: 'active',
          prize: 'Special eco-warrior badge and school assembly recognition'
        }
      ];
      setCompetitions(mockCompetitions);
    }
  }, [user]);

  if (!user) return null;

  const handleApproveSubmission = (submissionId: string) => {
    const submission = pendingSubmissions.find(s => s.id === submissionId);
    if (submission) {
      // Find the challenge to get points
      const challenge = waterChallenges.find(c => c.id === submission.challengeId);
      if (challenge) {
        // Add points to student
        AuthService.addPointsToUser(submission.studentId, challenge.points);
        
        // Add badge if applicable
        if (challenge.badge) {
          AuthService.addBadgeToUser(submission.studentId, challenge.badge);
        }
        
        // Complete the challenge for the student
        AuthService.completeChallenge(submission.studentId, submission.challengeId);
      }
      
      // Remove from pending submissions
      setPendingSubmissions(prev => prev.filter(s => s.id !== submissionId));
      setSelectedSubmission(null);
      
      // Refresh students data
      const schoolStudents = AuthService.getUsersBySchool(user.school);
      setStudents(schoolStudents);
      
      alert('Submission approved! Student has been awarded points and badges.');
    }
  };

  const handleRejectSubmission = (submissionId: string, reason: string) => {
    setPendingSubmissions(prev => prev.map(s => 
      s.id === submissionId 
        ? { ...s, status: 'rejected', rejectionReason: reason }
        : s
    ));
    setSelectedSubmission(null);
    alert('Submission rejected with feedback sent to student.');
  };

  const handleCreateCompetition = () => {
    if (newCompetition.title && newCompetition.description) {
      const competition = {
        ...newCompetition,
        id: `comp${competitions.length + 1}`,
        participants: 0,
        status: 'upcoming'
      };
      setCompetitions(prev => [...prev, competition]);
      setNewCompetition({ title: '', description: '', points: 0, deadline: '' });
      setShowCompetitionForm(false);
      alert('Competition created successfully!');
    }
  };

  const handleAwardBadge = (studentId: string, badgeId: string) => {
    AuthService.addBadgeToUser(studentId, badgeId);
    const schoolStudents = AuthService.getUsersBySchool(user.school);
    setStudents(schoolStudents);
    alert('Badge awarded to student!');
  };

  const NavTab = ({ id, label, icon: Icon, count }: { id: string; label: string; icon: any; count?: number }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors relative ${
        activeTab === id 
          ? 'bg-green-600 text-white' 
          : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
      }`}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
      {count !== undefined && count > 0 && (
        <span className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center ${
          activeTab === id ? 'bg-white text-green-600' : 'bg-red-500 text-white'
        }`}>
          {count}
        </span>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.school}</p>
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

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-3">
            <NavTab id="overview" label="Overview" icon={BarChart3} />
            <NavTab id="submissions" label="Review Submissions" icon={ClipboardList} count={pendingSubmissions.filter(s => s.status === 'pending').length} />
            <NavTab id="students" label="Student Progress" icon={Users} />
            <NavTab id="competitions" label="Competitions" icon={Trophy} />
            <NavTab id="badges" label="Award Badges" icon={Award} />
            <NavTab id="analytics" label="Analytics" icon={TrendingUp} />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Class Overview</h2>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Students</p>
                    <p className="text-2xl font-bold text-blue-600">{students.length}</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Pending Reviews</p>
                    <p className="text-2xl font-bold text-orange-600">{pendingSubmissions.filter(s => s.status === 'pending').length}</p>
                  </div>
                  <ClipboardList className="h-8 w-8 text-orange-500" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Competitions</p>
                    <p className="text-2xl font-bold text-green-600">{competitions.filter(c => c.status === 'active').length}</p>
                  </div>
                  <Trophy className="h-8 w-8 text-green-500" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Avg Class Points</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {students.length > 0 ? Math.round(students.reduce((sum, s) => sum + s.points, 0) / students.length) : 0}
                    </p>
                  </div>
                  <Star className="h-8 w-8 text-purple-500" />
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Maya Singh completed Advanced Water Conservation</p>
                      <p className="text-xs text-gray-500">Earned 150 points • 1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                    <Camera className="h-5 w-5 text-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Vikram Das submitted leak detection evidence</p>
                      <p className="text-xs text-gray-500">Home Water Leak Detective • Pending review</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-yellow-50 rounded-lg">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Sneha Gupta earned Eco Champion Badge</p>
                      <p className="text-xs text-gray-500">Completed challenges in 3 categories • 3 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-purple-50 rounded-lg">
                    <Users className="h-5 w-5 text-purple-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Class 10-A achieved 80% module completion</p>
                      <p className="text-xs text-gray-500">Water Conservation Basics • 6 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'submissions' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Challenge Submissions</h2>
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>All Submissions</option>
                  <option>Pending Review</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </select>
              </div>
            </div>

            {selectedSubmission ? (
              <SubmissionDetail 
                submission={selectedSubmission}
                onBack={() => setSelectedSubmission(null)}
                onApprove={() => handleApproveSubmission(selectedSubmission.id)}
                onReject={(reason: string) => handleRejectSubmission(selectedSubmission.id, reason)}
              />
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {pendingSubmissions.filter(s => s.status === 'pending').map(submission => (
                  <SubmissionCard
                    key={submission.id}
                    submission={submission}
                    onClick={() => setSelectedSubmission(submission)}
                  />
                ))}
                {pendingSubmissions.filter(s => s.status === 'pending').length === 0 && (
                  <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                    <ClipboardList className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No pending submissions to review</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === 'students' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Student Progress</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Class Leaderboard</h3>
                  <button className="flex items-center space-x-2 text-green-600 hover:text-green-700">
                    <Download className="h-4 w-4" />
                    <span className="text-sm">Export Report</span>
                  </button>
                </div>
              </div>
              <div className="divide-y">
                {students.sort((a, b) => b.points - a.points).map((student, index) => (
                  <div key={student.id} className="p-4 flex items-center space-x-4">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                      index === 0 ? 'bg-yellow-500 text-white' :
                      index === 1 ? 'bg-gray-400 text-white' :
                      index === 2 ? 'bg-orange-500 text-white' :
                      'bg-gray-200 text-gray-700'
                    }`}>
                      {index + 1}
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold bg-gray-200 text-gray-700`}>
                      {student.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900">{student.name}</span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Grade {student.grade}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{student.completedModules.length} modules</span>
                        <span>{student.completedChallenges.length} challenges</span>
                        <span>{student.badges.length} badges</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-green-600">{student.points} pts</div>
                      <div className="text-sm text-gray-500">Level {student.level}</div>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setActiveTab('badges')}
                        className="text-yellow-600 hover:text-yellow-700 p-1"
                        title="Award Badge"
                      >
                        <Award className="h-4 w-4" />
                      </button>
                      <button 
                        className="text-blue-600 hover:text-blue-700 p-1"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'competitions' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Manage Competitions</h2>
              <button 
                onClick={() => setShowCompetitionForm(true)}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                <Plus className="h-4 w-4" />
                <span>Create Competition</span>
              </button>
            </div>

            {showCompetitionForm ? (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Competition</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Competition Title</label>
                    <input
                      type="text"
                      value={newCompetition.title}
                      onChange={(e) => setNewCompetition(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter competition title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={newCompetition.description}
                      onChange={(e) => setNewCompetition(prev => ({ ...prev, description: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      rows={3}
                      placeholder="Describe the competition"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Points Reward</label>
                      <input
                        type="number"
                        value={newCompetition.points}
                        onChange={(e) => setNewCompetition(prev => ({ ...prev, points: parseInt(e.target.value) }))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
                      <input
                        type="date"
                        value={newCompetition.deadline}
                        onChange={(e) => setNewCompetition(prev => ({ ...prev, deadline: e.target.value }))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={handleCreateCompetition}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                    >
                      Create Competition
                    </button>
                    <button
                      onClick={() => setShowCompetitionForm(false)}
                      className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {competitions.map(competition => (
                  <CompetitionCard key={competition.id} competition={competition} />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'badges' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Award Badges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold text-gray-900">Select Student</h3>
                </div>
                <div className="p-6 max-h-96 overflow-y-auto">
                  <div className="space-y-2">
                    {students.map(student => (
                      <button
                        key={student.id}
                        className="w-full text-left p-3 hover:bg-gray-50 rounded-lg border border-gray-200 hover:border-green-300 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold">
                            {student.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{student.name}</div>
                            <div className="text-sm text-gray-500">{student.badges.length} badges earned</div>
                          </div>
                          <div className="text-sm font-semibold text-green-600">{student.points} pts</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold text-gray-900">Available Badges</h3>
                </div>
                <div className="p-6 max-h-96 overflow-y-auto">
                  <div className="grid grid-cols-1 gap-3">
                    {badges.map(badge => (
                      <div key={badge.id} className="border border-gray-200 rounded-lg p-4 hover:border-yellow-300 transition-colors">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{badge.icon}</span>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{badge.name}</div>
                            <div className="text-sm text-gray-500">{badge.description}</div>
                            <div className="text-xs text-green-600 font-semibold">+{badge.points} points</div>
                          </div>
                          <button
                            onClick={() => {
                              const studentId = students[0]?.id; // This would be selected student
                              if (studentId) handleAwardBadge(studentId, badge.id);
                            }}
                            className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600"
                          >
                            Award
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Class Analytics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Completion Rates</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Water Conservation Basics</span>
                      <span className="font-semibold">67%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Advanced Water Conservation</span>
                      <span className="font-semibold">33%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '33%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Progress</h3>
                <div className="flex items-center justify-center h-32 text-gray-500">
                  <div className="text-center">
                    <BarChart3 className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Chart visualization would go here</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Monthly Impact Report</h3>
                  <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    <Download className="h-4 w-4" />
                    <span>Download Report</span>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {students.reduce((sum, s) => sum + s.completedChallenges.length, 0)}
                    </div>
                    <div className="text-sm text-gray-600">Challenges Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {students.reduce((sum, s) => sum + s.points, 0)}
                    </div>
                    <div className="text-sm text-gray-600">Total Points Earned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {students.reduce((sum, s) => sum + s.badges.length, 0)}
                    </div>
                    <div className="text-sm text-gray-600">Badges Awarded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

// Component for individual submission cards
const SubmissionCard = ({ submission, onClick }: any) => (
  <div
    className="bg-white p-6 rounded-xl shadow-sm border cursor-pointer hover:border-green-300 transition-colors"
    onClick={onClick}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
          <Camera className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{submission.challengeTitle}</h4>
          <p className="text-sm text-gray-600">by {submission.studentName}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="text-sm text-gray-500">{submission.submittedAt}</div>
        <div className={`text-xs px-2 py-1 rounded-full ${
          submission.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
          submission.status === 'approved' ? 'bg-green-100 text-green-800' :
          'bg-red-100 text-red-800'
        }`}>
          {submission.status}
        </div>
      </div>
    </div>
    <p className="text-gray-700 text-sm mb-3 line-clamp-2">{submission.description}</p>
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <Camera className="h-4 w-4" />
        <span>{submission.photos.length} photos</span>
      </div>
      <button className="text-green-600 hover:text-green-700 font-medium text-sm">
        Review →
      </button>
    </div>
  </div>
);

// Component for detailed submission review
const SubmissionDetail = ({ submission, onBack, onApprove, onReject }: any) => {
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectForm, setShowRejectForm] = useState(false);

  const handleReject = () => {
    if (rejectionReason.trim()) {
      onReject(rejectionReason);
      setRejectionReason('');
      setShowRejectForm(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b">
        <button onClick={onBack} className="text-green-600 hover:text-green-700 mb-4">
          ← Back to Submissions
        </button>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{submission.challengeTitle}</h3>
            <p className="text-gray-600 mt-1">Submitted by {submission.studentName}</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Submitted on</div>
            <div className="font-semibold">{submission.submittedAt}</div>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Student Description</h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">{submission.description}</p>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Photo Evidence</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {submission.photos.map((photo: string, index: number) => (
              <div key={index} className="relative group">
                <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Camera className="h-8 w-8 text-gray-400" />
                  <span className="ml-2 text-gray-500 text-sm">{photo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex space-x-4 pt-4 border-t">
          <button
            onClick={onApprove}
            className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold"
          >
            <CheckCircle className="h-5 w-5" />
            <span>Approve Submission</span>
          </button>
          <button
            onClick={() => setShowRejectForm(!showRejectForm)}
            className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 font-semibold"
          >
            <XCircle className="h-5 w-5" />
            <span>Reject</span>
          </button>
        </div>

        {showRejectForm && (
          <div className="bg-red-50 p-4 rounded-lg">
            <h5 className="font-medium text-red-900 mb-2">Rejection Reason</h5>
            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              className="w-full p-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              rows={3}
              placeholder="Explain why this submission doesn't meet the requirements..."
            />
            <div className="flex space-x-3 mt-3">
              <button
                onClick={handleReject}
                disabled={!rejectionReason.trim()}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 disabled:opacity-50"
              >
                Send Rejection
              </button>
              <button
                onClick={() => setShowRejectForm(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Component for competition cards
const CompetitionCard = ({ competition }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border">
    <div className="flex items-center justify-between mb-4">
      <h4 className="text-lg font-semibold text-gray-900">{competition.title}</h4>
      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
        competition.status === 'active' ? 'bg-green-100 text-green-800' :
        competition.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
        'bg-gray-100 text-gray-800'
      }`}>
        {competition.status}
      </div>
    </div>
    <p className="text-gray-600 text-sm mb-4">{competition.description}</p>
    <div className="space-y-2 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-500">Participants:</span>
        <span className="font-semibold">{competition.participants}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Start Date:</span>
        <span className="font-semibold">{competition.startDate}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">End Date:</span>
        <span className="font-semibold">{competition.endDate}</span>
      </div>
    </div>
    <div className="mt-4 pt-4 border-t">
      <div className="text-sm text-gray-600 mb-2">Prize:</div>
      <div className="text-sm font-medium text-green-700">{competition.prize}</div>
    </div>
  </div>
);

export default TeacherDashboard;