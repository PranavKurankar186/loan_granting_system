import { useEffect, useState } from "react"
import axios from "axios";
import AdminNav from "../components/AdminNav";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const LoanRequestList = () => {

    const [data, setData] = useState();

const navigate = useNavigate();

    useEffect(() => {
      if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "admin") {
            navigate("/loginScreen");
        } 
    }, []);

    useEffect(()=>{
      loanRequest();
        },[])

        const loanRequest=()=>{
          axios.get(`http://localhost:8080/admin/loanrequestlist`).then((response) =>{
            console.log("responsedata", response.data)       
                        //  console.log("with mapping", item.address)
                            setData(response.data);
                    })
        }


       


        const [status,setStatus]=useState();
const [loan_id,setLoanId]=useState();

        const updateStatus=(e)=>{
          // setStatus(e.target.value);
         var body={status}
         console.log(loan_id);
         console.log(body);
         //axios.post(`http://loaclhost:8080/admin/update_status/${user_id}`,body)
         axios.post(`http://localhost:8080/admin/update_loan_status/${loan_id}`,body)
         . then(response => {  console.log(response.status);  swal("Success", "Approved", "success"); loanRequest(); }) 
         .catch(error => {  console.log(error); swal("Error", "Rejected", "error");})
         
         }



  return (
    <div>
      <AdminNav></AdminNav>
      <h2 className="mt-3 mb-3">Loan Request List</h2>
      <table id="customers">
        <tr>
        <th>Loan Id</th>
       <th>Name</th> 
        <th>Email</th>
        <th>Loan Type</th>
        <th>Resume</th>
        <th>Project Plan</th>
        <th>Personal Credit Report</th>
        <th>Business Credit report</th>
        <th>Financial Statement</th>
        <th>Bank Statement</th>
        <th>Loan Amount</th>
        <th>Loan Tenure</th>
        <th>Status</th>
        <th>Update Status</th>
        <th>Emi Option</th>
        </tr>
        {data?.map((element) => {
          return (
            <tr>
              <td>{element.loan_id}</td>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.loan_type}</td>
              {/* <td>{element.resume}</td>
              <td>{element.project_plan}</td>
              <td>{element.personal_credit_report}</td>
              <td>{element.business_credit_report}</td>
              <td>{element.financial_statement}</td>
              <td>{element.bank_statement}</td> */}
              <td><a href="/viewResume">Resume</a></td>
              <td><a href="/viewProject">Project Plan</a></td>
              <td><a href="/viewPersonalCredit">Personal Credit Report</a></td>
              <td><a href="/viewBusinessCredit">Business Credit Report</a></td>
              <td><a href="/viewFinancial">Financial Statement</a></td>
              <td><a href="/viewBankStatement">Bank Statement</a></td>
              <td>{element.loan_amount}</td>
              <td>{element.loan_tenure}</td>
              <td>{element.status}</td>
              <td> <select name="status" id="status" style={{width: '50%'}} onChange={(e)=>{setStatus(e.target.value);setLoanId(element.loan_id);}}  >
            <option>Select</option>
            <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
            </select>&nbsp; <button  variant="success" className="btn btn-primary p-1" onClick={() => {updateStatus()}}>
                Submit
              </button></td>
              <td>{element.emi_option}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default LoanRequestList