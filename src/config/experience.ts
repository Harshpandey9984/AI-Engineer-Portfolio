// ============================================================
// EXPERIENCE DATA — Edit this file to add your experience
// ============================================================

export interface ExperienceEntry {
  type: 'work' | 'education' | 'certification';
  organization: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
}

export const experienceData: ExperienceEntry[] = [
  // ─── Work Experience ───
  {
    type: 'work',
    organization: 'Apisomi',
    role: 'Software Developer Intern',
    period: 'Feb 2026 – May 2026',
    description:
      'Engineered 10+ scalable backend REST APIs for decentralized workflows. Collaborated with 3 cross-functional teams to integrate secure transaction systems, optimizing SQL queries and improving average response times by 30%. Automated end-to-end API testing workflows.',
    current: true,
  },

  // ─── Education ───
  {
    type: 'education',
    organization: 'IES College of Technology, Bhopal',
    role: 'Bachelor of Technology in Computer Science and Engineering',
    period: 'Nov 2022 – Jun 2026',
    description:
      'CGPA: 7.44. Core focus on Machine Learning, Algorithms, Database Systems, Cloud Infrastructure, and Distributed Backend Architectures.',
  },

  // ─── Certifications & Achievements ───
  {
    type: 'certification',
    organization: 'Microsoft & Google Cloud',
    role: 'Cloud & AI Certifications',
    period: '2024 – 2026',
    description:
      'Microsoft Learn Certifications in Azure API Management, ML Deployment, and Cloud Resource Management; Google Cloud Skill Badges in Application Development and Load Balancing on Compute Engine; Microsoft Learn T-SQL Specialist.',
  },
  {
    type: 'certification',
    organization: 'TCS CodeVita & Amity University',
    role: 'Competitive Programming Finalist & Hackathon Winner',
    period: '2025 – 2026',
    description:
      'Secured Finalist position in TCS CodeVita Season 13 competitive programming contest; Won 1st Place in Blockchain Hackathon at Amity University competing among 50+ participating teams.',
  },
];
