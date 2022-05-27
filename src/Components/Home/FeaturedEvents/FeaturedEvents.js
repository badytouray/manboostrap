import React from 'react'
import Rampaige from "../../Images/Rampaige.jpg";
import "./FeaturedEvents.css"



function FeaturedEvents() {
  return (
    <>
    <h1>Featured Events</h1>
    <br />
    <br />
    <div class="row row-cols-lg-4 g-4 container-fluid d-flex justify-content-evenly col-xxl" style={{padding: "10px"}}>
    <div class="card" >
      <img src={Rampaige} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Benny Page & Dj Pied Piper Sun 5th June</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       <a href="/waxing">
        <button href="/waxing" type="submit" class="btn btn-primary">Buy ticket</button>
        </a>
      </div>
    </div>

    <div class="card">
      <img src={Rampaige} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">UK garage & House Launch party Sun 31st July</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="http://skiddle.com/e/36095146" rel="noopener noreferrer" target="_blank">
        <button type="button" class="btn btn-primary">Buy ticket</button>
        </a>
      </div>
    </div>



    <div class="card">
      <img src={Rampaige} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Maddy V & Rampaige Bristol @Basement45</h5>
        <p class="card-text">Drum & Bass Awards 2022 Best MC winner will be perfomgin live in Bristol on Wednesday 14th @ Basement45 from 10pm till 3am Tickets avilable from skiddle.</p>
        <a href="http://skiddle.com/e/36095438" rel="noopener noreferrer" target="_blank">
        <button type="button" class="btn btn-primary">Buy ticket</button>
        </a>
      </div>
    </div>

    <div class="card">
      <img src={Rampaige} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Maddy V & Rampaige Bristol @Basement45</h5>
        <p class="card-text">Drum & Bass Awards 2022 Best MC winner will be perfomgin live in Bristol on Wednesday 14th @ Basement45 from 10pm till 3am Tickets avilable from skiddle.</p>
        <a href="http://skiddle.com/e/36095438" rel="noopener noreferrer" target="_blank">
        <button type="button" class="btn btn-primary">Buy ticket</button>
        </a>
      </div>
    </div>

  </div>

  
    </>
  )
}

export default FeaturedEvents;