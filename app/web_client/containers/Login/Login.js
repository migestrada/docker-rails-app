import React from 'react';
import { connect } from 'react-redux';
// Material
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// Project
import RootContainer from '../../components/commons/RootContainer';
import { mapStateToProps, mapDispatchToProps } from '../../untils/modules';
import * as loginActions from '../../redux/modules/login';

const Login = props => {
  const {
    formControls,
    formControls: {
      email,
      password,
    },
    actions: {
      login,
      formControlsChanged
    }
  } = props;

  return <RootContainer
    title="Login"
  >
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="email"
          label="Email"
          value={email}
          onChange={e => formControlsChanged({ email: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="password"
          label="Contrasena"
          value={password}
          onChange={e => formControlsChanged({ password: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => login(formControls)}
          disabled={!(email && password)}
        >
          Iniciar
        </Button>
      </Grid>
    </Grid>
  </RootContainer>;
};

export default connect(mapStateToProps('Login'), mapDispatchToProps({
  ...loginActions,
}))(Login);
