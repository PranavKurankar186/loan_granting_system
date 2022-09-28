
import React, { useEffect, useState } from 'react';
import Button from "react-bootstrap/Button";
import { Alert, Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import axios from "axios";
import CustomerNav from '../components/CustomerNav';
import swal from 'sweetalert';
import { useNavigate } from 'react-router'


const ApplyLoan = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setemail] = useState("");
    const [resume, setResume] = useState("");
    const [project_plan, setProjectPlan] = useState("");
    const [personal_credit_report, setPersonalCreditReport] = useState("");
    const [business_credit_report, setBusinessCreditReport] = useState("");
    const [financial_statement, setFinancialStatement] = useState("");
    const [bank_statement, setBankStatement] = useState("");
    const [loan_amount, setLoanAmount] = useState("");
    const [loan_tenure, setLoanTenure] = useState("");
    const [EMI_option, setEmiOption] = useState("1 month");
    const [address, setAddress] = useState("");

    const navigate = useNavigate();


    useEffect(() => {
      if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "user") {
        navigate("/loginScreen");
      }
     })



const handleName=(event)=>{
  setName(event.target.value);
}

const handlePhone=(event)=>{
  setPhone(event.target.value);
}
const handleEmail=(event)=>{
  setemail(event.target.value);
  console.log(EMI_option);
}
const handleLoanAmount=(event)=>{
  setLoanAmount(event.target.value);
}

const handleLoanTenure=(event)=>{
  setLoanTenure(event.target.value);
}
const handleEmi=(event)=>{
  setEmiOption(event.target.value);
}
const handleAddress=(event)=>{
  setAddress(event.target.value);
}



const onFileSelect = (event) => {
  setResume(event.target.files[0])
  setProjectPlan(event.target.files[0])
  setPersonalCreditReport(event.target.files[0])
  setBusinessCreditReport(event.target.files[0])
  setFinancialStatement(event.target.files[0])
  setBankStatement(event.target.files[0]);
}




     const handleSubmission=(e)=>{
       e.preventDefault();
      const formData = new FormData();
      formData.append('name',name)
      formData.append('phone',phone)
      formData.append('email',email)
      formData.append('resume',resume)
      formData.append('project_plan',project_plan)
      formData.append('personal_credit_report',personal_credit_report)
      formData.append('business_credit_report',business_credit_report)
      formData.append('financial_statement',financial_statement)
      formData.append('bank_statement',bank_statement)
      formData.append('loan_amount',loan_amount)
      formData.append('loan_tenure',loan_tenure)
      formData.append('EMI_option',EMI_option)
      formData.append("address",address)
                                      //1st argumet 'imageFile' name must be matches with spring-boot requeat param name MultipartFile imageFile
      console.log(name);
      console.log(phone);
      console.log(email);
      console.log(resume);
      console.log(project_plan);
      console.log(personal_credit_report);
      console.log(business_credit_report);
      console.log(financial_statement);
      console.log(bank_statement);
      console.log(loan_amount);
      console.log(loan_tenure);
      console.log(EMI_option);
      console.log(address);

      //console.log(formData);
    
      axios.post(`http://localhost:8080/user/apply_loan/${window.localStorage.getItem("user_id")}`,formData, {
        headers:
          { 'Content-type': 'multipart/form-data;boundary=<calculated when request is sent>' }
        })
      .then(response => {  console.log(response.status); if (response.status == 201) swal("Success", "Applied For Loan Successfully", "success");})
      .catch(err=>alert("error"));
  }
    
    

    
  return (

        <>
        <CustomerNav></CustomerNav>
          <Container className="signup-container" mt-5 mb-5 pb-4>
            <form>
              <h1> Apply Loan</h1>
              <div className="container">
                
                <InputGroup className="mb-3">
                  <InputGroup.Text>Name</InputGroup.Text>
                  <Form.Control
                    name="name"
                   
                    onChange={handleName}
                    placeholder="name"
                    aria-label="name"
                    aria-describedby="basic-addon1"
                    required
                  />
                </InputGroup>
                
                <InputGroup className="mb-3">
                  <InputGroup.Text>Phone</InputGroup.Text>
                  <Form.Control
                    type="number"
                    name="phone"
                  
                    onChange={handlePhone}
                    placeholder="Phone"
                    aria-label="Phone"
                    aria-describedby="basic-addon1"
                    required
                  />
                </InputGroup>
                
                <InputGroup className="mb-3" controlId="formBasicEmail">
                  <InputGroup.Text>Email id</InputGroup.Text>
                  <Form.Control
                    type="email"
                    name="email"
                    
                    onChange={handleEmail}
                    placeholder="enter your email"
                    required
                  />
                </InputGroup>
                
                <InputGroup className="mb-3">
                  <InputGroup.Text>Resume</InputGroup.Text>
                  <Form.Control
                   
                    type="file"
                    accept="resume/*"
                    name="resume"
                    
                    onChange={onFileSelect}
                    placeholder="choose file"
                    required
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Project Plan</InputGroup.Text>
                  <Form.Control
                    type="file"
                    accept="project_plan/*"
                    name="project_plan"
                    
                    onChange={onFileSelect}
                    placeholder="choose file"
                    required
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Personal Credit Report</InputGroup.Text>
                  <Form.Control
                    type="file"
                    accept="personal_credit_report/*"
                    name="personal_credit_report"
                  
                    onChange={onFileSelect}
                    placeholder="choose file"
                    required
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Business Credit Report</InputGroup.Text>
                  <Form.Control
                    type="file"
                    accept="business_credit_report/*"
                    name="business_credit_report"
                    
                    
                    onChange={onFileSelect}
                    placeholder="choose file"
                    required
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Financial Statement</InputGroup.Text>
                  <Form.Control
                    type="file"
                    accept="financial_statement/*"
                    name="financial_statement"
                    
                    onChange={onFileSelect}
                    placeholder="choose file"
                    required
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Bank Statement</InputGroup.Text>
                  <Form.Control
                    type="file"
                    accept="bank_statement/*"
                    name="bank_statement"
            
                    onChange={onFileSelect}
                    placeholder="choose file"
                    required
                  />
                </InputGroup>

                <InputGroup className="mb-3">
              <InputGroup.Text>Loan Amount</InputGroup.Text>
              <Form.Control
              
                type="number"
                name="loan_amount"
               
                onChange={handleLoanAmount}
                placeholder="Enter Loan Amount"
                aria-label="loan_amount"
                aria-describedby="basic-addon1"
                required
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Loan Tenure</InputGroup.Text>
              <Form.Control
          
                type="number"
                name="loan_tenure"
                
                onChange={handleLoanTenure}
                placeholder="Enter Loan Tenure"
                aria-label="loan_tenure"
                aria-describedby="basic-addon1"
                required
              />
            </InputGroup>
               
                 <InputGroup
                  className="mb-3"
                  name="EMI_option"
                  aria-label="EMI_option"
                  aria-describedby="basic-addon1"
                  required
                >
                  <InputGroup.Text>Emi Option</InputGroup.Text> 
    
                  <select name="EMI_option" id="EMI_option"  onChange={handleEmi}>
                  <option value="select">Select EMI Option</option>
                    <option value="3 months">3 months</option>
                    <option value="6 months">6 months</option>
                    <option value="9 months">9 months</option>
                  </select>
                 </InputGroup> 

                <InputGroup className="mb-3">
                  <InputGroup.Text>Address</InputGroup.Text>
                  <Form.Control
                    name="address"
                    
                    onChange={handleAddress}
                    placeholder="Address"
                    aria-label="address"
                    aria-describedby="basic-addon1"
                    required
                  />
                </InputGroup>
                
                    <Button variant="primary" type="submit" onClick={handleSubmission}>
                      Submit
                    </Button>
              </div>
            </form>
          </Container>
        </>
  )
}

export default ApplyLoan