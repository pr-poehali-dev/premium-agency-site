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
          background: 'linear-gradient(135deg, #eab308 0%, #f59e0b 100%)',
          color: '#000',
          border: 'none',
          fontWeight: '500',
          boxShadow: '0 4px 20px rgba(234,179,8,0.35), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)',
        };
      case 'secondary':
        return {
          background: 'rgba(11,15,31,0.8)',
          color: '#eab308',
          border: '1px solid rgba(234,179,8,0.4)',
          fontWeight: '400',
          boxShadow: '0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(234,179,8,0.15)',
        };
      case 'outline':
        return {
          background: 'rgba(11,15,31,0.6)',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.25)',
          fontWeight: '400',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
        };
      default:
        return {};
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'px-5 py-2.5 text-xs md:text-sm rounded-xl';
      case 'medium':
        return 'px-7 py-3.5 text-sm md:text-base rounded-2xl';
      case 'large':
        return 'px-10 py-4.5 text-base md:text-lg rounded-3xl';
      default:
        return 'px-7 py-3.5 text-sm md:text-base rounded-2xl';
    }
  };

  const getHoverStyle = () => {
    switch (variant) {
      case 'primary':
        return 'hover:shadow-[0_6px_28px_rgba(234,179,8,0.5),0_2px_12px_rgba(0,0,0,0.4)] hover:brightness-110';
      case 'secondary':
        return 'hover:bg-[rgba(234,179,8,0.12)] hover:border-[rgba(234,179,8,0.6)] hover:shadow-[0_6px_20px_rgba(234,179,8,0.2)]';
      case 'outline':
        return 'hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.4)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.15)]';
      default:
        return '';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`font-montserrat uppercase tracking-wider transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] hover:-translate-y-0.5 ${getHoverStyle()} ${getSizeClasses()} ${fullWidth ? 'w-full' : ''} ${className}`}
      style={getVariantStyles()}
    >
      {children}
    </button>
  );
};

export default Button;