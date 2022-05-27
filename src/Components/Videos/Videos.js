import React from 'react'
import Footer from '../Footer/Footer'
import "./Videos.css";

function Videos() {
  return (
    <>
     <br />
    <h1> Video Gallery</h1>
    <h3> Events / Music Videos / Entertainment</h3>
    <br />
            {/* <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
            </div>

            <div class="card" style={{width: "10rem;"}}>
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}




<div class="card-group">
  <div class="card">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" style={{width: "425px", height: "250px", margin: "auto", padding: "5px"}} allowfullscreen></iframe>
    <div class="card-body">
      <h5 class="card-title">Harry Shotta & Rampaige</h5>
      <p class="card-text">Valentines day special 2022 supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      
      <button type="button" class="btn btn-outline-success"><a href="/picture-gallery">See pictures</a></button> 
    </div>
  </div>
  <div class="card">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" style={{width: "425px", height: "250px", margin: "auto", padding: "5px"}} allowfullscreen></iframe>
    <div class="card-body">
      <h5 class="card-title">Lisa Maffia & Romeo, Nicky Blackmarket, Argo, Ego Trippin</h5>
      <p class="card-text">FirstThis card has supporting text below as a natural lead-in to additional content.</p>
      
      <button type="button" class="btn btn-outline-success"><a href="/picture-gallery">See pictures</a></button>
    </div>
  </div>
  <div class="card">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" style={{width: "425px", height: "250px", margin: "auto", padding: "5px"}} allowfullscreen></iframe>
    <div class="card-body">
      <h5 class="card-title">Benny Page, Dj Pied Piper & Mc DT</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    
      <button type="button" class="btn btn-outline-success"><a href="/picture-gallery">See pictures</a></button>
    </div>
  </div>
</div>






<Footer />
    </>
  )
}

export default Videos