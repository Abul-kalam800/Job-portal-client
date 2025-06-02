import { div } from "motion/react-client";
import React from "react";

const Jobapplication = ({ app, index }) => {
  const { company, title, company_logo, jobType,status } = app;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={company_logo} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{company}</div>
        </div>
      </td>
      {title}
      <td>{jobType}</td>
      <th>
        <button className="btn btn-ghost btn-xs">{status}</button>
      </th>
    </tr>
  );
};

export default Jobapplication;
