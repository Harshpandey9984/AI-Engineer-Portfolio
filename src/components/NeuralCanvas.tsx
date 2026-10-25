import { useEffect, useRef } from 'react';

interface NeuralCanvasProps {
  isDark?: boolean;
}

function parseColorToRGB(colorStr: string): { r: number; g: number; b: number } {
  const str = colorStr.trim();
  if (str.startsWith('#')) {
    const hex = str.slice(1);
    if (hex.length === 3) {
      return {
        r: parseInt(hex[0] + hex[0], 16),
        g: parseInt(hex[1] + hex[1], 16),
        b: parseInt(hex[2] + hex[2], 16),
      };
    }
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
    };
  }
  const match = str.match(/\d+/g);
  if (match && match.length >= 3) {
    return { r: parseInt(match[0], 10), g: parseInt(match[1], 10), b: parseInt(match[2], 10) };
  }
  return { r: 43, g: 69, b: 230 };
}

export default function NeuralCanvas({ isDark }: NeuralCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let isVisible = true;
    let resizeTimer: any = null;
    const mousePos = { x: -9999, y: -9999 };
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Read colour from --accent CSS variable
    const computedAccent = getComputedStyle(document.documentElement).getPropertyValue('--accent') || '#2B45E6';
    const { r, g, b } = parseColorToRGB(computedAccent);

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let displayW = 0;
    let displayH = 0;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
    }

    let particles: Particle[] = [];

    const setupCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      displayW = parent.offsetWidth;
      displayH = parent.offsetHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(displayW * dpr);
      canvas.height = Math.floor(displayH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(70, Math.max(15, Math.floor((displayW * displayH) / 16000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * displayW,
        y: Math.random() * displayH,
        vx: (Math.random() - 0.5) * 0.35, // +/-0.175 px/frame
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    setupCanvas();

    const drawFrame = () => {
      ctx.clearRect(0, 0, displayW, displayH);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        if (!prefersReducedMotion) {
          p1.x += p1.vx;
          p1.y += p1.vy;
          if (p1.x < 0 || p1.x > displayW) p1.vx *= -1;
          if (p1.y < 0 || p1.y > displayH) p1.vy *= -1;
        }

        // Draw point circle (radius 1.9, alpha 0.65)
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, 1.9, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.65)`;
        ctx.fill();

        // Connect pairs closer than 125px (alpha .28*(1 - d/125))
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            const alpha = 0.28 * (1 - dist / 125);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Connect to pointer within 150px (alpha .5*(1 - d/150))
        const mdx = p1.x - mousePos.x;
        const mdy = p1.y - mousePos.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 150) {
          const mAlpha = 0.5 * (1 - mdist / 150);
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mousePos.x, mousePos.y);
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    };

    const loop = () => {
      if (isVisible && !prefersReducedMotion) {
        drawFrame();
        animId = requestAnimationFrame(loop);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.x = e.clientX - rect.left;
      mousePos.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mousePos.x = -9999;
      mousePos.y = -9999;
    };

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setupCanvas();
        if (prefersReducedMotion) {
          drawFrame();
        }
      }, 200);
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', onResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !prefersReducedMotion) {
            cancelAnimationFrame(animId);
            animId = requestAnimationFrame(loop);
          }
        });
      },
      { threshold: 0.05 }
    );

    if (canvas.parentElement) observer.observe(canvas.parentElement);

    if (prefersReducedMotion) {
      drawFrame();
    } else {
      loop();
    }

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimer);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-0"
    />
  );
}
