import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import{ Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
//import NavDropdown from 'react-bootstrap/NavDropdown'

const AdminNav = () => {

  const navigate = useNavigate()

 const changeStatus=() => {
       window.localStorage.removeItem("firstName");
       window.localStorage.removeItem("lastName");
       window.localStorage.removeItem("email");
       window.localStorage.removeItem("user_id");
       window.localStorage.removeItem("user_category");
      navigate('/loginscreen');
    }



    return(
        <>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/customerlist'>customers</Nav.Link>
            <Nav.Link href='/loanofficerlist'>LoanOfficers</Nav.Link>
            <Nav.Link href='/fieldofficerlist'>FieldOfficers</Nav.Link>
            <Nav.Link href='/loanrequestlist'>LoanRequest</Nav.Link>
            <Nav.Link href='/assignfieldofficer'>AssignBGVFO</Nav.Link>
            <Nav.Link href='/listbgvfo'>List BGVFO</Nav.Link>
            <Nav.Link href='/updatebgvfo'>BGVF Update</Nav.Link>
            <Nav.Link href='/assignloanofficer'>AssignLVFO</Nav.Link>
            <Nav.Link href='/listlvfo'>List LVFO</Nav.Link>
            <Nav.Link href='/updatelvfo'>LVF Update</Nav.Link>
            <Nav.Link href='/helplist'>Help</Nav.Link>
            <Nav.Link href='/addFeedback'>Add FB</Nav.Link>
            <Nav.Link href='/feedbackquestion'>FB Question</Nav.Link>  
            <Nav.Link href='/userfeedback'>User FB</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="Profile">My Profile</Nav.Link>
            <Nav.Link href="ChangePassword">Change Password</Nav.Link>
            <Nav.Link href="#" onClick={changeStatus}>Logout</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default AdminNav