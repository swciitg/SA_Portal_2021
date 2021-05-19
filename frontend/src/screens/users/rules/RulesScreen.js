import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./RulesScreen.css";
import { listRules } from "../../../actions/rules";
import { BASEAPI } from "../../../constants";

const RulesScreen = () => {
  const rules = useSelector((state) => state.rules);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listRules());
  }, [dispatch]);

  return (
    <div className="container w-full mx-auto p-6 sm:py-12 sm:px-36">
      <p className="text-2xl sm:text-3xl font-bold mb-6">Rules</p>
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
                    format === "Link" ? "text-blue-500" : "text-indigo-500"
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
                    format === "Link" ? "text-blue-500" : "text-indigo-500"
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
