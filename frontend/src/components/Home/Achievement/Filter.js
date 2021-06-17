import React from "react";
import "./Filter.css";

const Filter = ({ years, filterHandler }) => {
  const sortedYrs = [...years].sort((a, b) => b - a);

  return (
    <select
      className="w-max pl-3 pr-6 py-1.5 sm:py-2.5 sm:pl-4 sm:pr-7 rounded"
      style={{
        border: "2px solid #D7DDE1",
        boxShadow: "0px 4px 20px rgba(30, 37, 50, 0.04)",
      }}
      name="ach_categories"
      id="ach_cat"
      onChange={filterHandler}
    >
      {sortedYrs &&
        sortedYrs.map((yr, i) => {
          return (
            <option key={i} value={yr}>
              {yr}
            </option>
          );
        })}
    </select>
  );
};

export default Filter;
