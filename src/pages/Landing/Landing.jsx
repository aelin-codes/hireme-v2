import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Target, Search, BarChart3, Briefcase, FileText, 
  Settings, CheckCircle, Clock, Zap, MapPin, BrainCircuit,
  MessageSquare, Star, TrendingUp, DollarSign, PieChart,
  ShieldCheck, ArrowRight, LayoutDashboard
} from 'lucide-react';
import './Landing.css';

export default function Landing() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page pitch-deck-theme">
      {/* 1. HERO SECTION (Slides 1 & 18) */}
      <section className="pitch-hero" id="hero">
        <div className="glow-circle top-right"></div>
        <div className="glow-circle bottom-left"></div>
        
        <div className="container">
          <div className="hero-content animate-on-scroll" id="hero-content">
            <h1 className="hero-title">
              Find Your <br />
              <span className="text-gradient">Perfect Internship.</span>
            </h1>
            <p className="hero-subtitle">
              AI-powered matching platform for students & companies across India.
            </p>
            <div className="hero-actions">
              <Link to="/auth" className="btn btn-primary btn-lg">Get Started</Link>
              <a href="#problem" className="btn btn-outline btn-lg">View Pitch Deck ↓</a>
            </div>
          </div>
          
          <div className="hero-stats-row animate-on-scroll" id="hero-stats">
            <div className="stat-card">
              <div className="stat-value">50M+</div>
              <div className="stat-label">Students Seeking Internships</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">73%</div>
              <div className="stat-label">Struggle to Find Relevant Roles</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">11%</div>
              <div className="stat-label">App-to-Offer Conversion Rate</div>
            </div>
          </div>
          <div className="academic-tag">Entrepreneurship & Business Innovation | Academic Year 2025</div>
        </div>
      </section>

      {/* 2. THE PROBLEM (Slides 2 & 3) */}
      <section className="pitch-section bg-slate" id="problem">
        <div className="container">
          <div className="section-header center animate-on-scroll" id="prob-header">
            <div className="badge-pill">THE PROBLEM</div>
            <h2>Students Apply Endlessly. <br/>Companies Waste Time.</h2>
            <p>The internship ecosystem is fundamentally broken on both sides.</p>
          </div>
          
          <div className="problem-grid animate-on-scroll" id="prob-grid">
            <div className="problem-card">
              <div className="icon-box red"><FileText /></div>
              <h3>50+ Applications, 0 Offers</h3>
              <p>Average student applies to 50+ roles and still doesn't land one relevant internship.</p>
            </div>
            <div className="problem-card">
              <div className="icon-box red"><ShieldCheck /></div>
              <h3>Fake & Unpaid Listings</h3>
              <p>Thousands of scam or zero-stipend internships flood major platforms.</p>
            </div>
            <div className="problem-card">
              <div className="icon-box red"><Target /></div>
              <h3>No Real Skill Matching</h3>
              <p>Resumes evaluated over actual skills, projects & real competency.</p>
            </div>
            <div className="problem-card">
              <div className="icon-box red"><Clock /></div>
              <h3>Overwhelmed Recruiters</h3>
              <p>Startups receive 300+ irrelevant applications per single post.</p>
            </div>
          </div>
          
          <div className="quote-box animate-on-scroll" id="prob-quote">
            <div className="quote-stat">73%</div>
            <p>of Indian graduates say finding an internship is harder than exams.</p>
            <div className="quote-source">— NASSCOM Survey 2024</div>
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION (Slide 4) */}
      <section className="pitch-section" id="solution">
        <div className="container">
          <div className="section-header animate-on-scroll" id="sol-header">
            <div className="badge-pill">THE SOLUTION</div>
            <h2>The Precision-Match Solution</h2>
            <p>Match by Skills, Not Just Degrees.</p>
          </div>
          
          <div className="solution-features animate-on-scroll" id="sol-features">
            <div className="feature-row">
              <div className="feature-content">
                <h3>1. Verified Competency Engine</h3>
                <p>Instead of relying on academic labels, the platform uses Micro-Assessments and Project Validation to verify "Proof of Work". Recruiters see actual technical capability (e.g., a "React.js Competency Score") before opening a resume.</p>
              </div>
              <div className="feature-icon"><BrainCircuit size={48} className="text-indigo" /></div>
            </div>
            <div className="feature-row reverse">
              <div className="feature-content">
                <h3>2. High-Signal Recruiter Dashboard</h3>
                <p>To solve recruiter fatigue, we implement a Smart-Filter interface. Instead of 300+ generic applications, startups receive a "Top 10" shortlist of candidates whose verified skills match at least 85% of the role's needs.</p>
              </div>
              <div className="feature-icon"><LayoutDashboard size={48} className="text-indigo" /></div>
            </div>
            <div className="feature-row">
              <div className="feature-content">
                <h3>3. The "Trust Shield" Framework</h3>
                <p>Every company undergoes a background check to eliminate scams. All roles must clearly state pay and learning outcomes, ensuring students are not exploited for zero-stipend labor.</p>
              </div>
              <div className="feature-icon"><ShieldCheck size={48} className="text-indigo" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OBJECTIVE (Slide 5) */}
      <section className="pitch-section bg-slate" id="objective">
        <div className="container">
          <div className="section-header center animate-on-scroll" id="obj-header">
            <div className="badge-pill">OBJECTIVE</div>
            <h2>What hireme.co Sets Out to Do</h2>
          </div>
          
          <div className="objective-grid animate-on-scroll" id="obj-grid">
            <div className="obj-card">
              <div className="obj-icon"><BrainCircuit /></div>
              <h4>AI Skill Matching</h4>
              <p>Match based on verified skills & projects, not just GPA.</p>
            </div>
            <div className="obj-card">
              <div className="obj-icon"><Users /></div>
              <h4>Community & Network</h4>
              <p>Built-in domain communities to collaborate and build together.</p>
            </div>
            <div className="obj-card">
              <div className="obj-icon"><Briefcase /></div>
              <h4>Portfolio Showcase</h4>
              <p>Display GitHub repos and designs — recruiters reach out directly.</p>
            </div>
            <div className="obj-card">
              <div className="obj-icon"><ShieldCheck /></div>
              <h4>Safe Listings</h4>
              <p>Zero fake internships. Every company goes through KYC verification.</p>
            </div>
            <div className="obj-card">
              <div className="obj-icon"><Star /></div>
              <h4>Skill Ecosystem</h4>
              <p>Integrated courses and live tests to close skill gaps quickly.</p>
            </div>
            <div className="obj-card">
              <div className="obj-icon"><MapPin /></div>
              <h4>India-Scale</h4>
              <p>Designed for 50M+ students with college integration & regional focus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS (Slide 6) */}
      <section className="pitch-section" id="how-it-works">
        <div className="container">
          <div className="section-header center animate-on-scroll" id="hiw-header">
            <div className="badge-pill">HOW IT WORKS</div>
            <h2>Three Steps to the Right Internship</h2>
          </div>
          
          <div className="steps-container animate-on-scroll" id="hiw-steps">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Student Profile</h3>
              <ul>
                <li><CheckCircle size={16}/> Skills & tech stack</li>
                <li><CheckCircle size={16}/> Projects & GitHub links</li>
                <li><CheckCircle size={16}/> Career goals & interests</li>
                <li><CheckCircle size={16}/> Skill test scores</li>
              </ul>
            </div>
            <ArrowRight size={32} className="step-arrow" />
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>AI Match Engine</h3>
              <ul>
                <li><CheckCircle size={16}/> Semantic skill parsing</li>
                <li><CheckCircle size={16}/> Interest alignment score</li>
                <li><CheckCircle size={16}/> Company culture fit</li>
                <li><CheckCircle size={16}/> Personalized suggestions</li>
              </ul>
            </div>
            <ArrowRight size={32} className="step-arrow" />
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Connect & Apply</h3>
              <ul>
                <li><CheckCircle size={16}/> Verified company listings</li>
                <li><CheckCircle size={16}/> 1-click applications</li>
                <li><CheckCircle size={16}/> Direct recruiter contact</li>
                <li><CheckCircle size={16}/> Interview scheduling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TARGET AUDIENCE (Slide 8) */}
      <section className="pitch-section bg-slate" id="audience">
        <div className="container">
          <div className="section-header center animate-on-scroll" id="audi-header">
            <div className="badge-pill">TARGET AUDIENCE</div>
            <h2>Who We Serve</h2>
          </div>
          
          <div className="audience-split animate-on-scroll" id="audi-split">
            <div className="audience-column student">
              <div className="audi-icon">🎓</div>
              <h3>Students</h3>
              <p className="audi-sub">Primary users — free to join</p>
              <div className="audi-stats">
                <div className="a-stat"><strong>50M+</strong> College students</div>
                <div className="a-stat"><strong>Age 18–24</strong> UG & PG</div>
                <div className="a-stat"><strong>Tier 1–3</strong> Universities</div>
                <div className="a-stat"><strong>Freshers</strong> 0–1 yr exp</div>
              </div>
            </div>
            <div className="audience-column company">
              <div className="audi-icon">🏢</div>
              <h3>Companies</h3>
              <p className="audi-sub">Revenue users — pay to hire</p>
              <div className="audi-stats">
                <div className="a-stat"><strong>90,000+</strong> Startups & SMEs</div>
                <div className="a-stat"><strong>MNCs</strong> Pre-screened talent</div>
                <div className="a-stat"><strong>EdTech</strong> Course distribution</div>
                <div className="a-stat"><strong>Colleges</strong> Placement cells</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REVENUE MODEL (Slide 9) */}
      <section className="pitch-section" id="revenue">
        <div className="container">
          <div className="section-header center animate-on-scroll" id="rev-header">
            <div className="badge-pill">REVENUE MODEL</div>
            <h2>How hireme.co Makes Money</h2>
          </div>
          
          <div className="revenue-grid animate-on-scroll" id="rev-grid">
            <div className="rev-card">
              <h5>Student Premium</h5>
              <div className="rev-price">₹299 <span>/ month</span></div>
              <p>Advanced AI matches, unlimited applications, resume review & mock interviews.</p>
            </div>
            <div className="rev-card">
              <h5>Company Hiring Fee</h5>
              <div className="rev-price">₹2,999 <span>/ post</span></div>
              <p>Pay-per-listing or subscriptions with featured slots and talent analytics.</p>
            </div>
            <div className="rev-card">
              <h5>Skill Certifications</h5>
              <div className="rev-price">₹499–₹4,999</div>
              <p>Paid certifications in partnership with leading EdTech brands.</p>
            </div>
            <div className="rev-card">
              <h5>College Partnerships</h5>
              <div className="rev-price">₹50K–₹5L <span>/ yr</span></div>
              <p>SaaS license for placement cells — tracking and reporting tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINANCIALS (Slides 10, 11, 12) */}
      <section className="pitch-section bg-slate" id="financials">
        <div className="container">
          <div className="section-header animate-on-scroll" id="fin-header">
            <div className="badge-pill">FINANCIALS</div>
            <h2>Projections & Expenditure</h2>
          </div>
          
          <div className="fin-layout animate-on-scroll" id="fin-content">
            <div className="fin-projections">
              <h3>3-Year Outlook</h3>
              <div className="proj-row">
                <div className="yr">Year 1</div>
                <div className="bar-container"><div className="bar rev" style={{width: '20%'}}>₹0.8 Cr</div></div>
                <div className="bar-container"><div className="bar exp" style={{width: '30%'}}>₹1.2 Cr</div></div>
                <div className="net loose">Net: -₹0.4 Cr</div>
              </div>
              <div className="proj-row">
                <div className="yr">Year 2</div>
                <div className="bar-container"><div className="bar rev" style={{width: '60%'}}>₹3.2 Cr</div></div>
                <div className="bar-container"><div className="bar exp" style={{width: '40%'}}>₹2.1 Cr</div></div>
                <div className="net win">Net: +₹1.1 Cr</div>
              </div>
              <div className="proj-row">
                <div className="yr">Year 3</div>
                <div className="bar-container"><div className="bar rev" style={{width: '100%'}}>₹9.5 Cr</div></div>
                <div className="bar-container"><div className="bar exp" style={{width: '50%'}}>₹4.2 Cr</div></div>
                <div className="net win">Net: +₹5.3 Cr</div>
              </div>
              <p className="fin-note">Break-Even: Month 18 (~4,500 premium students + 150 companies)</p>
            </div>
            
            <div className="fin-expenditure">
              <h3>Year 1 Budget: ₹34.9L</h3>
              <ul className="exp-list">
                <li><span className="dot c1"></span> Tech & Infra (35%) <span>₹12.2L</span></li>
                <li><span className="dot c2"></span> Team & Salaries (28%) <span>₹9.8L</span></li>
                <li><span className="dot c3"></span> Marketing (18%) <span>₹6.3L</span></li>
                <li><span className="dot c4"></span> Ops & Legal (10%) <span>₹3.5L</span></li>
                <li><span className="dot c5"></span> Buffer (9%) <span>₹3.1L</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. MARKETING & TECH & SWOT (Slides 13, 14, 15) */}
      <section className="pitch-section" id="strategy">
        <div className="container">
          
          <div className="strategy-blocks">
            {/* Strategy */}
            <div className="strat-block animate-on-scroll">
               <div className="badge-pill">GTM STRATEGY</div>
               <h3>Reach 1M in Year 1</h3>
               <ul className="check-list">
                 <li><strong>Digital:</strong> Insta/LinkedIn, AI Resume SEO, Micro-influencers.</li>
                 <li><strong>Campus:</strong> 500+ Ambassadors, Workshops, Placements.</li>
                 <li><strong>B2B:</strong> LinkedIn outreach to startups, free 3-month trial.</li>
               </ul>
            </div>
            
            {/* Tech Stack */}
            <div className="strat-block animate-on-scroll">
               <div className="badge-pill">TECH CORE</div>
               <h3>Modern Stack</h3>
               <ul className="check-list">
                 <li><strong>Frontend:</strong> React Native, Next.js, Framer Motion</li>
                 <li><strong>Backend:</strong> Node.js, GraphQL, Redis, WebSockets</li>
                 <li><strong>AI Core:</strong> NLP extraction (BERT), GPT-4 coach</li>
                 <li><strong>Infra:</strong> AWS, PostgreSQL, Github Actions, Aadhaar KYC</li>
               </ul>
            </div>
          </div>

          {/* SWOT */}
          <div className="swot-grid animate-on-scroll mt-xl" id="swot">
            <div className="swot-card s">
              <h4>Strengths</h4>
              <p>AI skill matching, Portfolio features, Verified listings, MVP-first build.</p>
            </div>
            <div className="swot-card w">
              <h4>Weaknesses</h4>
              <p>No brand recognition, Cold-start data problem, High initial CAC.</p>
            </div>
            <div className="swot-card o">
              <h4>Opportunities</h4>
              <p>50M+ students, NEP 2020 mandates, Active startup hiring culture.</p>
            </div>
            <div className="swot-card t">
              <h4>Threats</h4>
              <p>Internshala monopoly, LinkedIn updates, Employer trust building time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. COMPETITORS & CTA (Slides 17 & 18) */}
      <section className="pitch-section bg-slate" id="closing">
        <div className="container">
          <div className="section-header center animate-on-scroll">
            <div className="badge-pill">COMPETITIVE EDGE</div>
            <h2>Why We Win</h2>
          </div>
          
          <div className="competitor-table-wrapper animate-on-scroll">
            <table className="comp-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>hireme.co</th>
                  <th>Internshala</th>
                  <th>LinkedIn</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AI Skill Matching</td>
                  <td className="win">✅ Yes</td>
                  <td className="loss">❌ No</td>
                  <td className="warn">⚠️ Partial</td>
                </tr>
                <tr>
                  <td>Portfolio Showcase</td>
                  <td className="win">✅ Yes</td>
                  <td className="loss">❌ No</td>
                  <td className="win">✅ Yes</td>
                </tr>
                <tr>
                  <td>Community Collaboration</td>
                  <td className="win">✅ Yes</td>
                  <td className="loss">❌ No</td>
                  <td className="warn">⚠️ Partial</td>
                </tr>
                <tr>
                  <td>Zero Fake Listings</td>
                  <td className="win">✅ Yes</td>
                  <td className="warn">⚠️ Partial</td>
                  <td className="win">✅ Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="closing-banner animate-on-scroll mt-xl">
            <h2>The Right Opportunity for the Right Person.</h2>
            <p>"Skills get the job. hireme.co gets the match."</p>
            <div className="closing-buttons">
              <Link to="/auth" className="btn btn-primary btn-lg">Join hireme.co Today</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
