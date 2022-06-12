import React from 'react'
// import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import Logo from"../Images/Logo.png";

function Footer() {
  return (
    <>
    
    
    <div class="">
    <section style={{ height: "50px", marginTop: "30px" }} />
  <div class="row" style={{ textAlign: "center"}}>
  </div>


    {/* <!----------- Footer ------------> */}
    <footer class="footer-bs cols-lg-4" style={{ textAlign: "center", backgroundColor: "black"}} >
        <div class="row">
          <div class="col-md-3 footer-brand animated fadeInLeft">
            
                <br />
                <div>
              <img src={Logo} style={{color: "white", height: "100px", width: "100px"}} />
              </div>
                {/* <p style={{color: "white"}} >Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula,</p> */}
                <p class="text-center"> 2022 Music All Night, All rights reserved</p>
            </div>


          <div class="col-md-3 footer-nav animated fadeInUp text-center text-white">
          <br />
              <h4 >M.A.N </h4>
              <div class="col-md ">
                    <ul class="list">
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/man-crew">M.A.N Crew</a></li>
                        <li><a href="/contact-us">Contacts</a></li>
                        {/* <li><a href="/list-events">List Events</a></li> */}
                        {/* <li><a href="/careers">Careers</a></li> */}
                        <li><a href="/faq">Faq</a></li>
                    </ul>
                </div>
            </div>

            {/* <div class="col-md-2 footer-nav animated fadeInUp">
            <br />
              <h4 style={{color: "white"}} >Menu </h4>
              <div class="col-md ">
                    <ul class="list">
                        <li><a href="/services">Services</a></li>
                        {/* <li><a href="/store">Store</a></li> */}
                        {/* <li><a href="/contact-us">Contacts</a></li> */}
                        {/* <li><a href="/terms-and-conditions">T&C's</a></li> */}
                        {/* <li><a href="/faq">Faq</a></li> */}
                    {/* </ul>
                </div>
            </div>  */}




          <div class="col-md-3 footer-social animated fadeInDown">
          <br />
              <h4  style={{color: "white"}} >Follow Us</h4>
              <ul>
                  <li><a href="http://www.facebook.com/musicall.nightuk">Facebook</a></li>
                  <li><a href="http://www.twitter.com/musicall.nightuk">Twitter</a></li>
                  <li><a href="/http://instagram.com/music__all__night">Instagram</a></li>
                </ul>
            </div>
          <div class="col-md-3 footer-ns animated fadeInRight" style={{color: "white"}}>
          <br />
              <h4 style={{color: "white"}}>Sign up to our Newsletter</h4>
                <p style={{color: "white"}}>For events, interviews and entertainment</p>
                <p>
                    <div class="input-group" >
                      <input type="text" class="form-control" placeholder="myemail@myemail.com" />
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-envelope"></span></button>
                      </span>
                    </div>
                    
                    {/* <!-- /input-group --> */}
                 </p>
            </div>
        </div>
    </footer>
    {/* <section style={{ textAlign: "center", margin: "10px auto"}} class="text-center" ><p>Designed by <a href="http://badytouray.com">badytouray.com</a></p></section> */}

</div>


    </>
  );
}

export default Footer