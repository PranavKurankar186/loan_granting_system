import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router'
import OfficerNav from "../components/OfficerNav";
const AssignLVFList = () => {

    const [data, setData] = useState();
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "fieldofficer") {
    //         navigate("/loginScreen");
    //     } 
    // }, []);

    useEffect(()=>{

         if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "loanofficer") {
             navigate("/loginScreen");
         }
        axios.get(`http://localhost:8080/loanofficer/asignlvf/${window.localStorage.getItem("user_id")}`).then((response) =>{
    console.log("responsedata", response.data)       
                //  console.log("with mapping", item.address)
                    setData(response.data);
            })
        },[])

  return (
    <div>
      <OfficerNav></OfficerNav>
      <h2>Assigned LVF List</h2>
      <table id="customers">
        <tr>
        <th>Loan Id</th>
       <th>Name</th> 
        <th>Update Details</th>
        </tr>
        {data?.map((element) => {
          return (
            <tr>
              <td>{element.loan_id}</td>
              <td>{element.name}</td>
              <td> <button  variant="success" className="btn btn-primary" onClick={(e) =>navigate("/updateLVF")} >
                Update
              </button></td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default AssignLVFList