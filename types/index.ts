export type Lang = 'en' | 'ar';
export type Theme = 'dark' | 'light';
export type ProjectStatus = 'live' | 'issue' | 'private';
export type ProjectGroup = 'flagship' | 'live' | 'private';
export type FilterKey = 'all' | 'flagship' | 'live' | 'private';

export interface ProjectLocaleContent {
  title: string;
  tagline: string;
  desc: string;
  details: string[];
  tools: string[];
}

export interface Project {
  icon: string;
  image: string;
  tint: string;
  file: string;
  tags: string[];
  status: ProjectStatus;
  url: string;
  gallery: number;
  group: ProjectGroup;
  en: ProjectLocaleContent;
  ar: ProjectLocaleContent;
}

export interface ExperienceLocaleContent {
  role: string;
  location: string;
  projects: string;
  bullets: string[];
}

export interface ExperienceEntry {
  current?: boolean;
  company: string;
  date: { en: string; ar: string };
  en: ExperienceLocaleContent;
  ar: ExperienceLocaleContent;
}

export interface FilterOption {
  key: FilterKey;
  label: string;
}

export type Dictionary = Record<string, string>;
