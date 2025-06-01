import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const { title, company ,company_logo,_id} = useLoaderData();

  return (
    <div className="text-center space-y-5">
      <h2 className=" text-5xl">Job details</h2>
      <div className="w-50 mx-auto">
        <img className="mx-auto" src={company_logo} alt="" />
      </div>
      <h1 className="text-3xl  font-semibold my-5">{title}</h1>
      <p className="">{company}</p>
     <Link to = {`/apply/${_id}`}> <button className="btn btn-primary">Applay now</button></Link>
    </div>
  );
};

export default JobDetails;
