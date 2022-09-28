import React, { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert, Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import CustomerNav from "../components/CustomerNav";
import {Divider, Input } from 'antd';
import swal from "sweetalert";

const HelpRequest = () => {

    const [issue, setIssue] = useState("");
    const [date, setDate] = useState("2022-09-22");
    const [description, setDescription] = useState("");


    

    const sendRequest = () =>{
        var body={ issue,date,description}
        axios.post(`http://localhost:8080/user/help_request/${window.localStorage.getItem("user_id")}`,body)
        .then(response => {  console.log(response.status); if (response.status == 201) swal("Success", "Help Request Sent Successfully", "success");})
        .catch(err=>swal("error"));
    }


return (
    <>
<CustomerNav/>
<h3>Help Request</h3>
<div className="d-flex justify-content-center align-items-center mt-5">
<div className="FHR pt-5">
<div className="mb-3">
  <label className="me-2">Issue</label>
     <Input type="text" style={{width:"40%"}}  placeholder="issue" onChange={(e) => setIssue(e.target.value)} ></Input>
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



</>
  )
}

export default HelpRequest