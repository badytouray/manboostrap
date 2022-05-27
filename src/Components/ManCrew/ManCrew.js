import React from 'react'
// import Footer from '../Footer/Footer'
import MaddyV from "../Images/MaddyV.jpeg"
import "./ManCrew.css"

function ManCrew() {
  return (
    <>
    <br />
    <h1>M.A.N Crew </h1>
    <h5> Music All Night crew members</h5>
    <div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
          <img className="img_card" alt="" src={MaddyV} style={{width: "300px", height: "250px", margin: "auto", padding: "5px"}} />
          <br />
          <br />
        <h3 class="card-title">Bobbie T</h3>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <br />
        <h6>M.A.N Role</h6>
        <ul>
            <li>DJ</li>
            <li>Talent scout</li>
            <li>Booking agent</li>
        </ul>
        
        <a href="#" class="btn btn-primary">Go somewhere</a>
        <a
        class="btn btn-primary btn-floating m-1"
        style={{"background-color": "#ac2bac"}}
        href="http://www.instagram.com/music__all__night"
        role="button"
        ><i class="fab fa-instagram"></i
      ></a>
      <a
        class="btn btn-primary btn-floating m-1"
        style={{"background-color": "#3b5998"}}
        href="http://www.facebook.com/musicall.nightuk"
        role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>
      </div>
    </div>
  </div>


  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
          <img className="img_card" alt="" src={MaddyV}  style={{width: "300px", height: "250px", margin: "auto", padding: "5px"}}/>
          <br />
          <br />
        <h3 class="card-title">Bady</h3>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <br />
        <h6>M.A.N Role</h6>
        <ul>
            <li>Operations Manager</li>
            <li>Graphic Designer</li>
            <li>Web Designer</li>
        </ul>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        <a
        class="btn btn-primary btn-floating m-1"
        style={{"background-color": "#ac2bac"}}
        href="http://www.instagram.com/music__all__night"
        role="button"
        ><i class="fab fa-instagram"></i
      ></a>
      <a
        class="btn btn-primary btn-floating m-1"
        style={{"background-color": "#3b5998"}}
        href="http://www.facebook.com/musicall.nightuk"
        role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>
      </div>
    </div>
  </div>


  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
          <img className="img_card" alt="" src={MaddyV} style={{width: "300px", height: "250px", margin: "auto", padding: "5px"}} />
          <br />
          <br />
        <h3 class="card-title">Joe</h3>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <br />
        <h6>M.A.N Role</h6>
        <ul>
            <li>Videographer</li>
            <li>Content Creator</li>
            <li>Video Editor</li>
        </ul>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        <a
        class="btn btn-primary btn-floating m-1"
        style={{"background-color": "#ac2bac"}}
        href="http://www.instagram.com/music__all__night"
        role="button"
        ><i class="fab fa-instagram"></i
      ></a>
      <a
        class="btn btn-primary btn-floating m-1"
        style={{"background-color": "#3b5998"}}
        href="http://www.facebook.com/musicall.nightuk"
        role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>
      </div>
    </div>
  </div>

  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
          <img className="img_card" alt="" src={MaddyV} style={{width: "300px", height: "250px", margin: "auto", padding: "5px"}} />
          <br />
          <br />
        <h3 class="card-title">Shaun</h3>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <br />
        <h6>M.A.N Role</h6>
        <ul>
            <li>Photographer</li>
            <li>Content creator</li>
            <li>Web designer</li>
        </ul>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        <a
        class="btn btn-primary btn-floating m-1"
        style={{"background-color": "#ac2bac"}}
        href="http://www.instagram.com/music__all__night"
        role="button"
        ><i class="fab fa-instagram"></i
      ></a>
      <a
        class="btn btn-primary btn-floating m-1"
        style={{"background-color": "#3b5998"}}
        href="http://www.facebook.com/musicall.nightuk"
        role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>
      </div>
    </div>
  </div>



</div>

{/* <Footer /> */}

    </>
  )
}

export default ManCrew;