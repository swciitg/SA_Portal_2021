import React from "react";

const Filter = ({ years, filterHandler }) => {
  const sortedYrs = [...years].sort((a, b) => b - a);

  return (
    <select
      className="w-max px-3 py-1.5 sm:py-2.5 sm:px-4 rounded"
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
