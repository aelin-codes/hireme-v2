export default function StudentProfile({ student, onClose }) {
  const getMatchColor = (score) => {
    if (score >= 90) return '#10B981';
    if (score >= 80) return '#6366F1';
    if (score >= 70) return '#F59E0B';
    return '#94A3B8';
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content student-profile-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="sp-content">
          {/* Header */}
          <div className="sp-header">
            <div className="sp-avatar">{student.avatar}</div>
            <div className="sp-header-info">
              <h2>
                {student.name}
                {student.verified && <span className="verified-badge-lg">✓ Verified</span>}
              </h2>
              <p>{student.college} • {student.degree} • {student.year}</p>
              <p className="sp-location">📍 {student.location}</p>
            </div>
            <div
              className="sp-match"
              style={{
                background: `${getMatchColor(student.matchScore)}15`,
                borderColor: `${getMatchColor(student.matchScore)}30`,
                color: getMatchColor(student.matchScore),
              }}
            >
              <span className="sp-match-score">{student.matchScore}%</span>
              <span className="sp-match-label">Skill Match</span>
            </div>
          </div>

          {/* Bio */}
          <div className="sp-section">
            <h3>About</h3>
            <p>{student.bio}</p>
          </div>

          {/* Skills */}
          <div className="sp-section">
            <h3>Verified Skills</h3>
            <div className="sp-skills">
              {student.skills.map((skill, i) => (
                <span className="sp-skill-badge" key={i}>
                  {student.verified && '✓ '}{skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="sp-section">
            <h3>Projects</h3>
            <div className="sp-projects">
              {student.projects.map((project, i) => (
                <div className="sp-project" key={i}>
                  <div className="sp-project-name">{project.name}</div>
                  <div className="sp-project-tech">{project.tech}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="sp-section">
            <h3>Experience</h3>
            <p>{student.experience}</p>
          </div>

          {/* Actions */}
          <div className="sp-actions">
            <button className="btn btn-primary">Shortlist Candidate</button>
            <button className="btn btn-outline">Schedule Interview</button>
          </div>
        </div>
      </div>
    </div>
  );
}
