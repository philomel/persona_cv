export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export interface AdvantageItem {
  title: string;
  content: string;
  iconName: 'Zap' | 'Brain' | 'Target' | 'Globe';
}