import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import PageContainer from '@/components/PageContainer';
import { PageTitle } from '@/components/Typography';

const clients = [
  { name: 'Аэрофлот', logo: 'https://cdn.poehali.dev/files/4f9c0d7b-d804-401a-acd5-f20a8d8f7b9a.png', isDark: false },
  { name: 'Лукойл', logo: 'https://cdn.poehali.dev/files/a798ad1d-5279-44eb-b261-feb7c0117cdd.png', isDark: false },
  { name: 'Деловой Петербург', logo: 'https://cdn.poehali.dev/files/4fb78e8d-d718-480b-8e17-a4ae28dcfd81.png', isDark: false },
  { name: 'Yandex Go', logo: 'https://cdn.poehali.dev/files/3a1365c4-296f-48c8-a88c-d4d158190487.png', isDark: true },
  { name: 'Forbes', logo: 'https://cdn.poehali.dev/files/8ad70740-fe10-463f-8979-d97df8c0e7a5.png', isDark: true },
  { name: 'МегаФон', logo: 'https://cdn.poehali.dev/files/c419dbe6-7fc7-4864-a565-ebea5615b1b1.png', isDark: false },
  { name: 'Mercedes-Benz', logo: 'https://cdn.poehali.dev/files/9a7bf506-b4e8-4317-84d4-83d6e72b515d.png', isDark: true },
  { name: 'S7 Airlines', logo: 'https://cdn.poehali.dev/files/882ed5ef-9d14-42ca-a8e4-e6a1f4cf668f.png', isDark: false },
  { name: 'Сбер', logo: 'https://cdn.poehali.dev/files/a88249f5-e048-46b2-ac80-41d8d9be5e28.png', isDark: false },
  { name: 'Т-Банк', logo: 'https://cdn.poehali.dev/files/32051a84-d001-46a0-808c-9f68469f9dfa.png', isDark: false },
  { name: 'Зенит', logo: 'https://cdn.poehali.dev/files/7c2572ab-04d4-4802-9e60-20738749315f.png', isDark: false },
];

const Partners = () => {
  return (
    <AppLayout>
      <SEO
        title="Клиенты"
        description="Клиенты ALBE Digital Agency: Аэрофлот, Лукойл, Forbes, Mercedes-Benz, S7 Airlines, Сбер, МегаФон и другие крупные компании."
        path="/partners"
      />
      <PageTransition>
        <PageContainer>
          <PageTitle>НАШИ КЛИЕНТЫ</PageTitle>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {clients.map((client) => (
              <div
                key={client.name}
                className="rounded-2xl p-6 flex items-center justify-center transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: 'rgba(11,15,31,0.7)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  minHeight: '140px',
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-20 object-contain"
                  style={{
                    filter: client.isDark ? 'brightness(0) invert(1)' : 'none',
                  }}
                />
              </div>
            ))}
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default Partners;