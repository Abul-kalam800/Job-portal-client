import React, { useEffect, useState } from 'react';
import { AuthContex } from './Authcontex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState()
    const creatUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signinUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    const userInfo = {
      creatUser,
      signinUser,
      user,
      setUser ,
      logOut ,
      loading,
      setLoading,
    }
  useEffect(()=>{
  const unsubcrid =  onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
            setUser(currentUser)
            setLoading(false)
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