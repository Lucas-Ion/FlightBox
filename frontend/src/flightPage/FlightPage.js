import { useEffect, useState } from "react";
import DatePicker from './Route.js'
import ColorRadioButtons from "./Select";
import StaticDatePickerLandscape from "./Calendar";
import BasicDatePicker from "./Calendar";
import StaticDateRangePickerDemo from "./Calendar";
import MediaCard from "./Route.js";
import BasicDateRangePicker from "./Calendar";
import RouteSelect from "./RouteSelect.js";
import SearchButton from "./SearchButton.js";

import PaymentForm from "../payment/PaymentForm.js"
import SuccessAlert from "./Alert.js";
import './FlightPage.css';
import DeleteAlert from "./DeleteAlert.js";
import Delete from "@mui/icons-material/Delete";



const FlightPage = ({ user }) => {

    const [routeOfferActive, setRouteOfferActive] = useState(false);
    const [paymentActive, setPaymentActive] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);
    const [timeOfDeparture, setTimeOfDeparture] = useState('');
    const [timeOfArrival, setTimeOfArrival] = useState('');
    const [departureAirport, setDestinationAirport] = useState('');
    const [arrivalAirport, setArrivalAirport] = useState('');
    const [flightResults, setFlightResults] = useState([]);
    const [depart, setDepart] = useState('');
    const [arrive, setArrive] = useState('');
    const [departureCity, setDepartureCity] = useState('');
    const [arrivalCity, setArrivalCity] = useState('');
    const [isReady, setIsReady] = useState(false);
    const [viewableFlights, setViewableFlights] = useState([]);
    const [departArrive, setDepartArrive] = useState([]);
    const [imageURL, setImageURL] = useState([]);
    const [paymentCard, setPaymentCard] = useState('')
    const [creditCardNumber, setCreditCardNumber] = useState('')
    const [cardFirstName, setFirstName] = useState('')
    const [flightNumber, setFlightNumber] = useState('')
    const [deleteAlert, setDeleteAlert] = useState(false)
    const [deleteButton, setDeleteButton] = useState(false)
    const [seatNumber, setSeatNumber] = useState('')
    const [payButton, setPayButton] = useState(true)


    const [cardLastName, setLastName] = useState('')
    const [cardNumberInput, setCardNumberInput] = useState('')
    const [cardFirstInput, setCardFirstInput] = useState('')

    const [cardLastInput, setCardLastInput] = useState('')



    const resetPage = () => {
        // your code
        setTimeout(() => {

        }, 2000);
    };


    const setCancel = () => {



        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch(`https://localhost:7085/api/admin/customer/${user.profileID}/booking?Seat_Number=${seatNumber}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


        setDeleteAlert(true)
        setSuccessAlert(false)




    }

    const setSuccess = () => {



        console.log(cardNumberInput)
        console.log(cardFirstInput)

        console.log(cardLastInput)

        console.log(user.firstName)
        console.log(flightNumber)

        if (user.firstName === cardFirstInput && user.lastName === cardLastInput && user.creditCardNumber === cardNumberInput) {
            setSuccessAlert(true);

            var requestOptions = {
                method: 'POST',
                redirect: 'follow'
            };

            fetch(`https://localhost:7085/api/admin/customer/${user.profileID}/booking?Flight_Number=${flightNumber}`, requestOptions)
                .then(response => response.text())
                .then(result => {



                    const obj = JSON.parse(result);
                    console.log(obj.seat_Number)
                    setSeatNumber(obj.seat_Number)

                })
                .catch(error => console.log('error', error));

            setDeleteButton(true)
            setPayButton(false)
            console.log(deleteButton)
        }




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


    const setCardInput = (props) => {


        setCardNumberInput(props.target.value)

    }
    const setFNameInput = (props) => {


        setCardFirstInput(props.target.value)

    }
    const setLNameInput = (props) => {


        setCardLastInput(props.target.value)

    }

    const setCredit = () => {


        setCreditCardNumber(user.creditCardNumber)
    }
    const setFName = () => {


        setFirstName(user.firstName)
    }
    const setLName = () => {


        setLastName(user.lastName)
    }

    const myStyle = {
        backgroundImage:
            "url('https://wallpaperaccess.com/full/2261425.jpg')",
        height: '100vh',
        marginTop: '-10px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };


    const routeInfo = (props) => {


        console.log(props.target.value)


    }

    const initializeViewableFlights = () => {

        let newArr = []
        for (let i = 0; i < 3; i++) {
            newArr.push(flightResults[i])

        }

        setViewableFlights(newArr)
        console.log(viewableFlights)

    }

    let imageURLString = ''
    const pullRoutes = () => {



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
                console.log("We are here")
                result.flightResults.map((result) => {
                    results.push({
                        price: result.price,
                        company_Name: result.company_Name,
                        departureAirport: result.departureAirport,
                        destinationAirport: result.destinationAirport,
                        flight_Number: result.flight_Number
                    });
                });

                results.sort((a, b) => {
                    return a.price - b.price;
                });
                setFlightResults(results);

                console.log("The flight number")
            })
            .catch(error => console.log('error', error));



        console.log(flightResults)
        console.log("This is the depart day " + depart)
        console.log("This is the arrival day " + arrive)
        console.log(departureCity)
        console.log(arrivalCity)

        console.log(`https://localhost:7085/api/admin/flight/search?TimeOfDeparture=${depart}&TimeOfArrival=${arrive}&DepartureAirport=${departureCity}&DestinationAirport=${arrivalCity}`)

        setIsReady(false)

        console.log(user.firstName)

    }






    const flightFactory = () => {
        let flightEntries = []
        let returnVar = []
        for (let i = 0; i < 1; i++) {
            flightEntries.push(viewableFlights[i])

        }
        let departArriveArr = []
        departArriveArr.push(depart)
        departArriveArr.push(arrive)


        returnVar.push(<MediaCard {...{ flightEntries, departArriveArr, imageURL }} />)
        return returnVar

    }

    useEffect(() => {



        console.log(viewableFlights)


    }, [viewableFlights]);


    useEffect(() => {
        if (flightResults.length === 0) {
            console.log("Display no flight found")
            setRouteInactive(true)
        }
        else {
            console.log("Render flights")
            console.log(flightResults)
            console.log(flightResults[0].flight_Number)
            setFlightNumber(flightResults[0].flight_Number)
            initializeViewableFlights()
            setRouteActive(true)
        }
    }, [flightResults]);
    return (
        <div style={myStyle}>



            <div class="row align-items-start">
                <div class="col ms-5">
               
                    <div className="m-4 display-5 text-dark my-5">
                        Please enter your Flight Information
                    </div>
                    <div className="ms-5 text-primary">
                        <RouteSelect {...{ setDepartureCity, setArrivalCity }} />
                    </div>
                    <div className="m-5 p-5">
                        <BasicDateRangePicker {...{ setDepart, setArrive, setIsReady }}

                            onChange={routeInfo} />
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
                        <div>
                            {flightFactory()}
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

                <div class="col mt-5">




                    <div className="m-3">

                        {routeOfferActive ? (
                            <div>
                                <div class="form-group" >
                                    <label for="formGroupExampleInput">Credit Card Number</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Card Number" onChange={setCardInput} />
                                </div>
                                <div class="form-group" >
                                    <label for="formGroupExampleInput">First Name</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First Name" onChange={setFNameInput} />
                                </div>
                                <div class="form-group" >
                                    <label for="formGroupExampleInput">Last Name</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Last Name" onChange={setLNameInput} />
                                </div>

                                {payButton ? (
                                    <div className="m-5">
                                        <button className='btn btn-success m-5' onClick={setSuccess}>

                                            Submit and Pay
                                        </button>
                                    </div>

                                ) : (
                                    <>

                                    </>
                                )}



                                {successAlert ? (
                                    <div className="m-5">
                                        <SuccessAlert />
                                        <button className='btn btn-danger m-5' onClick={setCancel}>

                                            Cancel Order
                                        </button>
                                    </div>

                                ) : (
                                    <>
                                        <div>
                                            {deleteAlert ? (
                                                <div className="m-5">
                                                    <DeleteAlert />
                                                </div>

                                            ) : (
                                                <>

                                                </>
                                            )}
                                        </div>
                                    </>
                                )}

                            </div>


                        ) : (
                            <div>
                                <div className="display-5"> Payment</div>
                                <div class="spinner-border text-danger mt-5" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>

                        )}



                    </div>


                </div>
            </div>



            <div className="display-5">

            </div>
        </div >
    );
};

export default FlightPage;
