import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const allPages = [
  { icon: 'House', label: 'Главная', path: '/', size: 'large', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/625eaa13-d2b3-4f0f-a4bd-38868c09ebb8.png' },
  { icon: 'Folder', label: 'Портфолио', path: '/portfolio', size: 'large', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/0222faa8-025b-48f7-9cfd-88f77e0d6d72.png' },
  { icon: 'Palette', label: 'Дизайн', path: '/design', size: 'medium', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/e5ac3607-8d34-460b-9474-77bcde8f7b6c.png' },
  { icon: 'Code', label: 'Разработка', path: '/development', size: 'medium', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/672f5ac7-c5f1-4fe2-ab79-c74536f89e34.png' },
  { icon: 'TrendingUp', label: 'Маркетинг', path: '/marketing', size: 'medium', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/9f63a371-dd01-458e-8dfa-282056c5afb2.png' },
  { icon: 'Brain', label: 'AI', path: '/ai', size: 'medium', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/d5b585c7-8f39-4d47-9b5b-3db56c69e40a.png' },
  { icon: 'DollarSign', label: 'Стоимость', path: '/pricing', size: 'small', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/35f677e4-028b-410c-a596-91fea1a0bda9.png' },
  { icon: 'UserCheck', label: 'Команда', path: '/team', size: 'small', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/9ad85cd2-400b-41b7-8bc5-e3e4f5121006.png' },
  { icon: 'MessageSquareText', label: 'Отзывы', path: '/reviews', size: 'small', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/00745d1c-4357-400a-b183-36ef2dd4759c.png' },
  { icon: 'Building2', label: 'Клиенты', path: '/partners', size: 'small', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/1208343a-a4b1-4f59-9013-8b90acb29eb8.png' },
  { icon: 'Phone', label: 'Контакты', path: '/contact', size: 'small', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/bd4b8b19-2d6c-42a7-909b-18cc002a3cee.png' },
  { icon: 'Users', label: 'О нас', path: '/about', size: 'small', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/08a6bc50-3597-4d68-b1b7-16c6287be512.png' },
  { icon: 'ClipboardList', label: 'Квиз', path: '/quiz', size: 'small', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/fefc558d-5cd6-4d92-909c-d6b5e94ae1df.png' },
  { icon: 'HelpCircle', label: 'FAQ', path: '/faqs', size: 'small', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/c938ee86-49ce-4704-ba53-167090873dca.png' },
];

const Menu = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-1 sm:col-span-2 row-span-2';
      case 'medium':
        return 'col-span-1 sm:col-span-2 md:col-span-1 row-span-2';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <AppLayout>
      <SEO
        title="Меню"
        description="Навигация по сайту ALBE Digital Agency. Все разделы: разработка, дизайн, маркетинг, AI, портфолио, стоимость, команда."
        path="/menu"
      />
      <PageTransition>
        {/* Desktop - карточки со скриншотами */}
        <div className="fixed inset-0 p-8 overflow-hidden items-center justify-center hidden lg:flex" style={{ background: 'rgba(11,15,31,0.85)', zIndex: 20000 }}>
          <div className="grid grid-cols-5 gap-5 w-full h-full max-w-[1800px]" style={{ gridAutoRows: 'minmax(0, 1fr)', paddingBottom: '100px' }}>
            {allPages.map((page, index) => (
              <button
                key={page.path}
                onClick={() => navigate(page.path)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-95 ${getSizeClass(page.size)}`}
                style={{
                  background: 'rgba(11,15,31,0.6)',
                  border: hoveredIndex === index ? '2px solid rgba(234,179,8,0.6)' : '2px solid rgba(255,255,255,0.08)',
                  boxShadow: hoveredIndex === index ? '0 8px 32px rgba(234,179,8,0.25)' : '0 4px 16px rgba(0,0,0,0.3)',
                }}
              >
                <img
                  src={page.preview}
                  alt={page.label}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div 
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to top, rgba(11,15,31,0.9) 0%, rgba(11,15,31,0.5) 30%, transparent 60%)',
                    opacity: hoveredIndex === index ? 0.6 : 1,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="font-montserrat text-sm font-light tracking-wide uppercase text-white block" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
                    {page.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet - сетка с иконками */}
        <div className="fixed inset-0 flex items-center justify-center p-6 lg:hidden" style={{ background: 'rgba(11,15,31,0.85)', zIndex: 20000 }}>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 max-w-2xl w-full">
            {allPages.map((page, index) => (
              <button
                key={page.path}
                onClick={() => navigate(page.path)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300"
                style={{
                  background: hoveredIndex === index ? 'rgba(234,179,8,0.08)' : 'rgba(11,15,31,0.6)',
                  border: hoveredIndex === index ? '1px solid rgba(234,179,8,0.3)' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Icon
                  name={page.icon}
                  size={32}
                  strokeWidth={1.2}
                  style={{ 
                    color: '#eab308',
                    filter: 'drop-shadow(0 0 8px rgba(234,179,8,0.3))'
                  }}
                />
                <span 
                  className="text-xs font-montserrat font-light text-center whitespace-nowrap tracking-wide uppercase"
                  style={{ color: '#eab308' }}
                >
                  {page.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </PageTransition>
    </AppLayout>
  );
};

export default Menu;