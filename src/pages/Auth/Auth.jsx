import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { signUpWithEmail, signInWithEmail, signInWithGoogle, isDemoMode } from '../../lib/supabase';
import { sanitizeInput, validateEmail, validatePassword } from '../../utils/sanitize';
import './Auth.css';

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function Auth() {
  const [role, setRole] = useState('student');
  const [mode, setMode] = useState('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const getPasswordStrength = () => {
    if (password.length === 0) return 0;
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  };

  const strength = getPasswordStrength();
  const strengthLabel = strength <= 1 ? 'weak' : strength <= 2 ? 'medium' : 'strong';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    sanitizeInput(email).replace(/&amp;/g, '&').replace(/&#x2F;/g, '/').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;/g, "'");
    const cleanName = sanitizeInput(name);

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (mode === 'signup') {
      const { valid, errors } = validatePassword(password);
      if (!valid) {
        setError(errors[0]);
        return;
      }
    }

    setLoading(true);

    try {
      if (isDemoMode) {
        // Demo mode — simulate auth
        const demoUser = {
          id: `demo-${Date.now()}`,
          email: email,
          user_metadata: { name: cleanName, role }
        };
        login(demoUser, role);
        navigate(role === 'student' ? '/student' : '/company');
        return;
      }

      if (mode === 'signup') {
        const { error: authError } = await signUpWithEmail(email, password, { name: cleanName, role });
        if (authError) {
          setError(authError.message);
        } else {
          setSuccess('Account created! Check your email to verify, then sign in.');
          setMode('signin');
        }
      } else {
        const { data, error: authError } = await signInWithEmail(email, password);
        if (authError) {
          setError(authError.message);
        } else if (data?.user) {
          login(data.user, role);
          navigate(role === 'student' ? '/student' : '/company');
        }
      }
    } catch {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    if (isDemoMode) {
      const demoUser = {
        id: 'demo-google',
        email: 'student@gmail.com',
        user_metadata: { name: 'Google User', role: 'student' }
      };
      login(demoUser, 'student');
      navigate('/student');
      return;
    }
    const { error: authError } = await signInWithGoogle();
    if (authError) setError(authError.message);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">
              <div className="auth-logo-icon">H</div>
              HireMe<span>.co</span>
            </div>
            <h1>{mode === 'signup' ? 'Create Account' : 'Welcome Back'}</h1>
            <p>{mode === 'signup' ? 'Start your journey today' : 'Sign in to your account'}</p>
          </div>

          {/* Role Toggle */}
          <div className="role-toggle" id="role-toggle">
            <div className={`role-toggle-slider ${role === 'company' ? 'company' : ''}`} />
            <button
              className={`role-toggle-btn ${role === 'student' ? 'active' : ''}`}
              onClick={() => setRole('student')}
              id="role-student"
            >
              🎓 Student
            </button>
            <button
              className={`role-toggle-btn ${role === 'company' ? 'active' : ''}`}
              onClick={() => setRole('company')}
              id="role-company"
            >
              🏢 Company
            </button>
          </div>

          {/* Mode Toggle */}
          <div className="mode-toggle">
            <button
              className={`mode-toggle-btn ${mode === 'signin' ? 'active' : ''}`}
              onClick={() => { setMode('signin'); setError(''); setSuccess(''); }}
              id="mode-signin"
            >
              Sign In
            </button>
            <button
              className={`mode-toggle-btn ${mode === 'signup' ? 'active' : ''}`}
              onClick={() => { setMode('signup'); setError(''); setSuccess(''); }}
              id="mode-signup"
            >
              Sign Up
            </button>
          </div>

          {error && <div className="auth-error" id="auth-error">⚠️ {error}</div>}
          {success && <div className="auth-success" id="auth-success">✅ {success}</div>}

          <form className="auth-form" onSubmit={handleSubmit} id="auth-form">
            {mode === 'signup' && (
              <div className="form-group">
                <label className="form-label" htmlFor="auth-name">
                  {role === 'student' ? 'Full Name' : 'Company Name'}
                </label>
                <input
                  id="auth-name"
                  className="form-input"
                  type="text"
                  placeholder={role === 'student' ? 'Shibin Sha' : 'Acme Technologies'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="auth-email">Email Address</label>
              <input
                id="auth-email"
                className="form-input"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="auth-password">Password</label>
              <input
                id="auth-password"
                className="form-input"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={mode === 'signup' ? 8 : 1}
              />
              {mode === 'signup' && password.length > 0 && (
                <div className="password-strength">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`password-strength-bar ${i <= strength ? `active ${strengthLabel}` : ''}`}
                    />
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg auth-submit"
              disabled={loading}
              id="auth-submit"
            >
              {loading ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.6s linear infinite', display: 'inline-block' }} />
                  {mode === 'signup' ? 'Creating Account...' : 'Signing In...'}
                </span>
              ) : (
                mode === 'signup' ? 'Create Account' : 'Sign In'
              )}
            </button>
          </form>

          {role === 'student' && (
            <>
              <div className="auth-divider">
                <span>or</span>
              </div>
              <button className="google-btn" onClick={handleGoogleSignIn} id="google-signin">
                <GoogleIcon />
                Sign in with Google
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
