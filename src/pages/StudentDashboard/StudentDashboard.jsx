import { useState } from 'react';
import { studentProfile } from '../../data/mockData';
import SkillMatcher from '../../components/Student/SkillMatcher';
import InternshipTracker from '../../components/Student/InternshipTracker';
import SkillChart from '../../components/Student/SkillChart';
import './StudentDashboard.css';

const navItems = [
  { id: 'matcher', label: 'AI Skill Matcher', icon: '🤖' },
  { id: 'tracker', label: 'Internship Tracker', icon: '📊' },
  { id: 'analytics', label: 'Skill Analytics', icon: '📈' },
];

export default function StudentDashboard() {
  const [activeSection, setActiveSection] = useState('matcher');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'matcher': return <SkillMatcher />;
      case 'tracker': return <InternshipTracker />;
      case 'analytics': return <SkillChart />;
      default: return <SkillMatcher />;
    }
  };

  return (
    <div className="dashboard">
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-profile">
          <div className="sidebar-avatar">{studentProfile.avatar}</div>
          <div className="sidebar-name">{studentProfile.name}</div>
          <div className="sidebar-college">{studentProfile.college}</div>
          <div className="sidebar-score">⚡ Score: {studentProfile.overallScore}/100</div>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => { setActiveSection(item.id); setSidebarOpen(false); }}
              id={`sidebar-${item.id}`}
            >
              <span className="sidebar-link-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Welcome back, {studentProfile.name.split(' ')[0]}! 👋</h1>
          <p>Here's your personalized dashboard with AI-curated insights.</p>
        </div>
        {renderSection()}
      </main>

      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        id="sidebar-toggle"
      >
        {sidebarOpen ? '✕' : '☰'}
      </button>
    </div>
  );
}
