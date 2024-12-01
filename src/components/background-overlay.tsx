'use client';

import { useTheme } from 'next-themes';
import React from 'react';

const BackgroundOverlay = () => {
    const { theme } = useTheme();

  return (
    <div
      style={{
        flex: 'none',
        height: '100%',
        left: 'calc(50% - 100% / 2)',
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 4,
      }}
    >
      <div
        className='opacity-[0.09] dark:opacity-5'
        style={{
          width: '100%',
          height: '100%',
          backgroundSize: '64px',
          backgroundRepeat: 'repeat',
          backgroundImage: 'url(./img/Static.png)',
        //   opacity: theme === 'dark' ? '0.2': '0.08',
          borderRadius: 0,
        }}
      />
    </div>
  );
};

export default BackgroundOverlay;
