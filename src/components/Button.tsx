import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  className?: string;
}

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  fullWidth = false,
  className = '' 
}: ButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: '#eab308',
          color: '#000',
          border: 'none',
          fontWeight: '600',
        };
      case 'secondary':
        return {
          background: 'rgba(234,179,8,0.1)',
          color: '#eab308',
          border: '1px solid rgba(234,179,8,0.3)',
          fontWeight: '500',
        };
      case 'outline':
        return {
          background: 'transparent',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.2)',
          fontWeight: '500',
        };
      default:
        return {};
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'px-4 py-2 text-xs md:text-sm rounded-lg';
      case 'medium':
        return 'px-6 py-3 text-sm md:text-base rounded-xl';
      case 'large':
        return 'px-8 py-4 text-base md:text-lg rounded-2xl';
      default:
        return 'px-6 py-3 text-sm md:text-base rounded-xl';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`font-montserrat uppercase tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 ${getSizeClasses()} ${fullWidth ? 'w-full' : ''} ${className}`}
      style={getVariantStyles()}
    >
      {children}
    </button>
  );
};

export default Button;
