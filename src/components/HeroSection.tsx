const HeroSection = () => {
  return (
    <>
      <section className="h-screen w-full flex flex-col bg-black text-center overflow-hidden relative">
        <div className="flex flex-col h-full z-30 relative">
          <header>
            <h1 className="text-white pt-24 text-[40px] font-medium">
              Experience Tesla
            </h1>
            <p className="text-white text-sm">Schedule a Demo Drive Today</p>
          </header>
          <footer className="flex flex-col flex-grow justify-end text-white pb-5">
            <div>
              <a
                className="border-[2px] border-white text-sm rounded font-medium text-white bg-white/5 backdrop-blur-sm px-24 py-2 inline-block hover:bg-white/50 transition-colors"
                href="#"
              >
                <span>Demo Drive</span>
              </a>
            </div>
          </footer>
        </div>

        <div className="absolute bottom-0 top-0 left-0 right-0 h-full w-full z-10 flex items-center justify-center">
          <video
            src="/video.webm"
            autoPlay
            muted
            loop
            className="object-center object-cover h-full w-full bg-center"
          ></video>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
