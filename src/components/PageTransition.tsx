import { useEffect, useState, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(timer);
  }, [location.pathname]);

  return (
    <div
      className="flex-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `scale(${isVisible ? 1 : 0.95})`,
        transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;