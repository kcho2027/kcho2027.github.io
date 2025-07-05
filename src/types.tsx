export interface Basics { name: string; label: string; email: string; phone: string; website: string; }
export interface EducationItem { institution: string; degree: string; startDate: string; endDate: string; details: string; }
export interface ExperienceItem { company: string; position: string; startDate: string; endDate: string; summary: string; description: string;}
export interface ProjectItem { name: string; description: string; link: string; }
export interface Resume { basics: Basics; about: string; education: EducationItem[]; experience: ExperienceItem[]; projects: ProjectItem[]; techStack: string[]; extra: string[]; }
