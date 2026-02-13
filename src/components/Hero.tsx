const Hero = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative">
      <div className="flex flex-col items-center justify-center mb-16">
        <h1 className="font-zen text-[10rem] md:text-[14rem] lg:text-[18rem] tracking-normal text-white leading-none">
          <span className="text-yellow-500">a</span>lbe
        </h1>
        <p className="w-full text-center font-light tracking-[0.45em] text-white/90 text-[1.8rem] md:text-[2.6rem] lg:text-[3.4rem] -mt-6 md:-mt-10 lg:-mt-14">
          DIGITAL AGENCY
        </p>
      </div>
      
      <div className="px-8 md:px-16 mt-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wider text-zinc-600 leading-relaxed uppercase">
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