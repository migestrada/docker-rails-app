import React from 'react';
// Materials 
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
// Project
import CustomButton from '../../components/commons/CustomButton';

const Controls = props => {
  return <Grid container item spacing={2}>
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Nombre"
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Codigo"
      />
    </Grid>
    <Grid item xs={12}>
      <CustomButton
        fullWidth
        label="Buscar"
      />
    </Grid>
  </Grid>
};

export default Controls;
