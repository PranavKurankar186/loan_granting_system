import axios from "axios";
import { useState,useEffect } from "react"
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import AdminNav from "../components/AdminNav";
import swal from "sweetalert";
import './AssignFieldOfficer.css'
import { useNavigate } from "react-router-dom";

const AssignLoanOfficer = () => {

const [data1, setData1] = useState();
const [data2, setData2] = useState();


const navigate = useNavigate();

useEffect(() => {
  if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "admin") {
        navigate("/loginScreen");
    } 
}, []);

useEffect(()=>{

  axios.get('http://localhost:8080/admin/loanrequestlist').then((response) =>{
    console.log("responsedata", response.data)       
                setData2(response.data);
        })

        loanofficer();
      },[])

      const [pageNo, setPageNo] = useState(0);
      const loanofficer=()=>{
        axios.get(`http://localhost:8080/admin/loanofficerlist/${pageNo}`).then((response) =>{
          console.log("responsedata", response.data)       
                      //   console.log("with mapping", item.address)
                          setData1(response.data);
                  })
      }


    
   const[loan_id,setLoanId]=useState();
   const[loan_officer_name,setLoanOfficerName]=useState();
   const[user_id,setUserId]=useState();


        const handleSubmit  = (e) => {
          var body={ loan_id,user_id,loan_officer_name}
          console.log(loan_id)
          console.log(loan_officer_name)
          console.log(user_id)
          axios.post(`http://localhost:8080/admin/assignloanofficer`,body)
          .then(response => {  console.log(response.status); swal("Success", "Loan Officer Assigned Successfully", "success");}) 
          .catch(error => {  console.log(error); swal("Error", "Loan Officer Not Assigned", "error");})
      }

      


  return (         
    <>
    <AdminNav></AdminNav>
    <div className="AFO">
    <div className="mt-5 AFO_list ">


    <h3 className="mt-3 mb-4">Assign Loan OFficer</h3>
    <div className="AFO_select_list">
    <label className="me-2">Loan Id: </label>
    <select name='loan_id' placeholder="select value"  onChange={(e) => setLoanId(e.target.value)}>
      <option></option>
      {data2?.map((e) =>{
        return <option value={e.loan_id}>{e.loan_id}</option>
      })}
    </select>
    </div>


 <div className="AFO_select_list">
    <label className="me-2 ms-2">User Id: </label>
    <select name='user_id' placeholder="select value"  onChange={(e) => setUserId(e.target.value)}>
      <option></option>
      {data1?.map((e) =>{
        return <option value={e.user_id} >{e.user_id}</option>
      })}
    </select>
</div>

<div className="AFO_select_list">
    <label className="me-2 ms-2">Loan Officer Name: </label>
    <select name='loan_officer_name' placeholder="select value"  onChange={(e) => setLoanOfficerName(e.target.value)}>
      <option></option>
      {data1?.map((e) =>{
        return <option value={e.first_name} >{e.first_name}</option>
      })}
    </select>
</div>
   

    <button  variant="success" className="mt-5 btn btn-primary" onClick={() => {handleSubmit()}}>Submit</button>

    </div>
    </div>
   
   
    </> 
  )
  
}

export default AssignLoanOfficer