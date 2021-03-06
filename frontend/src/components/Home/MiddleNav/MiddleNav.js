import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MiddleNav.css";
import { pages } from "./constants";

function MiddleNav({ activePath }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const midNav = document.getElementById("MidNav");
    const sticky = midNav.offsetTop - 100;

    function onScroll() {
      if (window.pageYOffset >= sticky) {
        midNav.classList.add("sticky_nav_mid");
      } else {
        midNav.classList.remove("sticky_nav_mid");
      }
    }
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [isScrolled, setIsScrolled]);

  return (
    <div id="MidNav" className={`scroll sm:px-14 flex overflow-x-scroll`}>
      {pages.map((page, idx) => {
        const { name, path } = page;
        return (
          <Link key={idx} to={path}>
            <div
              className={`flex flex-initial items-center text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-16 ${
                path === activePath ? "font-bold font-blue-550" : "text-black"
              } hover:text-blue-500`}
            >
              <p className="leading-4 sm:leading-none">{name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default MiddleNav;
