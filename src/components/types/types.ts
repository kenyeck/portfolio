export interface Screenshot {
  src: string;
  desc?: string;
  width?: number;
  height?: number;
}

export interface    Project {
  id: number;
  title: string;
  description: string;
  shortDesc: string;
  technologies: string[];
  screenshots: Screenshot[];
}
