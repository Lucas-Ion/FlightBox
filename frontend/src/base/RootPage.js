import NavBar from './NavBar.js';
import HomePage from '../home/HomePage';
import { useEffect, useState } from 'react';
import LoginPage from '../login/LoginPage';
import SignupPage from '../login/SignupPage';
import FlightPage from '../flightPage/FlightPage.js';
import AirplanePage from '../airlinePage/AirlinePage.js';
import AirplaneSignUp from '../login/AirplaneSignUp.js';
import AirplaneLogin from '../login/AirplaneLogin.js';
import AdminLoginPage from '../login/AdminLoginPage.js';
import AdminPage from '../adminPage/AdminPage.js';


const RootPage = () => {
    const [airplanePageOpen, setAirplanePageOpen] = useState(false);
    const [adminPageOpen, setAdminPageOpen] = useState(false)
    const [homePageOpen, setHomePageOpen] = useState(true);
    const [flightPageOpen, setFlightPageOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggingIn, setLoggingIn] = useState(false);
    const [signingUp, setSigningUp] = useState(false);
    const [user, setUser] = useState(null);
    const [airplaneUser, setAirplaneUser] = useState(null);

    const [airplaneLoggedIn, setAirplaneLoggedIn] = useState(false);
    const [airplaneLoggingIn, setAirplaneLoggingIn] = useState(false);
    const [airplaneSigningUp, setAirplaneSigningUp] = useState(false);

    const [adminUser, setAdminUser] = useState(null);
    const [adminLoggedIn, setAdminLoggedIn] = useState(false);
    const [adminLoggingIn, setAdminLoggingIn] = useState(false);
    const [loggedOutClicked, setLoggedOutClicked] = useState(false)

    useEffect(() => {

        if (loggedIn === true) {
            setFlightPageOpen(true)
            setAirplanePageOpen(false)
        }


    }, [loggedIn])

    useEffect(() => {

        if (airplaneLoggedIn === true) {
            setFlightPageOpen(false)
            setAirplanePageOpen(true)
            setAirplaneLoggingIn(false)
        }


    }, [airplaneLoggedIn])
    useEffect(() => {

        if (adminLoggingIn === true) {
            setFlightPageOpen(false)
            setAirplanePageOpen(false)
            setAirplaneLoggingIn(false)
            setAdminPageOpen(true)
        }


    }, [adminLoggingIn])



    useEffect(() => {

        if (loggedOutClicked === true) {
            setHomePageOpen(true)
            setFlightPageOpen(false)
            setAirplanePageOpen(false)
            setLoggedIn(false);
            setAirplaneLoggedIn(false);
            setAirplaneLoggingIn(false)
            setLoggingIn(false)
            setAirplaneSigningUp(false)
            setSigningUp(false)
            setLoggedOutClicked(true)
            setUser(null)
            setAirplaneUser(null)
        }


    }, [loggedOutClicked])




    return (
        <div>
            <NavBar
                {...{
                    setAirplanePageOpen,
                    setFlightPageOpen,
                    flightPageOpen,
                    setLoggedIn,
                    setAirplaneLoggedIn,
                    setHomePageOpen,
                    homePageOpen,
                    loggedIn,
                    airplaneLoggedIn,
                    setAirplaneLoggingIn,
                    setLoggingIn,
                    setAirplaneSigningUp,
                    setSigningUp,
                    user,
                    airplaneUser,
                    setLoggedOutClicked,
                    setUser,
                    setAirplaneUser,
                    setAdminUser,
                    setAdminLoggedIn,
                    setAdminLoggingIn,
                    adminLoggedIn,
                    adminUser
                }}
            />
            {loggingIn || airplaneLoggingIn || adminLoggingIn ? (
                <>
                    {loggingIn ? (

                        <LoginPage {...{ setLoggedIn, setLoggingIn, setUser, setHomePageOpen, setAirplaneLoggingIn, setAirplaneSigningUp }} />


                    ) : airplaneLoggingIn ?(

                        <AirplaneLogin {...{ setSigningUp, setAirplanePageOpen, setAirplaneLoggedIn, setLoggedIn, setLoggingIn, setAirplaneUser, setHomePageOpen, setAirplaneLoggingIn, setAirplaneSigningUp }} />
                    ):(

                   
                      
                      <AdminLoginPage {...{ setLoggedIn, setLoggingIn, setUser, setHomePageOpen, setAirplaneLoggingIn, setAirplaneSigningUp, setAdminLoggedIn, setAdminLoggingIn, setAdminUser, setAdminPageOpen}}/>
                      
                        
                    )}

                </>
            ) : (
                <>
                    {signingUp || airplaneSigningUp ? (
                        <>

                            {signingUp ? (

                                <SignupPage
                                    {...{ setSigningUp, setUser, setLoggedIn, setHomePageOpen, setAirplaneLoggingIn, setAirplaneSigningUp }}
                                />

                            ) : (
                                <div>

                                    {airplaneSigningUp ? (

                                        <AirplaneSignUp {...{ setAirplaneLoggedIn, setAirplaneLoggingIn, setAirplaneUser, setHomePageOpen, setAirplaneSigningUp, setAirplanePageOpen }} />
                                    ) : (

                                        <>

                                        </>
                                    )}

                                </div>
                            )}




                        </>
                    ) : (
                        <>
                            {homePageOpen ? (
                                <HomePage {...{ setSigningUp }} />
                            ) : (
                                <></>
                            )}
                            {flightPageOpen ? (
                                <FlightPage {...{ user }} />
                            ) : (
                                <></>
                            )}
                            {airplanePageOpen ? (
                                <AirplanePage {...{ airplaneUser }} />
                            ) : (
                                <></>
                            )}
                             {adminPageOpen ? (
                                <AdminPage {...{ adminUser }} />
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
