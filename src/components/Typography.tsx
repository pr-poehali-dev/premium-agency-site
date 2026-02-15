import { ReactNode } from 'react';

interface PageTitleProps {
  children: ReactNode;
  color?: string;
}

export const PageTitle = ({ children, color = '#eab308' }: PageTitleProps) => {
  return (
    <div className="relative mb-8 md:mb-12">
      <h1 className="font-montserrat font-light text-4xl md:text-7xl lg:text-8xl tracking-wide mb-4 uppercase" style={{ color }}>
        {children}
      </h1>
      <div className="flex items-center gap-4">
        <div className="h-1 w-24 rounded-full" style={{ background: color }} />
        <div className="h-1 w-12 rounded-full" style={{ background: `${color}60` }} />
        <div className="h-1 w-6 rounded-full" style={{ background: `${color}30` }} />
      </div>
    </div>
  );
};

interface SectionTitleProps {
  children: ReactNode;
  color?: string;
}

export const SectionTitle = ({ children, color = '#eab308' }: SectionTitleProps) => {
  return (
    <div className="relative mb-8">
      <h2 className="font-montserrat font-light text-xl md:text-3xl lg:text-5xl tracking-wide mb-3 uppercase" style={{ color }}>
        {children}
      </h2>
      <div className="flex items-center gap-3">
        <div className="h-0.5 w-16 rounded-full" style={{ background: color }} />
        <div className="h-0.5 w-8 rounded-full" style={{ background: `${color}60` }} />
        <div className="h-0.5 w-4 rounded-full" style={{ background: `${color}30` }} />
      </div>
    </div>
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