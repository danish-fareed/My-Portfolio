'use client';
import { HTMLAttributes } from 'react';
import useSpotlightEffect from '@/hooks/use-Spotlight';

// Define an interface for the spotlight configuration
interface SpotlightConfig {
  spotlightSize?: number;
  spotlightIntensity?: number;
  overlayColor?: string;
  overlayIntensity?: number;
  fadeSpeed?: number;
  glowColor?: string;
  outerGlowColor?: string;
  outerGlowIntensity?: number;
  pulseSpeed?: number;
}

interface SpotlightConfigProps {
    radius?: number;
    brightness?: number;
    overlayColor?: string;
    overlay?: number;
    smoothing?: number;
    color?: string;
    outerColor?: string;
    outerBrightness?: number;
    speed?: number;
  }

// Combine props with potential HTML canvas attributes
interface SpotlightCursorProps extends HTMLAttributes<HTMLCanvasElement> {
  config?: SpotlightConfigProps;
}

const SpotlightCursor = ({ 
  config = {}, 
  className, 
  ...rest 
}: SpotlightCursorProps) => {
  // Map the configuration to match the hook's expected parameters
  const spotlightConfig: SpotlightConfig = {
    spotlightSize: config.radius ?? 200,
    spotlightIntensity: config.brightness ?? 0.15,
    overlayColor: config.overlayColor ?? '0, 0, 0',
    overlayIntensity: config.overlay ?? 0.85,
    fadeSpeed: config.smoothing ?? 0.1,
    glowColor: config.color ?? '255, 255, 255',
    outerGlowColor: config.outerColor ?? '0, 0, 0',
    outerGlowIntensity: config.outerBrightness ?? 0,
    pulseSpeed: config.speed ?? 2000
  };

  const { canvasRef } = useSpotlightEffect(spotlightConfig);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 pointer-events-none z-[-9999] w-full h-full ${className}`}
      {...rest}
    />
  );
};

export default SpotlightCursor;