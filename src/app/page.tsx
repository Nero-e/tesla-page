import RainbowText from "@/components/RainbowText";
import TeslaText from "@/components/TeslaText";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <header className="flex items-center fixed top-0 w-full justify-between px-8 py-3 font-medium text-white text z-40">
        <div className="flex flex-grow basis-0">
          <TeslaText />
        </div>
        <nav className="">
          <ul className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-2 [&>li>a]:py-1 [&>li>a>span]:mx-2 bg-transparent bg-opacity-20">
            <li className="hover:bg-opacity-30 ">
              <a href="#">
                <span>Cards</span>
              </a>
            </li>
            <li className="hover:bg-transparent hover:bg-opacity-20">
              <a href="#">
                <span>Technology</span>
              </a>
            </li>
            <li className="">
              <a href="#">
                <span>Projects</span>
              </a>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-grow basis-0 justify-end">
          <ul className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-2 [&>li>a]:py-1 [&>li>a>span]:mx-2">
            <li>
              <a href="#">
                <span>About Me</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Github</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="h-screen w-screen flex flex-col bg-black text-center overflow-hidden relative">
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
                className="border-[3px] text-sm rounded font-medium text-white px-24 py-2 inline-block"
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
            className="object-center object-cover h-full w-full"
          ></video>
          {/* <img
            src="/spider-metro.jpeg"
            className="h-full max-w-max bg-cover bg-center selection:bg-none"
          /> */}
        </div>
      </section>
    </>
  );
}
