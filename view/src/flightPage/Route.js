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

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.roadaffair.com/wp-content/uploads/2019/06/echo-canyon-trail-camelback-mountain-phoenix.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Calgary to Phoenix
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Departure: April 2th, Arrival: April 24th
        </Typography>
        <div>
        <FolderList/>
        </div>
      </CardContent>
      <CardActions sx={{ marginLeft: "5rem", marginBottom: "2rem"}}>
            <IconLabelButtons />
      </CardActions>
    </Card>
  );
}