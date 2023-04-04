/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { TbSunMoon } from "react-icons/tb";
import "./nav.css";
function Navbar() {
  const [theme, setTheme] = useState("light_theme");
  const [showMenu, setShowMenu] = useState(false);
  const toggleTheme = () => {
    if (theme === "dark_theme") {
      setTheme("light_theme");
    } else {
      setTheme("dark_theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div className="navv">
        <div className="nav-content">
          <div className="heading1">
            <a href="#" style={{ fontWeight: "bold" }}>
              Embrane
            </a>
          </div>
          <div className={showMenu ? "menu2 mobile-menu" : "menu2"}>
            <ul>
              <li className="h-8">
                <a href="#" className="alink">
                  How it works?
                </a>
              </li>
              <li className="h-8">
                <a href="#" className="alink">
                  Our work
                </a>
              </li>
              <li className="h-8">
                <a href="#" className="alink">
                  Pricing
                </a>
              </li>
              <li className="h-8">
                <a href="#" className="alink">
                  About us
                </a>
              </li>

              <li className="p-8 w-[100px] h-8 rounded-full bg-[#6366f1] flex items-center justify-center">
                <a href="#" className="alink btn">
                  Try it now
                </a>
              </li>
            </ul>
          </div>
          <div className="tg">
            <a href="#" onClick={() => toggleTheme()}>
              <TbSunMoon size={22} />
            </a>
          </div>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMenu(!showMenu)}>
              <CgMenu size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
