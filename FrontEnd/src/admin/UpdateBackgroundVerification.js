import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AdminNav from '../components/AdminNav';
import { useNavigate } from 'react-router-dom';

const UpdateBackgroundVerification = () => {

    const [data, setData] = useState();

    const navigate=useNavigate();
    useEffect(() => {
      if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "admin") {
            navigate("/loginScreen");
        } 
    }, []);
    useEffect(()=>{
        axios.get(`http://localhost:8080/admin/updateBGverification`).then((response) =>{
    console.log("responsedata", response.data)       
                //   console.log("with mapping", item.address)
                    setData(response.data);
            })
        },[])

  return (
    <div>
      <AdminNav></AdminNav>
         <h2 className="mb-4 ms-3 mt-3">Update Background Verification List</h2>
    <table style={{border: '2px solid'}} id="customers" >
      <tr>
     
      <th style={{textAlign: 'center'}}>Loan Id</th>
      <th style={{textAlign: 'center'}}>Applicant Name</th>
      <th style={{textAlign: 'center'}}>Field Officer Name</th>
      <th style={{textAlign: 'center'}}>Status</th>
      <th style={{textAlign: 'center'}}>Description</th>
      <th style={{textAlign: 'center'}}>Report</th>
      
      
      </tr>

      {data?.map((element) => {
        return (
          <tr>
            <td>{element[0]}</td>
            <td>{element[1]}</td>
            <td>{element[2]}</td>
            <td>{element[3]}</td>
            <td>{element[4]}</td>
            <td><a href="/viewFieldReportAdmin">report</a></td>
            

            </tr>
             )
            })}
          </table>

    </div>
  )

}

export default UpdateBackgroundVerification