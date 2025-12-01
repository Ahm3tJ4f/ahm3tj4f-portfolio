import type { ReactNode } from "react";

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  description: (string | ReactNode)[];
}

export interface NavigationItem {
  to: string;
  label: string;
}
