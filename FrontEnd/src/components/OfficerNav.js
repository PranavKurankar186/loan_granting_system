import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import{ Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
//import NavDropdown from 'react-bootstrap/NavDropdown'

const OfficerNav = () => {

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
            <Nav.Link href='/loanOfficerRequests'>Loan Request</Nav.Link>
            <Nav.Link href="/assignLVF">Assign LVF</Nav.Link>
            <Nav.Link href='/updateLVFList'>LVF Update</Nav.Link>
            <Nav.Link href='/loanhelpReport'>Help</Nav.Link>
            <Nav.Link href='/loanhelpRequest'>Help Report</Nav.Link>
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
export default OfficerNav