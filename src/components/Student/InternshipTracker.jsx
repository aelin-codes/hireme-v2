import { useState } from 'react';
import { appliedInternships, attendingInternships, completedInternships } from '../../data/mockData';
import CertificateModal from './CertificateModal';

export default function InternshipTracker() {
  const [activeTab, setActiveTab] = useState('applied');
  const [showCert, setShowCert] = useState(null);

  const tabs = [
    { id: 'applied', label: 'Applied', count: appliedInternships.length, icon: '📋' },
    { id: 'attending', label: 'Attending', count: attendingInternships.length, icon: '🚀' },
    { id: 'completed', label: 'Completed', count: completedInternships.length, icon: '✅' },
  ];

  return (
    <div className="tracker">
      <div className="section-intro">
        <h2>📊 Internship Tracker</h2>
        <p>Track all your internship applications, active roles, and completed work.</p>
      </div>

      <div className="tracker-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tracker-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            id={`tab-${tab.id}`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
            <span className="tracker-tab-count">{tab.count}</span>
          </button>
        ))}
      </div>

      <div className="tracker-content">
        {activeTab === 'applied' && (
          <div className="tracker-list">
            {appliedInternships.length === 0 ? (
              <div className="tracker-empty">No applications yet. Start applying!</div>
            ) : (
              appliedInternships.map((intern, i) => (
                <div className="tracker-item" key={i}>
                  <div className="tracker-item-left">
                    <span className="tracker-item-logo">{intern.logo}</span>
                    <div>
                      <h4>{intern.title}</h4>
                      <p>{intern.company} • {intern.location}</p>
                    </div>
                  </div>
                  <div className="tracker-item-right">
                    <span className={`status-badge status-${intern.status === 'Shortlisted' ? 'green' : 'yellow'}`}>
                      {intern.status}
                    </span>
                    <span className="tracker-date">Applied {intern.appliedDate}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'attending' && (
          <div className="tracker-list">
            {attendingInternships.map((intern, i) => (
              <div className="tracker-item attending" key={i}>
                <div className="tracker-item-left">
                  <span className="tracker-item-logo">{intern.logo}</span>
                  <div>
                    <h4>{intern.title}</h4>
                    <p>{intern.company} • {intern.department}</p>
                    <p className="tracker-mentor">Mentor: {intern.mentor}</p>
                  </div>
                </div>
                <div className="tracker-item-right">
                  <div className="progress-container">
                    <div className="progress-label">
                      <span>Progress</span>
                      <span>{intern.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${intern.progress}%` }} />
                    </div>
                  </div>
                  <span className="tracker-date">{intern.startDate} → {intern.endDate}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'completed' && (
          <div className="tracker-list">
            {completedInternships.map((intern, i) => (
              <div className="tracker-item completed" key={i}>
                <div className="tracker-item-left">
                  <span className="tracker-item-logo">{intern.logo}</span>
                  <div>
                    <h4>{intern.title}</h4>
                    <p>{intern.company}</p>
                    <div className="tracker-skills">
                      {intern.skills.map((s, j) => (
                        <span className="skill-tag-sm" key={j}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="tracker-item-right">
                  <div className="tracker-rating">
                    ⭐ {intern.rating}
                  </div>
                  {intern.certificate && (
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => setShowCert(intern)}
                      id={`view-cert-${intern.id}`}
                    >
                      View Certificate
                    </button>
                  )}
                  <span className="tracker-date">{intern.startDate} → {intern.endDate}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showCert && (
        <CertificateModal internship={showCert} onClose={() => setShowCert(null)} />
      )}
    </div>
  );
}
