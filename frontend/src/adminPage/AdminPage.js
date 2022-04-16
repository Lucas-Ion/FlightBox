import NavBar from '../base/NavBar.js';
import HomePage from '../home/HomePage';
import { useEffect, useState } from 'react';
import LoginPage from '../login/LoginPage';
import SignupPage from '../login/SignupPage';
import FlightPage from '../flightPage/FlightPage.js';
import AirplanePage from '../airlinePage/AirlinePage.js';
import AirplaneSignUp from '../login/AirplaneSignUp.js';
import AirplaneLogin from '../login/AirplaneLogin.js';
import AdminLoginPage from '../login/AdminLoginPage.js';


const AdminPage = ({adminUser}) => {

    const [reportString, setReportString] = useState('')
  
const fetchReport = () =>{

    let string
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      fetch(`https://localhost:7085/api/admin/${adminUser.profileID}/report/`, requestOptions)
        .then(response => response.text())
        .then(result => {
                
           
             const obj = JSON.parse(result);
             console.log(JSON.stringify(obj))
             setReportString(JSON.stringify(obj))
             console.log(reportString)
             
         })
         .catch(error => console.log('error', error));





}



    return (
      <div>

<button type="button" class="btn btn-primary m-5" onClick={fetchReport}>Generate Report</button>      


<div class="container-sm">





<div class="m-3">
  <label for="exampleFormControlTextarea1" class="form-label m-5">{reportString}</label>
  
</div>


</div>









</div>




    );
};

export default AdminPage;
