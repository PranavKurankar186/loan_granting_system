import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router'
import { Button, Divider, Input,message,Table } from 'antd';
import swal from "sweetalert";
import{ Link } from 'react-router-dom'
import AdminNav from "../components/AdminNav";

const ViewAdminReport = () => {

  
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

      <div className="text-center mt-5">

<div style={{display: 'inline-block', padding:'50px', background:'f2f2f2'}}>
<label className="me-3" htmlFor="">Enter Id to see Photo</label>
<input type="number" name="" id="" onChange={handleChange}/>
{showPicFlag && <div className="mt-5"><img src={`http://localhost:8080/admin/getReportAdmin/${loanId}`} alt="Not Found" width="600px"/></div>}
</div>

<Link to={`/`}><button style={{display: 'block'}} className="btn btn-danger mt-5 m-auto">Go TO Home Page</button></Link>

</div>

        </div> 
  )
}

export default ViewAdminReport