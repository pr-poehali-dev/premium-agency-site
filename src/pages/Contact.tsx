import { useEffect, useState } from 'react';
import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import PageContainer from '@/components/PageContainer';
import { PageHeader } from '@/components/Typography';
import { useCardHover } from '@/hooks/useCardHover';

interface Contact {
  icon: string;
  label: string;
  value: string;
  href: string | null;
}

const contacts: Contact[] = [
  { icon: 'Mail', label: 'Email', value: 'albe.web@yandex.ru', href: 'mailto:albe.web@yandex.ru' },
  { icon: 'Phone', label: 'Телефон', value: '+7 995 987 0353', href: 'tel:+79959870353' },
  { icon: 'Send', label: 'Telegram', value: '@albe_web', href: 'https://t.me/albe_web' },
  { icon: 'MapPin', label: 'Офис', value: 'Сочи, Россия', href: null },
];

const ContactCard = ({ contact }: { contact: Contact }) => {
  const { hoverProps, getHoverStyle } = useCardHover();
  const Wrapper = contact.href ? 'a' : 'div';
  const extraProps = contact.href ? { href: contact.href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Wrapper
      {...extraProps}
      {...hoverProps}
      className="hover-card group rounded-2xl p-8 flex flex-col items-center text-center gap-4 md:hover:scale-[1.03] cursor-pointer"
      style={getHoverStyle({
        background: 'rgba(11,15,31,0.6)',
        border: '1px solid rgba(255,255,255,0.08)',
      })}
    >
      <div className="p-4 rounded-2xl" style={{ background: 'rgba(45,212,191,0.15)' }}>
        <Icon name={contact.icon} size={32} style={{ color: '#2DD4BF' }} />
      </div>
      <div>
        <div className="font-montserrat text-zinc-400 text-sm md:text-base uppercase tracking-wide mb-2">{contact.label}</div>
        <div className="font-montserrat font-medium text-base md:text-lg lg:text-xl text-white">{contact.value}</div>
      </div>
    </Wrapper>
  );
};

const VKWidget = () => {
  const [subscribers, setSubscribers] = useState(5932);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://vk.com/js/api/openapi.js?169';
    script.async = true;
    script.onload = () => {
      if (window.VK) {
        window.VK.init({ apiId: 145018889 });
        window.VK.Api.call('groups.getById', { group_id: 145018889, fields: 'members_count' }, (data) => {
          if (data.response && data.response[0]) {
            setSubscribers(data.response[0].members_count || 5932);
          }
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="openapi.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden p-6 flex flex-col gap-6" style={{ background: 'rgba(11,15,31,0.6)', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="flex items-center gap-4">
        <img 
          src="https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/bucket/6bedfd3a-8642-44ca-8845-1083669301b6.png" 
          alt="ALBE VK"
          className="w-16 h-16 rounded-xl object-cover"
        />
        <div className="flex-1">
          <div className="font-montserrat font-semibold text-white text-lg">Albe Web-разработка IT решений</div>
          <div className="font-montserrat text-zinc-400 text-sm">vk.com/club145018889</div>
        </div>
      </div>

      <div className="text-center">
        <div 
          className="font-zen text-white mb-2"
          style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            textShadow: '0 0 60px rgba(45,212,191,0.3)',
          }}
        >
          {subscribers.toLocaleString('ru-RU')}
        </div>
        <div className="font-montserrat text-zinc-400 text-base uppercase tracking-wider">подписчиков</div>
      </div>

      <a
        href="https://vk.com/club145018889"
        target="_blank"
        rel="noopener noreferrer"
        className="px-7 py-3 rounded-2xl font-montserrat text-base font-normal uppercase tracking-wider transition-all duration-500 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98] w-full text-center"
        style={{
          background: 'rgba(11,15,31,0.85)',
          border: '1px solid rgba(45,212,191,0.5)',
          color: '#2DD4BF',
          boxShadow: '0 4px 20px rgba(45,212,191,0.25), inset 0 1px 0 rgba(45,212,191,0.15)',
        }}
      >
        Подписаться
      </a>
    </div>
  );
};

const Contact = () => {

  return (
    <AppLayout>
      <SEO
        title="Контакты — Связаться с нами"
        description="Контакты ALBE Digital Agency в Сочи. Email: albe.web@yandex.ru, телефон: +7 995 987 0353, Telegram: @albe_web. Обсудим ваш проект в течение 24 часов. Работаем по всей России, Европе и США."
        path="/contact"
        keywords="веб студия сочи, digital агентство сочи, контакты веб студии, заказать разработку сайта"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Контакты ALBE Digital Agency',
        }}
      />
      <PageTransition>
        <PageContainer>
          <PageHeader 
            title="СВЯЗАТЬСЯ С НАМИ" 
            description="Обсудим ваш проект в течение 24 часов. Работаем по всей России, Европе и США." 
            color="#2DD4BF"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,450px] gap-6 lg:gap-8 w-full max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contacts.map((contact) => (
                <ContactCard key={contact.label} contact={contact} />
              ))}
            </div>

            <VKWidget />
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default Contact;