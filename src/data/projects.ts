import { Project } from "@/components/types/types";

export const projects: Project[] = [
  {
    id: 1,
    title: `Margin Configuration`,
    shortDesc: 'Full-stack management of nation-wide branch margins',
    description:
      'A complex margin configuration tool, allowing management of branch margins across a nation-wide network. ' +
      'Implemented on a single page, consisting of multiple tabs with each tab displaying a grid of data queried from the database (margins, branches, pricing, fees, etc.). ' +
      'Included the ability to add/edit items with dynamic updates across related tabs. ' +
      'Also included restrictions (e.g., pricing couldn’t be deleted if it was in use by a branch). ' +
      'Each grid supported filtering, sorting and pagination, grabbing one page of data at a time filtered and sorted as needed. ' +
      'All requirements obtained by working directly with the department heads. ' +
      'UX/Visuals developed using Balsamiq Wireframe for rapid approval and efficient implementation. ',
    technologies: ['React.js', 'Next.js', 'Chakra-UI', 'C#', '.NET Core'],
    screenshots: [
      { src: '/images/mcfg1.png', desc: 'Margin Configuration' },
    ],
  },
  {
    id: 2,
    title: 'Custom AI Chat',
    shortDesc: 'Full-stack OpenAI Chat client with customizsble bots',
    description:
      'A full-stack OpenAI Chat client for employees. Includes an Admin screen manage individual Bots. Built front-end with Next.js, back-end with C#/.NET Core, and MS SQL for data storage.',
    technologies: ['React.js', 'Next.js', 'C#', '.NET Core', 'MS SQL'],
    screenshots: [
      { src: '/images/aichat1.png', desc: 'AI Chat Interface' },
      {
        src: '/images/aichat2.png',
        desc: 'Admin page #1 - List of configured bots',
      },
      { src: '/images/aichat3.png', desc: 'Admin page #2 - Edit Bot' },
    ],
  },
  {
    id: 3,
    title: `Custom Select`,
    shortDesc: 'Custom react-select component with advanced features',
    description:
      'A custom react component to replace react-select. Allows single/multi-select, custom rendering, filters, and infinity scrolling with full mouse/keyboard support. Built front-end with React.js and Chakra-UI, back-end with C#/.NET Core (to support filtering/infinity scrolling).',
    technologies: ['React.js', 'Next.js', 'Chakra-UI', 'C#', '.NET Core'],
    screenshots: [
      {
        src: '/images/worfdynlm.gif',
        desc: 'Multi-select + Infinity scrolling',
      },
      {
        src: '/images/worfsng.gif',
        desc: 'Single-select',
      },
      {
        src: '/images/worfsm.gif',
        desc: 'Compact',
      },
    ],
  },
  {
    id: 4,
    title: `Custom Modal / Color Picker`,
    shortDesc: 'Unique modal dialog with custom features',
    description:
      'A unique modal dialog, allowing custom features to be configured in a visually appealing way. Allows images to be uploaded and custom colors to be set.',
    technologies: ['React.js', 'Next.js', 'Chakra-UI'],
    screenshots: [
      { src: '/images/logocfg1.png', desc: 'Edit Configuration' },
      {
        src: '/images/logocfg2.png',
        desc: 'Edit Configuration - Color Picker',
        width: 200,
      },
    ],
  },
  // Add more projects
];
