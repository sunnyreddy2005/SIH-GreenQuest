import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import StudentDashboard from './dashboard/StudentDashboard';
import TeacherDashboard from './dashboard/TeacherDashboard';
import AdminDashboard from './dashboard/AdminDashboard';

const Dashboard = () => {
  const { isAuthenticated, user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Give some time for auth state to initialize
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [isAuthenticated, user]);

  // Show loading state briefly to prevent flickering redirects
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Routes>
      <Route path="/" element={
        user.userType === 'student' ? <StudentDashboard /> :
        user.userType === 'teacher' ? <TeacherDashboard /> :
        user.userType === 'admin' ? <AdminDashboard /> :
        <Navigate to="/login" replace />
      } />
      <Route path="/*" element={
        user.userType === 'student' ? <StudentDashboard /> :
        user.userType === 'teacher' ? <TeacherDashboard /> :
        user.userType === 'admin' ? <AdminDashboard /> :
        <Navigate to="/login" replace />
      } />
    </Routes>
  );
};

export default Dashboard;