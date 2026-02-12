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
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <button className="flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
            <Icon name="Home" size={24} className="group-hover:scale-110 transition-transform" />
            <span className="text-xs font-light tracking-wider">Главная</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
            <Icon name="Briefcase" size={24} className="group-hover:scale-110 transition-transform" />
            <span className="text-xs font-light tracking-wider">Портфолио</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
            <Icon name="Code" size={24} className="group-hover:scale-110 transition-transform" />
            <span className="text-xs font-light tracking-wider">Веб</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
            <Icon name="TrendingUp" size={24} className="group-hover:scale-110 transition-transform" />
            <span className="text-xs font-light tracking-wider">Маркетинг</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
            <Icon name="Sparkles" size={24} className="group-hover:scale-110 transition-transform" />
            <span className="text-xs font-light tracking-wider">AI</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
            <Icon name="Menu" size={24} className="group-hover:scale-110 transition-transform" />
            <span className="text-xs font-light tracking-wider">Меню</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Index;
