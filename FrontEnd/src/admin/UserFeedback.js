import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AdminNav from '../components/AdminNav';
import { useNavigate } from 'react-router-dom';



const UserFeedback = () => {
  

    const [data, setData] = useState();


    const navigate = useNavigate();

    useEffect(() => {
      if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "admin") {
            navigate("/loginScreen");
        } 
    }, []);


    useEffect(()=>{
        axios.get(`http://localhost:8080/admin/userfeedback`).then((response) =>{
    console.log("responsedata", response.data)       
                //   console.log("with mapping", item.address)
                    setData(response.data);
            })
        },[])

     
        

  return (
    <div>
      <AdminNav></AdminNav>
        <h2 className="mb-4 ms-3 mt-3">User Feedback List</h2>
    <table style={{border: '2px solid'}} id="customers">
      <tr>
      <th style={{textAlign: 'center'}}>Feedback Question</th>
      <th style={{textAlign: 'center'}}>User Feedback</th>
      </tr>

        {   data?.map((element) => {
                return (
                    <tr>
                    <td>{element[0]}</td>
                    <td>{element[1]}</td>
        
                    </tr>
                       )
            })}
      {/* {data?.map((element) => {
        element.map((item)=>{
            return (
               
                   )
        })
       
            })} */}
          </table>
      
      </div>
  )
}

export default UserFeedback

 // feedback question from feedback table
    // user feedback from user feedback table