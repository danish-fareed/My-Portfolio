'use client';
import { useTheme } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';
import { ThemeToggle } from './theme-toggle';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { Link } from 'lucide-react';



// import Link from 'next/link';

interface SectionCardProps {
  title?: string; // Title should be a string
  children?: ReactNode; // Children can be any React node (text, JSX, components)
  link?: string; // Link is optional and should be a string
}

const SectionCard = ({ children }: SectionCardProps) => (
  <div className="rounded-[32px] dark:bg-[#252438] bg-white px-9 py-10">
    {/* <div className="flex items-center justify-between">
      <h3 className="text-xl font-semibold">{title}</h3>
      {link && (
        <Link href={link} className="text-primary hover:underline">
          ↗
        </Link>
      )}
    </div> */}
    <div className="text-gray-300">{children}</div>
  </div>
);

export const Cards = () => {
  const { theme, setTheme } = useTheme();
  const [ mounted, setMounted ] = useState(false);
  const {ref} = useSectionInView('Home');


  useEffect(() => {
    setMounted(true);
  });

  return (
    <motion.section
      ref={ref}
      id="home"
      className="my-10 scroll-mt-96 sm:mt-4"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {/* About Card */}
      <SectionCard>
        <div className="flex flex-col gap-4">
          <div>
            <img src="./img/profile-pic.png" alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-1">
              <p className='dark:text-white text-[#104AA0]'>I'm</p>
              <h1 className="text-2xl font-bold dark:text-white text-[#104AA0]">DanishF.</h1>
              <p className='dark:text-white text-[#104AA0]'>, Product Designer</p>
            </div>
            <p className='dark:text-[#ffffff9a] text-[#0000008c] font-normal'>
              I’m interested in React, Node, Product Design, Jamstack, Startups,
              Cryptocurrencies, and Music.
            </p>
          </div>
        </div>
      </SectionCard>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <a className="flex items-center justify-center rounded-[32px] bg-white dark:bg-[#262440] px-9 py-10" href="https://www.linkedin.com/in/danish-fareed-graphics/" target="_blank">
          <div>
            {theme === "dark" && mounted ? <img src="./svg/linkedin.svg" alt="" /> : <img src="./svg/linkedin-light.svg" alt="" />}
            {/* <Link className="text-primary hover:underline fixed bottom-2 right-2 hidden">↗</Link> */}
          </div>
        </a>
        <a className="flex items-center justify-center rounded-[32px] bg-[#FFAACB] dark:bg-[#422742] px-9 py-10" href="https://dribbble.com/DanishFareed" target="_blank">
          <div>
            {theme === "dark" && mounted ? <img src="./svg/dribbble.svg" alt="" /> : <img src="./svg/dribbble-light.svg" alt="" />}
          </div>
        </a>
      </div>

      {/* Education Card */}
      <div>
        <div className='flex flex-col h-full gap-6'>
          <div className='rounded-[32px] bg-white dark:bg-[#252438] px-9 py-10 max-h-min'>
            <h4 className="text-[20px] font-semibold dark:text-white text-[#3a3a3a]">The University of Lahore</h4>
              <p className="mt-2 text-sm dark:text-[#ffffff6e] text-[#0000008c] font-normal">
                BS - Computer Science (Oct. 2023 – Continued)
              </p>
              <p className="mt-2 text-sm dark:text-[#ffffff9a] text-[#0000008c] font-normal">
              Programming Fundamentals (PF), Object Oriented Programming (OOP), Data Structures & Algorithms (DSA), Design Analysis of Algorithms (DAA), Database Systems (DBS), Compiler Construction (CC), Operating System (OS) and more
              </p>
          </div>
          <div className='rounded-[32px] bg-white dark:bg-[#252438] px-9 py-10 flex justify-center items-center flex-grow'>
            {theme === "dark" && mounted ? <img src="./svg/horizongo.svg" alt="" /> : <img src="./svg/horizongo-light.svg" alt="" />}
          </div>
        </div>
      </div>

      {/* Experience Cards */}
      <div className="grid gap-6 md:grid-rows-2 lg:grid-rows-2">
        <SectionCard title="ITCurves" link="/experience#itcurves">
        <h4 className="text-[20px] font-semibold dark:text-white text-[#3a3a3a]">ITCurves</h4>
          <p className='dark:text-[#ffffffbe] text-[#000000] font-normal'>Graphic Designer | UI/UX Designer (Mar. 2020 – Continued)</p>
          <p className="text-sm dark:text-[#ffffff6e] text-[#0000008c] font-normal">BS - Computer Science (Oct. 2023 – Continued)</p>
          <p className="mt-2 text-sm"></p>
        </SectionCard>

        <SectionCard title="HorizonGo" link="/experience#itcurves">
        <h4 className="text-[20px] font-semibold dark:text-white text-[#3a3a3a]">HorizonGo</h4>
          <p className='dark:text-[#ffffffbe] text-[#000000] font-normal'>Graphic Designer | UI/UX Designer (Mar. 2020 – Continued)</p>
          <p className="text-sm dark:text-[#ffffff6e] text-[#0000008c] font-normal">BS - Computer Science (Oct. 2023 – Continued)</p>
          <p className="mt-2 text-sm"></p>
        </SectionCard>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-2'>
          <div className='grid gap-6 md:grid-rows-2 lg:grid-rows-2'>
          <div className='flex items-center justify-center rounded-[32px] bg-white dark:bg-[#262440] px-6 py-10'>
              <p className='dark:text-white text-black'> 
                  <a href="tel:+923039371561" className="dark:text-[#ffffffbd] text-md text-[#00000098 hover:underline">
                    danishfareed@gmail.com
                  </a>
              </p>
            </div>
            {/* Contact Card */}
            <div className='flex items-center justify-center rounded-[32px] bg-white dark:bg-[#262440] px-6 py-10'>
              <p className='dark:text-white text-black'> 
                  <a href="tel:+923039371561" className="dark:text-[#ffffffbd] text-md text-[#00000098 hover:underline">
                    +92 (303) 93-715-61
                  </a>
              </p>
            </div>
          </div>
          <div className='relative rounded-[32px] bg-white dark:bg-[#262440]'>
            <ThemeToggle className="absolute !left-0 !right-0 !top-0 !bottom-0 w-auto h-auto rounded-[32px] !bg-white dark:!bg-[#262440]" />
          </div>
        </div>
      </div>

      
    </section>

    </motion.section>
  );
};
