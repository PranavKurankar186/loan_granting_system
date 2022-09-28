import React, { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert, Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import swal from "sweetalert";
import OfficerNav from "../components/OfficerNav";
import {Divider, Input } from 'antd';



const LoanHelpRequest = () => {

    const [issue, setIssue] = useState("");
    const [date, setDate] = useState("2022-08-23");
    const [description, setDescription] = useState("");


    const sendRequest = () =>{
        var body={ issue,date,description}
        axios.post(`http://localhost:8080/loanofficer/help_request/${window.localStorage.getItem("user_id")}`,body)
        . then(response => {  console.log(response.status); if (response.status == 201) swal("Success", "Request Submitted Successfully", "success");}) 
        .catch(error => {  console.log(error); swal("Error", "Request Not Submitted", "error");})

        
       

    }


return (
    <>
<OfficerNav></OfficerNav>
<h3>Help Request</h3>

<div className="d-flex justify-content-center align-items-center mt-5">
<div className="FHR pt-5">
<div className="mb-3">
  <label className="me-2">Issue :</label>
     <Input type="text" style={{width:"40%"}} placeholder="issue" onChange={(e) => setIssue(e.target.value)} ></Input>
  </div>
<InputGroup className="mb-3 w-50 m-auto">

              <InputGroup.Text>Dob</InputGroup.Text>
              <Form.Control
               
                type="date"
                onChange={(e) => setDate(e.target.value)}
                placeholder="Enter date of birth"
                aria-label="Date"
                aria-describedby="basic-addon1"
                required
              />
            </InputGroup>

    <div>
    <textarea  placeholder="description" rows="4" cols="50" onChange={(e) =>  setDescription(e.target.value)}></textarea>  
    </div>
            

            <Button className="mt-2" variant="primary" type="submit" onClick={sendRequest}>
                  Submit
                </Button>

                </div>
                </div>


{/* <InputGroup className="mb-3">




     <input type="text" placeholder="issue" onChange={(e) => setIssue(e.target.value)} ></input>
             

              <InputGroup.Text>Dob</InputGroup.Text>
              <Form.Control
                type="date"
                onChange={(e) => setDate(e.target.value)}
                placeholder="Enter date of birth"
                aria-label="Date"
                aria-describedby="basic-addon1"
                required
              />
            </InputGroup>

            <textarea  placeholder="description" onChange={(e) =>  setDescription(e.target.value)}></textarea>

            <Button variant="primary" type="submit" onClick={sendRequest}>
                  Submit
                </Button> */}



</>
  )
}

export default LoanHelpRequest