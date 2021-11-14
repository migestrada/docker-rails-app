import React, { useState } from 'react';
// Materials
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Fab from '@mui/material/Fab';
// Icons
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
// Project
import Navigator from '../Navigator';

const initialState = {
  headersOpen: false
}

const styleFab = {
  position: 'fixed',
  right: 10,
  bottom: 10
};

const CustomContainer = props => {
  const [state, setState] = useState(initialState)

  const {
    title,
    children,
    headers,
    noFabButton,
    onClick,
    form
  } = props;

  const toggleOpenHeaders = () => setState({ ...state, headersOpen: !state.headersOpen })

  return <Grid container spacing={1} justifyContent="center">
    <Navigator {...props} />
    {
      headers &&
      <Grid item xs={12}>
        <Paper style={{ padding: 10 }}>
          <ListItemButton onClick={toggleOpenHeaders}>
            <ListItemText primary="Filtros" />
            { state.headersOpen ? <ExpandLess /> : <ExpandMore /> }
          </ListItemButton>
          <Collapse in={state.headersOpen}>
            <br />
            { headers }
          </Collapse>
        </Paper>
      </Grid>
    }
    { children }
    {
      !noFabButton &&
      <Fab
        onClick={onClick}
        style={styleFab}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    }
    {form}
  </Grid>
};

export default CustomContainer;
