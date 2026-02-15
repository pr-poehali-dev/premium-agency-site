import { useState } from 'react';
import { usePageColor } from './usePageColor';

export const useCardHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const pageColor = usePageColor();

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  const getHoverStyle = (baseStyle: React.CSSProperties = {}) => ({
    ...baseStyle,
    ...(isHovered && {
      boxShadow: `0 8px 32px ${pageColor.hover}, 0 0 0 1px ${pageColor.primary}`,
    }),
  });

  return { hoverProps, getHoverStyle, isHovered };
};
