import { useEffect, useState } from "react"
import axios from "axios";
import CustomerNav from '../components/CustomerNav';

const HelpReport=()=>{

    const [data, setData] = useState();
   
    useEffect(()=>{
        axios.get(`http://localhost:8080/user/help/${window.localStorage.getItem("user_id")}`).then((response) =>{
    console.log("responsedata", response.data)       
                    setData(response.data);
            })
        },[])


        return (
            <div>
                <CustomerNav></CustomerNav>
              <h2>Help Report List</h2>
              <table id="customers">
                <tr>
                <th>Request Id</th>
               <th>Issue</th> 
                <th>Date</th>
                <th>Description</th>
                <th>Comment</th>
                </tr>
                {data?.map((element) => {
                  return (
                    <tr>
                      <td>{element.request_id}</td>
                      <td>{element.issue}</td>
                      <td>{element.date}</td>
                      <td>{element.description}</td>
                      <td>{element.comment}</td>
                    </tr>
                  )
                })}
              </table>
            </div>
          )


}

export default HelpReport