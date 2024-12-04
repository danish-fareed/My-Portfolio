'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('About');

  return (
    <section
      ref={ref}
      id="intro"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-4 text-center sm:mt-20"
    >
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
        href="https://github.com/your-username/next-project"
        className="bg-muted rounded px-3 py-1 text-sm font-medium"
      >
        🎉
        <span className="ml-3">Check out my new project</span>
      </motion.a>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
      >
        UX/UI Designer & Developer Crafting User-Centric Experiences
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-lg"
      >
        Hi there, I&apos;m Danish Fareed. A creative UX/UI designer and
        developer with over 5 years of experience. I specialize in blending
        aesthetics with functionality to create intuitive digital products. I
        love turning complex ideas into seamless designs and working on exciting
        projects that push boundaries.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-row gap-2"
      >
        <Button asChild size="lg">
          <Link href="#contact">
            Get in touch <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="hidden sm:flex"
          asChild
        >
          <a href="/danishfareed.pdf" download>
            Download CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>
        <Button variant="secondary" size="icon" asChild>
          <a
            href="https://www.linkedin.com/in/danishfareed"
            aria-label="Linkedin"
            download
          >
            <Icons.linkedin className="size-6" />
          </a>
        </Button>
        <Button variant="secondary" size="icon" asChild>
          <a href="https://github.com/your-github" aria-label="Github">
            <Icons.github className="size-6" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
};
