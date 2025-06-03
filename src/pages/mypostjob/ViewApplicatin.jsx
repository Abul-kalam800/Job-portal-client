import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplicatin = () => {
  const { job_id } = useParams();
  const jobs = useLoaderData();
  return (
    <div>
      <h1 className="text-4xl font-semibold">
        {jobs.length} View Application : {job_id}
      </h1>

      
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
          
            {jobs.map((job) => (
              <tr key={job._id}>
                <th>1</th>
                <td>{job.applicant}</td>
                <td>Quality Control Specialist</td>
                <select defaultValue="update status" className="select">
                  <option >Hired</option>
                  <option>Reject</option>
                  <option>Pending</option>
                  <option>Underview</option>
                </select>
              </tr>
            ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
  
  );
};

export default ViewApplicatin;
