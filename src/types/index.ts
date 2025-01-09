export interface User {
  id: string;
  name: string;
  email: string;
  role: 'dev' | 'tech_lead';
  skills: Skill[];
  lives: number;
  projects: Project[];
  targetRole: string;
}

export interface Skill {
  name: string;
  level: number;
  targetLevel: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  type: 'solo' | 'group';
  requiredSkills: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  galaxy: string;
  status: 'in_progress' | 'completed' | 'failed';
  feedback?: Feedback[];
}

export interface Feedback {
  id: string;
  reviewerId: string;
  projectId: string;
  skills: { skill: string; rating: number }[];
  comments: string;
  date: Date;
}