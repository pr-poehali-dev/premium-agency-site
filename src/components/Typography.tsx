import { ReactNode } from 'react';

interface PageTitleProps {
  children: ReactNode;
  color?: string;
}

export const PageTitle = ({ children, color = '#eab308' }: PageTitleProps) => {
  return (
    <h1 className="font-montserrat font-light text-4xl md:text-7xl lg:text-8xl tracking-wide mb-8 md:mb-16 mt-4 md:mt-8 px-4 md:px-0 text-center uppercase" style={{ color }}>
      {children}
    </h1>
  );
};

interface SectionTitleProps {
  children: ReactNode;
  color?: string;
}

export const SectionTitle = ({ children, color = '#eab308' }: SectionTitleProps) => {
  return (
    <h2 className="font-montserrat font-light text-xl md:text-3xl lg:text-4xl tracking-wide mb-6 text-center uppercase" style={{ color }}>
      {children}
    </h2>
  );
};

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className = '' }: CardTitleProps) => {
  return (
    <h3 className={`font-montserrat font-semibold text-base md:text-lg uppercase ${className}`} style={{ color: '#eab308' }}>
      {children}
    </h3>
  );
};

interface BodyTextProps {
  children: ReactNode;
  className?: string;
}

export const BodyText = ({ children, className = '' }: BodyTextProps) => {
  return (
    <p className={`font-montserrat text-white text-sm md:text-base leading-relaxed ${className}`}>
      {children}
    </p>
  );
};

interface SmallTextProps {
  children: ReactNode;
  className?: string;
}

export const SmallText = ({ children, className = '' }: SmallTextProps) => {
  return (
    <p className={`font-montserrat text-white text-xs md:text-sm ${className}`}>
      {children}
    </p>
  );
};