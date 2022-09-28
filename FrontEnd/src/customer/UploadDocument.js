import React from 'react'
import axios from 'axios'

import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import swal from 'sweetalert'

const UploadDocument = () => {

    const [resume, setResume] = useState("");
    const [project_plan, setProjectPlan] = useState("");
    const [personal_credit_report, setPersonalCreditReport] = useState("");
    const [business_credit_report, setBusinessCreditReport] = useState("");
    const [financial_statement, setFinancialStatement] = useState("");
    const [bank_statement, setBankStatement] = useState("");



  const onFileSelect = (event) => {
    setResume(event.target.files[0])
    setProjectPlan(event.target.files[0])
    setPersonalCreditReport(event.target.files[0])
    setBusinessCreditReport(event.target.files[0])
    setFinancialStatement(event.target.files[0])
    setBankStatement(event.target.files[0]);
  }

  const addDocumentToDB = () => {
   
      const data = new FormData()
   
      data.append('resume',resume)
      data.append('project_plan',project_plan)
      data.append('personal_credit_report',personal_credit_report)
      data.append('business_credit_report',business_credit_report)
      data.append('financial_statement',financial_statement)
      data.append('bank_statement',bank_statement)

      // const documentmaster=sessionStorage.getItem('user')
      // const temp=JSON.parse(documentmaster)


      sessionStorage.setItem('documentMaster', JSON.stringify(data.data));
      // send the Child info to the API
      axios.post(`http://localhost:8080/user/addDocument/${window.localStorage.getItem("user_id")}`, data) 
      .then(response => {  console.log(response.status); if (response.status == 201) swal("Success", "Applied For Loan Successfully", "success");})
      .catch(err=>alert("error"));
    
  }



  return (
    <div>
      <div className="container" ><br></br>
      <h1 className="page-title">Upload Document</h1>


      <div className="col-10">
        <div className="mb-3">
          <label htmlFor="">resume</label>
          <input
            accept="resume/*"
            onChange={onFileSelect}
            type="file"
            className="form-control"
          />
        </div></div>

      <div className="col-10">
        <div className="mb-3">
          <label htmlFor="">Project Plan</label>
          <input
            accept="project_plan/*"
            onChange={onFileSelect}
            type="file"
            className="form-control"
          />
        </div></div>

      <div className="col-10">
        <div className="mb-3">
          <label htmlFor="">Personal Credit Report</label>
          <input
            accept="personal_credit_report/*"
            onChange={onFileSelect}
            type="file"
            className="form-control"
          />
        </div></div>

      <div className="col-10">
        <div className="mb-3">
          <label htmlFor="">Business Credit Report</label>
          <input
            accept="business_credit_report/*"
            onChange={onFileSelect}
            type="file"
            className="form-control"
          />
        </div></div>
      <div className="col-10">
        <div className="mb-3">
          <label htmlFor="">Financial Statement</label>
          <input
            accept="financial_statement/*"
            onChange={onFileSelect}
            type="file"
            className="form-control"
          />
        </div></div>


        <div className="col-10">
        <div className="mb-3">
          <label htmlFor="">Bank Statement</label>
          <input
            accept="bank_statement/*"
            onChange={onFileSelect}
            type="file"
            className="form-control"
          />
        </div></div>


          <div className="col-1">
      <div className="mb-3">
        <button onClick={addDocumentToDB} className="btn btn-success">
          Submit
        </button>{'   '}
        </div>
        
        <Link to="/parentdash">
              <a className="btn btn-warning">Back</a>
            </Link><br></br></div>
            </div>
    </div>


  );
};


export default UploadDocument