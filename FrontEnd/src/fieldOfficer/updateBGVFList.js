import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router'
import FieldOfficerNav from "../components/FieldOfficerNav";
const UpdateBGVFList = () => {

    const [data, setData] = useState();
    const navigate = useNavigate()

    useEffect(()=>{
      
        if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "fieldofficer") {
            navigate("/loginScreen");
        }
        axios.get(`http://localhost:8080/fieldofficer/updatebvf_list`).then((response) =>{
    console.log("responsedata", response.data)       
                    setData(response.data);
            })
        },[])


  return (
    <div>
      <FieldOfficerNav></FieldOfficerNav>
      <h2 className="mb-4 ms-3">Updated BGVF List</h2>
      <table id="customers">
        <tr>
          <th>Id</th>
        <th>Loan Id</th>
       <th>Name</th> 
        <th>Verification Update</th>
        <th>Description</th>
        <th>Report</th>
        </tr>
        {data?.map((element) => {
          return (
            <tr>
              <td>{element.update_background_id}</td>
              <td>{element.loan_id}</td>
              <td>{element.user_name}</td>
              <td>{element.verification_update}</td>
              <td>{element.description}</td>
              <td><a href="/viewReport">report</a></td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default UpdateBGVFList 