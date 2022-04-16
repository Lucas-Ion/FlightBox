import { useState, useEffect } from "react";
import RouteSelect from "../flightPage/RouteSelect";
import LoginPage from "../login/LoginPage";
import LogIn from "./Authenticate";
import CreateRoute from "./CreateRoute";
import DateAndTime from "./DateAndTime";
import DeleteAlert from "./FlightNumber";
import SignUp from "./Signup";


const AirplanePage = (airplaneUser) => {

    const [loginActive, setLoginActive] = useState(true);
    const [signupActive, setSignupActive] = useState(false);
    const [modifyActive, setModifyActive] = useState(false);


    const [airplaneRegistrationCode, setAirplaneRegistrationCode] = useState('');
    const [countryName, setCountryName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [timeOfDeparture, setTimeOfDeparture] = useState('');
    const [timeOfArrival, setTimeOfArrival] = useState('');
    const [destinationAirport, setDestinationAirport] = useState('');
    const [departureAirport, setDepartureAiport] = useState('');
    const [flightNumber, setFlightNumber] = useState([]);
    const [price, setPrice] = useState('');
    const [displayFlightNumber, setDisplayFlightNumber] = useState('')



    const setCode = (props) => {


        setAirplaneRegistrationCode(props.target.value)
    }
    const country = (props) => {


        setCountryName(props.target.value)
    }

    const company = (props) => {


        setCompanyName(props.target.value)
    }

    const timeDepart = (props) => {


        setTimeOfDeparture(props.target.value)
    }

    const timeArrive = (props) => {


        setTimeOfArrival(props.target.value)
    }

    const setDest = (props) => {


        setDestinationAirport(props.target.value)
    }

    const setDepart = (props) => {

        setDepartureAiport(props.target.value)
    }

    const priceSet = (props) => {


        setPrice(props.target.value)
    }
    const flightNumberSet = (props) =>{


setFlightNumber(props.target.value)

    }



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

    const createFlightRoute = () => {


        console.log(airplaneRegistrationCode)
        console.log(countryName)
        console.log(timeOfDeparture)
        console.log(timeOfArrival)
        console.log(destinationAirport)
        console.log(departureAirport)
        console.log(price)




        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
          };
          
          fetch(`https://localhost:7085/api/admin/flight?Airplane_Registration_Code=${airplaneRegistrationCode}&Country_Name=${countryName}&Company_Name=${airplaneUser.airplaneUser.airlineCompanyName}&TimeOfDeparture=${timeOfDeparture}&TimeOfArrival=${timeOfArrival}&DestinationAirport=${destinationAirport}&DepartureAirport=${departureAirport}&Price=${price}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                
                console.log(result)
                
                 let flightArr = []
                 const obj = JSON.parse(result);
                 console.log(obj)
                 console.log(obj.flight_Number)
                 flightArr.push(obj.flight_Number)
                 setFlightNumber(flightArr)
                 console.log(flightNumber)
               
                 
             })
             .catch(error => console.log('error', error));
console.log(airplaneUser.airplaneUser.airlineCompanyName)

console.log(`https://localhost:7085/api/admin/flight?Airplane_Registration_Code=${airplaneRegistrationCode}&Country_Name=${countryName}&Company_Name=${airplaneUser.airplaneUser.airlineCompanyName}&TimeOfDeparture=${timeOfDeparture}&TimeOfArrival=${timeOfArrival}&DestinationAirport=${destinationAirport}&DepartureAirport=${departureAirport}&Price=${price}`)


setDisplayFlightNumber(true)


    }

    const modifyFlightRoute = () =>{

setDisplayFlightNumber(false)
        var requestOptions = {
            method: 'PUT',
            redirect: 'follow'
          };
          
          fetch(`https://localhost:7085/api/admin/flight?flight_Number=${flightNumber}&Airplane_Registration_Code=${airplaneRegistrationCode}&Country_Name=${countryName}&Company_Name=${airplaneUser.airplaneUser.airlineCompanyName}&TimeOfDeparture=${timeOfDeparture}&TimeOfArrival=${timeOfArrival}&DestinationAirport=${destinationAirport}&DepartureAirport=${departureAirport}&Price=${price}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));



    }

    useEffect(() => {



        console.log(departureAirport)


    }, [departureAirport]);



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
                    <span className="display-5">Create Route</span>


                    <div className="m-5">
                        <div class="form-group" >
                            <label for="formGroupExampleInput">Departure City</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="City Name" onChange ={setDepart}/>
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Arrival City</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="City Name" onChange ={setDest} />
                        </div>
                        <div className="row m-3">

                            <div class="input-group mb-3">
                                <span class="input-group-text">$</span>
                                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" onChange ={priceSet}/>
                                <span class="input-group-text">.00</span>
                            </div>
                           
                            <div class="form-group">
                                <label for="formGroupExampleInput">Country of Registration</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" onChange ={country}/>
                            </div>
                            <div class="form-groupm-1">
                                <label for="formGroupExampleInput">Airplane Registration Code</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" onChange ={setCode}/>
                            </div>
                            <div className="mt-4">
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Departure Date (MM/DD/YYYY)</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" onChange ={timeDepart} />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Arrival Date (MM/DD/YYYY)</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" onChange ={timeArrive}/>
                                </div>

                                <button type="button" className="btn btn-success m-3" onClick={createFlightRoute}>Create New Flight</button>
                            </div>


                        </div>
                    </div>

                    {displayFlightNumber ? (
                                    <div className="m-5">
                                     <DeleteAlert {...{flightNumber}}/>
                                    </div>

                                ) : (
                                    <>

                                    </>
                                )}
 

                </div>
                <div class="col m-5">
                    <span className="display-5">Modify Route</span>



                    <div className="m-5">
                    <div class="form-group" >
                            <label for="formGroupExampleInput">Flight Number to Modify</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="City Name" onChange ={flightNumberSet}/>
                        </div>
                        <div class="form-group" >
                            <label for="formGroupExampleInput">Departure City</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="City Name" onChange ={setDepart}/>
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Arrival City</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="City Name" onChange ={setDest} />
                        </div>
                        <div className="row m-3">

                            <div class="input-group mb-3">
                                <span class="input-group-text">$</span>
                                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" onChange ={priceSet}/>
                                <span class="input-group-text">.00</span>
                            </div>
                           
                            <div class="form-group">
                                <label for="formGroupExampleInput">Country of Registration</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" onChange ={country}/>
                            </div>
                            <div class="form-groupm-1">
                                <label for="formGroupExampleInput">Airplane Registration Code</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" onChange ={setCode}/>
                            </div>
                            <div className="mt-4">
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Departure Date (MM/DD/YYYY)</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" onChange ={timeDepart} />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Arrival Date (MM/DD/YYYY)</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" onChange ={timeArrive}/>
                                </div>

                                <button type="button" className="btn btn-warning m-3" onClick={modifyFlightRoute}>Modify Flight</button>
                            </div>


                        </div>
                    </div>
                    


                </div>
            </div>

        </div>
    );


}

export default AirplanePage;