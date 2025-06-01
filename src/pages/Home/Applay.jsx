import React, { use, useContext } from "react";
import { AuthContex } from "../../provider/Authcontex";
import axios from "axios";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const Applay = () => {
  const { id: jobId } = useParams();

  const { user } = useContext(AuthContex);
  const handleJobApplay = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkdin = form.linkdin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkdin, github, resume);
    const application = {
      jobId,
      applicant: user.email,
      linkdin,
      github,
      resume,
    };
    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        form.reset();

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your job applay successfully done",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="text-5xl my-10 font-semibold">Job applay</h1>
      <form onSubmit={handleJobApplay} className="max-w-sm mx-auto shadow-2xl">
        <fieldset className="grid space-y-5">
          <label className="label">Linkdin Link </label>
          <input
            type="text"
            placeholder="Linkdin Link"
            name="linkdin"
            className="input"
            required
          />
          <label className="label">Github Link</label>
          <input
            type="text"
            name="github"
            placeholder="Github Link"
            className="input"
            required
          />
          <label className="label">Resume Link </label>
          <input
            type="text"
            name="resume"
            placeholder="Resume Link"
            className="input"
            required
          />
        </fieldset>
        <input
          type="submit"
          value="Applay"
          className="btn btn-primary mt-3 w-full"
        />
      </form>
    </div>
  );
};

export default Applay;
