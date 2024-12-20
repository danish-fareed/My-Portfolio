'use client';
import { useEffect, useRef, useState } from 'react';

// Configuration interface for spotlight effect
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

// Position type for x and y coordinates
interface Position {
  x: number;
  y: number;
}

const useSpotlightEffect = (config: SpotlightConfig = {}) => {
  const {
    spotlightSize = 200,
    spotlightIntensity = 0.8,
    overlayColor = '0, 0, 0',
    overlayIntensity = 0.85,
    fadeSpeed = 0.1,
    glowColor = '255, 255, 255',
    outerGlowColor = '0, 0, 0',
    outerGlowIntensity = '0',
    pulseSpeed = 2000,
  } = config;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const spotlightPos = useRef<Position>({ x: 0, y: 0 });
  const targetPos = useRef<Position>({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctxRef.current = ctx;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const lerp = (start: number, end: number, factor: number): number => {
      return start + (end - start) * factor;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const render = () => {
      if (!canvas || !ctx) return;

      // Smooth position transition
      spotlightPos.current.x = lerp(
        spotlightPos.current.x,
        targetPos.current.x,
        fadeSpeed
      );
      spotlightPos.current.y = lerp(
        spotlightPos.current.y,
        targetPos.current.y,
        fadeSpeed
      );

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create dark overlay
      ctx.fillStyle = `rgba(${overlayColor}, ${overlayIntensity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Calculate pulse effect
      const pulseScale = 
        1 + 0.1 * Math.sin((Date.now() / pulseSpeed) * Math.PI * 2);
      const currentSpotlightSize = spotlightSize * pulseScale;

      // Create spotlight gradient
      const gradient = ctx.createRadialGradient(
        spotlightPos.current.x,
        spotlightPos.current.y,
        0,
        spotlightPos.current.x,
        spotlightPos.current.y,
        currentSpotlightSize
      );

      // Add multiple color stops for smoother transition
      gradient.addColorStop(0, `rgba(${glowColor}, ${spotlightIntensity})`);
      gradient.addColorStop(0.5, `rgba(${glowColor}, ${spotlightIntensity * 0.5})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      // Apply spotlight effect
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(
        spotlightPos.current.x,
        spotlightPos.current.y,
        currentSpotlightSize,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Add glow effect
      ctx.globalCompositeOperation = 'source-over';
      const glowGradient = ctx.createRadialGradient(
        spotlightPos.current.x,
        spotlightPos.current.y,
        0,
        spotlightPos.current.x,
        spotlightPos.current.y,
        currentSpotlightSize * 1.2
      );
      glowGradient.addColorStop(0, `rgba(${glowColor}, 0.2)`);
      glowGradient.addColorStop(1, `rgba(${outerGlowColor}, ${outerGlowIntensity})`);
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(
        spotlightPos.current.x,
        spotlightPos.current.y,
        currentSpotlightSize * 1.2,
        0,
        Math.PI * 2
      );
      ctx.fill();

      animationFrame.current = requestAnimationFrame(render);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [spotlightSize, spotlightIntensity, fadeSpeed, glowColor, pulseSpeed]);

  return { 
    canvasRef, 
    isHovered 
  };
};

export default useSpotlightEffect;