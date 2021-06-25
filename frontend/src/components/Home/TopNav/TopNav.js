import React, { useState, useEffect } from "react";
import TopNavTab from "./TopNavTab";
import "./TopNav.css";
import { useSelector, useDispatch } from "react-redux";
import DropDownMenu from "../DropDownMenu";
import { listNavs } from "../../../actions/navigation";
import { BASEAPI } from "../../../constants";

const TopNav = () => {
  const navigations = useSelector((state) => state.navigations);
  const dispatch = useDispatch();
  console.log(navigations);
  const [showDropDown, setShowDropDown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [boardData, setBoardData] = useState({
    name: "",
    description: "",
    imageURL: "",
    chairPerson: "",
    notices: "",
    events: "",
    announcements: "",
  });
  const sabTabClassName =
    "flex-grow flex items-center justify-center text-sm font-mono h-20 px-2 text-white bg-blue-600 hover:bg-blue-600 font-bold  text-xs";
  const otherTabClassName =
    "hidden flex-grow md:flex items-center justify-center text-sm font-mono text-black hover:bg-gray-100 h-20 font-bold px-2 text-xs";
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

  useEffect(() => {
    dispatch(listNavs());
  }, [dispatch]);

  const handleClick = (board) => {
    console.log(board);
  };
  const handleMouseEnter = ({
    boardName,
    description,
    chairmanName,
    _id,
    events,
    notices,
    announcements,
  }) => {
    setBoardData({
      name: boardName,
      description: description,
      imageURL: `${BASEAPI}/home/navigation/${_id}`,
      chairPerson: chairmanName,
      notices,
      events,
      announcements,
    });
    setShowDropDown(true);
  };
  const handleMouseLeave = (boardData) => {
    setShowDropDown(false);
  };

  const renderTabNode = () => {
    let node = navigations.map((item, id) => {
      return item.boardShort === "sa" ? (
        <TopNavTab
          className={`${
            isScrolled ? "sticky_nav_topTab" : null
          } ${sabTabClassName}`}
          boardName={item.boardName}
        />
      ) : (
        <TopNavTab
          className={`${isScrolled ? "sticky_nav_topTab" : null} topNavTab ${
            item.boardShort === "sa" ? sabTabClassName : otherTabClassName
          }`}
          key={id}
          boardName={item.boardName}
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
        style={{ zIndex: "1000" }}
      >
        <div className="flex flex-grow justify-between" id="nav-content">
          {renderTabNode()}
        </div>
        {showDropDown && (
          <DropDownMenu
            boardName={boardData.name}
            boardDescription={boardData.description}
            imageURL={boardData.imageURL}
            chairPersonName={boardData.chairPerson}
            notices={boardData.notices}
            announcements={boardData.announcements}
            events={boardData.events}
            setShowDropDown={setShowDropDown}
            isScrolled={isScrolled}
          />
        )}
      </div>
    </>
  );
};

export default TopNav;
