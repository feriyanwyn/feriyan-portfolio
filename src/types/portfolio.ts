export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  portfolio?: string;
  whatsapp?: string;
  whatsappUrl?: string;
}

export interface ProfileInfo {
  name: string;
  status: string;
  headline: string;
  location: string;
  shortBio: string;
  fullBio: string;
  socialLinks: SocialLinks;
  cvUrl: string;
}

export interface DomainFocus {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface SkillItem {
  name: string;
  category: string;
  iconName?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Web' | 'AI / ML' | 'Computer Vision' | 'Game Development' | 'Data';
  technologies: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  overview: string;
  keyFeatures: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  type: 'Work' | 'Organization';
  responsibilities: string[];
}

export interface ResearchItem {
  id: string;
  institution: string;
  level: string;
  period: string;
  title: string;
  description: string[];
  dataset?: string;
  evaluationNote?: string;
  technologies: string[];
}

export interface JourneyItem {
  year: string;
  title: string;
  roleOrField: string;
  description: string;
  highlights: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  location: string;
  details: string[];
}

export interface CommunityItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  responsibilities: string[];
}

export interface CertificationItem {
  title: string;
  issuer?: string;
  year: string;
  badge?: string;
  category: string;
}
