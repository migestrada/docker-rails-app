import React from 'react';
// Materials
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const RootContainer = props => {
  const {
    title,
    children,
    headers,
  } = props;

  return <Grid style={{ paddingLeft: 25 }}>
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12}>
        <Typography align="center" variant="h3">{title || 'Root Container'}</Typography>
      </Grid>
      <Grid item xs={12}>
        { headers }
      </Grid>
      { children }
    </Grid>
  </Grid>
};

export default RootContainer;