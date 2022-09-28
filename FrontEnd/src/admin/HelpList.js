import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AdminNav from '../components/AdminNav';
import { useNavigate } from 'react-router'
import { Button, Divider, Input } from 'antd';
import swal from 'sweetalert';
import './CustomerList.css'
const HelpList = () => {

    const [data, setData] = useState();
    const[request_id,setRequestId]=useState();
    const [comment, setComment] = useState("");

    const navigate = useNavigate()

    useEffect(()=>{

      if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "admin") {
        navigate("/loginScreen");
    }

    getHelpList();
           
        },[])

        const getHelpList=()=>{

          axios.get(`http://localhost:8080/admin/helplist`).then((response) =>{
            console.log("responsedata", response.data)       
                        //   console.log("with mapping", item.address)
                            setData(response.data);
                          })
        }


        // const addComment=(e)=>{
        //   navigate('addComment',{state:{id:e.request_id}})
        //   console.log(e.request_id);
        // }

        const sendRequest = () =>{
          console.log(request_id);
          var body={comment}
          axios.post(`http://localhost:8080/admin/add_comment/${request_id}/`,body)
          . then(response => {  console.log(response.status);swal("Success", "Comment Added Successfully", "success");getHelpList();}) 
          .catch()
      }

  return (
    <div>
  <AdminNav></AdminNav>

         <h2 className="mb-4 ms-3 mt-3">Help List</h2>
    <table style={{border: '2px solid'}} id="customers">
      <tr>
     
      {/* <th>Help Id</th> */}
      <th style={{textAlign: 'center'}}>Request Id</th>
      <th style={{textAlign: 'center'}}>Date</th>
      <th style={{textAlign: 'center'}}>Issue</th>
      <th style={{textAlign: 'center'}}>description</th>
      <th style={{textAlign: 'center'}}>Comment</th>
      <th style={{textAlign: 'center'}}>Add Comment</th>
      
      </tr>

      {data?.map((element) => {
        return (
         
          <tr>
            {/* <td>{element.help_id}</td> */}
            <td>{element.request_id}</td>
            <td>{element.date}</td>
            <td>{element.issue}</td>
            <td>{element.description}</td>
            <td>{element.comment}</td>
            <td>
              
            <Input 
             
             type="text"
             style={{width:'100%'}}
             onChange={(e) => {setComment(e.target.value);setRequestId(element.request_id);}}
             placeholder="Enter Comment"
           
           
             required
           />
         
           <br/>
              
               <button type="button" className="btn btn-primary p-1" onClick={()=>{sendRequest()}} >Add Comment</button> </td>
             
            </tr>
             )
            })}
          </table>

    </div>
  )
}

export default HelpList