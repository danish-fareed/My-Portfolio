import { Plus_Jakarta_Sans } from 'next/font/google';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Specify the weights you need
  variable: '--font-sans', // CSS variable for the font
});

export const fonts = [fontSans.variable];
