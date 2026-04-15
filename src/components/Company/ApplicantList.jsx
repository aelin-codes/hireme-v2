import { useState } from 'react';
import { applicants } from '../../data/mockData';
import StudentProfile from './StudentProfile';

export default function ApplicantList() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const sorted = [...applicants].sort((a, b) => b.matchScore - a.matchScore);

  const getMatchColor = (score) => {
    if (score >= 90) return '#10B981';
    if (score >= 80) return '#6366F1';
    if (score >= 70) return '#F59E0B';
    return '#94A3B8';
  };

  return (
    <div className="applicant-manager">
      <div className="section-intro">
        <h2>🤖 AI-Ranked Applicants</h2>
        <p>Candidates sorted by Skill Match %. Best fits appear at the top.</p>
      </div>

      <div className="applicant-list">
        {sorted.map((applicant, i) => (
          <div
            className="applicant-row"
            key={applicant.id}
            onClick={() => setSelectedStudent(applicant)}
            id={`applicant-${applicant.id}`}
          >
            <div className="applicant-rank">#{i + 1}</div>
            <div className="applicant-avatar">{applicant.avatar}</div>
            <div className="applicant-info">
              <div className="applicant-name">
                {applicant.name}
                {applicant.verified && <span className="verified-badge">✓ Verified</span>}
              </div>
              <div className="applicant-meta">
                {applicant.college} • {applicant.degree} • {applicant.year}
              </div>
              <div className="applicant-skills">
                {applicant.skills.slice(0, 4).map((s, j) => (
                  <span className="skill-tag-sm" key={j}>{s}</span>
                ))}
              </div>
            </div>
            <div className="applicant-match-col">
              <div className="applicant-match-bar-container">
                <div
                  className="applicant-match-bar"
                  style={{
                    width: `${applicant.matchScore}%`,
                    background: `linear-gradient(90deg, ${getMatchColor(applicant.matchScore)}, ${getMatchColor(applicant.matchScore)}99)`,
                  }}
                />
              </div>
              <span
                className="applicant-match-score"
                style={{ color: getMatchColor(applicant.matchScore) }}
              >
                {applicant.matchScore}% Match
              </span>
            </div>
            <button className="btn btn-outline btn-sm applicant-view-btn">
              View Profile →
            </button>
          </div>
        ))}
      </div>

      {selectedStudent && (
        <StudentProfile student={selectedStudent} onClose={() => setSelectedStudent(null)} />
      )}
    </div>
  );
}
