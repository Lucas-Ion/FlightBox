import { useState } from "react";
import LoginPage from "../login/LoginPage";


const LogIn = () => {

    return (
        <div>

            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">Please enter your official airline email</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
            </form>
            

        </div>
    );


}

export default LogIn;