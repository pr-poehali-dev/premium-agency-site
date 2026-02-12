import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="h-screen bg-black text-foreground flex flex-col overflow-hidden">
      <div className="absolute top-8 left-8 md:top-12 md:left-12">
        <h1 className="font-zen text-7xl md:text-8xl lg:text-9xl tracking-normal text-white">
          <span className="text-yellow-500">a</span>lbe
        </h1>
      </div>
      
      <div className="flex-1 flex items-center justify-center px-8 md:px-16">
        <div className="max-w-4xl w-full">
          <p className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-zinc-600 leading-tight">
            МЫ СОЗДАЕМ НЕ ПРОСТО САЙТЫ
            <br />
            МЫ СОЗДАЕМ БИЗНЕС
          </p>
        </div>
      </div>

      <nav className="pb-8 px-8 md:px-12">
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[22px] px-8 py-4 max-w-2xl mx-auto shadow-2xl">
          <div className="flex items-center justify-between gap-2">
            <button className="flex flex-col items-center gap-1.5 text-zinc-400 hover:text-white transition-all duration-300 group relative px-4 py-2 rounded-xl hover:bg-blue-500/10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <Icon name="House" size={26} className="group-hover:scale-125 transition-transform duration-300 relative z-10" />
              <span className="text-[10px] font-medium tracking-wide relative z-10">Главная</span>
            </button>
            
            <button className="flex flex-col items-center gap-1.5 text-zinc-400 hover:text-white transition-all duration-300 group relative px-4 py-2 rounded-xl hover:bg-blue-500/10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <Icon name="Folder" size={26} className="group-hover:scale-125 transition-transform duration-300 relative z-10" />
              <span className="text-[10px] font-medium tracking-wide relative z-10">Портфолио</span>
            </button>
            
            <button className="flex flex-col items-center gap-1.5 text-zinc-400 hover:text-white transition-all duration-300 group relative px-4 py-2 rounded-xl hover:bg-blue-500/10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <Icon name="Globe" size={26} className="group-hover:scale-125 transition-transform duration-300 relative z-10" />
              <span className="text-[10px] font-medium tracking-wide relative z-10">Веб</span>
            </button>
            
            <button className="flex flex-col items-center gap-1.5 text-zinc-400 hover:text-white transition-all duration-300 group relative px-4 py-2 rounded-xl hover:bg-blue-500/10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <Icon name="Megaphone" size={26} className="group-hover:scale-125 transition-transform duration-300 relative z-10" />
              <span className="text-[10px] font-medium tracking-wide relative z-10">Маркетинг</span>
            </button>
            
            <button className="flex flex-col items-center gap-1.5 text-zinc-400 hover:text-white transition-all duration-300 group relative px-4 py-2 rounded-xl hover:bg-blue-500/10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <Icon name="Zap" size={26} className="group-hover:scale-125 transition-transform duration-300 relative z-10" />
              <span className="text-[10px] font-medium tracking-wide relative z-10">AI</span>
            </button>
            
            <button className="flex flex-col items-center gap-1.5 text-zinc-400 hover:text-white transition-all duration-300 group relative px-4 py-2 rounded-xl hover:bg-blue-500/10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <Icon name="Grid3x3" size={26} className="group-hover:scale-125 transition-transform duration-300 relative z-10" />
              <span className="text-[10px] font-medium tracking-wide relative z-10">Меню</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;
