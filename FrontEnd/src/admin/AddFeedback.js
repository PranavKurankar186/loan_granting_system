import React, { useEffect,useState } from 'react'
import { InputGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/form'
import {useMutation} from 'react-query'
import axios from 'axios'
import AdminNav from '../components/AdminNav'
import { useNavigate } from 'react-router'
import './AddFeedback.css'
import swal from 'sweetalert'

const AddFeedback = () => {

  const navigate =useNavigate();

 useEffect(() => {
         if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "admin") {
             navigate("/loginScreen");
         } 
     }, []);


    const mutation = useMutation((d) => {
        return axios.post('http://localhost:8080/admin/addfeedback', d)
       // . then(response => {  console.log(response.status);  swal("Success", "Feedback Question Added", "success");}) 
        //.catch(error => {  console.log(error); swal("Error", "Feedback Question Not Added", "error");})
    }, {refetchOnWindowFocus: false, refetchOnMount: false})


    const [d, setD] = useState({
      feedback_id: 0,
      feedback_question: ''
    })


    const handleSubmit  = (e) => {
        e.preventDefault();
        mutation.mutate(d)
    }


  return (
    <>
    <AdminNav></AdminNav>
    <h3  className='mt-3 mb-4'>Add Feedback Question</h3>
    <div  className='add_feedback mt-5'>
    <form onSubmit={handleSubmit} className='feedback'>
      <label className='me-3'>Add Feedback Question</label>
      <input className='me-3' placeholder='Enter feedback que' name='feedback_question' onChange={e => setD({'feedback_question': e.target.value})}/>
      <button type='submit'>Submit</button>
    </form>
    </div>
    </>
  )
}

export default AddFeedback