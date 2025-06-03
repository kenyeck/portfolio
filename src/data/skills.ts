const fdev = [
  'React.js',
  'Next.js',
  'TypeScript',
  'HTML',
  'CSS',
  'Redux',
  'Chakra-UI',
];
const bdev = [
  'C#',
  '.NET Core',
  'ASP.NET MVC',
  'Node.js',
  'Authentication (OAuth, JWT)',
];
const api = [
  'REST APIs',
  'Microsoft Graph API',
  'OpenAI API Integration',
  'GraphQL',
];
const dbs = ['MSSQL', 'MongoDB', 'Firestore', 'Entity Framework'];
const cloud = ['Microsoft Azure', 'Google Cloud'];
const devops = ['Git', 'Netlify CMS', 'CI/CD (Azure DevOps)', 'Postman'];
const testing = ['TDD', 'Jest', 'NUnit', 'React Testing Library', 'Wallaby'];
const pm = ['Agile Methodologies (Scrum, Kanban)', 'JIRA'];

export interface Skill {
  name: string;
  tech: string[];
}

export const skills = [
  { name: 'Frontend Development', tech: fdev },
  { name: 'Backend Development', tech: bdev },
  { name: 'API & Data Integration', tech: api },
  { name: 'Databases', tech: dbs },
  { name: 'Cloud & Serverless', tech: cloud },
  { name: 'DevOps & Tools', tech: devops },
  { name: 'Testing', tech: testing },
  { name: 'Project Management & Methodologies', tech: pm },
];
