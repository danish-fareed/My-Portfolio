'use client';

import { motion } from 'framer-motion';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

type TProps = {
  starsCount: number[];
};

export const Projects = ({ starsCount }: TProps) => {
  const { ref } = useSectionInView('Projects');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  });

  return (
    <section ref={ref} id="projects" className="w-full my-10 scroll-m-28 mb-48 ">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="My Projects"
          content="Projects I worked on. Each of them made with Love."
        />
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 md:grid-rows-9 grid-rows-auto gap-6  h-[900px]">
        <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 md:row-span-3 row-span-2 rounded-[32px] border dark:border-[#4e4e4e65] border-[#07070718] dark:bg-[#222636]/50 bg-white/50 px-6 py-10">
          <a className="h-full w-full flex items-center justify-center" href="https://ozaarxr.com/" target="_blank">
            <div>
              {theme === "dark" && mounted ? (
                <img src="https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Portfolio%2Fimage%206.png?alt=media&token=410700a9-01a4-40b2-86c2-081394b50ef1" alt="" />
              ) : (
                <img src="https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Portfolio%2FOzaar.png?alt=media&token=1161e89e-1cc3-4cc0-abd6-b1e7be600e25" alt="" />
              )}
            </div>
          </a>
        </div>

        <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 md:row-span-3 row-span-2 flex items-center justify-center rounded-[32px] border dark:border-[#4e4e4e65] border-[#07070718] dark:bg-[#222636]/50 bg-white/50 px-6 py-10">
          <a className="h-full w-full flex items-center justify-center dark:opacity-60 dark:hover:opacity-100 transition-all duration-500" href="https://jangoo.org/" target="_blank">
            <div>
              {theme === "dark" && mounted ? (
                <img src="./img/Logo-dark.svg" alt="" className="h-24" />
              ) : (
                <img src="./img/Logo-light.svg" alt="" className="h-24" />
              )}
            </div>
          </a>
        </div>

        <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4 md:row-span-6 row-span-3 relative overflow-hidden bg-[#FFE0E9]/50 hover:bg-[#FFE0E9] transform transition-all duration-500 flex justify-center items-center rounded-[32px] border dark:border-[#4e4e4e65] border-[#07070718] dark:bg-[#222636]/50">
          <a className="h-full w-full flex items-center justify-center dark:opacity-30 dark:hover:opacity-100 transition-all duration-500" href="https://itcurves.com/" target="_blank">
            <div>
              <img src="https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Portfolio%2FItcurves-ss.png?alt=media&token=8cfebc56-48c0-4fd2-b7f5-555fe3833b20" alt="ITCurves Screenshot" className="ml-12 md:mt-56 mt-64 hover:ml-10 hover:mt-48 object-cover rounded-xl transform -rotate-6 shadow-lg transition-all duration-500" />
            </div>
          </a>
        </div>

        <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4 md:row-span-6 row-span-3 relative dark:opacity-30 dark:hover:opacity-100 transition-all duration-500 overflow-hidden bg-[#CDE8FF]/50 hover:bg-[#CDE8FF] transform transition-all duration-500 flex justify-center items-center rounded-[32px] border dark:border-[#4e4e4e65] border-[#07070718] dark:bg-[#222636]/50">
          <div className="mr-12">
            <img src="https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Portfolio%2FFeatures%202.png?alt=media&token=555000d9-a689-47ae-b2d2-231c1d564016" alt="Feature Screenshot" className="md:mt-56 hover:mt-48 mt-52 object-cover rounded-xl transform rotate-6 shadow-lg transition-all duration-500" />
          </div>
        </div>

        <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4 md:row-span-3 sm:row-span-1 rounded-[32px] border dark:border-[#4e4e4e65] border-[#07070718] dark:bg-[#222636]/50 bg-white/50 px-6 py-10">
          <a className="h-full w-full flex items-center justify-center dark:opacity-60 dark:hover:opacity-100 transition-all duration-500" href="https://mhparks.com/" target="_blank">
            <div>
              {theme === "dark" && mounted ? (
                <img src="https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Portfolio%2FMH.png?alt=media&token=6f46c184-5e95-41dc-b967-8e30849e37f1" alt="" className="h-16" />
              ) : (
                <img src="https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Portfolio%2FGroup%201000011001.png?alt=media&token=e2e55e26-c3e5-47b8-9eb0-c46e5659a4b1" alt="" className="h-16" />
              )}
            </div>
          </a>
        </div>
      </div>

    </section>
  );
};
