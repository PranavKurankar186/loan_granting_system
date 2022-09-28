import React,{ useEffect,useState } from 'react'
import axios from 'axios'
import './DisplayCustomer.css'

const  SearchedUser = () => {

const [user1,setUser1]=useState();



  
  useEffect(()=>{
    axios.get(`http://localhost:8080/admin//searchbyname/`+window.localStorage.getItem("userlist")).then((response) =>{
    console.log("responsedata", response.data)       
            //  console.log("with mapping", item.address)
            setUser1(response.data);
        })
    },[])



  return (
    <div>
      <h2>Customer List</h2>
          
          <div style={{width:"30%"}}>
              <ul  className="nav justify-content-center" >
                   
                <input className="form-control me-2" size="80" type="text" placeholder="Search" aria-label="Search" name="searchProduct" />
              <button className="btn btn-warning" type="submit">Search</button>
          
            </ul>
            </div>
             


      <table id="customers">
        <tr>
        <th>User Id</th>
       <th>DOB</th> 
        <th>Email</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Gender</th>
        <th>Status</th>
        <th>Pan</th>
        </tr>
        {user1?.map((element) => {
          return (
            <tr>
              <td>{element.user_id}</td>
              <td>{element.dob}</td>
              <td>{element.email}</td>
              <td>{element.first_name}</td>
              <td>{element.last_name}</td>
              <td>{element.gender}</td>
              <td>{element.status}</td>
              <td>{element.pan}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default  SearchedUser