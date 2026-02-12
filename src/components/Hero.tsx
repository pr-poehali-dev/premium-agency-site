const Hero = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-24">
        <h1 className="font-zen text-[12rem] md:text-[16rem] lg:text-[20rem] tracking-normal text-white">
          <span className="text-yellow-500">a</span>lbe
        </h1>
      </div>
      
      <div className="px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-zinc-600 leading-tight">
            МЫ СОЗДАЕМ НЕ ПРОСТО САЙТЫ
            <br />
            МЫ СОЗДАЕМ БИЗНЕС
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
