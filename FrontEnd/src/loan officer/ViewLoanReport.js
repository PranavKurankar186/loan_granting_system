import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router'

import { Button, Divider, Input,message,Table } from 'antd';
import swal from "sweetalert";
import{ Link } from 'react-router-dom'
import OfficerNav from "../components/OfficerNav";

const ViewLoanReport = () => {

  
    const navigate = useNavigate();
   

    useEffect(()=>{

         if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "loanofficer") {
             navigate("/loginScreen");
         }
   
        },[])
        


    const[showPicFlag,setPicFlag] = useState(false);
    const[updateLoanId,setUpdateLoanId]=useState();

    const handleChange=(e)=>{
        setUpdateLoanId(e.target.value);
        setPicFlag(true);
    }


  return (
    // <div>
    //     <OfficerNav></OfficerNav>
    //                     <Link to={`/`}><button className="btn btn-danger">Go TO Home Page</button></Link><br /><br />
    //         <label htmlFor="">Enter Id to see Photo</label>
    //         <input type="number" name="" id="" onChange={handleChange}/>
    //         {showPicFlag && <div><img src={`http://localhost:8080/loanofficer/getLoanReport/${updateLoanId}`} alt="Not Found" /></div>}
    //     </div>
    <div>
      <OfficerNav></OfficerNav>
    <div className="text-center mt-5">

    <div style={{display: 'inline-block', padding:'50px', background:'f2f2f2'}}>
    <label className="me-3" htmlFor="">Enter Id to see Photo</label>
    <input type="number" name="" id="" onChange={handleChange}/>
    {showPicFlag && <div className="mt-5"><img src={`http://localhost:8080/loanofficer/getLoanReport/${updateLoanId}`} alt="Not Found" width="600px"/></div>}
    </div>

    <Link to={`/`}><button style={{display: 'block'}} className="btn btn-danger mt-5 m-auto">Go TO Home Page</button></Link>

</div>
</div>

  )
}

export default ViewLoanReport