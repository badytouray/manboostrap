import React from 'react'

import Rampaige from "../Images/Rampaige.jpg";
import MaddyV from "../Images/MaddyV.jpeg";
import Harry from "../Images/harry.jpg";
import Kings from "../Images/kings.jpeg";
import "./Gallary.css";
import Footer from '../Footer/Footer';

function Gallary() {
  return (
    <>

    <div class="row"> 
            <div class="column">
              <img src={Rampaige} alt="" style={{width: "100%"}} />
              <img src={MaddyV} alt="" style={{width: "100%"}}/>
              <img src={Harry} alt=""  style={{width: "100%"}}/>
              <img src={Kings} alt="" style={{width: "100%"}}/>
              <img src={Rampaige} alt="" style={{width: "100%"}}/>
              <img src={MaddyV} alt="" style={{width: "100%"}}/>
              <img src={Rampaige} alt="" style={{width: "100%"}}/>
            </div>

            <div class="column">
              <img src={Rampaige} alt="" style={{width: "100%"}} />
              <img src={MaddyV} alt="" style={{width: "100%"}}/>
              <img src={Rampaige} alt=""  style={{width: "100%"}}/>
              <img src={MaddyV} alt="" style={{width: "100%"}}/>
              <img src={Rampaige} alt="" style={{width: "100%"}}/>
              <img src={MaddyV} alt="" style={{width: "100%"}}/>
              <img src={Rampaige} alt="" style={{width: "100%"}}/>
            </div>

            <div class="column">
              <img src={Rampaige} alt="" style={{width: "100%"}} />
              <img src={MaddyV} alt="" style={{width: "100%"}}/>
              <img src={Rampaige} alt=""  style={{width: "100%"}}/>
              <img src={MaddyV} alt="" style={{width: "100%"}}/>
              <img src={Rampaige} alt="" style={{width: "100%"}}/>
              <img src={MaddyV} alt="" style={{width: "100%"}}/>
              <img src={Rampaige} alt="" style={{width: "100%"}}/>
            </div>

            <div class="column">
              <img src={Rampaige} alt="" style={{width: "100%"}} />
              <img src={MaddyV} alt="" style={{width: "100%"}}/>
              <img src={Rampaige} alt=""  style={{width: "100%"}}/>
              <img src={MaddyV} alt="" style={{width: "100%"}}/>
              <img src={Rampaige} alt="" style={{width: "100%"}}/>
              <img src={MaddyV} alt="" style={{width: "100%"}}/>
              <img src={Rampaige} alt="" style={{width: "100%"}}/>
            </div>
     </div>
     <Footer />
    </>
  )
}

export default Gallary;