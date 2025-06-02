import React, { use } from "react";
import Jobapplication from "./Jobapplication";

const ApplicationList = ({ applicationPromies }) => {
  const appliction = use(applicationPromies);
  console.log(appliction);
  return (
    <div>
      <h1 className="text-4xl font-semibold my-5">
        ApplicationList:{appliction.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                 <h1>Serial no</h1>
                </label>
              </th>
              <th>Img</th>
              <th>Name</th>
              <th>Job</th>
              <th>Job-Type</th>
              <th>Status</th>
              
            </tr>
          </thead>
          <tbody>
           
          {
            appliction.map((app,index)=><Jobapplication app={app} index={index} key={app._id}></Jobapplication>)
          }
        
          </tbody>
        
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
