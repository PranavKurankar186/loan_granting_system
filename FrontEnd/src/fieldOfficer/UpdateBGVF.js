import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router'
import FieldOfficerNav from "../components/FieldOfficerNav";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Button, Divider, Input,message,Table } from 'antd';
import swal from "sweetalert";
import './UpdateBGVF.css'
//import Button from "react-bootstrap/Button";
const UpdateBGVF = () => {

  
    const navigate = useNavigate();
   
    //const[data,setData]=useState();


    useEffect(()=>{

         if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "fieldofficer") {
             navigate("/loginScreen");
         }
    //     axios.get(`http://localhost:8080/fieldofficer/asignbvf/${window.localStorage.getItem("user_id")}`).then((response) =>{
    // console.log("responsedata", response.data)       
    //             //  console.log("with mapping", item.address)
    //                 setData(response.data);
    //         })
        },[])
        

        // const sendRequest = () =>{
        //       var body={user_name,verification_update,description,report,loan_id}
        //       axios.post(`http://localhost:8080/fieldofficer/updatebvf`,body)
        //       . then(response=>console.log(response.data)) 
        //       .catch()
        //   }



          function resetData(){
            console.log("in reset")
            setloanId('');
            setUserName('');
            setVerificationUpdate('');
            setDescription('');
            setReport('');
          }




          const [user_name, setUserName] = useState();
          const [verification_update, setVerificationUpdate] = useState();
          const [description, setDescription] = useState();
          const [loan_id, setloanId] = useState();
          const [report, setReport] = useState();
            const [showPic, setPic] = useState({});
           // const [imgFlag, setImgflag] = useState(false);
            
            
            useEffect(()=>{},[showPic])


            const handleLoanId=(event)=>{
              setloanId(event.target.value);
            }
            const handleUserName=(event)=>{
              setUserName(event.target.value);
            }
            const handleVerificationUpdate=(event)=>{
              setVerificationUpdate(event.target.value);
            }
            const handleDescription=(event)=>{
              setDescription(event.target.value);
            }
            const handleChange=(event)=>{
                    setReport(event.target.files[0]);
                   // setImgflag(true);
                   // console.log(imageFile);
            }
            const handleSubmission=()=>{
                const formData = new FormData();
                formData.append('user_name',user_name)
                formData.append('verification_update',verification_update)
                formData.append('description',description)
                formData.append('loan_id',loan_id)
                formData.append('report',report)  //1st argumet 'imageFile' name must be matches with spring-boot requeat param name MultipartFile imageFile
                console.log(report);
                console.log(user_name);
                console.log(verification_update);
                console.log(description);
                console.log(loan_id);
                //console.log(formData);
                axios.post(`http://localhost:8080/fieldofficer/updatebvf`,formData,{headers:{'Content-type':'multipart/form-data;boundary=add-random-characters'}})
                .then(response => {  console.log(response.status); if (response.status == 200) swal("Success", "Updated Background verification Successfully", "success");})
                .catch(err=>swal("error"));
            }






  return (
    <div>
      <FieldOfficerNav></FieldOfficerNav>

      <div className="justify-content-center d-flex flex-column align-items-center">
      <h2>Update BGVF </h2>
      <div className="update_BGVF mt-5">
     
      <div style={{textAlign: 'left'}} className="BGVF_fields w-75">

      <div className="d-flex justify-content-between mb-3">
      
      <label className="me-3">Loan Id: </label>
            <Input className="w-50" type="text" placeholder="Loan Id" onChange={handleLoanId}/>
        </div>
        

      <div className="d-flex justify-content-between  mb-3">
        <label className="me-3" >User Name:</label>

        
            <Input className=" w-50" type="text" placeholder="name" onChange={handleUserName}></Input>
        
      </div>
        <div className="d-flex justify-content-between  mb-3">
        <label className="me-3 ">Verification Update:</label>
        
        
             {/* <textarea   placeholder="Enter Verification Update" onChange={(e)=>setVerificationUpdate(e.target.value)}></textarea >  */}
             <textarea className="w-50" placeholder="Enter Verification Update" onChange={handleVerificationUpdate} maxLength={50} style={{width: '100%'}}rows={4}/> 
        </div>

        <div className="d-flex justify-content-between  mb-3">
        <label>Description</label>

            <textarea className="w-50" placeholder="Enter Description" onChange={handleDescription} maxLength={50} style={{width: '100%'}}rows={4}></textarea>

        </div>

        <div className="d-flex justify-content-between  mb-3">
        <label>Update Report</label>

            <Input className="w-50" accept="report/*" type='file'  placeholder="Report"   onChange={handleChange} ></Input>
            </div>
      
       
            <div style={{textAlign: 'center'}}>
                <Button variant="primary"  type="submit" onClick={handleSubmission}>
                  Submit
                </Button>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="primary"  type="submit" onClick={resetData}>
                  Reset
                </Button>
              </div>
          
   
      </div>
    </div>
    </div>

      {/* <h2>Update BGVF </h2>
      <table id="customers">

      <tr>
        <th>Loan Id</th>
        </tr>
        <tr>
            <Input type="text" placeholder="Loan Id" onChange={handleLoanId}/>
        </tr>


      <tr>
        <th>User Name</th>
        </tr>
        <tr>
            <Input type="text" placeholder="name" onChange={handleUserName}></Input>
        </tr>

        <tr>
        <th>Verification Update</th>
        </tr>
        <tr>
            
             <textarea placeholder="Enter Verification Update" onChange={handleVerificationUpdate} maxLength={50} style={{width: '100%'}}rows={4}/> 
        </tr>

        <tr>
        <th>Description</th>
        </tr>
        <tr rowspan="10">
            <textarea placeholder="Enter Description" onChange={handleDescription} maxLength={50} style={{width: '100%'}}rows={4}></textarea>
        </tr>
   

        <tr>
        <th>Update Report</th>
        </tr>
        <tr>
            <Input accept="report/*" type='file'  placeholder="Report"   onChange={handleChange} ></Input>
        
        </tr>
       
            <td>
                <Button variant="primary"  type="submit" onClick={handleSubmission}>
                  Submit
                </Button>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="primary"  type="submit" onClick={resetData}>
                  Reset
                </Button>
              </td>
          
   
      </table> */}
    </div>
  )
}

export default UpdateBGVF