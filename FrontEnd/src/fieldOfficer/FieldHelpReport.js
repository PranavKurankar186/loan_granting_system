import { useEffect, useState } from "react"
import axios from "axios";
import FieldOfficerNav from "../components/FieldOfficerNav";
import { toast } from 'react-toastify'

const FieldHelpReport=()=>{

    const [data, setData] = useState();
   
    useEffect(()=>{
        axios.get(`http://localhost:8080/fieldofficer/help/${window.localStorage.getItem("user_id")}`).then((response) =>{
    console.log("responsedata", response.data)
    setData(response.data);
  
    if (response.data === null) {
      toast.warning('Report Not Submitted')}
    else if (response.data != null) {
      toast.success('In Help Report List')
    }                
            })
        },[])

       

        return (
            <div>
               <FieldOfficerNav></FieldOfficerNav>
              <h2 className="mb-4 ms-3">Help Report List</h2>
              <table id="customers">
                <tr>
                <th style={{textAlign: 'center'}}>Request Id</th>
               <th style={{textAlign: 'center'}}>Issue</th> 
                <th style={{textAlign: 'center'}}>Date</th>
                <th style={{textAlign: 'center'}}>Description</th>
                <th style={{textAlign: 'center'}}>Comment</th>
                </tr>
                {data?.map((element) => {
                  return (
                    <tr>
                      <td>{element.request_id}</td>
                      <td>{element.issue}</td>
                      <td>{element.date}</td>
                      <td>{element.description}</td>
                      <td>{element.comment}</td>
                    </tr>
                  )
                })}
              </table>
            </div>
          )


}

export default FieldHelpReport