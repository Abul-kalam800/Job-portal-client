
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componets/Navbar/Navbar';
import Footer from '../componets/Footer';


const Rootlayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
          <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
        </div>
    );
};

export default Rootlayout;