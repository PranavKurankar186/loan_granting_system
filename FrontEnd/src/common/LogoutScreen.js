import "../App.css"
import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
const LogoutScreen = () => {

    const [st,setSt] =useState(JSON.parse(st));
    const navigate = useNavigate()

    useEffect(() => {
        if(st)
        changeStatus(st);
      }, []);

const changeStatus= (st) => {
     window.localStorage.removeItem("firstName");
     window.localStorage.removeItem("lastName");
     window.localStorage.removeItem("email");
     window.localStorage.removeItem("user_id");
     window.localStorage.removeItem("user_category");

    
     navigate('/loginScreen')
  } 



      return (
        <div>
           <h5>!!! Successfully Logout !!!</h5>
        </div>
     );
      
}
export default LogoutScreen