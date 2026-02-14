import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';

const contacts = [
  { icon: 'Mail', label: 'Email', value: 'hello@albe.agency', href: 'mailto:hello@albe.agency' },
  { icon: 'Phone', label: 'Телефон', value: '+7 (999) 999-99-99', href: 'tel:+79999999999' },
  { icon: 'Send', label: 'Telegram', value: '@albe_agency', href: 'https://t.me/+QgiLIa1gFRY4Y2Iy' },
  { icon: 'MapPin', label: 'Офис', value: 'Москва, Россия', href: null },
];

const Contact = () => {
  return (
    <AppLayout>
      <SEO
        title="Контакты"
        description="Свяжитесь с ALBE Digital Agency: email, телефон, Telegram. Обсудим ваш проект и предложим оптимальное решение."
        path="/contact"
      />
      <PageTransition>
        <div className="p-5 pb-32">
          <div
            className="rounded-3xl"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(94,234,212,0.2)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div className="flex flex-col items-center p-6 md:p-8 lg:p-10">
              <h2 className="font-montserrat font-light text-2xl md:text-3xl lg:text-4xl tracking-wide mb-8 text-center uppercase" style={{ color: '#5eead4' }}>
                СВЯЗАТЬСЯ С НАМИ
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl w-full">
                {contacts.map((contact) => {
                  const Wrapper = contact.href ? 'a' : 'div';
                  const extraProps = contact.href ? { href: contact.href, target: '_blank', rel: 'noopener noreferrer' } : {};
                  return (
                    <Wrapper
                      key={contact.label}
                      {...extraProps}
                      className="group rounded-2xl p-5 md:p-6 flex items-center gap-4 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(94,234,212,0.15)',
                      }}
                    >
                      <div className="p-3 rounded-xl" style={{ background: 'rgba(94,234,212,0.1)' }}>
                        <Icon name={contact.icon} size={24} style={{ color: '#5eead4' }} />
                      </div>
                      <div>
                        <div className="font-montserrat text-zinc-500 text-sm">{contact.label}</div>
                        <div className="font-montserrat font-medium text-base text-white">{contact.value}</div>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
              <p className="font-montserrat text-zinc-500 text-base text-center mt-8 max-w-md">
                Оставьте заявку — мы свяжемся с вами в течение 24 часов и обсудим ваш проект
              </p>
            </div>
          </div>
        </div>
      </PageTransition>
    </AppLayout>
  );
};

export default Contact;