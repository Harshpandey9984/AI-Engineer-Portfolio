import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection(sectionIds[0] || '');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}

export function useIntersectionObserver(
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px'
) {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll, .rv');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible', 'in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold, rootMargin]);
}

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('theme');
        if (stored === 'dark') return true;
        if (stored === 'light') return false;
      } catch (e) {}
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [userHasSavedChoice, setUserHasSavedChoice] = useState(() => {
    try {
      return !!localStorage.getItem('theme');
    } catch (e) {
      return false;
    }
  });

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.add('tx');
    setTimeout(() => {
      root.classList.remove('tx');
    }, 450);

    setIsDark((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light');
      } catch (e) {}
      setUserHasSavedChoice(true);
      return next;
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    const themeName = isDark ? 'dark' : 'light';
    root.setAttribute('data-theme', themeName);
    root.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    if (userHasSavedChoice) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [userHasSavedChoice]);

  return [isDark, toggleTheme] as const;
}
