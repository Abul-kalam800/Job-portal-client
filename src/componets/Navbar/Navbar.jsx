import React, { use } from "react";
import { Link } from "react-router";
import { AuthContex } from "../../provider/Authcontex";
import Swal from "sweetalert2";

const Navbar = () => {
  const { logOut, user } = use(AuthContex);
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("log out sucessfully");

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your successfully logout",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link to="/">Home</Link>
            <Link to="/myapplication">My application</Link>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">JobPortal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-6">
          <Link to="/">Home</Link>
          {user && <Link to="/myapplication">My-application</Link>}
          {user && <Link to='/addjobs'>Add-jobs</Link>}
          {user && <Link to='/mypostjob'>Mypost-jobs</Link>}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/signin" className="btn">
              SignUp
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
