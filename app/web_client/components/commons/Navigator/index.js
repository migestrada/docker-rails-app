import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuGroup from '../MenuGroup'

const Navigator = props => {
  const {
    actions: {
      logout,
      toggleNavigator
    },
    app: {
      navigator: {
        open
      }
    }
  } = props;
  
  return <React.Fragment>
    <AppBar position="static">
      <Toolbar>
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
        <Typography sx={{ flexGrow: 1 }} />
        <Button
          onClick={logout}
          color="inherit"
        >
          Salir
        </Button>
      </Toolbar>
    </AppBar>

    <MenuGroup
      open={open}
      onClose={() => toggleNavigator(false)}
    />
  </React.Fragment>
};

export default Navigator;