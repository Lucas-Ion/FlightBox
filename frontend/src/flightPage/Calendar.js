import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { makeStyles } from "@material-ui/core/styles";

import Box from '@mui/material/Box';

export default function BasicDateRangePicker({setDepart, setArrive, setIsReady}) {
  const [value, setValue] = React.useState([null, null]);
  const [leaveDate, setLeaveDate] = React.useState ('');
  const [arriveDate, setArriveDate] = React.useState ('');

  const useStyles = makeStyles({
    input: {
      color: "white"
    }
  });
  
  let depart =''
  let arrive =''
  let month = ''
  let day = ''
  let year = ''
  
  const classes = useStyles();

  const logStart = (props) =>{

setLeaveDate(props.target.value)
console.log(leaveDate)

  }
  const logEnd = (props) =>{

setArriveDate(props.target.value)
console.log(arriveDate)

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
        if(value[0]!= null && value[1] != null){
          depart = value[0].getDay() + "/" + value[0].getMonth() + "/" + value[0].getFullYear() 
          arrive = value[1].getDay() + "/" + value[1].getMonth() + "/" + value[1].getFullYear() 
          setDepart(value[0].toLocaleDateString())
          setArrive(value[1].toLocaleDateString())
          setIsReady(true)
        }
        console.log(value)

        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps}/>
            <Box className='text-dark' sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps}/>
          </React.Fragment>
        )}
       />
    </LocalizationProvider>
  );
}