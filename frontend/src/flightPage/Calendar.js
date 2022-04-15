import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { makeStyles } from "@material-ui/core/styles";

import Box from '@mui/material/Box';

export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  const useStyles = makeStyles({
    input: {
      color: "white"
    }
  });
  
  const classes = useStyles();

  const logStart = (props) =>{

console.log(props.target.value)

  }
  const logEnd = (props) =>{

    console.log(props.target.value)
    
      }

  return (
      
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker 
        inputProps={{ className: classes.input }}
        startText="Depart On"
        endText="Arrive On"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} onChange={logStart}/>
            <Box className='text-dark' sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} onChange ={logEnd}/>
          </React.Fragment>
        )}
       />
    </LocalizationProvider>
  );
}