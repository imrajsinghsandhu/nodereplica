import React from "react";
import JobComponent from "./JobComponent";
import "./Row.css";

/**
 * Data from sampleData.
 */
function Row({ data }) {
  return (
    <div className="row_jobs">
      {data.map((job) => (
        <JobComponent data={job} key={job.id} />
      ))}
    </div>
  );
}

export default Row;
