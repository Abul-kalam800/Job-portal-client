import React, { use } from "react";
import { AuthContex } from "../../provider/Authcontex";
import { useLocation, useNavigate } from "react-router";

const Signin = () => {
    const {signinUser}= use(AuthContex)
    const location = useLocation();
    const navigation = useNavigate();
    const from = location.state ||'/'
     const handleLogin =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        // signin user 
        signinUser(email,password)
        .then(result=>{
            console.log(result.user)
            alert('sign in successfull')
            navigation(from)
        })
        .catch(error =>{
            console.log(error.message)
        })
        
     }
  return (
  
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10 mx-auto">
         <h1  className="text-5xl font-semibold textl-center">Login now</h1>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4 w-full" type="submit">Login</button>
            </form>
          </div>
        </div>
      
    );
  
};

export default Signin;
