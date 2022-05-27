import React from 'react'
import Footer from '../Footer/Footer'
import MaddyV from "../Images/MaddyV.jpeg";
import "./News.css"

function News() {
  return (
    <>
    <br />
    <h1>Latest News </h1>
    <br />
    <div class="row" style={{"padding": "5px"}}>
  <div class="col-sm-4" >
    <div class="card">
      <div class="card-body">
          <img className="img_card" alt="Test" style={{"height": "400px", width: "400px"}} src={MaddyV} />
          <br />
          <br />
        <h3 class="card-title">Best female Mc - Drum n Bass Awards 2022  Winner</h3>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
         <a href="#" class="btn btn-primary" style={{"margin-top": "5px"}}>Read more</a>
       
      </div>
    </div>
  </div>


  <div class="col-sm-4" >
    <div class="card">
      <div class="card-body">
          <img className="img_card" alt="test" style={{"height": "400px", width: "400px"}} src={MaddyV} />
          <br />
          <br />
        <h3 class="card-title">Lil wayne playing in Uk After 14 years</h3>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary" style={{"margin-top": "5px"}}>Read more</a>
      </div>
    </div>
  </div>


  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
          <img className="img_card" alt="test" style={{"height": "400px", width: "400px"}} src={MaddyV} />
          <br />
          <br />
        <h3 class="card-title">Lisa maffia AKA Queen of Uk Garage</h3>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary" style={{"margin-top": "5px"}}>Read more</a>
      </div>
    </div>
  </div>





</div>
    <Footer />
    </>
  )
}

export default News