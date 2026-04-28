export interface Course {
  id: string;
  title: string;
  level: string;
  duration: string;
  totalHours?: string;
  rhythm?: string;
  description: string;
  fullDescription?: string;
  nature: string;
  certifications?: string[];
  objectives: string[];
  points?: string[]; // Short list of key points for cards
  program?: {
    title: string;
    items: string[];
  }[];
  detailedProgram?: {
    headers: string[];
    rows: string[][];
  };
  evaluation?: string;
  prerequisites: string[];
  access?: string[]; // Backward compatibility or specific access info
  parcoursup?: string[];
  outcomes: string[];
  salary?: string;
  pursuitOfStudies?: {
    description: string;
    examples: string[];
  };
  statistics?: {
    label: string;
    value: string;
  }[];
  format: string;
  slug: string;
}

export interface Review {
  name: string;
  role: string;
  text: string;
  image: string;
}
