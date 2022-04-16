const NavBar = ({
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
}) => {
    const openAirPage = () => {
        setAirplanePageOpen(true);
        setHomePageOpen(false);
        setFlightPageOpen(false);

    }
    const openFlightPage = () => {
        setAirplanePageOpen(false);
        setFlightPageOpen(true);
        setHomePageOpen(false);
    }
    const airplanelogOut = () => {
        setAirplaneLoggedIn(false);
        setAirplaneUser(null)
        //setJournalPageOpen(false);
    };
    const adminLogOut = () => {



        setAirplanePageOpen(false);
        setFlightPageOpen(false);
        setLoggedIn(false);
        setAirplaneLoggedIn(false);
        setHomePageOpen(true);
        setAirplaneLoggingIn(false)
        setLoggingIn(false)
        setAirplaneSigningUp(false)
        setSigningUp(false)
        setLoggedOutClicked(true)
        setAirplaneUser(null);
        setAdminLoggingIn(false)
        setAdminLoggedIn(false)
        setAdminUser(null);
        //setJournalPageOpen(false);
    };
    const LogOut = () => {



        setAirplanePageOpen(false);
        setFlightPageOpen(false);
        setLoggedIn(false);
        setAirplaneLoggedIn(false);
        setHomePageOpen(true);
        setAirplaneLoggingIn(false)
        setLoggingIn(false)
        setAirplaneSigningUp(false)
        setSigningUp(false)
        setLoggedOutClicked(true)
        setAirplaneUser(null);
        setAdminLoggingIn(false)
        setAdminLoggedIn(false)
        setUser(null);
        //setJournalPageOpen(false);
    };
    const openHomePage = () => {
        setHomePageOpen(true);
        setFlightPageOpen(false);
        setAirplanePageOpen(false);
        setAirplaneLoggingIn(false);
        setAirplaneSigningUp(false)
        setLoggingIn(false);
        setSigningUp(false)
    };
    const airplanelogIn = () => {
        setAirplaneSigningUp(false);
        setAirplaneLoggingIn(true);
        setAirplanePageOpen(false);
        setHomePageOpen(false);
        setLoggingIn(false)

    };
    const logIn = () => {
        setSigningUp(false);
        setLoggingIn(true);
        setHomePageOpen(false);
    };
    const airplaneSignUp = () => {
        setAirplaneLoggingIn(false);
        setAirplaneSigningUp(true);
        setLoggingIn(false)
        setHomePageOpen(false)

    };
    const signUp = () => {
        setLoggingIn(false);
        setSigningUp(true);
    };

    const adminLogIn = () => {
        setHomePageOpen(true);
        setFlightPageOpen(false);
        setAirplanePageOpen(false);
        setAirplaneLoggingIn(false);
        setAirplaneSigningUp(false)
        setLoggingIn(false);
        setSigningUp(false)
        setAdminLoggingIn(true)


    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" style={{ cursor: 'auto' }}>
                    <span className="text-primary">Flight</span>
                    <span className="text-success">Box</span>
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li
                            class="nav-item"
                            onClick={openHomePage}
                            style={{ cursor: 'pointer' }}
                        >
                            <a
                                class={
                                    homePageOpen
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >
                                Home
                            </a>
                        </li>
                        {loggedIn ? (

                            <li
                                class="nav-item"
                                onClick={openFlightPage}
                                style={{ cursor: 'pointer' }}
                            >
                                <a
                                    class={
                                        flightPageOpen
                                            ? 'nav-link active'
                                            : 'nav-link'
                                    }
                                >
                                    Flight Page
                                </a>
                            </li>

                        ) : (<></>)}

                        {airplaneLoggedIn ? (

                            <li
                                class="nav-item"
                                onClick={openAirPage}
                                style={{ cursor: 'pointer' }}
                            >
                                <a
                                    class={
                                        flightPageOpen
                                            ? 'nav-link active'
                                            : 'nav-link'
                                    }
                                >
                                    Airline Management Page
                                </a>
                            </li>
                        ) : (<></>)}
                        {airplaneLoggedIn ? (

                            <li
                                class="nav-item"
                                onClick={openAirPage}
                                style={{ cursor: 'pointer' }}
                            >
                                <a
                                    class={
                                        flightPageOpen
                                            ? 'nav-link active'
                                            : 'nav-link'
                                    }
                                >
                                    Airline Management Page
                                </a>
                            </li>
                        ) : (<></>)}


                    </ul>
                    <form class="d-flex">
                        {loggedIn || airplaneLoggedIn || adminLoggedIn? (
                            <>
                                <div style={{
                                    marginTop: '.35rem',
                                    fontSize: '1rem',
                                    fontWeight: '400',
                                    marginRight: '1rem',
                                    marginLeft: '.5rem'

                                }}>{user !== null ? user.username : ''}</div>
                                <div style={{
                                    marginTop: '.35rem',
                                    fontSize: '1rem',
                                    fontWeight: '400',
                                    marginRight: '1rem',
                                    marginLeft: '.5rem'

                                }}>{airplaneUser !== null ? airplaneUser.username : ''}</div>
                                <div style={{
                                    marginTop: '.35rem',
                                    fontSize: '1rem',
                                    fontWeight: '400',
                                    marginRight: '1rem',
                                    marginLeft: '.5rem'

                                }}>{adminUser !== null ? adminUser.username : ''}</div>
                                {airplaneLoggedIn ? (
                                    <div
                                        class="btn btn-outline-success"
                                        onClick={airplanelogOut}
                                        style={{ marginLeft: 8, width: '7rem' }}
                                    >
                                        Log Out
                                    </div>
                                ) : adminLoggedIn ? (


                                    <div
                                        class="btn btn-outline-success"
                                        onClick={adminLogOut}
                                        style={{ marginLeft: 8, width: '7rem' }}
                                    >
                                        Log Out
                                    </div>


                                ) : (

                                
                                    <div
                                        class="btn btn-outline-success"
                                        onClick={LogOut}
                                        style={{ marginLeft: 8, width: '7rem' }}
                                    >
                                        Log Out
                                    </div>
            


                                )}

                            </>
                        ) : (
                            <>
                                <div
                                    class="btn btn-outline-success"
                                    onClick={signUp}
                                    style={{ marginLeft: 8, width: '7rem' }}
                                >
                                    Sign Up
                                </div>
                                <div
                                    class="btn btn-outline-success"
                                    onClick={logIn}
                                    style={{ marginLeft: 8, width: '7rem' }}
                                >
                                    Log In
                                </div>
                                <div
                                    class="btn btn-outline-success"
                                    onClick={airplaneSignUp}
                                    style={{ marginLeft: 8, width: '7rem' }}
                                >
                                    Airline Sign Up
                                </div>
                                <div
                                    class="btn btn-outline-success"
                                    onClick={airplanelogIn}
                                    style={{ marginLeft: 8, width: '7rem' }}
                                >
                                    Airline Log In
                                </div>
                                <div
                                    class="btn btn-outline-primary"
                                    onClick={adminLogIn}
                                    style={{ marginLeft: 8, width: '7rem' }}
                                >
                                    Admin Log In
                                </div>

                            </>
                        )}
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
