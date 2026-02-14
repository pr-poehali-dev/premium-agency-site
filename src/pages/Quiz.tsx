import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const questions = [
  {
    q: 'Что вам нужно?',
    options: ['Сайт / Лендинг', 'Мобильное приложение', 'CRM / ERP система', 'AI-решение', 'Дизайн / Брендинг'],
  },
  {
    q: 'Какой у вас бюджет?',
    options: ['До 200 000 ₽', '200 000 — 500 000 ₽', '500 000 — 1 500 000 ₽', 'Более 1 500 000 ₽', 'Нужна консультация'],
  },
  {
    q: 'Когда нужен результат?',
    options: ['Срочно (до 2 недель)', '1-2 месяца', '3-6 месяцев', 'Не спешим', 'Нужна оценка сроков'],
  },
];

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length);
    }
  };

  const isFinished = step >= questions.length;

  return (
    <AppLayout>
      <SEO
        title="Квиз"
        description="Подберите оптимальное решение для вашего бизнеса. Ответьте на 3 вопроса и получите персональное предложение от ALBE Digital Agency."
        path="/quiz"
      />
      <PageTransition>
        <div className="p-2 sm:p-5 pb-32 min-h-[80vh] flex items-center justify-center">
          <div
            className="rounded-3xl w-full max-w-3xl"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(34,211,238,0.2)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-10">
              {!isFinished ? (
                <>
                  <div className="flex gap-2 mb-6">
                    {questions.map((_, i) => (
                      <div
                        key={i}
                        className="h-1.5 w-14 rounded-full transition-all duration-300"
                        style={{ background: i <= step ? '#22d3ee' : 'rgba(34,211,238,0.15)' }}
                      />
                    ))}
                  </div>
                  <h2 className="font-montserrat font-light text-2xl md:text-3xl lg:text-4xl tracking-wide mb-8 text-center text-white uppercase">
                    {questions[step].q}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                    {questions[step].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelect(option)}
                        className="rounded-2xl p-4 md:p-5 text-left transition-all duration-300 hover:scale-[1.03] active:scale-95"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(34,211,238,0.15)',
                        }}
                      >
                        <span className="font-montserrat text-base text-white">{option}</span>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center max-w-md py-8">
                  <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(34,211,238,0.15)' }}>
                    <Icon name="CheckCircle" size={32} style={{ color: '#22d3ee' }} />
                  </div>
                  <h2 className="font-montserrat font-semibold text-2xl text-white mb-3">
                    Спасибо за ответы!
                  </h2>
                  <p className="font-montserrat text-zinc-400 text-base mb-6">
                    Мы подготовим персональное предложение и свяжемся с вами в течение 24 часов
                  </p>
                  <button
                    onClick={() => { setStep(0); setAnswers([]); }}
                    className="font-montserrat text-base px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                    style={{ background: 'rgba(34,211,238,0.15)', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.3)' }}
                  >
                    Пройти заново
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </PageTransition>
    </AppLayout>
  );
};

export default Quiz;