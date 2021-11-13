import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// Material
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// Project
import { mapStateToProps, mapDispatchToProps } from '../../untils/modules';
import * as loginActions from '../../redux/modules/login';

const Login = props => {
  const {
    formControls,
    formControls: {
      email,
      password
    },
    actions: {
      login,
      formControlsChanged
    }
  } = props;

  return <Grid style={{ minHeight: '100vh' }} container justifyContent="center" alignItems="center">
    <Grid item container spacing={3}>
      <Grid container item justifyContent="center">
        <Grid item xs={12}>
          <Typography align="center" variant="h3">Login</Typography>
        </Grid>
      </Grid>
      <Grid container item justifyContent="center">
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            type="email"
            label="Email"
            value={email}
            onChange={e => formControlsChanged({ email: e.target.value })}
          />
        </Grid>
      </Grid>
      <Grid container item justifyContent="center">
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            type="password"
            label="Contrasena"
            value={password}
            onChange={e => formControlsChanged({ password: e.target.value })}
          />
        </Grid>
      </Grid>
      <Grid container item justifyContent="center">
        <Grid item xs={12} md={3}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => login(formControls, )}
            disabled={!(email && password)}
          >
            Iniciar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>;
};

export default connect(mapStateToProps('Login'), mapDispatchToProps({
  ...loginActions,
}))(Login);
