import React, { useState, useEffect } from "react";
import TopNavTab from "./TopNavTab";
import "./TopNav.css";
import {
  boardList,
  boardAcronym,
  sabTabClassName,
  otherTabClassName,
  boardDescription,
  cpImage,
  chairPerson,
} from "./constants";
import DropDownMenu from "../DropDownMenu";

const TopNav = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [boardData, setBoardData] = useState({
    name: "",
    description: "",
    imageURL: "",
    chairPerson: "",
  });

  useEffect(() => {
    const onScroll = () => {
      const topNav = document.getElementById("TopNav");
      const sticky = topNav.offsetTop;
      const scrollCheck = window.pageYOffset > sticky;
      if (scrollCheck !== isScrolled) {
        setIsScrolled(scrollCheck);
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [isScrolled, setIsScrolled]);

  const handleClick = (board) => {
    console.log(board);
  };
  const handleMouseEnter = (board) => {
    setBoardData({
      name: board,
      description: boardDescription[boardAcronym[board]],
      imageURL: cpImage[boardAcronym[board]],
      chairPerson: chairPerson[boardAcronym[board]],
    });
    setShowDropDown(true);
  };
  const handleMouseLeave = (boardName) => {
    setShowDropDown(false);
  };
  const getClassName = (board) => {
    if (boardAcronym[board] === "SAB") return sabTabClassName;
    else return otherTabClassName;
  };
  const renderTabNode = () => {
    let node = boardList.map((item, id) => {
      return (
        <TopNavTab
          className={getClassName(item)}
          boardName={item}
          handleClick={() => handleClick(item)}
          handleMouseEnter={() => handleMouseEnter(item)}
          handleMouseLeave={() => handleMouseLeave(item)}
        />
      );
    });
    return node;
  };
  return (
    <>
      <div
        id="TopNav"
        className={`${
          isScrolled ? "sticky_nav" : "mt-2"
        } flex md:justify-between w-full`}
      >
        <div className="flex flex-grow justify-between" id="nav-content">
          {renderTabNode()}
          {/* <div className="flex px-8 items-center space-x-8 h-20 bg-accent hamberg">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 10.6699C2 5.88166 5.84034 2 10.5776 2C12.8526 2 15.0343 2.91344 16.6429 4.53936C18.2516 6.16529 19.1553 8.37052 19.1553 10.6699C19.1553 15.4582 15.3149 19.3399 10.5776 19.3399C5.84034 19.3399 2 15.4582 2 10.6699ZM19.0134 17.6543L21.568 19.7164H21.6124C22.1292 20.2388 22.1292 21.0858 21.6124 21.6082C21.0955 22.1306 20.2576 22.1306 19.7407 21.6082L17.6207 19.1785C17.4203 18.9766 17.3076 18.7024 17.3076 18.4164C17.3076 18.1304 17.4203 17.8562 17.6207 17.6543C18.0072 17.2704 18.6268 17.2704 19.0134 17.6543Z"
              fill="white"
            />
          </svg>

          <a href="#">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 20H28V17.3334H4V20ZM4 25.3334H28V22.6667H4V25.3334ZM4 14.6667H28V12H4V14.6667ZM4 6.66669V9.33335H28V6.66669H4Z"
                fill="white"
              />
            </svg>
          </a>
        </div> */}
        </div>
      </div>
      {showDropDown && (
        <DropDownMenu
          boardName={boardData.name}
          boardDescription={boardData.description}
          imageURL={boardData.imageURL}
          chairPersonName={boardData.chairPerson}
          setShowDropDown={setShowDropDown}
        />
      )}
    </>
  );
};

export default TopNav;
