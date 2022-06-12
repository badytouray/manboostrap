import React from 'react'
import Footer from '../../Footer/Footer'
import MaddyV from "../../Images/MaddyV.jpeg"
import Rampaige from "../../Images/Rampaige.jpg"
import "./MensClothing.css"


function MensClothing() {
  return (
    <>
    <br />
    <h1>Mens Clothing </h1>
    <h5> M.A.N Merchandise</h5>
    <div class="row">
  <div class="col-lg-4">
    <div class="card">
      <div class="card-body">
          <div class="thumbnail">
              <div class="picture1">
                    <img class="img-responsive" className="img_card" alt="" src={MaddyV} style={{width: "420px", height: "auto", margin: "5px", padding: "5px"}} />
            </div>
            <div class="picture2">
                    <img class="img-responsive" className="img_card" alt="" src={Rampaige} style={{width: "420px", height: "auto", margin: "5px", padding: "5px"}} />
            </div>
          </div>
          <br />
          
        <h5 class="card-title">Bobbie T</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
        <h6>M.A.N Role</h6>
        <ul>
            <li>100% cotton</li>
            <li>Sizes available (XS,S, M, L, XXL) </li>
            <li>Colours avilable (Black, White, Pink)</li>
        </ul>
        <div class="row">
            <div class="col">
        <label for="quantity">Quantity:</label>
<input type="number" id="quantity" name="quantity" min="1" max="10"></input>
</div>

<div class="col">
        <select class="form-select btn-md" aria-label="Default select example">
  <option selected>Select size</option>
  <option value="1">Small</option>
  <option value="2">Medium</option>
  <option value="3">Large</option>
  <option value="3">Extra Large</option>
</select>
</div>
</div>
<div class="d-grid gap-2">
        <button type="button" class="btn btn-success">Buy now</button>
        <button type="button" class="btn btn-outline-warning">Add to basket</button>
        </div>
      </div>
    </div>
  </div>


  <div class="col-lg-4">
    <div class="card">
      <div class="card-body">
          <div class="thumbnail">
              <div class="picture1">
                    <img class="img-responsive" className="img_card" alt="" src={MaddyV} style={{width: "420px", height: "auto", margin: "5px", padding: "5px"}} />
            </div>
            <div class="picture2">
                    <img class="img-responsive" className="img_card" alt="" src={Rampaige} style={{width: "420px", height: "auto", margin: "5px", padding: "5px"}} />
            </div>
          </div>
          <br />
          
        <h5 class="card-title">Bobbie T</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
        <h6>M.A.N Role</h6>
        <ul>
            <li>100% cotton</li>
            <li>Sizes available (XS,S, M, L, XXL) </li>
            <li>Colours avilable (Black, White, Pink)</li>
        </ul>
        <div class="row">
            <div class="col">
        <label for="quantity">Quantity:</label>
<input type="number" id="quantity" name="quantity" min="1" max="10"></input>
</div>

<div class="col">
        <select class="form-select btn-md" aria-label="Default select example">
  <option selected>Select size</option>
  <option value="1">Small</option>
  <option value="2">Medium</option>
  <option value="3">Large</option>
  <option value="3">Extra Large</option>
</select>
</div>
</div>
<div class="d-grid gap-2">
        <button type="button" class="btn btn-success">Buy now</button>
        <button type="button" class="btn btn-outline-warning">Add to basket</button>
        </div>
      </div>
    </div>
  </div>



  <div class="col-lg-4">
    <div class="card">
      <div class="card-body">
          <div class="thumbnail">
              <div class="picture1">
                    <img class="img-responsive" className="img_card" alt="" src={MaddyV} style={{width: "420px", height: "auto", margin: "5px", padding: "5px"}} />
            </div>
            <div class="picture2">
                    <img class="img-responsive" className="img_card" alt="" src={Rampaige} style={{width: "420px", height: "auto", margin: "5px", padding: "5px"}} />
            </div>
          </div>
          <br />
          
        <h5 class="card-title">Bobbie T</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
        <h6>M.A.N Role</h6>
        <ul>
            <li>100% cotton</li>
            <li>Sizes available (XS,S, M, L, XXL) </li>
            <li>Colours avilable (Black, White, Pink)</li>
        </ul>
        <div class="row">
            <div class="col">
        <label for="quantity">Quantity:</label>
<input type="number" id="quantity" name="quantity" min="1" max="10"></input>
</div>

<div class="col">
        <select class="form-select btn-md" aria-label="Default select example">
  <option selected>Select size</option>
  <option value="1">Small</option>
  <option value="2">Medium</option>
  <option value="3">Large</option>
  <option value="3">Extra Large</option>
</select>
</div>
</div>
<div class="d-grid gap-2">
        <button type="button" class="btn btn-success">Buy now</button>
        <button type="button" class="btn btn-outline-warning">Add to basket</button>
        </div>
      </div>
    </div>
  </div>



  

 

</div>

<Footer />

    </>
  )
}

export default MensClothing