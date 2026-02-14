import AppLayout from '@/components/AppLayout';
import PageTransition from '@/components/PageTransition';

const Team = () => {
  return (
    <AppLayout>
      <PageTransition>
        <div className="absolute inset-0 p-5 pb-40 flex items-stretch justify-center overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <div
              className="flex-1 rounded-3xl overflow-y-auto"
              style={{
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(190,242,100,0.2)',
                backdropFilter: 'blur(40px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              <div className="h-full flex flex-col p-6 md:p-8 lg:p-10">
                <div className="mb-6 text-center flex-shrink-0">
                  <h1 className="font-montserrat font-bold text-2xl md:text-4xl lg:text-5xl text-white mb-2">
                    <span style={{ color: '#bef264' }}>Команда</span>
                  </h1>
                  <p className="font-montserrat text-zinc-400 text-xs md:text-sm lg:text-base">
                    Наши специалисты
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </AppLayout>
  );
};

export default Team;