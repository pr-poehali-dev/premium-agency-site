import { useEffect, useState, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [transitionStage, setTransitionStage] = useState<'entering' | 'visible'>('entering');
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    setTransitionStage('entering');

    const timer1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    });

    const timer2 = setTimeout(() => {
      setTransitionStage('visible');
    }, 400);

    return () => {
      cancelAnimationFrame(timer1);
      clearTimeout(timer2);
    };
  }, [location.pathname]);

  return (
    <div
      className="h-full"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'scale(1) translateZ(0)' 
          : 'scale(0.85) translateZ(0)',
        transition: `
          opacity 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
          transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        `,
        willChange: 'opacity, transform',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        perspective: 1000,
        WebkitPerspective: 1000,
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;