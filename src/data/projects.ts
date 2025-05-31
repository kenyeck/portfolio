export const projects = [
  {
    id: 1,
    title: 'OpenAI Chat',
    description:
      'A full-stack OpenAI Chat client for employees. Includes an Admin screen manage individual Bots. Built front-end with Next.js, back-end with C#/.NET Core, and MS SQL for data storage.',
    technologies: ['React.js', 'Next.js', 'C#', '.NET Core', 'MS SQL'],
    screenshots: [
      { src: '/images/aichat1.png', desc: 'AI Chat Interface' },
      { src: '/images/aichat2.png', desc: 'Admin page #1 - List of configured bots' },
      { src: '/images/aichat3.png', desc: 'Admin page #2 - Edit Bot' },
    ],
  },
  {
    id: 3,
    title: `Logo Configuration`,
    description:
      'A unique modal dialog, allowing custom features to be configured in a visually appealing way. Allows images to be uploaded and custom colors to be set.',
    technologies: ['React.js', 'Next.js', 'Chakra-UI'],
    screenshots: [
      { src: '/images/logocfg1.png', desc: 'Edit Configuration' },
      { src: '/images/logocfg2.png', desc: 'Edit Configuration - Custom Colors', width: 200 },
    ],
  },
  {
    id: 3,
    title: `Custom 'Select' Component`,
    description:
      'A custom react component to replace react-select. Allows single/multi-select, custom rendering, filters, and infinity scrolling. Built front-end with React.js and Chakra-UI, back-end with C#/.NET Core (to support filtering/infinity scrolling).',
    technologies: ['React.js', 'Next.js', 'Chakra-UI', 'C#', '.NET Core'],
    screenshots: [
      { src: '/images/worf1.png', desc: 'Test Page - All Variants' },
      { src: '/images/worf2.png', desc: 'Multi-select + Infinity scrolling', width: 200 },
    ],
  },
  // Add more projects
];
