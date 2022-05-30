import React from 'react'
import "./SignUpToggleForm.css";

function SignUpToggleForm() {
return (
<>
{/* <!-- Button trigger modal --> */}
<button type="button" class="btn-primary " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Sign up
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Sign up</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-lg-10">
      <input type="password" class="form-control" id="inputPassword"/>
    </div>
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sign up</button>
        
      </div>
    </div>
  </div>
</div>
  
    </>
  )
}

export default SignUpToggleForm