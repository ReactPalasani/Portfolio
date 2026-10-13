import dynamicIconImports from 'lucide-react/dynamicIconImports';

// 1. Define semantic keys for your application's UI
export const ICON_MAP: Record<string, keyof typeof dynamicIconImports> = {
  // Navigation / Core App Icons
  homeRoute: 'home',       // <--- If you change 'home' to 'house' or 'smart-home', it updates globally!
  aboutRoute: 'user',
  projectsRoute: 'folder-git-2',
  skillsRoute: 'code-2',
  experienceRoute: 'briefcase',
  contactRoute: 'mail',

  // UI Actions
  menuOpen: 'menu',
  menuClose: 'x',
};

export type AppIconName = keyof typeof ICON_MAP;
