import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import './SignupPage.css';
import { baseURL } from '../consts/consts.js';
import { set } from 'date-fns';
const AirplaneSignUp = ({setAirplaneLoggedIn, setAirplaneLoggingIn, setAirplaneUser, setHomePageOpen, setAirplaneSigningUp, setAirplanePageOpen }) => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [FName, setFName] = useState('');
    const [LName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [airlineCompanyName, setAirlineCompanyName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [doPasswordsMatch, setDoPasswordsMatch] = useState(true);
    const [didFail, setDidFail] = useState(false);

    const onPasswordChange = (props) => {
        if (props.target.value === confirmPassword) {
            setDoPasswordsMatch(true);
        } else {
            if (confirmPassword !== '') {
                setDoPasswordsMatch(false);
            } else {
                setDoPasswordsMatch(true);
            }
        }
        setPassword(props.target.value);
    };
    const onUsernameChange = (props) => {
        setUsername(props.target.value);
    };
    const onConfirmPasswordChange = (props) => {
        if (props.target.value === password) {
            setDoPasswordsMatch(true);
        } else {
            if (props.target.value !== '') {
                setDoPasswordsMatch(false);
            } else {
                setDoPasswordsMatch(true);
            }
        }
        setConfirmPassword(props.target.value);
    };
    const onEmailChange = (props) => {
        setEmail(props.target.value);
    };
    const onFNameChange = (props) =>{
        setFName(props.target.value);
    }
    const onLNameChange = (props) =>{
        setLName(props.target.value);
    }
    const onCompanyChange = (props) =>{
        setAirlineCompanyName(props.target.value);
    }

    const signUp = () => {



        console.log(FName);
        console.log(LName);
        console.log(email);
        console.log(username);
        console.log(password);
        console.log(airlineCompanyName);


        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
          };
          
          fetch(`https://localhost:7085/api/admin/signup/airline?FirstName=${FName}&LastName=${LName}&email=${email}&username=${username}&password=${password}&airlineCompanyName=${airlineCompanyName}`, requestOptions)
            .then(response => response.text())
            .then(result => {
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
                      
                        setAirplaneUser(obj)
                        setHomePageOpen(false);
                        setAirplaneLoggingIn(false);
                        setAirplanePageOpen(true);    
                        setAirplaneSigningUp(false)
                      
                       
                        }
                    })
                    .catch(error => console.log('error', error));
            
             })
             .catch (error => console.log('error', error));
            
            setAirplaneLoggedIn(true)
            setAirplaneLoggingIn(false)
            setAirplaneUser(username);
            setHomePageOpen(false)


    };
    const stopSigningUp = () => {
        setHomePageOpen(true)
        setAirplaneLoggingIn(false)
        setAirplaneSigningUp(false)
    };

    return (
        <>
            <div className="login-page-back-button-container">
                <CancelIcon
                    onClick={stopSigningUp}
                    className="login-page-back-button"
                    fontSize="medium"
                />
            </div>
            <div className="login-page-title"> Plane Register</div>
            <div className="login-details-wrapper">
                <div className="login-details">
                <div className="FName-input-wrapper">
                        <TextField
                            className="FName-input"
                            id="standard-basic-signup-FName"
                            label="First Name"
                            variant="standard"
                            onChange={onFNameChange}
                        />
                    </div>
                    <div className="LName-input-wrapper">
                        <TextField
                            className="LName-input"
                            id="standard-basic-signup-LName"
                            label="Last Name"
                            variant="standard"
                            onChange={onLNameChange}
                        />
                    </div>
                    <div className="email-input-wrapper">
                        <TextField
                            className="password-input"
                            id="standard-basic-signup-email"
                            label="Email Address"
                            variant="standard"
                            onChange={onEmailChange}
                        />
                    </div>
                    <div className="username-input-wrapper">
                        <TextField
                            className="username-input"
                            id="standard-basic-signup-username"
                            label="Username"
                            variant="standard"
                            onChange={onUsernameChange}
                        />
                    </div>
                    <div className="password-input-wrapper">
                        <TextField
                            className="password-input"
                            id="standard-basic-signup-password"
                            type="password"
                            label="Password"
                            variant="standard"
                            onChange={onPasswordChange}
                        />
                    </div>
                    <div className="confirm-password-input-wrapper">
                        <TextField
                            className="password-input"
                            id="standard-basic-signup-password-confirm"
                            type="password"
                            label="Confirm Password"
                            error={!doPasswordsMatch}
                            variant="standard"
                            helperText={
                                doPasswordsMatch
                                    ? null
                                    : "Passwords don't match."
                            }
                            onChange={onConfirmPasswordChange}
                        />
                    </div>
                    <div className="credit-input-wrapper mb-5">
                        <TextField
                            className="credit-input"
                            id="standard-basic-signup-credit"
                            label="Airline Company Name"
                            variant="standard"
                            onChange={onCompanyChange}
                        />
                    </div>

                    {didFail ? (
                        <div
                            style={{
                                marginTop: '-.8rem',
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
                        onClick={signUp}
                    >
                        Sign-Up
                    </Button>
                </div>
            </div>
        </>
    );
};

export default AirplaneSignUp;
