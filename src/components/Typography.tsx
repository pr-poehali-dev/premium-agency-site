import { ReactNode } from 'react';

interface PageTitleProps {
  children: ReactNode;
}

export const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <h1 className="font-montserrat font-light text-6xl md:text-7xl lg:text-8xl tracking-wide mb-16 mt-8 text-center uppercase" style={{ color: '#eab308' }}>
      {children}
    </h1>
  );
};

interface SectionTitleProps {
  children: ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="font-montserrat font-light text-xl md:text-2xl lg:text-3xl tracking-wide mb-6 text-center uppercase" style={{ color: '#eab308' }}>
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