import React, { Suspense, use } from 'react';
import Joblist from './Joblist';
import { AuthContex } from '../../provider/Authcontex';
import { jobscreateBypromies } from '../../shared/myjobList';

const Mypostjob = () => {
    const {user}= use(AuthContex)
    return (
        <div>
            <h1 className='text-4xl font-semibold my-5'>My post job</h1>
            <Suspense>
                <Joblist jobscreateBypromies={jobscreateBypromies(user.email)}></Joblist>
            </Suspense>
        </div>
    );
};

export default Mypostjob;