import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const allPages = [
  { label: 'Главная', path: '/', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/625eaa13-d2b3-4f0f-a4bd-38868c09ebb8.png' },
  { label: 'Портфолио', path: '/portfolio', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/0222faa8-025b-48f7-9cfd-88f77e0d6d72.png' },
  { label: 'Дизайн', path: '/design', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/e5ac3607-8d34-460b-9474-77bcde8f7b6c.png' },
  { label: 'Разработка', path: '/development', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/672f5ac7-c5f1-4fe2-ab79-c74536f89e34.png' },
  { label: 'Маркетинг', path: '/marketing', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/9f63a371-dd01-458e-8dfa-282056c5afb2.png' },
  { label: 'AI', path: '/ai', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/d5b585c7-8f39-4d47-9b5b-3db56c69e40a.png' },
  { label: 'Стоимость', path: '/pricing', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/35f677e4-028b-410c-a596-91fea1a0bda9.png' },
  { label: 'Команда', path: '/team', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/9ad85cd2-400b-41b7-8bc5-e3e4f5121006.png' },
  { label: 'Отзывы', path: '/reviews', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/00745d1c-4357-400a-b183-36ef2dd4759c.png' },
  { label: 'Клиенты', path: '/partners', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/1208343a-a4b1-4f59-9013-8b90acb29eb8.png' },
  { label: 'Контакты', path: '/contact', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/bd4b8b19-2d6c-42a7-909b-18cc002a3cee.png' },
  { label: 'О нас', path: '/about', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/08a6bc50-3597-4d68-b1b7-16c6287be512.png' },
  { label: 'Квиз', path: '/quiz', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/fefc558d-5cd6-4d92-909c-d6b5e94ae1df.png' },
  { label: 'FAQ', path: '/faqs', preview: 'https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/c938ee86-49ce-4704-ba53-167090873dca.png' },
];

const Menu = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <AppLayout>
      <SEO
        title="Меню"
        description="Навигация по сайту ALBE Digital Agency. Все разделы: разработка, дизайн, маркетинг, AI, портфолио, стоимость, команда."
        path="/menu"
      />
      <PageTransition>
        <div className="fixed inset-0 flex items-center justify-center p-4 md:p-6" style={{ background: 'rgba(0,0,0,0.95)', zIndex: 20000 }}>
          <div 
            className="grid gap-2 md:gap-3 w-full" 
            style={{ 
              gridTemplateColumns: 'repeat(7, 1fr)',
              gridTemplateRows: 'repeat(4, 1fr)',
              maxWidth: '95vw',
              maxHeight: 'calc(100vh - 140px)',
              aspectRatio: '16/9'
            }}
          >
            {allPages.map((page, index) => (
              <button
                key={page.path}
                onClick={() => navigate(page.path)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: hoveredIndex === index ? '2px solid rgba(234,179,8,0.6)' : '2px solid rgba(234,179,8,0.15)',
                  boxShadow: hoveredIndex === index ? '0 8px 32px rgba(234,179,8,0.25)' : '0 4px 16px rgba(0,0,0,0.3)',
                  gridColumn: index < 2 ? 'span 2' : 'span 1',
                  gridRow: index < 2 ? 'span 2' : index < 6 ? 'span 2' : 'span 1',
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