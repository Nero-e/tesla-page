import TeslaLogo from "./TeslaLogo";
const LandingHeader = () => {
  return (
    <>
      <header className="flex items-center fixed top-0 w-full justify-between px-8 py-3 font-medium text-white text z-40">
        <div className="flex flex-grow basis-0">
          <TeslaLogo />
        </div>
        <nav className="">
          <ul className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-2 [&>li>a]:py-1 [&>li>a>span]:mx-2">
            <li className="hover:bg-white/10 hover:backdrop-blur-md rounded">
              <a href="#">
                <span>Cards</span>
              </a>
            </li>
            <li className="hover:bg-white/10 hover:backdrop-blur-md rounded">
              <a href="#">
                <span>Technology</span>
              </a>
            </li>
            <li className="hover:bg-white/10 hover:backdrop-blur-md rounded">
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
    </>
  );
};
export default LandingHeader;
