import React, { Suspense, useContext } from 'react';
import ApplicationList from '../../componets/applicationlist/ApplicationList';
import { applicationPromies } from '../../shared/Applicationlist';
import { AuthContex } from '../../provider/Authcontex';

const Myapplication = () => {
   const {user}=useContext(AuthContex)
    return (
        <div>
            <h1 className='text-5xl text-center font-semibold my-5'>My Application List</h1>
           <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
             <ApplicationList applicationPromies={applicationPromies(user.email)} ></ApplicationList>
           </Suspense>
        </div>
    );
};

export default Myapplication;