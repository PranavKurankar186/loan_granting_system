import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router'
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Button, Divider, Input,message,Table } from 'antd';
import swal from "sweetalert";
import{ Link } from 'react-router-dom'
import AdminNav from '../components/AdminNav'


const  ViewResume = () => {

  
    const navigate = useNavigate();
   

    useEffect(()=>{

         if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "admin") {
             navigate("/loginScreen");
         }
   
        },[])
        


    const[showPicFlag,setPicFlag] = useState(false);
    const[loanId,setLoanId]=useState();

    const handleChange=(e)=>{
        setLoanId(e.target.value);
        setPicFlag(true);
    }




  return (
    <div>
    <AdminNav></AdminNav>
                        <Link to={`/`}><button className="btn btn-danger">Go TO Home Page</button></Link><br /><br />
            <label htmlFor="">Enter Id to see Photo</label>
            <input type="number" name="" id="" onChange={handleChange}/>
            {showPicFlag && <div><img src={`http://localhost:8080/admin/getResume/${loanId}`} alt="Not Found" /></div>}
        </div>
  )
}

export default ViewResume