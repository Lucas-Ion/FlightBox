import { useState } from "react";
import RouteSelect from "../flightPage/RouteSelect";
import LoginPage from "../login/LoginPage";
import LogIn from "./Authenticate";
import CreateRoute from "./CreateRoute";
import DateAndTime from "./DateAndTime";
import SignUp from "./Signup";


const AirplanePage = () => {

    const [loginActive, setLoginActive] = useState(true);
    const [signupActive, setSignupActive] = useState(false);
    const [modifyActive, setModifyActive] = useState(false);

    const setActive = () => {
        setModifyActive(true);
    }
    const logOn = () => {
        setLoginActive(true);
        setSignupActive(false);


    }
    const signUp = () => {

        setLoginActive(false);
        setSignupActive(true);


    }

    const myStyle = {
        backgroundImage:
            "url('https://wallpaperaccess.com/full/2261425.jpg')",
        height: '100vh',
        marginTop: '-10px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle}>

            <div class="row align-items-start">

                <div class="col m-5">

                    <span className="display-5">Authenticate</span>
                    {loginActive ? (
                        <div className="m-5">
                            <LogIn />
                            <div className=" ml-5 m-5">
                                <button type="button" className="btn btn-success m-3"
                                    onClick={setActive}

                                >Log In</button>
                                <button type="button" className="btn btn-info btn-sm"
                                    onClick={signUp}


                                >Need to Register?</button>
                            </div>
                        </div>
                    ) : (
                        <div className="m-1">
                            <SignUp />
                            <div className=" ml-5 m-5">
                                <button type="button" className="btn btn-success m-3"
                                    onClick={setActive}

                                >Sign Up</button>
                                <button type="button" className="btn btn-info btn-sm"
                                    onClick={logOn}

                                >Need to Login?</button>
                            </div>
                        </div>
                    )}






                </div>
                <div class="col m-5">
                    <span className="display-5">Create Route</span>

                    {modifyActive ? (
                        <div className="m-5">
                            <RouteSelect />
                            <div className="row m-3">

                                <div class="input-group mb-3">
                                    <span class="input-group-text">$</span>
                                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                    <span class="input-group-text">.00</span>
                                </div>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select Plane
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Airbus A320</a></li>
                                        <li><a class="dropdown-item" href="#">Airbus A321</a></li>
                                        <li><a class="dropdown-item" href="#">Boeing 737</a></li>
                                        <li><a class="dropdown-item" href="#">Boeing 777</a></li>
                                    </ul>
                                </div>
                                <div className="mt-4">
                                    <DateAndTime />
                                    <button type="button" className="btn btn-success m-3">Create New Flight</button>
                                </div>


                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="display-5 m-3"> Route</div>
                            <div class="spinner-border text-primary mt-5" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}

                </div>
                <div class="col m-5">
                    <span className="display-5">Modify Route</span>
                    {modifyActive ? (
                        <div className="m-5">
                            <RouteSelect />
                            <div className="row m-3">

                                <div class="input-group mb-3">
                                    <span class="input-group-text">$</span>
                                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                    <span class="input-group-text">.00</span>
                                </div>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select Plane
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Airbus A320</a></li>
                                        <li><a class="dropdown-item" href="#">Airbus A321</a></li>
                                        <li><a class="dropdown-item" href="#">Boeing 737</a></li>
                                        <li><a class="dropdown-item" href="#">Boeing 777</a></li>
                                    </ul>
                                </div>
                                <div className="mt-4">
                                    <DateAndTime />
                                    <button type="button" className="btn btn-warning m-3">Modify Flight</button>
                                </div>


                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="display-5 m-3"> Route</div>
                            <div class="spinner-border text-warning mt-5" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}

                </div>
            </div>

        </div>
    );


}

export default AirplanePage;