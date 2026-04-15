import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Landing from './pages/Landing/Landing';
import Auth from './pages/Auth/Auth';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard';
import CompanyDashboard from './pages/CompanyDashboard/CompanyDashboard';

function ProtectedRoute({ children, allowedRole }) {
  const { user, role } = useAuth();
  if (!user) return <Navigate to="/auth" replace />;
  if (allowedRole && role !== allowedRole) {
    return <Navigate to={role === 'student' ? '/student' : '/company'} replace />;
  }
  return children;
}

function AppRoutes() {
  const { user, role } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Landing />
            <Footer />
          </>
        }
      />
      <Route
        path="/auth"
        element={
          user ? (
            <Navigate to={role === 'student' ? '/student' : '/company'} replace />
          ) : (
            <Auth />
          )
        }
      />
      <Route
        path="/student"
        element={
          <ProtectedRoute allowedRole="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/company"
        element={
          <ProtectedRoute allowedRole="company">
            <CompanyDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
