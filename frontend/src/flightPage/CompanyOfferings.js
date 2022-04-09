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

export default function FolderList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <div>
                <img src={"https://www.aircanada.com/content/dam/aircanada/portal/images/content-images/fly/mobile/a-cbeta-app-icon@3x.png"} width = {57} height = {57} borderRadius = {30} alt="Logo" />
            </div>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Air Canada" secondary="$432" />
        <ColorRadioButtons/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <div>
                <img src={"https://pbs.twimg.com/profile_images/1410638840067506177/Uwza3ibI.jpg"} width = {57} height = {57} borderRadius = {30} alt="Logo" />
            </div>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="United Airlines" secondary="$677" />
        <ColorRadioButtons/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <div>
                <img src={"https://i.pinimg.com/550x/e2/4d/e8/e24de8f4d934fd86c25470eb4461a2b7.jpg"} width = {39} height = {39} borderRadius = {30} alt="Logo" />
            </div>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Delta Airlines" secondary="$882" />
        <ColorRadioButtons/>
      </ListItem>
    </List>
  );
}