const fdev = [
  'React.js',
  'Next.js',
  'Redux',
  'Javascript (ES6+)',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Chakra-UI',
  'Material-UI',
];
const bdev = [
  'C#',
  '.NET Core',
  'ASP.NET MVC',
  'Node.js',
  'Express.js',
  'REST APIs',
  'GraphQL',
  'Microsoft Graph API',
  'OpenAI API',
  'Authentication (OAuth, JWT)',
];
const api = [
  'REST APIs',
  'Microsoft Graph API',
  'OpenAI API Integration',
  'GraphQL',
];
const dbsCloud = [
  'SQL Server',
  'MongoDB',
  'Firebase',
  'Entity Framework Core',
  'Microsoft Azure',
  'Google Cloud',
];
const devopsTestingTools = [
  'Git',
  'CI/CD (Azure DevOps)',
  'Netlify CMS',
  'Postman',
  'New Relic',
  'TDD',
  'Jest',
  'NUnit',
  'React Testing Library',
  'Wallaby.js',
  'Agile (Scrum, Kanban)',
  'JIRA',
];

export interface Skill {
  name: string;
  tech: string[];
}

export const skills = [
  { name: 'Frontend Development', tech: fdev },
  { name: 'Backend Development', tech: bdev },
  { name: 'API & Data Integration', tech: api },
  { name: 'Databases & Cloud', tech: dbsCloud },
  { name: 'DevOps, Testing & Tools', tech: devopsTestingTools },
];
