import React from 'react'
import Rampaige from "../Images/Rampaige.jpg";
import Harrymain from "../Images/Harrymain.jpg";
import Bristol from "../Images/Bristol.jpg";
import SerialKillaz from "../Images/SerialKillaz.png";

import "./Slider.css"


function Slider() {
  return (
    <>
        <div id="carouselExampleIndicators" class="carousel slide " data-bs-ride="carousel" >
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>

    
    <div class="carousel-inner">
    <a href="https://pages.github.com/" target="_blank">
      <div class="carousel-item active">
        <img src={Rampaige} class="d-block w-100" alt="..." />
      </div>
      </a>

    <a href="">
      <div class="carousel-item">
        <img src={Harrymain} class="d-block w-100" alt="..." />
      </div>
      </a>

<a href="">
      <div class="carousel-item">
        <img src={Bristol} class="d-block w-100" alt="..." />
      </div>
      </a>

<a href="">
      <div class="carousel-item">
        <img src={SerialKillaz} class="d-block w-100" alt="..." />
      </div>
      </a>
    </div>
    
    
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
   
  </div></>
  )
}

export default Slider