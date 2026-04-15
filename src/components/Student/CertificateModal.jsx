import { studentProfile } from '../../data/mockData';

export default function CertificateModal({ internship, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content certificate-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="certificate">
          <div className="certificate-border">
            <div className="certificate-inner">
              <div className="certificate-header">
                <div className="certificate-logo">
                  <div className="certificate-logo-icon">H</div>
                  <span>HireMe<span className="cert-accent">.co</span></span>
                </div>
                <h2>Certificate of Completion</h2>
                <div className="certificate-line" />
              </div>

              <div className="certificate-body">
                <p className="cert-preamble">This is to certify that</p>
                <h3 className="cert-name">{studentProfile.name}</h3>
                <p className="cert-detail">
                  has successfully completed the internship program as
                </p>
                <h4 className="cert-role">{internship.title}</h4>
                <p className="cert-detail">at</p>
                <h4 className="cert-company">{internship.company}</h4>
                <p className="cert-period">
                  Duration: {internship.startDate} to {internship.endDate}
                </p>
                <div className="cert-skills">
                  <p>Skills Demonstrated:</p>
                  <div className="cert-skill-tags">
                    {internship.skills.map((s, i) => (
                      <span key={i} className="cert-skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="certificate-footer">
                <div className="cert-signature">
                  <div className="cert-sig-line" />
                  <p>HireMe.co Verification</p>
                </div>
                <div className="cert-id">
                  <p>Certificate ID</p>
                  <code>HM-{internship.id}-{(internship.company.length * 12345).toString(36).toUpperCase()}</code>
                </div>
                <div className="cert-signature">
                  <div className="cert-sig-line" />
                  <p>{internship.company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
