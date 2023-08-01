import { useState, useEffect, useRef } from "react";

type Model3SectionProps = {
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeroSection = ({ setIsDark }: Model3SectionProps) => {

  const model3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Puedes ajustar este valor según tu necesidad
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    }, options);

    if (model3Ref.current) {
      observer.observe(model3Ref.current);
    }

    return () => {
      if (model3Ref.current) {
        observer.unobserve(model3Ref.current);
      }
    };
  }, [setIsDark]);

  return (
    <>
      <section ref={model3Ref} className="h-screen w-full flex flex-col bg-black text-center overflow-hidden relative">
        <div className="flex flex-col h-full z-30 relative">
          <header className="bg-gradient-to-b from-black/40 to-transparent h-80">
            <h1 className="text-white pt-24 text-[40px] font-medium">
              Experience Tesla
            </h1>
            <p className="text-white text-sm">Schedule a Demo Drive Today</p>
          </header>
          <footer className="flex flex-col flex-grow justify-end text-white pb-20">
            <div>
              <a
                className="border-[3px] border-white text-sm rounded font-medium text-white bg-white/5 backdrop-blur-sm px-24 py-2 inline-block transition-colors"
                href="#"
              >
                <span>Demo Drive</span>
              </a>
            </div>
          </footer>
        </div>

        <div className="absolute bottom-0 top-0 left-0 right-0 h-full w-full z-10 flex items-center justify-center bg-white">
          <video
            src="/TeslaVideo2.webm"
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
