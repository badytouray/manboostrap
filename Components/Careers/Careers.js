import React from 'react'
import Footer from '../Footer/Footer'
import Harry from "../Images/harry.jpg";

function Careers() {
  return (
    <>
    <br />
    <h1>Career's</h1>
    <h4 class="text-center">Join the growing team</h4>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <br />
    
<div class="row">

    <div class="col-md-4">
            <div class="card" style={{width: "400px", margin: "10px", padding: "10px"}}>
        <img src={Harry} class="card-img-top" alt="..." style={{width: "400px", padding: "10px"}}/>
        <div class="card-body">
            <h5 class="card-title">Event Management</h5>
            <p class="card-text">Operational experience, booking Headline acts, organising photoshoots and communicating with DJ's and venues. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/contact-us" class="btn btn-success">Apply Now</a>
        </div>
        </div>
    </div>

    <div class="col-md-4">
            <div class="card" style={{width: "400px", margin: "10px", padding: "10px"}}>
        <img src={Harry} class="card-img-top" alt="..." style={{width: "400px", padding: "10px"}}/>
        <div class="card-body">
            <h5 class="card-title">Social Media Management</h5>
            <p class="card-text">Creating eye catching and engaging posts on FAcebook & Instagram Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-success">Apply Now</a>
        </div>
        </div>
    </div>

    <div class="col-md-4">
            <div class="card" style={{width: "400px", margin: "10px", padding: "10px"}}>
        <img src={Harry} class="card-img-top" alt="..." style={{width: "400px", padding: "10px"}}/>
        <div class="card-body">
            <h5 class="card-title">Content creator & designer</h5>
            <p class="card-text">Graphic designer, promotional campaign Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-success">Apply Now</a>
        </div>
        </div>
    </div>


        

</div>

    <Footer />
    </>
  )
}

export default Careers