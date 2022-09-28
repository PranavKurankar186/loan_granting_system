import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNav from '../components/AdminNav';
import { useNavigate } from 'react-router-dom';


const FeedbackQuestion = () => {
    const [data, setData] = useState();

    const navigate =useNavigate();

    useEffect(() => {
      if (window.localStorage.getItem("user_id")=== null || window.localStorage.getItem("user_category") !== "admin") {
            navigate("/loginScreen");
        } 
    }, []);

    useEffect(()=>{
        axios.get(`http://localhost:8080/admin/feedbackquestions`).then((response) =>{
    console.log("responsedata", response.data)       
                //   console.log("with mapping", item.address)
                    setData(response.data);
            })
        },[])

  return (
    <div>
      <AdminNav></AdminNav>
        <h2 className="mb-4 ms-3 mt-3">Feedback Question</h2>
    <table style={{border: '2px solid'}} id="customers">
      <tr>
      <th style={{textAlign: 'center'}}>Feedback Id</th>
      <th style={{textAlign: 'center'}}>Feedback Question</th>
      </tr>

      {data?.map((element) => {
        return (
          <tr>
            <td>{element.feedback_id}</td>
            <td>{element.feedback_question}</td>

            </tr>
             )
            })}
          </table>
      
      </div>
  )
}

export default FeedbackQuestion