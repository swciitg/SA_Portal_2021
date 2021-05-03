import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { LOGOUT_URL, LOGIN_URL, BASEURL } from "../../../constants";

const Sidebar = ({ children }) => {
  let loginBool = document.cookie.includes("sa-portal-session");
  const [hamburger, setHamburger] = useState(false);

  const linkSidebar =
    "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item";

  const linkDropdown =
    "flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item";

  const authBtn = loginBool ? (
    <a href={LOGOUT_URL} className={linkDropdown}>
      Logout
    </a>
  ) : (
    <a href={LOGIN_URL} className={linkDropdown}>
      Login
    </a>
  );
  return (
    <>
      <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
          <Link
            to="index.html"
            className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >
            Admin
          </Link>
        </div>

        <nav className="text-white text-base font-semibold pt-3">
          <Link to={`${BASEURL}/admin/about`} className={linkSidebar}>
            About
          </Link>
          <Link to={`${BASEURL}/admin/announcements`} className={linkSidebar}>
            Announcements
          </Link>
        </nav>
      </aside>

      <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
        <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
          <div className="w-1/2"></div>
          <div className="relative w-1/2 flex justify-end">
            <Login />
          </div>
        </header>

        <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
          <div className="flex items-center justify-between">
            <Link
              to={`${BASEURL}/admin/`}
              className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
            >
              Admin
            </Link>
            <button
              onClick={() => setHamburger(!hamburger)}
              className="text-white text-3xl focus:outline-none"
            >
              {hamburger ? "X" : "O"}
            </button>
          </div>

          <nav
            className={
              hamburger
                ? "flex flex flex-col pt-4"
                : "hidden flex flex-col pt-4"
            }
            // className="flex flex-col pt-4"
          >
            <Link
              to={`${BASEURL}/admin/announcements`}
              className={linkDropdown}
            >
              Announcements
            </Link>
            {authBtn}
          </nav>
        </header>
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
