import React from "react";
import { BASEAPI } from "../../../constants/index";

const SchLinks = ({ schLinks }) => {
  return (
    <div>
      {schLinks.map((schLink, idx) => {
        const { _id, name } = schLink;
        return (
          <div
            key={_id}
            className="flex w-full justify-start mb-2 p-3 rounded-md"
            style={{ border: "1px solid #D7DDE1" }}
          >
            <span
              className="w-1/12 flex justify-center items-center"
              style={{ borderRight: "1px solid #D7DDE1" }}
            >
              {idx + 1}
            </span>
            <span className="w-11/12 pl-4 flex justify-start items-center">
              <a
                className={`hover:text-blue-900`}
                href={`${BASEAPI}/scholarship/pdf/${_id}`}
                rel="noreferrer"
                target="_blank"
                style={{ fontFamily: "Red Hat Display", fontWeight: "500" }}
              >
                {name}
              </a>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SchLinks;
