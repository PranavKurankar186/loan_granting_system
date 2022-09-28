import { useEffect,useState } from "react"
import axios from "axios";
import AdminNav from '../components/AdminNav';
import swal from "sweetalert";
import './CustomerList.css'
import { useNavigate } from "react-router-dom";

const FieldOfficerList = () => {
    const [data, setData] = useState();
    const [status,setStatus]=useState();
    const [user_id,setuserId]=useState();
    const [searchUser,setSearchUser]=useState();

const navigate=useNavigate();

    useEffect(() => {
      if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "admin") {
            navigate("/loginScreen");
        } 
    }, []);


    useEffect(()=>{
        fieldofficer();
        },[])


        const fieldofficer =()=>{
          axios.get(`http://localhost:8080/admin/fieldofficerlist/${pageNo}`).then((response) =>{
            console.log("responsedata", response.data)       
                            setData(response.data);
                    })
        }

        const updateStatus=(e)=>{
         var body={status}
         console.log(user_id);
         console.log(body);
         axios.post(`http://localhost:8080/admin/update_status/${user_id}`,body)
         . then(response => {  console.log(response.status);swal("Success", "Updated Successfully", "success");fieldofficer();}) 
         .catch(error => {  console.log(error); swal("Error", "Loan Verification Not Updated", "error");})
         
         
         }

         const getUserListByName = (e) => {

          axios.get(`http://localhost:8080/admin/searchbyname/` + searchUser).then((response) =>{
            console.log("responsedata", response.data)       
                    setData(response.data.filter( x => x.user_category=="fieldofficer"));
      
                  })
      
             
        }



        const [pageNo, setPageNo] = useState(0);

        const getNextPage = () => {
          if (data.length > 0)
              setPageNo(pageNo + 1)
        }
        
        useEffect(() => {
        
          fieldofficer();
        
        }, [pageNo])
        
        const getPrevPage = () => {
          if (pageNo > 0) {
              setPageNo(pageNo - 1)
          }
        
        }




  return (
    <div>
      <AdminNav></AdminNav>

      <h2>Field Officer List List</h2>
      <div className="mb-4 ms-3">
              <ul  className="nav" >
                   
                <input className="form-control me-2 w-25" size="80" type="text" placeholder="Search" aria-label="Search" name="e" defaultValue={"search"} onChange={(e)=>setSearchUser(e.target.value)} />
              <button className="btn btn-warning" type="submit" onClick={getUserListByName}>Search</button>
          
            </ul>
            </div>

     
    <table style={{border: '2px solid'}} id="customers">
      <tr>
      <th>User Id</th>
     <th>DOB</th> 
     <th>Designation</th>
      <th>Email</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Gender</th>
      <th>Status</th>
      <th>Update Status</th>
      <th>Pan</th>
      <th>Role Name</th>
      </tr>
      {data?.map((element) => {
        return (
          <tr>
            <td>{element.user_id}</td>
            <td>{element.dob}</td>
            <td>{element.designation}</td>
            <td>{element.email}</td>
            <td>{element.first_name}</td>
            <td>{element.last_name}</td>
            <td>{element.gender}</td>
            <td>{element.status}</td>
            <td> <select name="status" id="status" style={{width: '50%'}} onChange={(e)=>{setStatus(e.target.value);setuserId(element.user_id);}}  >
            <option>Select</option>
            <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
            </select>&nbsp; <button  variant="success" className="btn btn-primary p-1" onClick={() => {updateStatus()}}>
                Submit
              </button></td>
            <td>{element.pan}</td>
            <td>{element.role_name}</td>
          </tr>
        )
      })}
    </table>
    
    <div aria-label="Page navigation example" style={{ marginLeft: "3%" }}>

<ul className="pagination mt-4 me-3" style={{ float: "right" }}>
                      <button className="btn btn-info" style={{ backgroundColor: "#0dcaf0", borderColor: "#0dcaf0", color: "black", borderRadius: "5px", marginLeft: "10px" }} class="page-link" onClick={getPrevPage} >Previous</button>
                         &nbsp;   &nbsp;   &nbsp;                            
                      <button className="btn btn-info" class="page-link" onClick={getNextPage} style={{ backgroundColor: "#0dcaf0", borderColor: "#0dcaf0", color: "black", borderRadius: "5px" }} >Next</button>
                  </ul>
                  </div>

    </div>
  )
}

export default FieldOfficerList