import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function NavBar() {
  return (
  
    <AppBar position="sticky"  sx={{backgroundColor:"white", color:"black"}} elevation={0}>
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="left"
      spacing={0.5}
    >
      <Typography variant="h7" component="h7" sx={{p:2, fontWeight:"bold"}}>
        Cryptoassets
      </Typography>
      <IconButton aria-label="delete" size="small" sx={{p:2}}>
        <SearchIcon />
      </IconButton>
 
    </Stack>
    <Stack
      direction="row"
      alignItems="left"
      spacing={0.5}
      marginTop={1}
      marginBottom={1}
    >
    <Chip label=" My Watchlist" size="small" sx={{p:1}} />
    <Chip label="AUD" size="small" sx={{p:1}} />
    <Chip label=" Sort By Rank" size="small" sx={{p:1}} />

      </Stack>
  </AppBar>

  );
}
