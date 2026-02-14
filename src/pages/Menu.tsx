import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const allPages = [
  { label: 'Главная', path: '/', size: 'large', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/2a33e13d-1495-48fc-b0f1-1fede32f008e.jpg' },
  { label: 'Портфолио', path: '/portfolio', size: 'large', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/d099ce2d-5de6-47a0-b4df-518323b0e268.jpg' },
  { label: 'Дизайн', path: '/design', size: 'medium', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/58ee8273-75e2-4544-9b48-1f718bb5ba47.jpg' },
  { label: 'Разработка', path: '/development', size: 'medium', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/a9ff044d-d524-46fb-ba3b-a029913cbce1.jpg' },
  { label: 'Маркетинг', path: '/marketing', size: 'medium', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/6f6ef7c7-c3b7-4f0e-a3d7-16fbe54367c6.jpg' },
  { label: 'AI', path: '/ai', size: 'medium', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/668cd7dc-7c66-4973-a142-320436a4f845.jpg' },
  { label: 'Стоимость', path: '/pricing', size: 'small', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/78a2fe29-ebfe-4c2d-9f2f-e59330b2a7d3.jpg' },
  { label: 'Команда', path: '/team', size: 'small', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/d8718998-44b3-4d2f-ac52-a3e3eddb192a.jpg' },
  { label: 'Отзывы', path: '/reviews', size: 'small', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/2f530e76-2905-4e5c-a73a-9f52b4a8e3d4.jpg' },
  { label: 'Клиенты', path: '/partners', size: 'small', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/cefa2078-7353-458d-82f6-9503c442c9f1.jpg' },
  { label: 'Контакты', path: '/contact', size: 'small', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/5a59e1a1-9200-4b0f-9f5b-e8c16c9d9d28.jpg' },
  { label: 'О нас', path: '/about', size: 'small', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/c66bc2f2-1cde-4965-ac22-9ca248350797.jpg' },
  { label: 'Квиз', path: '/quiz', size: 'small', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/1b9caa12-305e-4b72-a92b-2c6441162827.jpg' },
  { label: 'FAQ', path: '/faqs', size: 'small', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/1daeeab4-300c-41e3-81bf-1ae05fd851d7.jpg' },
];

const Menu = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-2 row-span-1';
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
        <div className="fixed inset-0 p-2 sm:p-3 md:p-4 pb-20 overflow-auto" style={{ background: 'rgba(0,0,0,0.95)', zIndex: 20000 }}>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3 max-w-[1800px] mx-auto" style={{ gridAutoRows: '1fr', minHeight: 'calc(100vh - 6rem)' }}>
            {allPages.map((page, index) => (
              <button
                key={page.path}
                onClick={() => navigate(page.path)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95 ${getSizeClass(page.size)}`}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: hoveredIndex === index ? '2px solid rgba(234,179,8,0.6)' : '2px solid rgba(234,179,8,0.15)',
                  boxShadow: hoveredIndex === index ? '0 8px 32px rgba(234,179,8,0.2)' : '0 4px 16px rgba(0,0,0,0.3)',
                  minHeight: '150px',
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
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)',
                    opacity: hoveredIndex === index ? 0.5 : 1,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                  <span className="font-montserrat text-[10px] md:text-xs font-light tracking-wide uppercase text-white block" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
                    {page.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </PageTransition>
    </AppLayout>
  );
};

export default Menu;