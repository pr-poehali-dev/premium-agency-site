import { useLocation } from 'react-router-dom';
import { getPageColor } from '@/utils/pageColors';

export const usePageColor = () => {
  const location = useLocation();
  return getPageColor(location.pathname);
};
