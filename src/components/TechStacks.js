import React from "react";
import "./TechStacks.css";

function TechStacks({ data }) {
  const renderTechRow = (item) => {
    // console.log("this is the data coming in: ", item);
    return (
      <div key={item.id} className="tech_row">
        <text className="tech_item">{item.tech}</text>
      </div>
    );
  };

  return (
    <div className="tech_descriptions">
      {data.map((tech) => renderTechRow(tech))}
    </div>
  );
}

export default TechStacks;
