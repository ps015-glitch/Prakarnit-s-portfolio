export interface Skill {
  name: string;
  level: number;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  color: string;
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface NavLink {
  label: string;
  href: string;
}
