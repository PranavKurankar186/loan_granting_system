import React, { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert, Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import CustomerNav from "../components/CustomerNav";

const AddFeedback1 = () => {

    const [user_feedback, setUserfeedback] = useState("");
   // const[feedback_id,setFeedbackId]=useState("");
    

    const sendRequest = () =>{
        var body={user_feedback}
        axios.post(`http://localhost:8080/user/addfeedback/${window.localStorage.getItem("user_id")}/`,body)
        . then(response=>console.log(response.data)) 
        .catch()
    }


return (
    <>
<CustomerNav/>
<h1>ADD FEEDBACK</h1>

{/* <InputGroup className="mb-3">
              <Form.Control
                type="text"
                onChange={(e) => setFeedbackId(e.target.value)}
                placeholder="Enter Feedback Question Id"
                aria-label="Feedback Question Id"
                aria-describedby="basic-addon1"
                required
              />
            </InputGroup> */}

<InputGroup className="mb-3">
              <Form.Control
                type="text"
                onChange={(e) => setUserfeedback(e.target.value)}
                placeholder="Enter Feedback"
                aria-label="Add Feedback"
                aria-describedby="basic-addon1"
                required
              />
            </InputGroup>

           {/* <textarea  placeholder="description" onChange={(e) =>  setDescription(e.target.value)}></textarea> */}

            <Button variant="primary" type="submit" onClick={sendRequest}>
                  Submit
                </Button>



</>
  )
}

export default AddFeedback1