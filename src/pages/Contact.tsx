import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import PageContainer from '@/components/PageContainer';
import { PageTitle, BodyText } from '@/components/Typography';
import { useEffect } from 'react';

const contacts = [
  { icon: 'Mail', label: 'Email', value: 'albe.web@yandex.ru', href: 'mailto:albe.web@yandex.ru' },
  { icon: 'Phone', label: 'Телефон', value: '+7 995 987 0353', href: 'tel:+79959870353' },
  { icon: 'Send', label: 'Telegram', value: '@albe_web', href: 'https://t.me/albe_web' },
  { icon: 'MapPin', label: 'Офис', value: 'Сочи, Россия', href: null },
];

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
          <div className="flex flex-col items-center">
            <PageTitle>СВЯЗАТЬСЯ С НАМИ</PageTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl w-full mb-8">
                {contacts.map((contact) => {
                  const Wrapper = contact.href ? 'a' : 'div';
                  const extraProps = contact.href ? { href: contact.href, target: '_blank', rel: 'noopener noreferrer' } : {};
                  return (
                    <Wrapper
                      key={contact.label}
                      {...extraProps}
                      className="group rounded-2xl p-3 sm:p-5 md:p-6 flex items-center gap-4 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                      style={{
                        background: 'rgba(11,15,31,0.7)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <div className="p-3 rounded-xl" style={{ background: 'rgba(234,179,8,0.1)' }}>
                        <Icon name={contact.icon} size={24} style={{ color: '#eab308' }} />
                      </div>
                      <div>
                        <div className="font-montserrat text-white text-xs md:text-sm">{contact.label}</div>
                        <div className="font-montserrat font-medium text-sm md:text-base text-white">{contact.value}</div>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              <div className="w-full max-w-2xl rounded-2xl overflow-hidden mb-8" style={{ background: 'rgba(11,15,31,0.7)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div id="vk_groups"></div>
              </div>

            <BodyText className="text-center max-w-md">
              Оставьте заявку — мы свяжемся с вами в течение 24 часов и обсудим ваш проект
            </BodyText>
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default Contact;