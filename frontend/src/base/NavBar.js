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
    user
}) => {
    const openAirPage = () =>{
        setAirplanePageOpen(true);
        setHomePageOpen(false);
        setFlightPageOpen(false);

    }
    const openFlightPage = () =>{
        setAirplanePageOpen(false);
        setFlightPageOpen(true);
        setHomePageOpen(false);
    }
    const airplanelogOut = () => {
        setAirplaneLoggedIn(false);
        //setJournalPageOpen(false);
    };
    const logOut = () => {
        setLoggedIn(false);
        //setJournalPageOpen(false);
    };
    const openHomePage = () => {
        setHomePageOpen(true);
        setFlightPageOpen(false);
        setAirplanePageOpen(false);
    };
    const airplanelogIn = () => {
        setAirplaneSigningUp(false);
       setAirplaneLoggingIn(false);
    };
    const logIn = () => {
        setSigningUp(false);
        setLoggingIn(true);
        setHomePageOpen(false);
    };
    const airplaneSignUp = () => {
      setAirplaneLoggingIn(false);
       setAirplaneSigningUp(false);
    };
    const signUp = () => {
        setLoggingIn(false);
        setSigningUp(true);
    };
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
                   
                    </ul>
                    <form class="d-flex">
                        {loggedIn ? (
                            <>
                                <div style={{
                                  marginTop: '.35rem',
                                  fontSize: '1rem',
                                  fontWeight: '400',
                                  marginRight: '1rem',
                                  marginLeft: '.5rem'

                                }}>{user !== null ? user.username : ''}</div>

                                <div
                                    class="btn btn-outline-success"
                                    onClick={logOut}
                                    style={{ marginLeft: 8, width: '7rem' }}
                                >
                                    Log Out
                                </div>
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
                                
                            </>
                        )}
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
