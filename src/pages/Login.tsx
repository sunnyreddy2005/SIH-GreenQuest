import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, School, Info } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { demoCredentials } from '../utils/auth';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('student');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showDemoAccounts, setShowDemoAccounts] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    school: '',
    grade: '',
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isSignUp) {
        // For demo purposes, show message about account creation
        setError('Demo mode: Account creation not available. Please use existing demo accounts.');
        setLoading(false);
        return;
      }

      const success = await login(formData.email, formData.password);
      
      if (success) {
        // Redirect based on user type
        navigate('/dashboard');
      } else {
        setError('Invalid email or password. Please try the demo accounts below.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async (email: string, password: string) => {
    setFormData(prev => ({ ...prev, email, password }));
    setLoading(true);
    setError('');

    try {
      const success = await login(email, password);
      if (success) {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Demo login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Header */}
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <img src="/dist/Logo.png" alt="GreenQuest" className="h-12 w-12" />
            <span className="text-3xl font-bold text-gray-900">GreenQuest</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            {isSignUp ? 'Join the Environmental Movement' : 'Welcome Back!'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isSignUp 
              ? 'Create your account to start your sustainability journey'
              : 'Sign in to continue your environmental education'
            }
          </p>
        </div>

        {/* User Type Selection */}
        <div className="bg-white p-1 rounded-lg shadow-sm">
          <div className="grid grid-cols-2 gap-1">
            <button
              type="button"
              onClick={() => setUserType('student')}
              className={`flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                userType === 'student'
                  ? 'bg-green-600 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <User className="h-4 w-4 mr-2" />
              Student
            </button>
            <button
              type="button"
              onClick={() => setUserType('teacher')}
              className={`flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                userType === 'teacher'
                  ? 'bg-green-600 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <School className="h-4 w-4 mr-2" />
              Teacher
            </button>
          </div>
        </div>

        {/* Login/Signup Form */}
        <form className="mt-8 space-y-6 bg-white p-8 rounded-xl shadow-lg" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          {isSignUp && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required={isSignUp}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {isSignUp && (
            <>
              <div>
                <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                  School/Institution
                </label>
                <input
                  id="school"
                  name="school"
                  type="text"
                  required={isSignUp}
                  value={formData.school}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your school name"
                />
              </div>

              {userType === 'student' && (
                <div>
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
                    Grade Level
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    required={isSignUp && userType === 'student'}
                    value={formData.grade}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select your grade</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                    <option value="college">College</option>
                  </select>
                </div>
              )}
            </>
          )}

          {!isSignUp && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <Link to="#" className="text-sm text-green-600 hover:text-green-500">
                Forgot password?
              </Link>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing In...' : (isSignUp ? 'Create Account' : 'Sign In')}
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-green-600 hover:text-green-500 font-medium"
              >
                {isSignUp ? 'Sign in here' : 'Sign up here'}
              </button>
            </p>
          </div>
        </form>

        {/* Demo Accounts Section */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <div className="flex items-center space-x-2 mb-4">
            <Info className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-blue-900">Demo Accounts</h3>
            <button
              onClick={() => setShowDemoAccounts(!showDemoAccounts)}
              className="text-blue-600 hover:text-blue-800 text-sm underline"
            >
              {showDemoAccounts ? 'Hide' : 'Show'} accounts
            </button>
          </div>
          
          {showDemoAccounts && (
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-blue-900 mb-2">Student Accounts:</h4>
                <div className="grid gap-2">
                  {demoCredentials.students.map((student, index) => (
                    <button
                      key={index}
                      onClick={() => handleDemoLogin(student.email, student.password)}
                      disabled={loading}
                      className="bg-white p-3 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors text-left disabled:opacity-50"
                    >
                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      <div className="text-xs text-gray-600">{student.email}</div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-blue-900 mb-2">Teacher Account:</h4>
                <button
                  onClick={() => handleDemoLogin(demoCredentials.teacher.email, demoCredentials.teacher.password)}
                  disabled={loading}
                  className="bg-white p-3 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors text-left w-full disabled:opacity-50"
                >
                  <div className="text-sm font-medium text-gray-900">{demoCredentials.teacher.name}</div>
                  <div className="text-xs text-gray-600">{demoCredentials.teacher.email}</div>
                </button>
              </div>
              
              <div>
                <h4 className="font-medium text-blue-900 mb-2">Admin Account:</h4>
                <button
                  onClick={() => handleDemoLogin(demoCredentials.admin.email, demoCredentials.admin.password)}
                  disabled={loading}
                  className="bg-white p-3 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors text-left w-full disabled:opacity-50"
                >
                  <div className="text-sm font-medium text-gray-900">{demoCredentials.admin.name}</div>
                  <div className="text-xs text-gray-600">{demoCredentials.admin.email}</div>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Additional Information */}
        <div className="text-center text-xs text-gray-500">
          By {isSignUp ? 'creating an account' : 'signing in'}, you agree to our{' '}
          <Link to="#" className="text-green-600 hover:text-green-500">Terms of Service</Link>{' '}
          and{' '}
          <Link to="#" className="text-green-600 hover:text-green-500">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;