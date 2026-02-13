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
            \u041c\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0441\u0430\u0439\u0442\u044b
            <br />
            \u043c\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0431\u0438\u0437\u043d\u0435\u0441
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
