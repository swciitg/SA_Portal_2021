import React from "react";
import "./EventCatfilter.css";

const CatFilter = ({ categories, filterHandler }) => {
  return (
    <div className="text-black">
      <select
        className="w-max pl-3 pr-6 py-1.5 sm:py-2.5 sm:pl-4 sm:pr-7 rounded "
        style={{ boxShadow: "0px 4px 20px rgba(30, 37, 50, 0.04)" }}
        name="event_categories"
        id="e_cat"
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
    </div>
  );
};

export default CatFilter;
