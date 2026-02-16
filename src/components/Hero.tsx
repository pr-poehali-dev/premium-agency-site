const Hero = () => {
  return (
    <div className="h-screen md:min-h-[calc(100vh-120px)] flex flex-col items-center justify-center relative gap-8 md:gap-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse"
          style={{
            top: '10%',
            left: '10%',
            background: 'radial-gradient(circle, rgba(255,107,107,0.3) 0%, transparent 70%)',
            animation: 'float1 20s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{
            top: '20%',
            right: '15%',
            background: 'radial-gradient(circle, rgba(78,205,196,0.25) 0%, transparent 70%)',
            animation: 'float2 18s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-[350px] h-[350px] rounded-full blur-[90px]"
          style={{
            bottom: '15%',
            left: '20%',
            background: 'radial-gradient(circle, rgba(167,139,250,0.3) 0%, transparent 70%)',
            animation: 'float3 22s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] rounded-full blur-[80px]"
          style={{
            bottom: '20%',
            right: '10%',
            background: 'radial-gradient(circle, rgba(52,211,153,0.25) 0%, transparent 70%)',
            animation: 'float4 16s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-[450px] h-[450px] rounded-full blur-[110px]"
          style={{
            top: '40%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'radial-gradient(circle, rgba(234,179,8,0.2) 0%, transparent 70%)',
            animation: 'float5 24s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-[280px] h-[280px] rounded-full blur-[70px]"
          style={{
            top: '60%',
            right: '30%',
            background: 'radial-gradient(circle, rgba(244,114,182,0.25) 0%, transparent 70%)',
            animation: 'float6 19s ease-in-out infinite'
          }}
        />
      </div>
      
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 40px) scale(0.9); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 50px) scale(1.15); }
          66% { transform: translate(60px, -20px) scale(0.85); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, 30px) scale(0.9); }
          66% { transform: translate(-50px, -40px) scale(1.2); }
        }
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-60px, -25px) scale(1.1); }
          66% { transform: translate(30px, 50px) scale(0.95); }
        }
        @keyframes float5 {
          0%, 100% { transform: translate(-50%, 0) scale(1); }
          33% { transform: translate(calc(-50% + 35px), -45px) scale(1.15); }
          66% { transform: translate(calc(-50% - 40px), 30px) scale(0.9); }
        }
        @keyframes float6 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(45px, -35px) scale(0.85); }
          66% { transform: translate(-55px, 40px) scale(1.2); }
        }
      `}</style>

      <div className="flex flex-col items-center justify-center w-full px-4 relative z-10">
        <h1
          className="font-zen tracking-normal text-white leading-none relative"
          style={{
            fontSize: 'clamp(4rem, 18vw, 20rem)',
            textShadow: '0 0 120px rgba(255,255,255,0.2), 0 0 240px rgba(234,179,8,0.15)',
          }}
        >
          <span 
            className="text-yellow-500 relative"
            style={{
              textShadow: '0 0 80px rgba(234,179,8,0.5), 0 0 40px rgba(234,179,8,0.3)'
            }}
          >
            a
          </span>lbe
        </h1>
        <p
          className="text-center font-light -mt-2 sm:-mt-3 md:-mt-6 lg:-mt-8 xl:-mt-10 w-full"
          style={{
            fontSize: 'clamp(1.2rem, 5.5vw, 6rem)',
            letterSpacing: 'clamp(0.15em, 0.5vw, 0.6em)',
            background: 'linear-gradient(90deg, #27272a 0%, #fafafa 25%, #fafafa 75%, #27272a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 60px rgba(255,255,255,0.15))',
            wordSpacing: '-0.05em',
          }}
        >
          DIGITAL AGENCY
        </p>
      </div>
      
      <div className="px-4 sm:px-8 md:px-16 relative z-10 md:mt-8">
        <div className="max-w-5xl mx-auto">
          <div className="hidden md:flex items-center justify-center gap-12 mb-10">
            <div className="text-center">
              <div className="font-zen text-4xl text-white mb-1">7+</div>
              <div className="font-montserrat text-xs text-zinc-500 uppercase tracking-wider">Лет опыта</div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
            <div className="text-center">
              <div className="font-zen text-4xl text-white mb-1">30+</div>
              <div className="font-montserrat text-xs text-zinc-500 uppercase tracking-wider">Проектов в год</div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
            <div className="text-center">
              <div className="font-zen text-4xl text-white mb-1">98%</div>
              <div className="font-montserrat text-xs text-zinc-500 uppercase tracking-wider">Довольных клиентов</div>
            </div>
          </div>

          <div className="text-center space-y-2 md:space-y-3">
            <p 
              className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide leading-tight uppercase"
              style={{
                background: 'linear-gradient(90deg, #52525b 0%, #a1a1aa 50%, #52525b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Мы создаём не просто сайты
            </p>
            <p
              className="text-base sm:text-xl md:text-3xl lg:text-5xl font-light tracking-wide leading-tight uppercase"
              style={{
                background: 'linear-gradient(90deg, #71717a 0%, #ffffff 30%, #ffffff 70%, #71717a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 80px rgba(255,255,255,0.2)',
              }}
            >
              Мы создаём бизнес
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;