import React, { use } from 'react';
import { AuthContex } from '../provider/Authcontex';
import { Navigate, useLocation } from 'react-router';

const PrivetRouter = ({children}) => {
    const {user,loading}= use(AuthContex)
    const location = useLocation()
    console.log(location)
    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if(!user){
        return <Navigate to='/signin'state={location.pathname} ></Navigate>
    }
    return (
        <div>
           {children} 
        </div>
    );
};

export default PrivetRouter;