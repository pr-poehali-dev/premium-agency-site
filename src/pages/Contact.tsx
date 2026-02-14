import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import PageContainer from '@/components/PageContainer';

const contacts = [
  { icon: 'Mail', label: 'Email', value: 'albe.web@yandex.ru', href: 'mailto:albe.web@yandex.ru' },
  { icon: 'Phone', label: 'Телефон', value: '+7 995 987 0353', href: 'tel:+79959870353' },
  { icon: 'Send', label: 'Telegram', value: '@albe_web', href: 'https://t.me/albe_web' },
  { icon: 'MapPin', label: 'Офис', value: 'Сочи, Россия', href: null },
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
        <PageContainer>
          <div className="flex flex-col items-center">
            <h2 className="font-montserrat font-light text-2xl md:text-3xl lg:text-4xl tracking-wide mb-8 text-center uppercase" style={{ color: '#eab308' }}>
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
                      className="group rounded-2xl p-3 sm:p-5 md:p-6 flex items-center gap-4 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(234,179,8,0.15)',
                      }}
                    >
                      <div className="p-3 rounded-xl" style={{ background: 'rgba(234,179,8,0.1)' }}>
                        <Icon name={contact.icon} size={24} style={{ color: '#eab308' }} />
                      </div>
                      <div>
                        <div className="font-montserrat text-white text-sm">{contact.label}</div>
                        <div className="font-montserrat font-medium text-base text-white">{contact.value}</div>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            <p className="font-montserrat text-white text-base text-center mt-8 max-w-md">
              Оставьте заявку — мы свяжемся с вами в течение 24 часов и обсудим ваш проект
            </p>
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default Contact;