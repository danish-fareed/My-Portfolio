'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { experiencesData } from '@/lib/data';
import { Icons } from '@/components/icons';

export const Experience = () => {
  const { ref: sectionRef } = useSectionInView('Experience');
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full md:w-3/4 mb-10 scroll-m-28"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <SectionHeading
          heading="My Experience"
          content="Professional journey and key milestones"
        />
      </motion.div>
      <div className='flex flex-col gap-6'>
      {experiencesData.map((experience, index) => (
      <div className="flex flex-col gap-6">
        <div className='flex'>
          <div key={index}
                className='
                  rounded-[32px] border dark:border-[#4e4e4e65] border-[#07070718] dark:bg-[#222636]/50 bg-white/50 p-6 flex flex-row hover:scale-[1.02] transition-all duration-300
                '
              >
                <div className='flex flex-col'>
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mr-4 dark:bg-[#333a4f] bg-gray-100"
                    >
                      <Icons.briefcase className="w-6 h-6 dark:text-gray-300 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold dark:text-white text-gray-800">
                        {experience.title}
                      </h3>
                      <p className="text-sm dark:text-gray-400 text-gray-600">
                        {experience.location}
                      </p>
                    </div>
                  </div>
                  <div className='px-3'>
                  <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed">
                    {experience.description}
                  </p>
                  <div className="mt-4 text-xs dark:text-gray-500 text-gray-500 text-right">
                    {experience.date}
                  </div>
                 </div>
                </div>
                
                
              </div>
          
            
          
        </div>
      </div>
      ))}
      </div>
    </section>
  );
};