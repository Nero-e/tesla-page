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
        <ul className="flex flex-row text-sm [&>li>a]:inline-block [&>li>a]:py-1">
          <li className="hidden lg:flex  hover:bg-white/10 hover:backdrop-blur-md rounded">
            <a className="px-1" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </a>
          </li>
          <li className="hidden lg:flex  hover:bg-white/10 hover:backdrop-blur-md rounded">
            <a className="px-1" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </a>
          </li>
          <li className="hidden lg:flex  hover:bg-white/10 hover:backdrop-blur-md rounded">
            <a className="px-1" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </a>
          </li>
          <li className="lg:hidden bg-white/10 backdrop-blur-md rounded">
            <a className="px-3" href="#">
              <span>Menu</span>
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};
export default LandingHeader;
