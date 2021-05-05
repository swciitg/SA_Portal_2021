import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../../../constants/index";
import "./MiddleNav.css";

function MiddleNav() {
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
    <div
      id="MidNav"
      class={`scroll flex md:mx-6 lg:mx-10 xl:mx-12 2xl:mx-44 overflow-x-scroll`}
    >
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-32 font-blue-550">
        <p>
          <Link to={`${BASEURL}/`}>Home</Link>
        </p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-32">
        <p>
          <Link to={`${BASEURL}/rules`}>Rules</Link>
        </p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-32">
        <p>Scholarships</p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-32">
        <p>SAC</p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-32 text-center">
        <p>SA Courses</p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-32">
        <p>Utilities</p>
      </div>
      <div class="flex-initial hover:bg-gray-100 text-base px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-5 h-32">
        <p>Team</p>
      </div>
    </div>
  );
}

export default MiddleNav;
