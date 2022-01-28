import React from "react";
import "./JobComponent.css";
import "./Row.css";
import TechStacks from "./TechStacks";

function JobComponent({ data }) {
  return (
    <div key={data.id} className="row_job">
      <div className="center">
        <img src={data.logo} className="row_logo" />
      </div>
      <div className="top_section">
        <div className="name_and_title">
          <text className="company_name">{data.name}</text>
          <br />
          <text className="title">{data.title}</text>
        </div>
      </div>
      <div id="middle_section">
        <text className="listed_style">{data.listed}</text>
        <text className="category_style">{data.category}</text>
      </div>
      <hr className="horizontal_line" />
      <div className="bottom_section">
        <TechStacks data={data.techStacks} />
      </div>
    </div>
  );
}

export default JobComponent;
