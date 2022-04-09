import { useState } from "react";
import LoginPage from "../login/LoginPage";


const SignUp = () => {

    return (
        <div>

<div class="btn-group m-5">
  <button type="button" class="btn btn-primary">Select Airline</button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li>
    
    <div class="list-group">
  <label class="list-group-item">
    <input class="form-check-input me-1" type="radio" value=""/>
    Air Canada (Registration Code: 14672)
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="radio" value=""/>
   United Airlines (Registration Code: 21421)
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="radio" value=""/>
    Delta Airlines (Registration Code: 16271)
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="radio" value=""/>
    WestJet (Registration Code: 41214)
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="radio" value=""/>
    Alaskan Airlines (Registration Code: 12424)
  </label>
</div>
    
    </li>
    
  </ul>
</div>

        


            <form className="m-1">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">Please enter your official airline email</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"> Confirm Password Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
            </form>

        </div>
    );


}

export default SignUp;