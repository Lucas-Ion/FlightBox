import { useState } from "react";
import DatePicker from './Route.js'
import ColorRadioButtons from "./Select";
import StaticDatePickerLandscape from "./Calendar";
import BasicDatePicker from "./Calendar";
import StaticDateRangePickerDemo from "./Calendar";
import MediaCard from "./Route.js";
import BasicDateRangePicker from "./Calendar";
import RouteSelect from "./RouteSelect.js";
import SearchButton from "./SearchButton.js";
import Payment from "./Payment.js";
import PaymentForm from "../payment/PaymentForm.js"
import SuccessAlert from "./Alert.js";
import './FlightPage.css';



const FlightPage = () => {

    const [routeOfferActive, setRouteOfferActive] = useState(false);
    const [paymentActive, setPaymentActive] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);
    const [timeOfDeparture, setTimeOfDeparture] = useState('');
    const [timeOfArrival, setTimeOfArrival] = useState('');
    const [departureAirport, setDestinationAirport] = useState('');
    const [arrivalAirport, setArrivalAirport] = useState('');
    const [flightResults, setFlightResults] = useState(['']);
    const [depart, setDepart] = useState('')
    const [arrive, setArrive] = useState('')
    const [departureCity, setDepartureCity] = useState('')
    const [arrivalCity, setArrivalCity] = useState('')
    const [isReady,setIsReady] = useState(false)



    const setSuccess = () => {
        setSuccessAlert(true);
    }

    const setPActive = () => {
        setPaymentActive(true);
    }
    const setPInactive = () => {
        setPaymentActive(false);
    }
    const setRouteActive = () => {
        setRouteOfferActive(true);
    };
    const setRouteInactive = () => {
        setRouteOfferActive(false);
    };

    const myStyle = {
        backgroundImage:
            "url('https://wallpaperaccess.com/full/2261425.jpg')",
        height: '100vh',
        marginTop: '-10px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };


    const routeInfo = (props) =>{


        console.log(props.target.value)


    }

   

    const pullRoutes = () =>{



          var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          

          console.log("Info that is being passed")
          console.log(depart)
          console.log(arrive)
          console.log(departureCity)
          console.log(arrivalCity)
         
          fetch(`https://localhost:7085/api/admin/flight/search?TimeOfDeparture=${depart}&TimeOfArrival=${arrive}&DepartureAirport=${departureCity}&DestinationAirport=${arrivalCity}`, requestOptions)
            .then(response => response.json())
            .then((result) => {
                let results = [];
                result.flightResults.map((result) => {
                    results.push({
                        price: result.price,
                        company_Name: result.company_Name,
                        departureAirport: result.departureAirport,
                        destinationAirport: result.destinationAirport
                    });
                });
                setFlightResults(results);
            
            })
            .catch(error => console.log('error', error));



          console.log(flightResults)
          console.log("This is the depart day " + depart)
          console.log("This is the arrival day " + arrive)
          console.log(departureCity)
          console.log(arrivalCity)

          console.log(`https://localhost:7085/api/admin/flight/search?TimeOfDeparture=${depart}&TimeOfArrival=${arrive}&DepartureAirport=${departureCity}&DestinationAirport=${arrivalCity}`)

        setIsReady(false)
    }
    return (
        <div style={myStyle}>



            <div class="row align-items-start">
                <div class="col ms-5">

                    <div className="m-4 display-5 text-dark my-5">
                        Please enter your Flight Information
                    </div>
                    <div className="ms-5 text-primary">
                        <RouteSelect {...{setDepartureCity,setArrivalCity}}/>
                    </div>
                    <div className="m-5 p-5">
                        <BasicDateRangePicker {...{setDepart, setArrive, setIsReady}}
                        
                        onChange ={routeInfo}/>
                    </div>
                    <div className="mx-5" style={{ width: "200px" }}>
                        <div
                            class="btn btn-outline-dark"
                            onClick={pullRoutes}
                            style={{ marginLeft: "7rem", width: '7rem' }}
                        >
                            Search
                        </div>
                    </div>
                </div>
                <div class="col mt-5 ms-5">

                    {routeOfferActive ? (
                        <MediaCard />
                    ) : (
                        <div>
                            <div className="display-5 m-3"> Route</div>
                            <div class="spinner-border text-warning mt-5" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}

                </div>

                <div class="col mt-5">




                    <div className="m-3">

                        {routeOfferActive ? (
                            <div>
                                <PaymentForm />
                                <button className='btn btn-success' onClick={setSuccess}>

                                    Submit and Pay
                                </button>
                            </div>
                        ) : (
                            <div>
                                <div className="display-5"> Payment</div>
                                <div class="spinner-border text-danger mt-5" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )}
                        <div>
                            {successAlert ? (
                                <div className="m-5">
                                    <SuccessAlert />
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>


                    </div>


                </div>
            </div>



            <div className="display-5">

            </div>
        </div >
    );
};

export default FlightPage;
