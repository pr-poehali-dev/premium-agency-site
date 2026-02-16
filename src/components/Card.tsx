import { ReactNode, CSSProperties } from 'react';
import { useCardHover } from '@/hooks/useCardHover';
import { COLORS } from '@/constants/colors';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: boolean;
  background?: string;
  border?: string;
  style?: CSSProperties;
}

const Card = ({ 
  children, 
  className = '', 
  hoverScale = true,
  background = COLORS.card.bg,
  border = `1px solid ${COLORS.card.border}`,
  style = {},
}: CardProps) => {
  const { hoverProps, getHoverStyle } = useCardHover();
  
  return (
    <div
      {...hoverProps}
      className={`hover-card rounded-2xl p-6 ${hoverScale ? 'md:hover:scale-[1.02]' : ''} ${className}`}
      style={getHoverStyle({
        background,
        border,
        ...style,
      })}
    >
      {children}
    </div>
  );
};

export default Card;
