import { useEffect, useState } from "react"
import axios from "axios";
import CustomerNav from '../components/CustomerNav';
import { useNavigate } from "react-router-dom";
const LoanRequests = () => {

    const [data, setData] = useState();

const navigate = useNavigate();

    useEffect(()=>{

      if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "user") {
          navigate("/loginScreen");
      }
     },[])


    useEffect(()=>{
        axios.get(`http://localhost:8080/user/user_loan_details/${window.localStorage.getItem("user_id")}`).then((response) =>{
    console.log("responsedata", response.data)       
                //  console.log("with mapping", item.address)
                    setData(response.data);
            })
        },[])


  return (
    <div>
      <CustomerNav></CustomerNav>
      <h2>Loan Request List</h2>
      <table id="customers">
        <tr>
        <th>Loan Id</th>
       <th>Name</th> 
        <th>Email</th>
        <th>Loan Type</th>
        <th>Resume</th>
        <th>Project Plan</th>
        <th>Personal Credit Report</th>
        <th>Business Credit report</th>
        <th>Financial Statement</th>
        <th>Bank Statement</th>
        <th>Loan Amount</th>
        <th>Loan Tenure</th>
        <th>Status</th>
        <th>Emi Option</th>
        </tr>
        {data?.map((element) => {
          return (
            <tr>
              <td>{element.loan_id}</td>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.loan_type}</td>
              <td><a href="">Resume</a></td>
              <td><a href="">Project Plan</a></td>
              <td><a href="">Personal Credit Report</a></td>
              <td><a href="">Business Credit Report</a></td>
              <td><a href="">Financial Statement</a></td>
              <td><a href="">Bank Statement</a></td>
              <td>{element.loan_amount}</td>
              <td>{element.loan_tenure}</td>
              <td>{element.status}</td>
              <td>{element.emi_option}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default LoanRequests