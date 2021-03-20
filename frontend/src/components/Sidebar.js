import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
//import OutlookLogin from "./OutlookLogin";
const Sidebar = ({ children }) => {
  const [dropdown, setDropdown] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const linkSidebar =
    "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item";
  const linkDropdown =
    "flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item";

  const dropdownStyle = "block px-4 py-2 account-link hover:text-white";

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
          <Link to="/admin/tables" className={linkSidebar}>
            Tables
          </Link>
          <Link to="/admin/forms" className={linkSidebar}>
            Forms
          </Link>
        </nav>
      </aside>

      <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
        <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
          <div className="w-1/2"></div>
          <div className="relative w-1/2 flex justify-end">
            {/* <OutlookLogin /> */}
            <Login />
            {/* <button
              onClick={() => {
                setDropdown(!dropdown);
              }}
              className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
            >
              <img
                src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400"
                alt="img"
              />
            </button>
            <button
              style={{ display: dropdown ? null : "none" }}
              onClick={() => setDropdown(false)}
              className="h-full w-full fixed inset-0 cursor-default"
            ></button> */}

            {/* <div
              style={{ display: dropdown ? null : "none" }}
              className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16"
            >
              <Link to="/" className={dropdownStyle}>
                Account
              </Link>
              <Link to="/" className={dropdownStyle}>
                Support
              </Link>
              <Link to="/" className={dropdownStyle}>
                Sign Out
              </Link>
            </div> */}
          </div>
        </header>

        <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
          <div className="flex items-center justify-between">
            <Link
              to="index.html"
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
            <Link to="/admin/tables" className={linkDropdown}>
              Tables
            </Link>
            <Link to="/admin/forms" className={linkDropdown}>
              Forms
            </Link>

            <Link to="/" className={linkDropdown}>
              My Account
            </Link>
            <Link to="/" className={linkDropdown}>
              Sign Out
            </Link>
          </nav>
        </header>
        {children}
      </div>
    </>
  );
};

export default Sidebar;
