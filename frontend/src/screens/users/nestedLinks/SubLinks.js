import React from "react";
import "./NestedLinksScreen.css";
import rArrow from "../../../assets/ArrowRight2.svg";

const SubLinks = ({ sublinks }) => {
  const sortSublinks = (arr) => {
    function compare(a, b) {
      if (a.priority_number < b.priority_number) {
        return -1;
      }
      if (a.priority_number > b.priority_number) {
        return 1;
      }
      return 0;
    }
    return arr.sort(compare);
  };

  const renderSublinks = (sublinks) => {
    const arr = [...sublinks];
    const reqArr = sortSublinks(arr);
    return reqArr.length !== 0
      ? reqArr.map(({ _id, name, url }, idx) => {
          return (
            <>
              <li key={_id} className="py-1">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 flex justify-start"
                  style={{ fontFamily: "Red Hat Display" }}
                >
                  {name}
                  <span className="ml-1 transform scale-75">
                    <img src={rArrow} alt="r" />
                  </span>
                </a>
              </li>
              <hr style={{ borderColor: "rgb(224, 224, 224)" }} />
            </>
          );
        })
      : null;
  };

  return (
    <div className="subLinks">
      <ul className="list-disc pl-5">{renderSublinks(sublinks)}</ul>
    </div>
  );
};

export default SubLinks;
