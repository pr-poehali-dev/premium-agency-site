import { COLORS } from './colors';

export interface NavItem {
  icon: string;
  label: string;
  color: string;
  bgColor: string;
  path: string;
}

const createGradient = (color: string, darkerColor: string) => 
  `linear-gradient(135deg, ${color} 0%, ${darkerColor} 100%)`;

export const NAV_ITEMS: NavItem[] = [
  { 
    icon: 'House', 
    label: 'Главная', 
    color: COLORS.menu.home, 
    bgColor: createGradient('#FF6B6B', '#EE5A52'), 
    path: '/' 
  },
  { 
    icon: 'Folder', 
    label: 'Портфолио', 
    color: COLORS.menu.portfolio, 
    bgColor: createGradient('#4ECDC4', '#44B3AA'), 
    path: '/portfolio' 
  },
  { 
    icon: 'Palette', 
    label: 'Дизайн', 
    color: COLORS.menu.design, 
    bgColor: createGradient('#95E1D3', '#7CC9B9'), 
    path: '/design' 
  },
  { 
    icon: 'Code', 
    label: 'Разработка', 
    color: COLORS.menu.development, 
    bgColor: createGradient('#eab308', '#ca8a04'), 
    path: '/development' 
  },
  { 
    icon: 'TrendingUp', 
    label: 'Маркетинг', 
    color: COLORS.menu.marketing, 
    bgColor: createGradient('#FF8C42', '#E67E3C'), 
    path: '/marketing' 
  },
  { 
    icon: 'Brain', 
    label: 'AI', 
    color: COLORS.menu.ai, 
    bgColor: createGradient('#A78BFA', '#9676E8'), 
    path: '/ai' 
  },
  { 
    icon: 'DollarSign', 
    label: 'Стоимость', 
    color: COLORS.menu.pricing, 
    bgColor: createGradient('#34D399', '#2AB87A'), 
    path: '/pricing' 
  },
  { 
    icon: 'UserCheck', 
    label: 'Команда', 
    color: COLORS.menu.team, 
    bgColor: createGradient('#60A5FA', '#4F8FE8'), 
    path: '/team' 
  },
  { 
    icon: 'MessageSquareText', 
    label: 'Отзывы', 
    color: COLORS.menu.reviews, 
    bgColor: createGradient('#F472B6', '#E25FA0'), 
    path: '/reviews' 
  },
  { 
    icon: 'Building2', 
    label: 'Клиенты', 
    color: COLORS.menu.partners, 
    bgColor: createGradient('#818CF8', '#6B76E6'), 
    path: '/partners' 
  },
  { 
    icon: 'Phone', 
    label: 'Контакты', 
    color: COLORS.menu.contact, 
    bgColor: createGradient('#2DD4BF', '#26BAAA'), 
    path: '/contact' 
  },
  { 
    icon: 'Users', 
    label: 'О нас', 
    color: COLORS.menu.about, 
    bgColor: createGradient('#38BDF8', '#2EA7E6'), 
    path: '/about' 
  },
  { 
    icon: 'ClipboardList', 
    label: 'Квиз', 
    color: COLORS.menu.quiz, 
    bgColor: createGradient('#FBBF24', '#E9AE1E'), 
    path: '/quiz' 
  },
  { 
    icon: 'HelpCircle', 
    label: 'FAQ', 
    color: COLORS.menu.faqs, 
    bgColor: createGradient('#C084FC', '#A96FE8'), 
    path: '/faqs' 
  },
];

export const MENU_ICON: NavItem = { 
  icon: 'LayoutGrid', 
  label: 'Меню', 
  color: COLORS.menu.menuGrid, 
  bgColor: createGradient('#00F0FF', '#00D4E6'), 
  path: '/menu' 
};
