import { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerNav from '../components/CustomerNav';
import { useNavigate } from 'react-router'
import { Button, Divider, Input } from 'antd';
import swal from 'sweetalert';
const FeedbackQuestion1 = () => {
    const [data, setData] = useState();

 const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:8080/user/feedbackque`).then((response) =>{
    console.log("responsedata", response.data)       
                //   console.log("with mapping", item.address)
                    setData(response.data);
            })
        },[])
const [feedback_id,setFeedbackId]=useState();


const [user_feedback, setUserfeedback] = useState("");
   // const[feedback_id,setFeedbackId]=useState("");

   useEffect(()=>{

    if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "user") {
        navigate("/loginScreen");
    }
   },[])
  
    

    const sendRequest = () =>{
      console.log(feedback_id);
        var body={user_feedback}
        axios.post(`http://localhost:8080/user/addfeedback/${window.localStorage.getItem("user_id")}/${feedback_id}`,body)
        . then(response => {  console.log(response.status);swal("Success", "Feedback Added Successfully", "success");}) 
        .catch(error => {  console.log(error); swal("Error", "Feedback Not Added", "error");})
    }



  return (

    <div>
      <CustomerNav></CustomerNav>
        <h2>Feedback Question</h2>
    <table style={{border: '2px solid'}} id="customers">
      <tr>
      <th>#</th>
      <th>Feedback Question</th>
      <th>Add Feedback</th>
      </tr>

      {data?.map((element) => {
        return (
          <tr>
            <td>{element.feedback_id}</td>
            <td>{element.feedback_question}</td>
            <td>

            <Input 
                className='w-50 me-4'
                type="text"
                onChange={(e) => {setUserfeedback(e.target.value);setFeedbackId(element.feedback_id);}}
                placeholder="Enter Feedback"
              
              
                required
              />
            
              
              <button variant="success" className="btn btn-primary p-1" onClick={() => {sendRequest()}}>
                Add Feedback
              </button></td>

            </tr>
             )
            })}
          </table>
      
      </div>
    // <div>
    //   <CustomerNav></CustomerNav>
    //     <h2>Feedback Question</h2>
    // <table style={{border: '2px solid'}} id="customers">
    //   <tr>
    //   <th>#</th>
    //   <th>Feedback Question</th>
    //   <th>Add Feedback</th>
    //   </tr>

    //   {data?.map((element) => {
    //     return (
    //       <tr>
    //         <td>{element.feedback_id}</td>
    //         <td>{element.feedback_question}</td>
    //         <td>

    //         <Input 
             
    //             type="text"
    //             onChange={(e) => {setUserfeedback(e.target.value);setFeedbackId(element.feedback_id);}}
    //             placeholder="Enter Feedback"
              
              
    //             required
    //           />
            
    //           <br/>
    //           <button  variant="success" className="btn btn-primary" onClick={() => {sendRequest()}}>
    //             Add Feedback
    //           </button></td>

    //         </tr>
    //          )
    //         })}
    //       </table>
      
    //   </div>
  )
}

export default FeedbackQuestion1