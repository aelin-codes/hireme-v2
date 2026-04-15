import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, role, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isLanding = location.pathname === '/';
  const isDashboard = location.pathname.startsWith('/student') || location.pathname.startsWith('/company');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const navClass = `navbar ${isLanding ? (scrolled ? 'scrolled' : 'solid') : 'solid'}`;

  return (
    <>
      <nav className={navClass} id="main-navbar">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <div className="navbar-logo-icon">H</div>
            <span className="navbar-logo-text">HireMe<span>.co</span></span>
          </Link>

          <div className="navbar-links">
            <button className="navbar-link" onClick={() => scrollToSection('problem')}>
              Problem
            </button>
            <button className="navbar-link" onClick={() => scrollToSection('solution')}>
              Solution
            </button>
            <button className="navbar-link" onClick={() => scrollToSection('audience')}>
              Audience
            </button>
            <button className="navbar-link" onClick={() => scrollToSection('financials')}>
              Financials
            </button>
          </div>

          <div className="navbar-actions">
            {user ? (
              <>
                {!isDashboard && (
                  <Link
                    to={role === 'company' ? '/company' : '/student'}
                    className="btn btn-primary btn-sm"
                    id="navbar-dashboard"
                  >
                    Dashboard
                  </Link>
                )}
                <div className="navbar-user">
                  <div className="navbar-user-avatar">
                    {user.email?.[0]?.toUpperCase() || '?'}
                  </div>
                  <span>{user.email?.split('@')[0]}</span>
                </div>
                <button className="navbar-logout" onClick={handleLogout}>
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/auth" className="btn btn-primary btn-sm navbar-cta" id="navbar-get-started">
                Get Started
              </Link>
            )}
          </div>

          <div
            className={`navbar-hamburger ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            id="navbar-hamburger"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className={`navbar-mobile ${mobileOpen ? 'open' : ''}`}>
        <button className="navbar-link" onClick={() => scrollToSection('problem')}>
          Problem
        </button>
        <button className="navbar-link" onClick={() => scrollToSection('solution')}>
          Solution
        </button>
        <button className="navbar-link" onClick={() => scrollToSection('audience')}>
          Audience
        </button>
        <button className="navbar-link" onClick={() => scrollToSection('financials')}>
          Financials
        </button>
        {user ? (
          <>
            {!isDashboard && (
              <Link
                to={role === 'company' ? '/company' : '/student'}
                className="btn btn-primary"
                onClick={() => setMobileOpen(false)}
              >
                Dashboard
              </Link>
            )}
            <button className="btn btn-secondary" onClick={handleLogout}>Sign Out</button>
          </>
        ) : (
          <Link to="/auth" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
            Get Started
          </Link>
        )}
      </div>
    </>
  );
}
