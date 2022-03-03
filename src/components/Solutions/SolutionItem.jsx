/** @format */

import React from "react";

const SolutionItem = ({ data }) => {
  return (
    <div className="solution-box">
      <img src={data.img} alt="err" />
      <div className="solution-boxdetails">
        <p>{data.name}</p>
        <span>Read More </span>
      </div>
    </div>
  );
};

export default SolutionItem;
