import React from 'react'

import Rampaige from "../Images/Rampaige.jpg";
import MaddyV from "../Images/MaddyV.jpeg";
import Harry from "../Images/harry.jpg";
import Zebedee from "../Images/Zebedee.jpeg";
import Kings from "../Images/kings.jpeg";
import HarryRoom2 from "../Images/HarryRoom2.jpg";
import ManCrew from "../Images/ManCrew.jpg";
import Harrymain from "../Images/Harrymain.jpg";
import "./FeaturedImages.css";


function FeaturedImages() {
  return (
    <>
    <br />
    <h2 style={{textAlign: "center"}}>Post event images </h2>
    <div class="row" style={{padding: "10px"}}> 
            <div class="column">
              <img src={Rampaige} alt="" style={{width: "100%"}} />
              <img src={MaddyV} alt="" style={{width: "100%"}}/>
              <img src={Harry} alt=""  style={{width: "100%"}}/>
           
            </div>

            <div class="column">
              <img src={Zebedee} alt="" style={{width: "100%"}} />
              <img src={Kings} alt="" style={{width: "100%"}}/>
              {/* <img src={HarryRoom2} alt=""  style={{width: "100%"}}/> */}
             
            </div>

            <div class="column">
              <img src={HarryRoom2} alt="" style={{width: "100%"}} />
              <img src={ManCrew} alt="" style={{width: "100%"}}/>
              <img src={Rampaige} alt=""  style={{width: "100%"}}/>
              
            </div>

            <div class="column">
              <img src={Harrymain} alt="" style={{width: "100%"}} />
              <img src={MaddyV} alt="" style={{width: "100%"}}/>
              <img src={Rampaige} alt=""  style={{width: "100%"}}/>
            
            </div>
     </div>
 
    </>
  )
}

export default FeaturedImages;