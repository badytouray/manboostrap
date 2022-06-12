import React from 'react'
import Footer from "../Footer/Footer.js";

import GraphicDesign from "../Images/GraphicDesign.jpeg";
import Merch from "../Images/Merch.jpeg";

function Services() {
  return (
    <>
    <br />
    <h1>Services</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    
<div class="row ">



  <br />
  <div class="col">
        <div class="card" style={{width: "1000px", margin: "auto", padding: "10px"}}>
            <img src={GraphicDesign} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Flyer, Poster design & Print</h5>
            <p class="card-text">Event photography + image retouching, edits with your brand logo on pictures. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="d-grid">
                <a href="/flyer-and-poster-design-and-print"><button class="btn-info" type="button">More info</button></a>
                </div>
          </div>
        </div>
  </div>
  <br />

  <div class="col">
        <div class="card" style={{width: "1000px", margin: "auto", padding: "10px"}}>
            <img src={Merch} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Merch Printing</h5>
            <p class="card-text">Tshirts, hoodies + more for all your special occasions + image retouching, edits with your brand logo on pictures. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="d-grid">
                <a href="/merch-printing"><button class="btn-info" type="button">More info</button></a>
                </div>
          </div>
        </div>
  </div>



</div>




    <Footer />
    </>
  )
}

export default Services