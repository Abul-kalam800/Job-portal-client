import axios from "axios";
import React, { use } from "react";
import { AuthContex } from "../../provider/Authcontex";

const Addjobs = () => {
  const {user}=use(AuthContex)
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const jobData = Object.fromEntries(formData.entries());
    // process salary rang
    const { min, max, currency, ...newjob } = jobData;
    newjob.salaryRang = { min, max, currency };
    //process requerments
    const requermentString = newjob.requirements;
    const requermentDirt = requermentString.split(',');
    const requermentClean = requermentDirt.map((job) => job.trim());
    newjob.requirements = requermentClean;
    //responsibilits process
    const responsibilitiesString = newjob.responsibilty;
    const responsibiltyDirt = responsibilitiesString.split(',')
    const responsibilitClean = responsibiltyDirt.map(res=>res.trim());
    newjob.responsibilty = responsibilitClean
    console.log(responsibilitClean)
    console.log(newjob);
   
    // post data server 
    axios.post("http://localhost:3000/jobs",newjob)
    .then(res=>{
      console.log(res.data)
    })

  };
  return (
    <div>
      <h1 className="text-4xl font-semibold my-5">Add jobs</h1>
      <form onSubmit={handleForm}>
        <fieldset className="grid space-y-4 mx-auto max-w-sm">
          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            id=""
            placeholder="Title"
            className="input"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            id=""
            placeholder="location"
            className="input"
          />

          <label className="label">Category</label>
          <input
            type="text"
            name="category"
            id=""
            placeholder="category"
            className="input"
          />
          <label className="label">JobType</label>
          <input
            type="text"
            name="JobType"
            id=""
            placeholder="category"
            className="input"
          />
          <label className="label">Dedline</label>
          <input
            type="date"
            name="dedline"
            id=""
            placeholder="category"
            className="input"
          />
          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            id=""
            placeholder="company"
            className="input"
          />
          <label className="label">CompanyLogo</label>
          <input
            type="text"
            name="company_logo"
            id=""
            placeholder="category"
            className="input"
          />
          <fieldset className="grid grid-cols-1 lg:grid-cols-3 ">
            <legend>salaryRange</legend>
            <div>
              <label className="label">max</label>
              <input
                type="text"
                name="max"
                id=""
                placeholder="maxslary"
                className="input"
              />
            </div>
            <div>
              <label className="label">Min</label>
              <input
                type="text"
                name="min"
                id=""
                placeholder="Minsalry"
                className="input"
              />
            </div>
            <div>
              <label htmlFor="" className="label">
                Currency
              </label>
              <select name="currency" className="select">
                <option value="Doller">Doller</option>
                <option value="Taka">Taka</option>
                <option value="UsD">UsD</option>
                <option value="Riyal">Riyal</option>
              </select>
            </div>
          </fieldset>
          <label className="label">responsibilities</label>
          <input
            name="responsibilty"
            id=""
            placeholder="Responsiblity"
            className="textarea"
          />
          <label className="label">requirements</label>
          <input
            name="requirements"
            placeholder="requirements"
            className="textarea"
          />
          <label className="label">HR name</label>
          <input
            type="text"
            name="hr_name"
            id=""
            placeholder="hr_name"
            className="input"
          />
          <label className="label">HR email</label>
          <input
          defaultValue={user.email}
            type="text"
            name="hr_email"
            id=""
            placeholder="Hr-Email"
            className="input"
          />
          <label className="label">Description </label>
          <input
            type="text"
            name="description"
            id=""
            placeholder="Description"
            className="input"
          />

          <input
            type="submit"
            className="my-5 w-full btn-primary btn"
            value="Submit"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default Addjobs;
