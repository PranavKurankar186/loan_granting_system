import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useQuery} from 'react-query'
import { Button } from 'bootstrap'
import Table from 'react-bootstrap/Table'

// import signinuser from '..common/LoginScreen'

const AppliedLoans = () => {
    const [data, setData] = useState();
    
    let  session_data = sessionStorage.getItem('user_id')
    
 useEffect(()=>{
    axios.get(`http://localhost:8080/user/user_loan_details/${session_data}`).then((response) =>{
// console.log("responsedata", response.data)       
            //  console.log("with mapping", item.address)
                setData(response.data);
        })
    },[])

    // console.log(data)

  return (
    <>
    {/* <a>click</a> */}

    <thead>
          <tr>
            <th>#</th>
            <th>Loan Id</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>Email Id</th>
            <th>Resume</th>
            <th>Project Plan</th>
            <th>Personal Credit Report</th>
            <th>Business Credit Report</th>
            <th>Financial Statement</th>
            <th>Bank Statement</th>
            <th>Loan Amount</th>
            <th>Loan Tenure</th>
            <th>Emi Option</th>
            <th>Status</th>
          </tr>
        </thead>
  
    {data?.map((e)=>{
        const {loan_id,name,phone,email,resume,project_plan,personal_credit_report,business_credit_report,financial_statement,bank_statement,loan_amount,loan_tenure,emi_option,status} = e
        return (
            <>
            {/* <ul>
                <li>{loan_id}</li>
                <li>{name}</li>
                <li>{phone}</li>
                <li>{email}</li>
                <li>{resume}</li>
                <li>{project_plan}</li>
                <li>{personal_credit_report}</li>
                <li>{business_credit_report}</li>
                <li>{financial_statement}</li>
                <li>{bank_statement}</li>
                <li>{loan_amount}</li>
                <li>{loan_tenure}</li>
                <li>{emi_option}</li>
                <li>{status}</li>



            </ul> */}


            <Table responsive="sm">
        {/* <thead>
          <tr>
            <th>#</th>
            <th>Loan Id</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>Email Id</th>
            <th>Resume</th>
            <th>Project Plan</th>
            <th>Personal Credit Report</th>
            <th>Business Credit Report</th>
            <th>Financial Statement</th>
            <th>Bank Statement</th>
            <th>Loan Amount</th>
            <th>Loan Tenure</th>
            <th>Emi Option</th>
            <th>Status</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td>1</td>
            <td>{loan_id}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{resume}</td>
            <td>{project_plan}</td>
            <td>{personal_credit_report}</td>
            <td>{business_credit_report}</td>
            <td>{financial_statement}</td>
            <td>{bank_statement}</td>
            <td>{loan_amount}</td>
            <td>{loan_tenure}</td>
            <td>{emi_option}</td>
            <td>{status}</td>
          </tr>
         
        </tbody>
      </Table>
            </>
        );
    })}

    
    </>
  )
}

export default AppliedLoans