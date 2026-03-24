import { Project } from "@/components/types/types";

export const projects: Project[] = [
  {
    id: 1,
    title: `Margin Configuration`,
    shortDesc: 'Full-stack management of branch margins',
    description:
      'A comprehensive margin configuration tool enabling management of branch margins across a nationwide network. ' +
      'Implemented on a single page with multiple tabs, each displaying a queryable grid of data (margins, branches, pricing, fees, etc.). ' +
      'Features include add/edit functionality with dynamic cross-tab updates, business rule enforcement (e.g., restrictions on deleting in-use pricing), and per-grid filtering, sorting, and pagination. ' +
      'UX designed collaboratively with department heads using Balsamiq wireframes for rapid approval and efficient implementation.',
    technologies: ['React.js', 'Next.js', 'Chakra UI', 'C#', '.NET Core'],
    screenshots: [
      { src: '/images/mcfg1.png', desc: 'Margin Configuration' },
    ],
  },
  {
    id: 2,
    title: 'Custom AI Chat',
    shortDesc: 'Full-stack OpenAI Chat client with customizable bots',
    description:
      'A full-stack OpenAI Chat client for employees. ' +
      'Includes an Admin screen to create and customize AI bots with unique personalities and capabilities.',
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
      'A custom React component to replace react-select, optimized for handling large datasets. Supports single/multi-select, custom rendering, dynamic filtering, and infinite scrolling with full mouse/keyboard support.',
    technologies: ['React.js', 'Next.js', 'Chakra UI', 'C#', '.NET Core'],
    screenshots: [
      {
        src: '/images/worfdynlm.gif',
        desc: 'Multi-select + Infinite scrolling',
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
      'A specialized modal for logo and branding configuration, featuring an integrated image upload tool and color picker. Enables users to customize brand assets and define color palettes in a polished, intuitive interface.',
    technologies: ['React.js', 'Next.js', 'Chakra UI'],
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
