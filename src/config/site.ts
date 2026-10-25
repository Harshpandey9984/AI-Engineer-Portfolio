// ============================================================
// SITE CONFIGURATION — Edit this file to update your portfolio
// ============================================================

export const siteConfig = {
  // Personal Information
  name: "Harsh Pandey",
  initials: "HP",
  title: "AI Engineer | Applied AI & LLM Engineer",
  domain: "https://harshpandey.tech",
  tagline: "Engineering Intelligent Systems. Building AI That Works.",
  description:
    "I’m Harsh Pandey, an AI Engineer focused on building intelligent applications, AI agents, LLM-powered solutions, and automation systems. I combine AI engineering with full-stack development to turn complex problems into practical software products.",

  // Contact & Social — verified from user
  email: "harshpandey8499@gmail.com",
  phone: "9199668058",
  location: "Bhopal, Madhya Pradesh, India",
  contactEndpoint: "", // Optional Formspree/Formspark URL

  // Social Links
  social: {
    github: "https://github.com/Harshpandey9984?tab=repositories",
    linkedin: "https://www.linkedin.com/in/harsh-pandey-aa783925a/",
    twitter: "https://x.com/HarshPandey9984",
  },

  // Resume — verified uploaded PDF
  resumeUrl: "/resume.pdf",

  // Profile Image
  profileImage: "/profile.jpg",

  // Availability status
  availability: "Open for opportunities and collaborations",

  // SEO
  seo: {
    title: "Harsh Pandey | AI Engineer & LLM Specialist",
    description:
      "Explore Harsh Pandey’s AI engineering portfolio, featuring enterprise RAG pipelines, tool-calling AI agents, LLM applications, and intelligent automation systems.",
    ogImage: "/og-image.png",
    canonical: "https://harshpandey.tech",
  },
} as const;

export type SiteConfig = typeof siteConfig;
