import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./RulesScreen.css";
import { listRules } from "../../../actions/rules";
import { BASEAPI } from "../../../constants";
import ColorMarker from "../../../components/Home/ColorMarker/ColorMarker";

const RulesScreen = () => {
  const rules = useSelector((state) => state.rules);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listRules());
  }, [dispatch]);

  return (
    <div className="rules_cont container w-full mx-auto p-6 sm:py-12 sm:px-36">
      <div className="flex justify-between w-full mb-4 sm:mb-6">
        <p className="text-2xl sm:text-3xl font-bold">Rules</p>
        <ColorMarker />
      </div>
      {rules.map((rule, idx) => {
        const { _id, name, path, format } = rule;
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
              {path.indexOf("https://") === -1 ? (
                <a
                  className={`${
                    format === "Link" ? "text-blue-500" : "text-red-500"
                  } hover:text-blue-900`}
                  href={`${BASEAPI}/rules/${_id}`}
                  rel="noreferrer"
                  target="_blank"
                  style={{ fontFamily: "Red Hat Display", fontWeight: "500" }}
                >
                  {name}
                </a>
              ) : (
                <a
                  className={`${
                    format === "Link" ? "text-blue-500" : "text-red-500"
                  } hover:text-blue-900`}
                  href={path}
                  rel="noreferrer"
                  target="_blank"
                  style={{ fontFamily: "Red Hat Display", fontWeight: "500" }}
                >
                  {name}
                </a>
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default RulesScreen;
