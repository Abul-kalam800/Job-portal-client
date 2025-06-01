import React from "react";

const Applay = () => {
const handleJobApplay = (e)=>{
  e.preventDefault();
  const form = e.target;
  const linkdin = form.linkdin.value;
  const github = form.github.value;
  const resume = form.resume.value;
  console.log(linkdin,github,resume)

}
  return (
    <div>
      <h1 className="text-5xl my-10 font-semibold">Job applay</h1>
      <form onSubmit={handleJobApplay} className="max-w-sm mx-auto shadow-2xl">
      <fieldset className="grid space-y-5">

          <label className="label">Linkdin Link </label>
          <input type="text" placeholder="Linkdin Link" name="linkdin" className="input" />
          <label className="label">Github Link</label>
          <input type="text" name="github" placeholder="Github Link" className="input" />
          <label className="label">Resume Link </label>
          <input type="text" name="resume" placeholder="Resume Link" className="input" />

      </fieldset>
     <input type="submit" value="Applay" className="btn btn-primary mt-3 w-full"/>
      </form>
    </div>
  );
};

export default Applay;
