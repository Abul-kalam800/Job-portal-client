import React, { use } from 'react';
import Jobcard from './Jobcard';

const  Hotjobs = ({jobsPromies }) => {
    const jobs = use(jobsPromies);
    console.log(jobs)
  
    return (
        <div className='my-30'>
            <h1 className='text-5xl font-semibold text-center '>Hot jobs of day</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-auto mt-20'>
            {jobs.map(job=><Jobcard key={job._id} job={job}></Jobcard>)}
            </div>
        </div>
    );
};

export default Hotjobs;