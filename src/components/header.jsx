import { Logo, LogoBlack } from '@/utils/assets';
import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const currentHome = location.pathname === "/";

  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const savedScrollState = localStorage.getItem("scrollState");
    if (savedScrollState === "true") {
      setScroll(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
        localStorage.setItem("scrollState", "true");
      } else {
        setScroll(false);
        localStorage.setItem("scrollState", "false");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSidebarMenu = () => {
    setSidebarMenu(!sidebarMenu);
  }

  return (
    <header className={`${currentHome ? (scroll ? 'bg-[#112211] shadow-md' : '') : 'bg-[#ffffff] shadow-md'} h-[4rem] fixed top-0 left-0 w-full z-[100] px-4 max-sm:px-2`}>
      <div className="mx-auto w-full max-w-[1500px] relative h-full">
        <div className={`${sidebarMenu ? 'max-[768px]:right-0 duration-300' : 'max-[768px]:-right-full duration-[600ms]'} h-full flex items-center justify-between max-[768px]:max-w-[300px] max-[768px]:w-full max-[768px]:fixed max-[768px]:flex-col max-[768px]:top-[4rem] max-[768px]:h-[calc(100vh-4rem)] max-[768px]:bg-[#112211] max-[768px]:justify-start`}>
          <div className="flex w-1/2 items-center gap-1 max-[768px]:flex-col max-[768px]:w-full max-[768px]:px-5 max-[768px]:py-2 max-[768px]:gap-2">
            <NavLink onClick={() => setSidebarMenu(false)} to="/flights" className="flex items-center gap-3 min-w-[120px] h-[45px] max-[768px]:min-w-0 max-[768px]:w-full">
              <i className={`${currentHome ? 'text-[#ffffff]' : 'text-[#112211] max-md:text-[#ffffff]'} fa-solid fa-plane text-lg`}></i>
              <span className={`${currentHome ? 'text-[#ffffff]' : 'text-[#112211] max-md:text-[#ffffff]'} font-medium text-sm`}>Find Flight</span>
            </NavLink>
            <button className="flex items-center gap-3 min-w-[120px] h-[45px] max-[768px]:min-w-0 max-[768px]:w-full">
              <i className={`${currentHome ? 'text-[#ffffff]' : 'text-[#112211] max-md:text-[#ffffff]'} fa-solid fa-bed-front text-lg`}></i>
              <span className={`${currentHome ? 'text-[#ffffff]' : 'text-[#112211] max-md:text-[#ffffff]'} font-medium text-sm`}>Find Stay</span>
            </button>
          </div>

          <div className="flex items-center gap-1 max-[768px]:w-[95%] max-[768px]:flex-col max-[768px]:border-t max-[768px]:pt-3 max-[768px]:border-gray-400">
            <button className={`${currentHome ? 'text-[#ffffff]' : 'text-[#112211] max-md:text-[#ffffff]'} h-[40px] rounded-lg w-[90px] font-medium text-sm max-[768px]:border max-[768px]:border-gray-400 max-[768px]:w-full`}>Login</button>
            <button className={`${currentHome ? 'bg-[#ffffff]' : 'bg-[#112211] text-[#ffffff] max-md:bg-[#ffffff] max-md:text-[#112211]'} h-[40px] border rounded-lg w-[90px] font-medium text-sm max-[768px]:w-full`}>Sign Up</button>
          </div>
        </div>

        <i onClick={handleSidebarMenu} className={`${currentHome ? 'text-[#ffffff]' : 'text-[#112211]'} fa-solid cursor-pointer fa-bars hidden text-2xl absolute top-1/2 transform right-2 -translate-y-1/2 max-[768px]:block`}></i>

        <NavLink to="/" onClick={() => setSidebarMenu(false)}>
          <img src={location.pathname === "/" ? Logo : LogoBlack} alt="" className="object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-[768px]:left-2 max-[768px]:-translate-x-0" />
        </NavLink>
      </div>
    </header>
  )
}

export default Header