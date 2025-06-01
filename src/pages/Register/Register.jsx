 import React, { useContext } from 'react';
import { AuthContex } from '../../provider/Authcontex';
 
 const Register = () => {
    const {creatUser}=useContext(AuthContex)
    const handleRegister = (e)=>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        // creat user with firebase 
        creatUser(email,password)
        .then(result=>{
            console.log(result.user)

        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10 mx-auto">
            <h1  className="text-5xl font-semibold textl-center">Register now</h1>
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <label className="label">Name</label>
              <input type="name" name='name' className="input" placeholder="Name" />
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4 w-full" type='submit'>Register</button>
            </form>
          </div>
        </div>
    );
 };
 
 export default Register;