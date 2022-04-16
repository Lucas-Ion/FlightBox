import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ColorRadioButtons from './Select';
import AirCanada from './AirCanada';
import LooksOneIcon from '@mui/icons-material/LooksOne';


export default function FolderList({flightEntries}) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <div>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwIaqCxCvxqkX17af6t8B1FSrgppMn2Fa9Q&usqp=CAU"} width = {40} height = {40} borderRadius = {30} alt="Logo" />
            </div>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary= {flightEntries[0].company_Name} secondary={"$" + flightEntries[0].price} />
      </ListItem>
      
      
    </List>
  );
}