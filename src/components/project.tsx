'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { projectsData } from '@/lib/data';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
  starsCount: number[];
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export const Project = ({ project, index, starsCount }: TProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  const { image, title, description, technologies, links } = project;
  useEffect(() => {
    setMounted(true);
  });
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className=""
    >
      
    </motion.div>
  );
};
