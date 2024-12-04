import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/projects/socialhub.svg',
    title: 'SocialHub',
    description:
      'Next-generation social media app, built with its own backend.',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://socialhub-ms.vercel.app/',
      github: 'https://github.com/Skolaczk/SocialHub',
      githubApi: 'https://api.github.com/repos/Skolaczk/SocialHub',
    },
  },
  {
    image: '/projects/nextstarter.svg',
    title: 'Next-starter',
    description: 'Next.js starter template, packed with useful features.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Shadcn/ui',
      'Next-auth',
      'Prisma',
    ],
    links: {
      preview: 'https://next-starter-skolaczk.vercel.app',
      github: 'https://github.com/Skolaczk/next-starter',
      githubApi: 'https://api.github.com/repos/Skolaczk/next-starter',
    },
  },
  {
    image: '/projects/audiophile.svg',
    title: 'Audiophile',
    description: 'Online store specializing in headphones and speakers.',
    technologies: [
      'React',
      'Styled-components',
      'TypeScript',
      'Stripe',
      'Firebase',
    ],
    links: {
      preview: 'https://audiophile-ms.netlify.app/',
      github: 'https://github.com/Skolaczk/Audiophile',
      githubApi: 'https://api.github.com/repos/Skolaczk/Audiophile',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Ui/UX Designer | Graphic Designer at ITCurves',
    location: 'Lahore, Pakistan',
    description:
      'In this role, I established and refined the Product Design function, contributing to the overall success of the organization by & Pioneered the development of a structured, scalable design process that significantly improved workflow efficiency and communication across departments & Facilitating innovation through ongoing strategic sessions, improving the company’s product offerings and client satisfaction.',
    date: '2023',
  },
  {
    title: 'Ui/UX designer at HorizonGo',
    location: 'Remote',
    description:
      'Created and refined user flows, wireframes, and prototypes to deliver bespoke design solutions that aligned with each clients unique business goals and target audience & Fostered strong, trust-based partnerships by consistently delivering high-quality work',
    date: '2024',
  },
  {
    title: 'Freelancing',
    location: 'Remote',
    description:
      'As a freelancer, I specialized in graphic design using Figma and website development using Next.js with Sanity CMS. I undertook projects independently, from design conceptualization to final implementation, ensuring client satisfaction.',
    date: '2023 - present',
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
