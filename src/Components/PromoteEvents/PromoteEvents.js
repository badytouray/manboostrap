import React from 'react'
import Footer from '../Footer/Footer';
import "./PromoteEvents.css";

function PromoteEvents() {
  return (
    <>
    <br />
    <h1>List & promote your events</h1>
    <p  class="container">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    

    <div className="form_promote">
            <div class="input-group container ">
                <span class="input-group-text">Event name</span>
                <input type="text" aria-label="First name" class="form-control"/>
                </div>

                <div class="input-group container ">
                <span class="input-group-text">Venue name</span>
                <input type="text" aria-label="Last name" class="form-control" />
                </div>

                <div class="input-group container">
                <span class="input-group-text">Event location</span>
                <input type="text" aria-label="Last name" class="form-control" />
                </div>

                <div class="input-group container">
                <span class="input-group-text">Enter email</span>
                <input type="email" aria-label="Last name" class="form-control" />
                </div>

                <div class="input-group container">
                <span class="input-group-text">Social Links</span>
                <input type="text" aria-label="Last name" class="form-control" />
                </div>

                <div class="input-group container">
                <span class="input-group-text">Ticket Links</span>
                <input type="text" aria-label="Last name" class="form-control" />
                </div>

                <div class="input-group container">
                <span class="input-group-text">Date of event</span>
                <input type="date" aria-label="Last name" class="form-control" />
                </div>

                <div class="input-group container">
                <span class="input-group-text">Event start time</span>
                <input type="time" aria-label="Last name" class="form-control" />
                </div>

                <div class="input-group container">
                <span class="input-group-text">Event finish time</span>
                <input type="time" aria-label="Last name" class="form-control" />
                </div>

                <div class="input-group container">
                <span class="input-group-text">Contact number</span>
                <input type="tel" aria-label="Number" class="form-control" />
                </div>


                <div class="mb-3 container">
                <label for="formFile" class="form-label"><p class="font-weight-bold">Upload your artwork</p></label>
                <input class="form-control" type="file" id="formFile"/>
                <br />
                <button class="btn btn-success " submit="submit">Submit</button>
    </div>
</div>
<Footer />
</>
  )
}

export default PromoteEvents

