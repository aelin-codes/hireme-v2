import { useState } from 'react';
import { internships } from '../../data/mockData';

export default function SkillMatcher() {
  const [sortedInternships] = useState(
    [...internships].sort((a, b) => b.matchScore - a.matchScore)
  );
  const [applied, setApplied] = useState(new Set());

  const handleApply = (id) => {
    setApplied((prev) => new Set([...prev, id]));
  };

  const getMatchColor = (score) => {
    if (score >= 90) return '#10B981';
    if (score >= 75) return '#6366F1';
    if (score >= 60) return '#F59E0B';
    return '#94A3B8';
  };

  return (
    <div className="skill-matcher">
      <div className="section-intro">
        <h2>🤖 AI Skill Matcher</h2>
        <p>Internships ranked by how well your verified skills match. Higher score = better fit.</p>
      </div>
      <div className="internship-grid">
        {sortedInternships.map((intern) => (
          <div className="internship-card" key={intern.id}>
            <div className="internship-card-header">
              <div className="internship-company">
                <span className="internship-logo">{intern.logo}</span>
                <div>
                  <h4>{intern.company}</h4>
                  <span className="internship-location">{intern.location}</span>
                </div>
              </div>
              <div
                className="match-badge"
                style={{
                  background: `${getMatchColor(intern.matchScore)}15`,
                  color: getMatchColor(intern.matchScore),
                  borderColor: `${getMatchColor(intern.matchScore)}30`,
                }}
              >
                <span className="match-score">{intern.matchScore}%</span>
                <span className="match-label">Match</span>
              </div>
            </div>
            <h3 className="internship-title">{intern.title}</h3>
            <p className="internship-desc">{intern.description}</p>
            <div className="internship-skills">
              {intern.skills.map((skill, i) => (
                <span className="skill-tag" key={i}>{skill}</span>
              ))}
            </div>
            <div className="internship-footer">
              <div className="internship-meta">
                <span className="internship-stipend">{intern.stipend}</span>
                <span className="internship-duration">{intern.duration}</span>
              </div>
              <button
                className={`btn ${applied.has(intern.id) ? 'btn-applied' : 'btn-primary'} btn-sm`}
                onClick={() => handleApply(intern.id)}
                disabled={applied.has(intern.id)}
                id={`apply-${intern.id}`}
              >
                {applied.has(intern.id) ? '✓ Applied' : 'Apply Now'}
              </button>
            </div>
            <span className="internship-posted">{intern.posted}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
