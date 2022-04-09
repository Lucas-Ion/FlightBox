import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function RouteSelect() {
    return (
        <div className='text-dark'>
            <label for="exampleDataList" class="form-label">Please select departure airport</label>
            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
            <datalist id="datalistOptions">
                <option value="Calgary (YYC)" />
                <option value="Edmonton (YEG)" />
                <option value="Seattle (SEA)" />
                <option value="Los Angeles (LAX)" />
                <option value="Chicago (ORD)" />
                <option value="Phoenix (PHX)" />

            </datalist>

            <label for="exampleDataList" class="form-label mt-5">Please select arrival airport</label>
            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
            <datalist id="datalistOptions">
                <option value="Calgary (YYC)" />
                <option value="Edmonton (YEG)" />
                <option value="Seattle (SEA)" />
                <option value="Los Angeles (LAX)" />
                <option value="Chicago (ORD)" />
                <option value="Phoenix (PHX)" />

            </datalist>
        </div>
    );
}