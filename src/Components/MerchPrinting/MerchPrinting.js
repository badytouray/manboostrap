import React from 'react'
import Footer from '../Footer/Footer'
import webdesign from "../Images/webdesign.png";
import Fade from 'react-reveal/Fade';

function MerchPrinting() {
  return (
    <>
    <h1>Merch Printing</h1>
    <br />
    <Fade left>
    <div class="row">
        
    
        <div class="col-lg-12" style={{ padding: "20px"}} >
            <div class="card" style={{width: "800px", margin: "auto"}}>
            <img src={webdesign} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Tshirts</h5>
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
            <div class="card" style={{width: "800px", margin: "auto", padding: "10px"}}>
            <img src={webdesign} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">hoodies</h5>
                    <p class="card-text">1-5 pages, contact page, social media embeded. Whether you're a start-up or a small businees, Artist or just want to showcase your craft. We are dedicated to listen and impliment a bespoke mobile responsive website Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <br />
                    <h5>Whats included</h5>
                    <ul>
                        <li>Special Offer 10 Hoodies £120</li>
                        <li>Select sizes</li>
                        <li>Select Color</li>
                        <li>Upload brand logo</li>
                    </ul>

                    <div class="row">
<div class="cols  cols-lg-6">

                    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Front
  </label>
</div>
</div>

<div class="cols  cols-lg-6">
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
    Back
  </label>
  </div>

                    <div class="mb-3 container">
                <label for="formFile" class="form-label"><p class="font-weight-bold">Upload your artwork</p></label>
                <input class="form-control" type="file" id="formFile"/>
                <br />
                <button class="btn btn-success " submit="submit">Submit</button>
                </div>
            </div>
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

export default MerchPrinting