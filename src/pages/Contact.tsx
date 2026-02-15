import { useEffect } from 'react';
import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import PageContainer from '@/components/PageContainer';
import { PageTitle } from '@/components/Typography';
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

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://vk.com/js/api/openapi.js?169';
    script.async = true;
    script.onload = () => {
      if (window.VK) {
        window.VK.Widgets.Group('vk_groups', { mode: 4, wide: 1, width: 'auto', height: '400', color1: '000000', color2: 'eab308', color3: 'eab308' }, 'albeweb');
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
          <div className="mb-16">
            <PageTitle color="#2DD4BF">СВЯЗАТЬСЯ С НАМИ</PageTitle>
            <p className="text-zinc-400 font-montserrat text-xl max-w-3xl mt-6 leading-relaxed">
              Обсудим ваш проект в течение 24 часов. Работаем по всей России, Европе и США.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 max-w-3xl mb-8">
            {contacts.map((contact) => (
              <ContactCard key={contact.label} contact={contact} />
            ))}
          </div>

          <div className="w-full max-w-2xl rounded-2xl overflow-hidden" style={{ background: 'rgba(11,15,31,0.6)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div id="vk_groups"></div>
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default Contact;