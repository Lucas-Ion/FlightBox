import { useEffect, useState } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InteractiveList from './CompanyOfferings';
import FolderList from './CompanyOfferings';
import IconLabelButtons from './BookButton';

export default function MediaCard({ flightEntries, departArriveArr, imageURL }) {

  



  const printStuff = () => {




  }

  

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= "https://blogweather.climacell.co/wp-content/uploads/2021/07/Clouds.jpeg"
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {flightEntries[0].departureAirport} to {flightEntries[0].destinationAirport}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Departure: {departArriveArr[0]}, Arrival: {departArriveArr[1]}
          {printStuff()}
        </Typography>
        <div>
          <FolderList {...{flightEntries}} />
        </div>
      </CardContent>
      <CardActions sx={{ marginLeft: "5rem", marginBottom: "2rem" }}>
        
      </CardActions>
    </Card>
  );
}