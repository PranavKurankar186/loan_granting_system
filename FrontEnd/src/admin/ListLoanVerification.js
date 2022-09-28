import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './DisplayCustomer.css'
import AdminNav from '../components/AdminNav';
import { useNavigate } from 'react-router-dom';

const ListLoanVerification = () => {
  
    const [data, setData] = useState();

    const navigate = useNavigate();

    useEffect(() => {
      if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "admin") {
            navigate("/loginScreen");
        } 
    }, []);

    useEffect(()=>{
        axios.get(`http://localhost:8080/admin/listlvfo`).then((response) =>{
    console.log("responsedata", response.data)       
                //   console.log("with mapping", item.address)
                    setData(response.data);
            })
        },[])

  return (
    <div>
      <AdminNav></AdminNav>
         <h2 className="mb-4 ms-3 mt-3">Loan Verification List</h2>
    <table style={{border: '2px solid'}} id="customers">
      <tr>
     
      <th style={{textAlign: 'center'}}>Loan Id</th>
      <th style={{textAlign: 'center'}}>Applicant Name</th>
      <th style={{textAlign: 'center'}}>Loan Officer Name</th>
      
      
      </tr>

      {data?.map((element) => {
        return (
          <tr>
            {/* <td>{element.response.data[0]}</td>
            <td>{element.name}</td>
            <td>{element.loan_officer_name}</td> */}
            <td>{element[0]}</td>
            <td>{element[1]}</td>
            <td>{element[2]}</td>

            </tr>
             )
            })}
          </table>

    </div>
  )

}

export default ListLoanVerification