import NavBar from './NavBar.js';
import HomePage from '../home/HomePage';
import { useEffect, useState } from 'react';
import LoginPage from '../login/LoginPage';
import SignupPage from '../login/SignupPage';
import FlightPage from '../flightPage/FlightPage.js';
import AirplanePage from '../airlinePage/AirlinePage.js';


const RootPage = () => {
    const [airplanePageOpen, setAirplanePageOpen] = useState(false);
    const [homePageOpen, setHomePageOpen] = useState(true);
    const [flightPageOpen, setFlightPageOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggingIn, setLoggingIn] = useState(false);
    const [signingUp, setSigningUp] = useState(false);
    const [user, setUser] = useState(null);

/*
    useEffect(() => {
        if(movieSelected===null){
        }
        else{
            setListPageOpen(false);
            setMoviePageOpen(true);
        }
    }, [movieSelected])

    */
    return (
        <div>
            <NavBar
                {...{
                    setAirplanePageOpen,
                    setFlightPageOpen,
                    setHomePageOpen,
                    setLoggingIn,
                    setSigningUp,
                    user
                  
                }}
            />
            {loggingIn ? (
                <>
                    <LoginPage {...{ setLoggedIn, setLoggingIn, setUser, setHomePageOpen }} />
                </>
            ) : (
                <>
                    {signingUp ? (
                        <>
                            <SignupPage
                                {...{ setSigningUp, setUser, setLoggedIn }}
                            />
                        </>
                    ) : (
                        <>
                              {homePageOpen ? (
                                <HomePage {...{ setSigningUp }} />
                            ) : (
                                <></>
                            )}
                            {flightPageOpen ? (
                                <FlightPage {...{}} />
                            ) : (
                                <></>
                            )}
                             {airplanePageOpen ? (
                                <AirplanePage {...{}} />
                            ) : (
                                <></>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default RootPage;
