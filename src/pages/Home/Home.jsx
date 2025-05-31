import React, { use } from "react";
import Banner from "./Banner";
import Hotjobs from "./Hotjobs";

const jobsPromies = fetch('http://localhost:3000/jobs').then(res=>res.json());
const Home = () => {
 

  return (
    <div>
      <Banner></Banner>
      <Hotjobs jobsPromies={jobsPromies}></Hotjobs>
    </div>
  );
};

export default Home;
