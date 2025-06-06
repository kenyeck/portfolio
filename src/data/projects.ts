import { Project } from "@/components/types/types";

export const projects: Project[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
