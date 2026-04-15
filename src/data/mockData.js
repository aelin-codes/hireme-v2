// === Mock Data for HireMe.co ===

export const companies = [
  { id: 1, name: 'Razorpay', logo: '💳', industry: 'Fintech', location: 'Bangalore', size: '2000+' },
  { id: 2, name: 'CRED', logo: '💎', industry: 'Fintech', location: 'Bangalore', size: '1000+' },
  { id: 3, name: 'Flipkart', logo: '🛒', industry: 'E-commerce', location: 'Bangalore', size: '30000+' },
  { id: 4, name: 'Zerodha', logo: '📈', industry: 'Finance', location: 'Bangalore', size: '1500+' },
  { id: 5, name: 'Swiggy', logo: '🍔', industry: 'Food Tech', location: 'Bangalore', size: '5000+' },
  { id: 6, name: 'PhonePe', logo: '📱', industry: 'Payments', location: 'Bangalore', size: '4000+' },
  { id: 7, name: 'Meesho', logo: '🛍️', industry: 'Social Commerce', location: 'Bangalore', size: '2500+' },
  { id: 8, name: 'Zoho', logo: '⚡', industry: 'SaaS', location: 'Chennai', size: '12000+' },
];

export const internships = [
  {
    id: 1, companyId: 1, company: 'Razorpay', logo: '💳',
    title: 'Frontend Engineer Intern',
    description: 'Build payment checkout UIs with React and TypeScript. Work on Razorpay\'s core checkout flow used by millions of merchants across India.',
    skills: ['React', 'TypeScript', 'CSS', 'REST APIs'],
    stipend: '₹40,000/mo', location: 'Bangalore (Hybrid)',
    duration: '6 months', matchScore: 94, posted: '2 days ago',
    type: 'Full-time', department: 'Engineering'
  },
  {
    id: 2, companyId: 2, company: 'CRED', logo: '💎',
    title: 'Backend Developer Intern',
    description: 'Design and build scalable microservices for CRED\'s rewards platform. Work with Kotlin, Spring Boot, and distributed systems.',
    skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    stipend: '₹50,000/mo', location: 'Bangalore (On-site)',
    duration: '6 months', matchScore: 87, posted: '1 day ago',
    type: 'Full-time', department: 'Platform'
  },
  {
    id: 3, companyId: 3, company: 'Flipkart', logo: '🛒',
    title: 'Data Science Intern',
    description: 'Build ML models for product recommendations and search ranking. Work with large-scale data pipelines on Flipkart\'s platform.',
    skills: ['Python', 'ML', 'SQL', 'TensorFlow'],
    stipend: '₹45,000/mo', location: 'Bangalore (Hybrid)',
    duration: '4 months', matchScore: 78, posted: '3 days ago',
    type: 'Full-time', department: 'Data Science'
  },
  {
    id: 4, companyId: 4, company: 'Zerodha', logo: '📈',
    title: 'Full Stack Developer Intern',
    description: 'Build and maintain trading tools and internal dashboards. Work with Go, React, and PostgreSQL in a lean engineering team.',
    skills: ['Go', 'React', 'PostgreSQL', 'Linux'],
    stipend: '₹35,000/mo', location: 'Bangalore (Remote)',
    duration: '3 months', matchScore: 82, posted: '5 days ago',
    type: 'Full-time', department: 'Engineering'
  },
  {
    id: 5, companyId: 5, company: 'Swiggy', logo: '🍔',
    title: 'Product Design Intern',
    description: 'Design user experiences for Swiggy\'s consumer and merchant apps. Conduct user research and create high-fidelity prototypes.',
    skills: ['Figma', 'UI/UX', 'Prototyping', 'User Research'],
    stipend: '₹30,000/mo', location: 'Bangalore (Hybrid)',
    duration: '3 months', matchScore: 71, posted: '1 week ago',
    type: 'Full-time', department: 'Design'
  },
  {
    id: 6, companyId: 6, company: 'PhonePe', logo: '📱',
    title: 'Android Developer Intern',
    description: 'Work on PhonePe\'s Android app used by 500M+ users. Build features with Kotlin, Jetpack Compose, and modern Android architectures.',
    skills: ['Kotlin', 'Android', 'Jetpack Compose', 'MVVM'],
    stipend: '₹42,000/mo', location: 'Bangalore (On-site)',
    duration: '6 months', matchScore: 65, posted: '4 days ago',
    type: 'Full-time', department: 'Mobile'
  },
  {
    id: 7, companyId: 7, company: 'Meesho', logo: '🛍️',
    title: 'ML Engineer Intern',
    description: 'Build recommendation systems and NLP models for social commerce. Work on personalization algorithms at scale.',
    skills: ['Python', 'PyTorch', 'NLP', 'AWS'],
    stipend: '₹38,000/mo', location: 'Bangalore (Hybrid)',
    duration: '4 months', matchScore: 73, posted: '6 days ago',
    type: 'Full-time', department: 'AI/ML'
  },
  {
    id: 8, companyId: 8, company: 'Zoho', logo: '⚡',
    title: 'Cloud Infrastructure Intern',
    description: 'Work on Zoho\'s private cloud infrastructure. Build monitoring tools and automate deployment pipelines.',
    skills: ['Python', 'Linux', 'Docker', 'Kubernetes'],
    stipend: '₹25,000/mo', location: 'Chennai (On-site)',
    duration: '6 months', matchScore: 69, posted: '1 week ago',
    type: 'Full-time', department: 'DevOps'
  },
];

export const appliedInternships = [
  { ...internships[2], appliedDate: '2026-04-10', status: 'Under Review' },
  { ...internships[5], appliedDate: '2026-04-08', status: 'Shortlisted' },
];

export const attendingInternships = [
  {
    ...internships[0],
    startDate: '2026-03-01',
    endDate: '2026-08-31',
    mentor: 'Arjun Mehta',
    progress: 45,
    department: 'Frontend Engineering',
  },
];

export const completedInternships = [
  {
    id: 101, company: 'Freshworks', logo: '🌱',
    title: 'SDE Intern',
    startDate: '2025-06-01', endDate: '2025-11-30',
    skills: ['React', 'Node.js', 'MongoDB'],
    certificate: true,
    rating: 4.8,
  },
  {
    id: 102, company: 'Postman', logo: '📬',
    title: 'API Developer Intern',
    startDate: '2025-01-15', endDate: '2025-04-15',
    skills: ['Node.js', 'REST APIs', 'Testing'],
    certificate: true,
    rating: 4.5,
  },
];

export const studentSkills = {
  labels: ['React', 'Python', 'SQL', 'JavaScript', 'Node.js', 'Git', 'Docker', 'TypeScript'],
  scores: [88, 75, 82, 92, 70, 85, 55, 78],
};

export const studentProfile = {
  name: 'Shibin Sha',
  email: 'shibin.sha@email.com',
  college: 'VIT Vellore',
  degree: 'B.Tech CSE',
  year: '3rd Year',
  avatar: '👩‍💻',
  bio: 'Passionate full-stack developer with a love for building beautiful UIs and scalable backends. Open source contributor.',
  location: 'Chennai, Tamil Nadu',
  skills: ['React', 'TypeScript', 'Node.js', 'Python', 'SQL', 'Git', 'Docker'],
  projects: [
    { name: 'E-Commerce Platform', url: '#', tech: 'React, Node.js, MongoDB' },
    { name: 'ML Sentiment Analyzer', url: '#', tech: 'Python, Flask, BERT' },
    { name: 'Task Manager CLI', url: '#', tech: 'Go, SQLite' },
  ],
  overallScore: 82,
};

// Company dashboard mock data
export const applicants = [
  {
    id: 1, name: 'Shibin Sha', college: 'VIT Vellore', degree: 'B.Tech CSE',
    avatar: '👩‍💻', matchScore: 94, skills: ['React', 'TypeScript', 'Node.js', 'Python'],
    experience: '2 internships', appliedFor: 'Frontend Engineer Intern',
    verified: true, year: '3rd Year', location: 'Chennai',
    projects: [
      { name: 'E-Commerce Platform', tech: 'React, Node.js' },
      { name: 'Portfolio Generator', tech: 'Next.js, Tailwind' },
    ],
    bio: 'Passionate about building beautiful, accessible web experiences.',
  },
  {
    id: 2, name: 'Rohan Patel', college: 'DAIICT Gandhinagar', degree: 'B.Tech IT',
    avatar: '👨‍💻', matchScore: 89, skills: ['React', 'JavaScript', 'CSS', 'Firebase'],
    experience: '1 internship', appliedFor: 'Frontend Engineer Intern',
    verified: true, year: '4th Year', location: 'Ahmedabad',
    projects: [
      { name: 'Social Media Dashboard', tech: 'React, Firebase' },
      { name: 'Weather App', tech: 'JavaScript, OpenWeather API' },
    ],
    bio: 'Frontend enthusiast with a keen eye for design systems.',
  },
  {
    id: 3, name: 'Ananya Krishnan', college: 'PSG Tech Coimbatore', degree: 'B.Tech CSE',
    avatar: '👩‍🎓', matchScore: 85, skills: ['Vue.js', 'Python', 'SQL', 'REST APIs'],
    experience: '1 internship', appliedFor: 'Frontend Engineer Intern',
    verified: true, year: '3rd Year', location: 'Coimbatore',
    projects: [
      { name: 'Inventory Management', tech: 'Vue.js, Django' },
      { name: 'Chat Application', tech: 'Socket.io, Express' },
    ],
    bio: 'Full-stack developer who loves solving real-world problems with code.',
  },
  {
    id: 4, name: 'Vikram Singh', college: 'IIIT Allahabad', degree: 'B.Tech ECE',
    avatar: '👨‍🔬', matchScore: 81, skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    experience: 'Fresher', appliedFor: 'Frontend Engineer Intern',
    verified: false, year: '2nd Year', location: 'Prayagraj',
    projects: [
      { name: 'Blog Platform', tech: 'MERN Stack' },
    ],
    bio: 'Eager learner transitioning from electronics to software development.',
  },
  {
    id: 5, name: 'Shreya Gupta', college: 'NSUT Delhi', degree: 'B.Tech CSE',
    avatar: '👩‍💼', matchScore: 77, skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    experience: 'Fresher', appliedFor: 'Frontend Engineer Intern',
    verified: true, year: '2nd Year', location: 'Delhi',
    projects: [
      { name: 'Landing Page Builder', tech: 'HTML, CSS, JS' },
      { name: 'Quiz App', tech: 'React' },
    ],
    bio: 'Creative developer passionate about pixel-perfect interfaces.',
  },
];

export const workforce = [
  {
    id: 1, name: 'Aarav Mehta', avatar: '👨‍💻', department: 'Frontend Engineering',
    assignedWork: 'Checkout UI Redesign', startDate: '2026-03-01',
    progress: 72, status: 'On Track', college: 'SRM Chennai',
  },
  {
    id: 2, name: 'Diya Nair', avatar: '👩‍💻', department: 'Backend Platform',
    assignedWork: 'Payment Gateway API v3', startDate: '2026-02-15',
    progress: 88, status: 'Ahead', college: 'MIT Manipal',
  },
  {
    id: 3, name: 'Kabir Joshi', avatar: '👨‍🎓', department: 'Data Science',
    assignedWork: 'Fraud Detection Model', startDate: '2026-01-10',
    progress: 35, status: 'Needs Attention', college: 'BITS Pilani',
  },
  {
    id: 4, name: 'Meera Reddy', avatar: '👩‍🎓', department: 'Mobile Engineering',
    assignedWork: 'Android SDK Integration', startDate: '2026-03-20',
    progress: 55, status: 'On Track', college: 'NIT Warangal',
  },
];

export const testimonials = [
  {
    id: 1, name: 'Aditya Varma', role: 'Student',
    college: 'SRM University, Chennai',
    text: 'Coming from a Tier-2 college, I always felt overlooked. HireMe.co matched me with Razorpay based on my actual React skills — not my college name. Now I earn ₹40K/month as an intern!',
    avatar: '👨‍💻', rating: 5,
  },
  {
    id: 2, name: 'Neha Agarwal', role: 'Student',
    college: 'VIT Vellore',
    text: 'The AI Skill Matcher is incredible. It found me a data science internship at Flipkart that I would never have found on traditional job boards. The stipend is fair and the work is real.',
    avatar: '👩‍💻', rating: 5,
  },
  {
    id: 3, name: 'Rajesh Kumar', role: 'Student',
    college: 'DAIICT Gandhinagar',
    text: 'No more unpaid internships! HireMe.co ensures every listing has a verified stipend. I got a ₹35K/month role at Zerodha. My parents are so proud.',
    avatar: '👨‍🎓', rating: 5,
  },
  {
    id: 4, name: 'Sneha Iyer', role: 'Hiring Manager',
    company: 'CRED',
    text: 'We used to spend weeks screening resumes. HireMe.co gives us a pre-vetted talent pool ranked by actual skills. Our intern-to-FTE conversion rate jumped to 60%.',
    avatar: '👩‍💼', rating: 5,
  },
  {
    id: 5, name: 'Arjun Desai', role: 'CTO',
    company: 'Meesho',
    text: 'The quality of candidates from HireMe.co is phenomenal. We hired 5 interns last quarter and every single one was productive from week one. The skill verification is legit.',
    avatar: '👨‍💼', rating: 5,
  },
  {
    id: 6, name: 'Pooja Bansal', role: 'HR Lead',
    company: 'Freshworks',
    text: 'HireMe.co solved our diversity hiring challenge. We now get applicants from 200+ colleges across India, not just the top 10. The talent is there — you just need the right platform.',
    avatar: '👩‍🏫', rating: 5,
  },
];

export const features = [
  {
    icon: '🤖',
    title: 'AI Skill Verification',
    description: 'Our proprietary AI analyzes your projects, code, and contributions to generate a verified Skill Score — no resume fluffing.',
  },
  {
    icon: '🎯',
    title: 'Smart Matching',
    description: 'Get matched to internships based on actual skills, not college brand. Our algorithm finds the perfect fit for both students and companies.',
  },
  {
    icon: '💰',
    title: 'Guaranteed Stipends',
    description: 'Every verified listing must offer a fair stipend. No more unpaid internships that exploit students.',
  },
  {
    icon: '🔒',
    title: 'Secure & Private',
    description: 'End-to-end encryption, data privacy compliance under Indian law. Your information is safe with us.',
  },
  {
    icon: '📊',
    title: 'Skill Analytics',
    description: 'Track your growth with detailed skill charts. See where you stand and what to improve for your dream role.',
  },
  {
    icon: '📜',
    title: 'Digital Certificates',
    description: 'Earn verified completion certificates for every internship. Build a credible portfolio that speaks for itself.',
  },
];
