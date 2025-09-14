import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthService, AuthState } from '../utils/auth';
import { User } from '../data/demoAccounts';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null
  });

  useEffect(() => {
    // Check for existing auth on mount
    const currentAuth = AuthService.getCurrentUser();
    setAuthState(currentAuth);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const result = AuthService.login(email, password);
    setAuthState(result);
    return result.isAuthenticated;
  };

  const logout = () => {
    AuthService.logout();
    setAuthState({
      isAuthenticated: false,
      user: null
    });
  };

  const updateUser = (user: User) => {
    AuthService.updateUser(user);
    setAuthState(prev => ({
      ...prev,
      user
    }));
  };

  const value: AuthContextType = {
    ...authState,
    login,
    logout,
    updateUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};