import React from 'react'
import Footer from '../Footer/Footer';
import Rampaige from "../Images/Rampaige.jpg";
import MaddyV from "../Images/MaddyV.jpeg";
import "./Interviews.css";

function Interviews() {
  return (
    <>
    <br />
        <h1>Latest Interviews</h1>
        <br />
        <div class="card-group">
  <div class="card">
    <img src={Rampaige} class="card-img-top" alt="..." style={{ margin: "10px", height: "400px", width: "450px"}}  />
    <div class="card-body">
      <h5 class="card-title">Rampaige</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button type="button" class="btn btn-primary"> <a href="/maddy-v-interview" style={{ color: 'inherit', textDecoration: 'inherit'}}>Read more</a></button>
    </div>
  </div>
  <div class="card">
    <img src={MaddyV} class="card-img-top" alt="..." style={{ margin: "10px", height: "400px", width: "450px"}}  />
    <div class="card-body">
      <h5 class="card-title">Maddy V best female Mc winner</h5>
      <p class="card-text">we are super excited to be sharing the time with Maddy V who is the Drum n Bass Awards 2022 best female Mc winner</p>
      <button type="button" class="btn btn-primary">Read more</button>
    </div>
  </div>
  <div class="card">
    <img src={Rampaige} class="card-img-top" alt="..." style={{ margin: "10px", height: "400px", width: "450px"}}   />
    <div class="card-body">
      <h5 class="card-title">Harry Shotta</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <button type="button" class="btn btn-primary">Read more</button>
    </div>
  </div>
</div>
        <Footer />
    </>
  )
}

export default Interviews;