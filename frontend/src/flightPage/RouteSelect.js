import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function RouteSelect({setDepartureCity, setArrivalCity}) {


const setDepart = (props) =>{
    setDepartureCity(props.target.value)
    

    
}

const setArrival = (props) =>{
        setArrivalCity(props.target.value)
        
}

    return (
        <div className='text-dark'>
           
            <label for="exampleDataList" class="form-label">Please select departure airport</label>
            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." onChange={setDepart}/>
            <datalist id="datalistOptions">
                <option value="Calgary" />
                <option value="Edmonton" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" />
                <option value="Phoenix" />
                <option value="Miami" />
                <option value="Saskatoon" />
                <option value="Vancouver" />
                <option value="Montreal" />
                <option value="New York" />
            

            </datalist>

            <label for="exampleDataList" class="form-label mt-5">Please select arrival airport</label>
            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." onChange = {setArrival} />
            <datalist id="datalistOptions">
            <option value="Calgary" />
                <option value="Edmonton" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" />
                <option value="Phoenix" />
                <option value="Miami" />
                <option value="Saskatoon" />
                <option value="Vancouver" />
                <option value="Montreal" />
                <option value="New York" />
            </datalist>
        </div>
    );
}