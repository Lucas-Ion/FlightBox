import { useState } from "react";
import LoginPage from "../login/LoginPage";


const CreateRoute = () => {

    return (
        <div>
            <div>
            <label for="depart" class="form-label">Datalist example</label>
            <input class="form-control" list="datalistOptions" id="depart" placeholder="Type to search..." />
            <datalist id="datalistOptions">
            <option value="Calgary" />
                <option value="Edmonton" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" />
                <option value="Phoenix" />
                <option value="Miami" />
                <option value="Saskatoon" />
                <option value="Vancouver" />
                <option value="Montreal" />
                <option value="New York" />

            </datalist>
            </div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">Please enter your official airline email</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
            </form>

        </div >
    );


}

export default CreateRoute;