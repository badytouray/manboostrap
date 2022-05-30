
import React from 'react'
import SignUpToggleForm from '../SignUpToggleForm/SignUpToggleForm'
// import { Link } from "react-router-dom";



function NavBar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/home">Music All Night</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about-us">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/news">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/events">Events</a>
        </li>
        
        <li>
        <a class="nav-link active" aria-current="page" href="/interviews">Interviews</a>
        </li>
        <li>
        <a class="nav-link active" aria-current="page" href="/list-events">Promote event</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/faq">FAQ</a>
        </li> */}
       

        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
          Media
          </a>
        
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/picture-gallery">Images</a></li>
            <li><a class="dropdown-item" href="/video-gallery">Videos</a></li>
            <li><a class="dropdown-item" href="#"></a></li>
            <li><hr class="dropdown-divider" /></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
          MERCH
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/mens-clothing">Mens</a></li>
            <li><a class="dropdown-item" href="/womens-clothing">Womens</a></li>
            <li><a class="dropdown-item" href="/store">Accessories</a></li>
            <li><a class="dropdown-item" href="#"></a></li>
            <li><hr class="dropdown-divider" /></li>
          </ul>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/store">Store</a>
        </li> */}
        
        
      </ul>
      <div class="form">
                  <i class="fa fa-search"></i>
                  <input type="text" class="form-control form-input" placeholder="Search anything..."/>
                  <span class="left-pan"><i class="fa fa-microphone"></i></span>
      </div>

      
                <li class="nav-item">
          <button type="button" class="btn btn-primary" aria-current="page"><a href="/contact-us" style={{color: "white"}}>Contact Us</a></button>
        </li>
        <SignUpToggleForm />
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar