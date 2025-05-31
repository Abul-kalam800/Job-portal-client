import { div, span } from 'motion/react-client';
import React from 'react';

const Jobcard = ({job}) => {
    console.log(job)
    return (
        <div className='p-5 '>
            <div className='flex gap-4 items-center'>
                <img src={job.company_logo} alt="" />
                <h3>{job.company}</h3>

            </div>
            <h1 className='text-4xl'>{job.title}</h1>
            
           
           
            <p className='my-5'>{job.category}</p>
            <p className='my-5'>{job.description}</p>
            <div className='my-5'>
                {job.requirements.map(req=>
                    <span className='ml-5'>{req}</span>
                )}
            </div>

            <div className='flex justify-between'>
                <button>{job.jobType}</button>
                <button className='btn bg-blue-600 '>applay Now</button>
            </div>
        </div>
    );
};

export default Jobcard;