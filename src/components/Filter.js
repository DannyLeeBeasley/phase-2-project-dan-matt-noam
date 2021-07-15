import React from "react";

function Filter({ onCategoryChange }) {


  return (
    <div className="Filter">
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by Category</option>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
        <option value="dairy">Dairy</option>
        <option value="sweeteners">Sweeteners</option>
        <option value="juices">Juices</option>
        <option value="powders/other">Powders/Other</option>

      </select>
    </div>
  );
}

export default Filter;