import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router'
import FieldOfficerNav from "../components/FieldOfficerNav";
const AssignBGVFList = () => {

    const [data, setData] = useState();
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "fieldofficer") {
    //         navigate("/loginScreen");
    //     } 
    // }, []);

    useEffect(()=>{

         if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "fieldofficer") {
             navigate("/loginScreen");
         }
        axios.get(`http://localhost:8080/fieldofficer/asignbvf/${window.localStorage.getItem("user_id")}`).then((response) =>{
    console.log("responsedata", response.data)       
                //  console.log("with mapping", item.address)
                    setData(response.data);
            })
        },[])

  return (
    <div>
      <FieldOfficerNav></FieldOfficerNav>
      <h2 className="mb-4 ms-3">Assigned BGVF List</h2>
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
              <td> <button  variant="success" className="btn btn-primary" onClick={(e) =>navigate("/updateBGVF")} >
                Update
              </button></td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default AssignBGVFList