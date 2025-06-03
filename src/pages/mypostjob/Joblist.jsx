import React, { use } from "react";
import JobListCard from "./JobListCard";

const Joblist = ({ jobscreateBypromies }) => {
  const jobs = use(jobscreateBypromies);
  return (
    <div>
      <h1>JobList {jobs.length} </h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>sL no</th>
              <th>Name</th>
              <th>Job</th>
              <th>Dedline</th>
              <th>view</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job, index) => (
              <JobListCard job={job} key={job._id} index={index}></JobListCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Joblist;
