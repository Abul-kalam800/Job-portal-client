import React, { useEffect, useState } from 'react';
import { AuthContex } from './Authcontex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const creatUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signinUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const userInfo = {
      creatUser,
      signinUser,
      user,
      setUser  
    }
  useEffect(()=>{
  const unsubcrid =  onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
            setUser(currentUser)
            console.log(currentUser)

        }

    })
    return ()=>{
        unsubcrid();
    }

  },[])
    return (
        <AuthContex value={userInfo}>
            {children}
        </AuthContex>
    );
};

export default AuthProvider;