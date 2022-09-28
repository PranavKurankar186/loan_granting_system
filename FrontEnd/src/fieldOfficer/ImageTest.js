import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router'
import FieldOfficerNav from "../components/FieldOfficerNav";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Button, Divider, Input,message,Table } from 'antd';
import swal from "sweetalert";
//import Button from "react-bootstrap/Button";
const ImageTest = () => {

  
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
            console.log("in reset");
            setFile('');
          }




          const [imgFlag, setImgflag] = useState(false);
          const [file, setFile] = useState();
           // const [showPic, setPic] = useState({});
           
            
            
    


            
            const handleChange=(event)=>{
                    setFile(event.target.files[0]);
                    setImgflag(true);
                   // console.log(imageFile);
            }
            const handleSubmission=()=>{
                const formData = new FormData();
                formData.append('file',file)  //1st argumet 'imageFile' name must be matches with spring-boot requeat param name MultipartFile imageFile
                console.log(file);
                console.log(formData);
                axios.post(`http://localhost:8080/fieldofficer/image/imagebvf`,
                formData,
                {
                  headers:
                  {'Content-type':'multipart/form-data;boundary=<calculated when request is sent>'}
                }
                  )
                .then(response => {  console.log(response.status); if (response.status == 200) swal("Success", "Updated Background verification Successfully", "success");})
                .catch(err=>alert("error"));
            }






  return (
    <div>
      <FieldOfficerNav></FieldOfficerNav>
      <h2>Update BGVF </h2>
      <table id="customers">
        <tr>
        <th>Update Report</th>
        </tr>
        <tr>
            <Input type='file' accept=".png, .jpg,.jpeg"  placeholder="Report"   onChange={handleChange} name="file" ></Input>
        
        </tr>
       
            <td>
                <button variant="primary"  type="submit" onClick={handleSubmission}>
                  Submit
                </button>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button variant="primary"  type="submit" onClick={resetData}>
                  Reset
                </button>
              </td>
          
   
      </table>
    </div>
  )
}

export default ImageTest