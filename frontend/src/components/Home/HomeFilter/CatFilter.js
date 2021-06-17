import React from "react";
import "./CatFilter.css";

const CatFilter = ({ categories, filterHandler }) => {
  return (
    <select
      className="w-max pl-3 pr-6 py-1.5 sm:py-2.5 sm:pl-4 sm:pr-7 rounded"
      style={{
        border: "2px solid #D7DDE1",
        boxShadow: "0px 4px 20px rgba(30, 37, 50, 0.04)",
      }}
      name="announce_categories"
      id="a_cat"
      onChange={filterHandler}
    >
      <option value="all">ALL</option>
      {categories &&
        categories.map((cat, i) => {
          return (
            <option key={cat._id} value={cat.name}>
              {cat.name.toUpperCase()}
            </option>
          );
        })}
    </select>
  );
};

export default CatFilter;
