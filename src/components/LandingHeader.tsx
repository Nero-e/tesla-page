import TeslaLogo from "./TeslaLogo";

type LandingHeaderProps = {
  isDark: boolean;
};

const LandingHeader = ({ isDark }: LandingHeaderProps) => {
  return (
    <>
      <header
        className={`flex items-center fixed w-full justify-between px-8 py-3 font-medium text z-40 h-16
        } ${
          isDark
            ? "text-white transition-all ease-in"
            : "text-black transition-all ease-in"
        }`}
      >
        <div>
          <TeslaLogo />
        </div>
        <ul className="hidden lg:flex text-sm [&>li>a]:inline-block [&>li>a]:px-2 [&>li>a]:py-1 [&>li>a]:mx-2">
          <li className="hover:bg-white/10 hover:backdrop-blur-md rounded">
            <a href="#">
              <span>Vehicles</span>
            </a>
          </li>
          <li className="hover:bg-white/10 hover:backdrop-blur-md rounded">
            <a href="#">
              <span>Energy</span>
            </a>
          </li>
          <li className="hover:bg-white/10 hover:backdrop-blur-md rounded">
            <a href="#">
              <span>Charging</span>
            </a>
          </li>
          <li className="hover:bg-white/10 hover:backdrop-blur-md rounded">
            <a href="#">
              <span>Discover</span>
            </a>
          </li>
          <li className="hover:bg-white/10 hover:backdrop-blur-md rounded">
            <a href="#">
              <span>Shop</span>
            </a>
          </li>
        </ul>
        <ul className="hidden lg:flex text-sm [&>li>a]:inline-block [&>li>a]:px-2 [&>li>a]:py-1 [&>li>a]:mx-2">
          <li className="hover:bg-white/10 hover:backdrop-blur-md rounded">
            <a href="#">
              <span>Account</span>
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};
export default LandingHeader;
