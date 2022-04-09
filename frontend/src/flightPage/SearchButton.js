import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<SearchIcon />}>
        Search Now
      </Button>
    </Stack>
  );
}