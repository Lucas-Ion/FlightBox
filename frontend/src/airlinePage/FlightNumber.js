import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function DeleteAlert({flightNumber}) {

    let string = "This is the flight " + flightNumber
    console.log(string)
  return (
    <Stack sx={{ width: '100%'}} spacing={2}>
      <Alert severity="info" >Your flight was created with a flight number of {flightNumber}</Alert>
    </Stack>
  );
}