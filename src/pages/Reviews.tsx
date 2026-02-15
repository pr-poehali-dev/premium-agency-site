import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import PageContainer from '@/components/PageContainer';
import { PageTitle, BodyText } from '@/components/Typography';
import { useCardHover } from '@/hooks/useCardHover';

interface Review {
  name: string;
  company: string;
  position: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: 'Команда СБЕР',
    company: 'ПАО Сбербанк',
    position: '',
    text: 'Выражаем искреннюю благодарность Студии Разработки Albe за проделанную работу при создании и внедрении CRM-системы, которая стала важным шагом на пути к повышению эффективности наших бизнес-процессов и улучшению взаимодействия с клиентами. Благодаря высокому профессионализму вашей команды, глубокому пониманию наших потребностей и индивидуальному подходу, проект был успешно реализован в кратчайшие сроки на самом высоком уровне. Рекомендуем вас как стабильного и компетентного партнера в сфере разработки высокотехнологичных решений!',
    rating: 5,
  },
  {
    name: 'Николай Юрьевич',
    company: 'ПАО Сбербанк',
    position: 'Руководитель направления перспективной разработки',
    text: 'ПАО СБЕРБАНК выражает признательность команде AlbeWeb за значительный вклад в разработку приложения «Сбербанк Онлайн». Особое внимание хотелось бы уделить вашему специалисту, который взял на себя нелёгкую задачу занять должность Team Lead в отделе разработки Frontend. Его опыт, лидерские качества и способность находить решения даже в самых сложных задачах позволили обеспечить успешное выполнение всех этапов проекта в поставленные сроки. С уверенностью можем рекомендовать компанию AlbeWeb как надёжного партнёра, который обеспечивает высококлассную экспертизу и выдающийся результат.',
    rating: 5,
  },
  {
    name: 'Валерий Акимов',
    company: 'T-Bank',
    position: 'Директор по цифровым технологиям',
    text: 'От лица T-Bank выражаем огромную благодарность студии за участие в разработке голосового ассистента T-Банк нашего проекта на базе искусственного интеллекта. Команда Albe профессионально подошла к задаче, на каждом этапе демонстрируя высокий уровень экспертизы и креативный подход.',
    rating: 5,
  },
  {
    name: 'Александра Кулик',
    company: 'Отель Аквамарин',
    position: 'г. Зеленогорск',
    text: 'Спасибо, Albe, за великолепный опыт сотрудничества! Каждый этап разработки проходил гладко, и мы получили именно то, что хотели. Успехов вам!',
    rating: 5,
  },
  {
    name: 'Евгений Алексеевич Корбут',
    company: 'ООО "Строймеханизм"',
    position: 'Начальник службы безопасности',
    text: 'Выражаем искреннюю признательность команде разработчиков за успешную реализацию проекта по разработке и внедрению технологии компьютерного зрения, которая была адаптирована под нужды службы безопасности нашей компании. Проект стал для нас настоящим прорывом в повышении уровня контроля, безопасности и эффективности работы. В процессе разработки и внедрения технологии мы увидели высокий профессионализм команды, индивидуальный подход к нашим задачам и стремление предоставить оптимальное решение.',
    rating: 5,
  },
  {
    name: 'Магомедов Артур Магомедович',
    company: 'Сеть ресторанов "Грузин"',
    position: '',
    text: 'Мы, команда сети ресторанов кавказской кухни "Грузин", выражаем искреннюю благодарность студии ALBE за профессиональное и качественное внедрение системы стандартизации работы кухни. Проект оказался для нас не просто технологическим решением, но и важным шагом в повышении качества и скорости работы нашей кухни, а также в обеспечении высокого уровня клиентского сервиса.',
    rating: 5,
  },
];

const ReviewCard = ({ review }: { review: Review }) => {
  const { hoverProps, getHoverStyle } = useCardHover();

  return (
    <div
      {...hoverProps}
      className="hover-card rounded-2xl p-5 sm:p-6 md:p-8 md:hover:scale-[1.01]"
      style={getHoverStyle({
        background: 'rgba(11,15,31,0.7)',
        border: '1px solid rgba(255,255,255,0.08)',
      })}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon
            key={i}
            name="Star"
            size={20}
            style={{ color: i < review.rating ? '#eab308' : '#3f3f46', fill: i < review.rating ? '#eab308' : 'none' }}
          />
        ))}
      </div>
      <BodyText className="mb-6 text-sm md:text-base lg:text-lg">
        {review.text}
      </BodyText>
      <div className="border-t border-zinc-800 pt-4">
        <div className="font-montserrat font-semibold text-base md:text-lg lg:text-xl uppercase" style={{ color: '#eab308' }}>{review.name}</div>
        {review.position && (
          <div className="font-montserrat text-white text-xs md:text-sm lg:text-base mb-1">{review.position}</div>
        )}
        <div className="font-montserrat text-xs md:text-sm lg:text-base font-medium text-white">{review.company}</div>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <AppLayout>
      <SEO
        title="Отзывы"
        description="Отзывы клиентов ALBE Digital Agency. Реальные кейсы и результаты: увеличение конверсии, автоматизация процессов, сокращение расходов."
        path="/reviews"
      />
      <PageTransition>
        <PageContainer>
          <div className="mb-16">
            <PageTitle>ОТЗЫВЫ КЛИЕНТОВ</PageTitle>
            <p className="text-zinc-400 font-montserrat text-xl max-w-3xl mt-6 leading-relaxed">
              Реальные отзывы от компаний, с которыми мы работали. Доверие клиентов — наша лучшая рекомендация.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </PageContainer>
      </PageTransition>
    </AppLayout>
  );
};

export default Reviews;