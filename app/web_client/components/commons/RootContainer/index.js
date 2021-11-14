import React from 'react';
// Materials
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

const RootContainer = props => {
  const {
    title,
    children,
    headers,
  } = props;

  return <Grid style={{ paddingLeft: 25 }} container spacing={3} justifyContent="center">
    <Grid item xs={12}>
      <Typography align="center" variant="h3">{title || 'Root Container'}</Typography>
    </Grid>
    <Grid container item xs={12}>
      { headers }
    </Grid>
    { children }
  </Grid>
};

export default RootContainer;
