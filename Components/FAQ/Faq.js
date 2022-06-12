import React from 'react'
import ContactUs from '../ContactUs/ContactUs'


function Faq() {
  return (
    <>
    <br />
    <h1 className="title_about" class="container-fluid"> Frequently Asked Questions</h1>
    <div class="m-4">
    <div class="accordion" id="myAccordion">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button type="button" class="accordion-button " data-bs-toggle="collapse" data-bs-target="#collapseOne">1. What is HTML?</button>									
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                <div class="card-body">
                    <p>HTML stands for HyperText Markup Language. HTML is the standard markup language for describing the structure of web pages. <a href="https://www.tutorialrepublic.com/html-tutorial/" target="/">Learn more.</a></p>
                </div>
            </div>
        </div>


        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">2. What is Bootstrap?</button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body">
                    <p>Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development. It is a collection of CSS and HTML conventions. <a href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="/">Learn more.</a></p>
                </div>
            </div>
        </div>


        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">3. What is CSS?</button>                     
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body">
                    <p>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. <a href="https://www.tutorialrepublic.com/css-tutorial/" target="/">Learn more.</a></p>
                </div>
            </div>
        </div>


        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">4. What is CSS?</button>                     
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body">
                    <p>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. <a href="https://www.tutorialrepublic.com/css-tutorial/" target="/">Learn more.</a></p>
                </div>
            </div>
        </div>


        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive">5. What is CSS?</button>                     
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body">
                    <p>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. <a href="https://www.tutorialrepublic.com/css-tutorial/" target="/">Learn more.</a></p>
                </div>
            </div>
        </div>


        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix">6. What is CSS?</button>                     
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body">
                    <p>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. <a href="https://www.tutorialrepublic.com/css-tutorial/" target="/">Learn more.</a></p>
                </div>
            </div>
        </div>


        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSeven">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSeven">7. What is CSS?</button>                     
            </h2>
            <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body">
                    <p>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. <a href="https://www.tutorialrepublic.com/css-tutorial/" target="/">Learn more.</a></p>
                </div>
            </div>
        </div>




    </div>
</div>
<ContactUs />
    </>
  )
}

export default Faq