import React from 'react'
import MaddyV from "../Images/MaddyV.jpeg";
import "./LatestInterview.css";

function LatestInterview() {
  return (
      <>
      <br />
    {/* <h1>Latest Interview</h1> */}


    <div class="card mb-3 container" >
  <div class="row collg-6">
    <div class="col-md-6">
      <a href="/maddy-v-interview">
      <img src={MaddyV} class="img-fluid rounded-start" alt="..." style={{ height: "500px", width: "500px" }}/>
      </a>
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h3 class="card-title">We catch up with Maddy V</h3>
        <p class="card-text">Exclusive interivew with MaddyV This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .</p>
        <button type="button" class="btn btn-outline-success" style={{padding: "10px", margin: "10px"}}><a href="/maddy-v-interview">Read more</a></button> 
        <button type="button" class="btn btn-outline-success" style={{padding: "10px", margin: "10px"}}><a href="/video-gallery">Watch video</a></button> 
        <p class="card-text"><small class="text-muted">Writen by Bady</small></p>
      </div>
    </div>

  
  </div>
</div>

    </>

  )
}

export default LatestInterview;