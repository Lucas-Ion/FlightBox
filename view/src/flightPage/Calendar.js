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
            <TextField {...startProps} />
            <Box className='text-dark' sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
       />
    </LocalizationProvider>
  );
}