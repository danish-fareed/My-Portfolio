'use client';

import { useTheme } from "next-themes";
import SpotlightCursor from "./SpotLightCursorExample";
import { useEffect } from "react";

 
const UseSpotLight = () => {
    var mounted = false;
    const {theme} = useTheme();
    useEffect(() => {
        mounted = true;
    }) 
    const spotlightConfig = {
      radius: 700,
      color: mounted && theme === 'dark' ? '19, 41, 97': '114, 187, 255',
      brightness: mounted && theme === 'dark' ? 1 : 1,
      overlayColor: mounted && theme === 'dark' ? '0, 0, 0' : '242, 242, 247',
      overlay: mounted && theme === 'dark' ? 0.2 : 0.5,
      outerColor: mounted && theme === 'dark' ? '19, 41, 97' :'255, 255, 255',
      outerBrightness: 0,
      smoothing: 0.1,
    };

  return (
    
    <SpotlightCursor config={spotlightConfig} />
  );
};

export default UseSpotLight;
