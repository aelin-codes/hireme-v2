import { createContext, useContext, useState, useEffect } from 'react';
import { supabase, isDemoMode, signOut as supabaseSignOut } from '../lib/supabase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // 'student' | 'company'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for persisted demo session
    const savedSession = localStorage.getItem('hireme_session');
    if (savedSession) {
      try {
        const parsed = JSON.parse(savedSession);
        setUser(parsed.user);
        setRole(parsed.role);
      } catch (e) {
        localStorage.removeItem('hireme_session');
      }
    }

    if (!isDemoMode && supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          setUser(session.user);
          setRole(session.user.user_metadata?.role || 'student');
        }
        setLoading(false);
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          setUser(session.user);
          setRole(session.user.user_metadata?.role || 'student');
        } else {
          setUser(null);
          setRole(null);
        }
      });

      return () => subscription.unsubscribe();
    } else {
      setLoading(false);
    }
  }, []);

  const login = (userData, userRole) => {
    setUser(userData);
    setRole(userRole);
    localStorage.setItem('hireme_session', JSON.stringify({ user: userData, role: userRole }));
  };

  const logout = async () => {
    await supabaseSignOut();
    setUser(null);
    setRole(null);
    localStorage.removeItem('hireme_session');
  };

  return (
    <AuthContext.Provider value={{ user, role, loading, login, logout, setRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
