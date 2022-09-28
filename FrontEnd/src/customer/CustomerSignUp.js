
import React, { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert, Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import Navigation from "../components/Navigation";
import swal from "sweetalert";

const CustomerSignUp = () => {
  const [users, setUsers] = useState([]);
  
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const emailRef = useRef();

  const [error, setError] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [email, setemail] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [dob, setDOB] = useState("");
  const [pan, setPan] = useState("");




  //----ON FORM SUBMIT----
  const handleSubmit  = async(e) => {
    e.preventDefault();

    // password verification
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
    );
    const validation = strongRegex.test(passwordRef.current.value);
    if (validation === false) {
      return setError(
        "invalid password - Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:"
      );
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    else{
      setPassword(passwordRef.current.value)
    setConfirm_password(confirmPasswordRef.current.value)

   
  
    }
  
    
    // console.log(inpval)
  }

  useEffect(() => {
    if(email.length>5){
     axios.post("http://localhost:8080/user/signup",{
        first_name: first_name,
        last_name: last_name,
        user_category: "user",
        password: password,
        confirm_password: confirm_password,
        email: email,
        gender: gender,
        contact: contact,
        dob: dob,
        pan: pan,
        }) .then(response => {  console.log(response.status); if (response.status == 201) swal("Success", "Sign Up Successful", "success");})
        .catch(); 
    }
      
  },[password])
  
  //reset data with reset button
  function resetData(){
    setFirst_name('');
    setLast_name('');
    // setUser_category('');
    setPassword('');
    setConfirm_password('');
    setemail('');
    setGender('');
    setContact('');
    setDOB('');
    setPan('');
  }

  return (
    <>
    <Navigation></Navigation>
      <Container className="signup-container" mt-5 mb-5 pb-4>
        <form onSubmit={handleSubmit}>
          <h1> User Registration</h1>
          <div className="container">
            {error && <Alert variant="danger">{error}</Alert>}
            <InputGroup className="mb-3">
              <InputGroup.Text>First Name</InputGroup.Text>
              <Form.Control
                name="firstName"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
                placeholder="FirstName"
                aria-label="FirstName"
                aria-describedby="basic-addon1"
                required
              />
            </InputGroup>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lastName' onChange={getData} placeholder="Enter LastName" />
      </Form.Group> */}
            <InputGroup className="mb-3">
              <InputGroup.Text>Last Name</InputGroup.Text>
              <Form.Control
                name="lasttName"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
                placeholder="LasttName"
                aria-label="LastName"
                aria-describedby="basic-addon1"
                required
              />
            </InputGroup>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserId</Form.Label>
        <Form.Control type="text" name='userId' onChange={getData} placeholder="Enter UserId" />
      </Form.Group> */}
            {/* <InputGroup className="mb-3">
              <InputGroup.Text>UserId</InputGroup.Text>
              <Form.Control
                name="userId"
                value={user_category}
                onChange={(e) => setUser_category(e.target.value)}
                placeholder="UserId"
                aria-label="UserId"
                aria-describedby="basic-addon1"
                required
              />
            </InputGroup> */}
            <InputGroup className="mb-3" controlId="formBasicPassword">
              <InputGroup.Text>Password</InputGroup.Text>
              <Form.Control
                type="password"
                name="password"
                ref={passwordRef}
                placeholder="set your Password"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3" controlId="formBasicPassword">
              <InputGroup.Text>Confirm Password</InputGroup.Text>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder=" type your Password again"
                ref={confirmPasswordRef}
                required
              />
            </InputGroup>
            <InputGroup className="mb-3" controlId="formBasicEmail">
              <InputGroup.Text>Email id</InputGroup.Text>
              <Form.Control
                type="email"
                name="emailId"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="enter your email"
                required
              />
            </InputGroup>
            <InputGroup
              className="mb-3"
              name="gender"
              aria-label="Gender"
              aria-describedby="basic-addon1"
              required
            >
              <InputGroup.Text>Gender</InputGroup.Text>

              <select name="gender" id="gender" defaultValue="Select fruit" onChange={(e) => setGender(e.target.value)}>
              <option value="select">Select a Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
              </select>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Contact No</InputGroup.Text>
              <Form.Control
                type="number"
                name="contactNo"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter mobile no"
                aria-label="ContactNo"
                aria-describedby="basic-addon1"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Dob</InputGroup.Text>
              <Form.Control
                type="date"
                name="dob"
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
                placeholder="Enter date of birth"
                aria-label="DOB"
                aria-describedby="basic-addon1"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Pan No</InputGroup.Text>
              <Form.Control
                type="text"
                name="panNo"
                value={pan}
                onChange={(e) => setPan(e.target.value)}
                placeholder="Enter PanNo"
                aria-label="PanNo"
                aria-describedby="basic-addon1"
                required
              />
            </InputGroup>
            <table width="90%" style={{ marginLeft: "8px" }}>
              <td>
                <Button variant="primary" onClick={resetData} type="submit">
                  Reset
                </Button>
              </td>
              <td>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </td>
            </table>
          </div>
        </form>
      </Container>
    </>
  );
};

export default CustomerSignUp;
