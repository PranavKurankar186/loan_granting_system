
import AdminNav from '../components/AdminNav'
import { useNavigate } from 'react-router'
import React, { useEffect,useState } from 'react'
const AdminDash = () => {

  const navigate =useNavigate();

      //  useEffect(() => {
      //    if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "fieldofficer") {
      //          navigate("/loginScreen");
      //      } 
      //  }, []);

  return (
    <div>
      <AdminNav></AdminNav>
      <h1>Welcome Admin</h1>
        {/* <a href='/customerlist'>customer list</a><br></br>
        <a href='/loanofficerlist'>loan officer list</a><br></br>
        <a href='/fieldofficerlist'>field officer list </a><br></br>
        <a href='/loanrequestlist'>loan requst list</a><br></br>
        <a href='/assignloanofficer'>Assign loan officer</a><br></br>
        <a href='/feedbackquestion'>Feedback Question</a><br></br>
        <a href='/helplist'>Help List</a><br></br>
        <a href='/listbgvfo'>List Background Verification</a><br></br>
        <a href='/listlvfo'>List Loan Verification</a><br></br>
        <a href='/updatebgvfo'>Update Background Verification</a><br></br>
        <a href='/updatelvfo'>Update Loan Verification</a><br></br>
        <a href='/userfeedback'>User Feedback</a><br></br> */}
    </div>
  )
}

export default AdminDash