import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuGroup from '../MenuGroup';

const Navigator = props => {
  const [open, setOpen] = useState(false)

  const {
    logout,
    title,
    noNavigator
  } = props;
  
  const toggleNavigator = state => setOpen(state === undefined ? !open : state)

  return <Grid item xs={12}>
    <AppBar position="static">
      <Toolbar>
        {
          !noNavigator &&
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleNavigator}
          >
            <MenuIcon />
          </IconButton>
        }
        <Typography sx={{ flexGrow: 1 }} >{title}</Typography>
        {
          logout &&
          <Button
            onClick={logout}
            color="inherit"
          >
            Salir
          </Button>
        }
      </Toolbar>
    </AppBar>
    {
      !noNavigator &&
      <MenuGroup
        open={open}
        onClose={() => toggleNavigator(false)}
      />
    }
  </Grid>
};

export default Navigator;