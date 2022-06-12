import React from 'react'
import Footer from '../Footer/Footer'
import webdesign from "../Images/webdesign.png";
import Fade from 'react-reveal/Fade';

function WebDesign() {
  return (
    <>
    
    <br />
    <h1>Web Design </h1>
    <br />
    <Fade left>
    <div class="row">
        
    
        <div class="col-lg-12" style={{ padding: "20px"}} >
            <div class="card" style={{width: "600px", margin: "auto"}}>
            <img src={webdesign} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Ecomerce web design</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        
        

        

    </div>
    </Fade>


    <Fade right>
    <div class="row">
        
     <div class=" col col-lg-12">
            <div class="card" style={{width: "600px", margin: "auto", padding: "10px"}}>
            <img src={webdesign} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Static Web design starter pack</h5>
                    <p class="card-text">1-5 pages, contact page, social media embeded. Whether you're a start-up or a small businees, Artist or just want to showcase your craft. We are dedicated to listen and impliment a bespoke mobile responsive website Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <br />
                    <h5>Whats included</h5>
                    <ul>
                        <li>1 -5 pages</li>
                        <li>Social Media embeded</li>
                        <li>Contact page / Booking form</li>
                        <li>Domain name</li>
                    </ul>
                    <div class="d-grid">
                            <button class="btn btn-primary" style={{color: "white", textDecoration: "none"}} ><a href="#"></a>Request a call back</button>
                    </div>
            
                </div>
            </div>
        </div>
        

    </div>




    </Fade>
    <Footer />
    
    </>
  )
}

export default WebDesign