import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../../../constants/index";
import SideNavBar from "../SideNavBar";
import "./MiddleNav.css";

function MiddleNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sideNavVisibility, setSideNavVisibility] = useState(false);
  
  useEffect(() => {
    const midNav = document.getElementById("MidNav");
    const sticky = midNav.offsetTop - 100;

    function onScroll() {
      if (window.pageYOffset >= sticky) {
        midNav.classList.add("sticky_nav_mid");
        setSideNavVisibility(true)
      } else {
        midNav.classList.remove("sticky_nav_mid");
        setSideNavVisibility(false)
      }
      if(window.pageYOffset > 2200) {
        setSideNavVisibility(false)
      }
    }
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [isScrolled, setIsScrolled]);

  return (
    <>
    <div id="MidNav" class={`scroll sm:px-14 flex overflow-x-scroll`}>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-16 font-blue-550">
        <p>
          <Link to={`${BASEURL}/`}>Home</Link>
        </p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-16">
        <p>
          <Link to={`${BASEURL}/rules`}>Rules</Link>
        </p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-16">
        <p>Scholarships</p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-16">
        <p>SAC</p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-16 text-center">
        <p>SA Courses</p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-16">
        <p>Utilities</p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-16">
        <p>Team</p>
      </div>
    </div>
    <SideNavBar
      showSideNav={sideNavVisibility}
    />
    </>
  );
}

export default MiddleNav;
