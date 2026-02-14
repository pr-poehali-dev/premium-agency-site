import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const allPages = [
  { label: 'Главная', path: '/', size: 'large', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/625eaa13-d2b3-4f0f-a4bd-38868c09ebb8.png' },
  { label: 'Портфолио', path: '/portfolio', size: 'large', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/0222faa8-025b-48f7-9cfd-88f77e0d6d72.png' },
  { label: 'Дизайн', path: '/design', size: 'medium', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/e5ac3607-8d34-460b-9474-77bcde8f7b6c.png' },
  { label: 'Разработка', path: '/development', size: 'medium', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/672f5ac7-c5f1-4fe2-ab79-c74536f89e34.png' },
  { label: 'Маркетинг', path: '/marketing', size: 'medium', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/9f63a371-dd01-458e-8dfa-282056c5afb2.png' },
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
        <div className="fixed inset-0 p-3 sm:p-4 md:p-6 overflow-auto" style={{ background: 'rgba(0,0,0,0.95)', zIndex: 20000, paddingBottom: '120px' }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 max-w-[1600px] mx-auto">
            {allPages.map((page, index) => (
              <button
                key={page.path}
                onClick={() => navigate(page.path)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-95"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: hoveredIndex === index ? '2px solid rgba(234,179,8,0.6)' : '2px solid rgba(234,179,8,0.15)',
                  boxShadow: hoveredIndex === index ? '0 8px 32px rgba(234,179,8,0.25)' : '0 4px 16px rgba(0,0,0,0.3)',
                  aspectRatio: '16/10',
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
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 30%, transparent 60%)',
                    opacity: hoveredIndex === index ? 0.6 : 1,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <span className="font-montserrat text-xs md:text-sm font-light tracking-wide uppercase text-white block" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
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