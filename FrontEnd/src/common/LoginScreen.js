import React from 'react'
import { useState } from 'react'
import { URL } from '../config';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form';
import HomeScreen from './HomeScreen';
import UserFunctions from '../axios/UserAxios'
// import { useHistory} from 'react-router-dom'
import axios from 'axios'
import classNames from 'classnames'
import UserAxios from '../axios/UserAxios';
import { useEffect } from 'react';
import swal from 'sweetalert';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha'
import { Button, Divider, Input } from 'antd';


const LoginScreen = (props) => {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
     const navigate = useNavigate()

     useEffect(() => {
      loadCaptchaEnginge(6);
    }, []);
  
    const signinUser = () => {


      let user_captcha = document.getElementById('user_captcha_input').value;

      if (validateCaptcha(user_captcha) === true) {

      if (email.length === 0) {
        toast.warning('please enter email')
      } else if (password.length === 0) {
        toast.warning('please enter password')
      } else {
        const body = {
          email,
          password,
        }
  
        // url to make signin api call
        const url = `${URL}/user/signin`
  
        // make api call using axios
        axios.post(url, body).then((response) => {
          // get the server result
          const result = response.data
          if (result.user_category === 'user') {
            toast.success('Welcome Customer')

            
            // get the data sent by server
            const {  email, first_name, last_name,password,user_id  } = result
            
           
          
            result != null && window.localStorage.setItem("firstName", result.first_name);
            result != null && window.localStorage.setItem("lastName", result.last_name);
            result != null && window.localStorage.setItem("email", result.email);
            result != null && window.localStorage.setItem("user_id", result.user_id);
            result !=null && window.localStorage.setItem("user_category",result.user_category);
           
            navigate('/displayCustomer')
            
        
           }
            else if(result.user_category === 'admin') {
              result != null && window.localStorage.setItem("firstName", result.first_name);
              result != null && window.localStorage.setItem("lastName", result.last_name);
              result != null && window.localStorage.setItem("email", result.email);
              result != null && window.localStorage.setItem("user_id", result.user_id);
              result !=null && window.localStorage.setItem("user_category",result.user_category);
              toast.success('Welcome Admin')
              navigate('/admindash')
            }
            else if(result.user_category === 'loanofficer') {
              result != null && window.localStorage.setItem("firstName", result.first_name);
              result != null && window.localStorage.setItem("lastName", result.last_name);
              result != null && window.localStorage.setItem("email", result.email);
              result != null && window.localStorage.setItem("user_id", result.user_id);
              result !=null && window.localStorage.setItem("user_category",result.user_category);
              toast.success('Welcome Loan Officer')
              navigate('/loanofficerdash')
            }
            else if(result.user_category === 'fieldofficer') {
              result != null && window.localStorage.setItem("firstName", result.first_name);
              result != null && window.localStorage.setItem("lastName", result.last_name);
              result != null && window.localStorage.setItem("email", result.email);
              result != null && window.localStorage.setItem("user_id", result.user_id);
              result !=null && window.localStorage.setItem("user_category",result.user_category);
              toast.success('Welcome Field Officer')
              navigate('/fieldofficerdash')
            }

          }
          
            
          
        )
      }
    }else {
      swal("Error", 'Captcha Does Not Match', "error");
      document.getElementById('user_captcha_input').value = "";
    }
    }
  
        return (
            <>
         <Navigation></Navigation>
            <div className="signin">
      <h1>Signin</h1>
      

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              {/* <div>
                No account yet? <Link to="/signup">Signup here</Link>
              </div> */}

               <div>
              <LoadCanvasTemplate />
              </div>
            <br/>
            <div className="form-group col-md-6" style={{margin:'auto',display:'block'}}>
              <Input placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text"/></div>
              
                
            <br></br>
              <button  variant="success"  onClick={signinUser} className="btn btn-primary">
                Signin
              </button>
              &nbsp;  &nbsp;  &nbsp;
              <Link to={'/forgotpassword'} >
                ForgotPassword?
              </Link>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
          </>
       );
    
            }

export default LoginScreen