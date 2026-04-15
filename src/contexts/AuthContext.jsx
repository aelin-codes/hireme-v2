import { createContext, useContext, useState, useEffect } from 'react';
import { supabase, isDemoMode, signOut as supabaseSignOut } from '../lib/supabase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('hireme_session');
      return saved ? JSON.parse(saved).user : null;
    } catch {
      return null;
    }
  });
  const [role, setRole] = useState(() => {
    try {
      const saved = localStorage.getItem('hireme_session');
      return saved ? JSON.parse(saved).role : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      setLoading(false); // eslint-disable-line react-hooks/set-state-in-effect
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

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
