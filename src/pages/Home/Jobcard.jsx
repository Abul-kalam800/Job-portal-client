import { div, span } from 'motion/react-client';
import React from 'react';
import { Link } from 'react-router';

const Jobcard = ({job}) => {
    


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
                {job.requirements.map((req,index)=>
                    <span key={index} className='ml-5'>{req}</span>
                )}
            </div>

            <div className='flex justify-between'>
                <button>{job.jobType}</button>
                 <Link to={`/jobs/${job._id}`} className='btn btn-primary'>Job Detaisl</Link>
            </div>
        </div>
    );
};

export default Jobcard;