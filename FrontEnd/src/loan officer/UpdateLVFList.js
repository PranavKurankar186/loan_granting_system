import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router'
import OfficerNav from "../components/OfficerNav";
const UpdateLVFList = () => {

    const [data, setData] = useState();
    const navigate = useNavigate()

    useEffect(()=>{
      
        if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "loanofficer") {
            navigate("/loginScreen");
        }
        axios.get(`http://localhost:8080/loanofficer/updatelvf_list`).then((response) =>{
    console.log("responsedata", response.data)       
                    setData(response.data);
            })
        },[])


  return (
    <div>
      <OfficerNav></OfficerNav>
      <h2>Updated LVF List</h2>
      <table id="customers">
        <tr>
          <th>Id</th>
        <th>User Loan Id</th>
        <th>Verification Update</th>
        <th>Description</th>
        <th>Status</th>
        <th>Report</th>
        </tr>
        {data?.map((element) => {
          return (
            <tr>
              <td>{element.update_loan_id}</td>
              <td>{element.loan_id}</td>
              <td>{element.verification_update}</td>
              <td>{element.description}</td>
              <td>{element.status}</td>
              <td><a href="/viewLoanReport">report</a></td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default UpdateLVFList 