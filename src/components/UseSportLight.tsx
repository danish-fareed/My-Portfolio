'use client';

import { useTheme } from "next-themes";
import SpotlightCursor from "./SpotLightCursorExample";

 
const UseSpotLight = () => {
    const {theme} = useTheme();
    const spotlightConfig = {
      radius: 700,
      color: theme === 'dark' ? '19, 41, 97': '114, 187, 255',
      brightness: theme === 'dark' ? 1 : 1,
      overlayColor: theme === 'dark' ? '0, 0, 0' : '242, 242, 247',
      overlay: theme === 'dark' ? 0.2 : 0.5,
      outerColor: theme === 'dark' ? '19, 41, 97' :'255, 255, 255',
      outerBrightness: 0,
      smoothing: 0.1,
    };

  return (
    
    <SpotlightCursor config={spotlightConfig} />
  );
};

export default UseSpotLight;
