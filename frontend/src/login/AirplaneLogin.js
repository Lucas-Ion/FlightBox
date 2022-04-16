import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import './LoginPage.css';
import { baseURL } from '../consts/consts.js';

const AirplaneLogin = ({setSigningUp, setAirplanePageOpen, setAirplaneLoggedIn, setLoggedIn, setLoggingIn, setAirplaneUser, setHomePageOpen, setAirplaneLoggingIn, setAirplaneSigningUp}) => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [didFail, setDidFail] = useState(false);
    const onPasswordChange = (props) => {
        setPassword(props.target.value);
    };
    const onUsernameChange = (props) => {
        setUsername(props.target.value);
    };
    const logIn = () => {
       
      
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://localhost:7085/api/login/airline?username=${username}&password=${password}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                
               console.log(result)
                if(result === "ERROR: Airline Login is INVALID!"){
                    console.log("FAIL")
                }
                else{
                const obj = JSON.parse(result);
                console.log(obj)
                setAirplaneLoggedIn(true);
                setLoggingIn(false);
                setAirplaneUser(obj)
                setHomePageOpen(false);

                setLoggingIn(false);
                setLoggedIn(false);
                setSigningUp(false);
                }
            })
            .catch(error => console.log('error', error));


    };
    const stopLogginIn = () => {
        setLoggingIn(false);
        setHomePageOpen(true);
        setAirplaneLoggingIn(false);
        setAirplaneSigningUp(false);
      
    };

    

    return (
        <>
            <div className="login-page-back-button-container">
                <CancelIcon
                    onClick={stopLogginIn}
                    className="login-page-back-button"
                    fontSize="medium"
                />
            </div>
            <div className="login-page-title">Plane Login</div>
            <div className="login-details-wrapper">
                <div className="login-details">
                    <div className="username-input-wrapper">
                        <TextField
                            className="username-input"
                            id="standard-basic-username-password"
                            label="Username"
                            variant="standard"
                            onChange={onUsernameChange}
                        />
                    </div>
                    <div className="password-input-wrapper">
                        <TextField
                            className="password-input"
                            id="standard-basic-login-password"
                            type="password"
                            label="Password"
                            variant="standard"
                            onChange={onPasswordChange}
                        />
                    </div>

                    {didFail ? (
                        <div
                            style={{
                                marginTop: '0rem',
                                marginBottom: '1rem',
                                fontSize: '1.2rem',
                                fontWeight: 500,
                                color: 'red'
                            }}
                        >
                            Please try again
                        </div>
                    ) : (
                        <></>
                    )}

                    <Button
                        variant="contained"
                        className="sign-in-button"
                        onClick={logIn}
                    >
                        Sign-In
                    </Button>
                </div>
            </div>
        </>
    );
};

export default AirplaneLogin;
