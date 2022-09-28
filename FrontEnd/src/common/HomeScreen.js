import React from 'react'
import Navigation from '../components/Navigation'
import { useNavigate } from "react-router";
import Footer from '../components/Footer'
import HomePageBg from '../images/HomePageBg.mp4'
import './text.css'
const HomeScreen = () => {
  return (
     
   // <>
  //   {/* <div>
  //       <video src={HomePageBg} autoPlay loop muted />
  //   </div> */}
  // </>
<div>
<Navigation/>
<br></br>
<br></br>
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" >

                              <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                </div>

                                <div className="carousel-inner" >
                                    <div className="carousel-item active" data-bs-interval="2000">
                                   
                                    <img src="./images/5.jpg" className="d-block w-100 " alt="image1" />
                                    
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                    <img src="./images/5.jpg" className="d-block w-100 " alt="image2"/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                    <img src="./images/5.jpg" className="d-block w-100 " alt="image3" />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                    <img src="./images/5.jpg" className="d-block w-100 " alt="image4" />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                    <img src="./images/5.jpg" className="d-block w-100 " alt="image5" />
                                    </div>
                                    
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"  data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"  data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                                </div>
                                <br/>
                                 {/* <img src="./images/5.jpg" width="100%" height="100" ></img>   */}
                                {/* <hr/>
                                  <div className='test1'> 
                                <hr/>
                                 <p><h1 className='test5'>LOAN GRANTING SYSTEM</h1></p> 
                                </div> 
                                <hr/> */}
                               
                                </div>
                                
  )
}

export default HomeScreen