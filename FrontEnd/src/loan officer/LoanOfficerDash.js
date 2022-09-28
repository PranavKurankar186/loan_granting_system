
import React from 'react'
import { useNavigate} from 'react-router'
import { useEffect } from 'react';
import CustomerNav from '../components/CustomerNav';
import OfficerNav from '../components/OfficerNav';



const LoanOfficerDash = () => {

  const navigate = useNavigate()

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user_id")) === null) {
      navigate('/loginScreen')
    } 
      
}, [])


  return (
    <div>
      <OfficerNav></OfficerNav>



      <h1>Welcome Loan Officer</h1>
        {/* <ul>
            <a href="/applyLoan"><li title="open apply loan">❤</li></a><br/>
            <a href='/appliedLoan'><li title='open apllied loan list'>😘</li></a><br/>
            <a href='/helpRequest'>help request</a>
          <br/>
            <a href='/loanRequest'>loan requests</a><br/>
            <a href='/helpReport'>help report</a><br/>
            <li>💋</li>
            <li>🌹</li>
        </ul> */}
    </div>
  )
}

export default LoanOfficerDash