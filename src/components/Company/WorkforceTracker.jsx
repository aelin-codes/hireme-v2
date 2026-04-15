import { workforce } from '../../data/mockData';

export default function WorkforceTracker() {
  const getStatusColor = (status) => {
    switch (status) {
      case 'On Track': return 'green';
      case 'Ahead': return 'blue';
      case 'Needs Attention': return 'red';
      case 'Completed': return 'green';
      default: return 'yellow';
    }
  };

  return (
    <div className="workforce-tracker">
      <div className="section-intro">
        <h2>👥 Workforce Tracker</h2>
        <p>Monitor your current interns, their assignments, and progress.</p>
      </div>

      <div className="workforce-table-wrapper">
        <table className="workforce-table" id="workforce-table">
          <thead>
            <tr>
              <th>Intern</th>
              <th>Department</th>
              <th>Assigned Work</th>
              <th>Start Date</th>
              <th>Progress</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {workforce.map((w) => (
              <tr key={w.id}>
                <td>
                  <div className="wf-intern">
                    <span className="wf-avatar">{w.avatar}</span>
                    <div>
                      <div className="wf-name">{w.name}</div>
                      <div className="wf-college">{w.college}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-indigo">{w.department}</span>
                </td>
                <td className="wf-work">{w.assignedWork}</td>
                <td className="wf-date">{w.startDate}</td>
                <td>
                  <div className="wf-progress">
                    <div className="progress-bar" style={{ width: '100%' }}>
                      <div
                        className="progress-fill"
                        style={{
                          width: `${w.progress}%`,
                          background: w.progress >= 80
                            ? 'linear-gradient(90deg, #10B981, #34D399)'
                            : w.progress >= 50
                            ? 'linear-gradient(90deg, #6366F1, #818CF8)'
                            : 'linear-gradient(90deg, #F59E0B, #FBBF24)',
                        }}
                      />
                    </div>
                    <span className="wf-progress-text">{w.progress}%</span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge status-${getStatusColor(w.status)}`}>
                    {w.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
