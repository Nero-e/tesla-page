const ModelSSection = () => {
    return (
      <>
        <section className="h-screen w-full flex flex-col bg-black text-center overflow-hidden relative">
          <div className="flex flex-col h-full z-30 relative">
            <header>
              <h1 className="text-black pt-24 text-[40px] font-medium">
                Model S
              </h1>
              <p className="text-black text-sm">Explore Inventory</p>
            </header>
            <footer className="flex flex-col flex-grow justify-end text-white pb-20">
              <div className="flex flex-row justify-center gap-10">
                <a
                  className=" text-sm rounded font-medium text-black bg-white/70 backdrop-blur-sm px-24 py-2 inline-block"
                  href="#"
                >
                  <span>Custom Order</span>
                </a>
                <a
                  className="text-sm rounded font-medium text-white bg-black/30 backdrop-blur-sm px-24 py-2 inline-block"
                  href="#"
                >
                  <span>Demo Drive</span>
                </a>
              </div>
            </footer>
          </div>
  
          <div className="absolute bottom-0 top-0 left-0 right-0 h-full w-full z-10 flex items-center justify-center">
            <img
              className="object-center object-cover h-full w-full bg-center"
              src="/ModelS.avif"
            />
          </div>
        </section>
      </>
    );
  };
  
  export default ModelSSection;