'use client';

import { motion } from 'framer-motion';

export const SectionDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <div className='flex flex-col items-center justify-between my-5 sm:my-12 gap-4'>
        <div className='flex gap-3'>
          <div className="dark:bg-[#222636] bg-[#000]/5 h-1 w-6 rounded-full"></div>
          <div className="dark:bg-[#222636] bg-[#000]/5 h-1 w-6 rounded-full"></div>
          <div className="dark:bg-[#222636] bg-[#000]/5 h-1 w-6 rounded-full"></div>
          <div className="dark:bg-[#222636] bg-[#000]/5 h-1 w-6 rounded-full"></div>
        </div>
        <div className='flex gap-3'>
          <div className="dark:bg-[#222636] bg-[#000]/5 h-1 w-4 rounded-full"></div>
          <div className="dark:bg-[#222636] bg-[#000]/5 h-1 w-4 rounded-full"></div>
        </div>
      </div>

    </motion.div>
  );
};
