import { useState } from 'react';
import ApplicantList from '../../components/Company/ApplicantList';
import WorkforceTracker from '../../components/Company/WorkforceTracker';
import { applicants, workforce } from '../../data/mockData';
import './CompanyDashboard.css';

const navItems = [
  { id: 'applicants', label: 'Applicant Management', icon: '🤖' },
  { id: 'workforce', label: 'Workforce Tracker', icon: '👥' },
];

export default function CompanyDashboard() {
  const [activeSection, setActiveSection] = useState('applicants');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'applicants': return <ApplicantList />;
      case 'workforce': return <WorkforceTracker />;
      default: return <ApplicantList />;
    }
  };

  return (
    <div className="dashboard">
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-profile">
          <div className="sidebar-avatar">🏢</div>
          <div className="sidebar-name">Razorpay</div>
          <div className="sidebar-college">Fintech • Bangalore</div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => { setActiveSection(item.id); setSidebarOpen(false); }}
              id={`company-sidebar-${item.id}`}
            >
              <span className="sidebar-link-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Hiring Console 🎯</h1>
          <p>Manage your internship applicants and active workforce.</p>
        </div>

        <div className="company-stats">
          <div className="company-stat-card">
            <div className="company-stat-value">{applicants.length}</div>
            <div className="company-stat-label">Total Applicants</div>
          </div>
          <div className="company-stat-card">
            <div className="company-stat-value">{workforce.length}</div>
            <div className="company-stat-label">Active Interns</div>
          </div>
          <div className="company-stat-card">
            <div className="company-stat-value">87%</div>
            <div className="company-stat-label">Avg. Match Score</div>
          </div>
        </div>

        {renderSection()}
      </main>

      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        id="company-sidebar-toggle"
      >
        {sidebarOpen ? '✕' : '☰'}
      </button>
    </div>
  );
}
