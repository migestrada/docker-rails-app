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
import * as signUpActions from '../../redux/modules/signUp';

const SignUp = props => {
  const {
    formControls,
    formControls: {
      email,
      password,
      username
    },
    actions: {
      signUp,
      formControlsChanged,
    }
  } = props;

  return <RootContainer
    title="SIGN UP"
  >
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="text"
          label="Usuario"
          value={username}
          onChange={e => formControlsChanged({ username: e.target.value })}
        />
      </Grid>
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
          variant="outlined"
        >
          Volver
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => signUp(formControls)}
          disabled={!(email && password && username)}
        >
          Registrar
        </Button>
      </Grid>
    </Grid>
  </RootContainer>;
};

export default connect(mapStateToProps('SignUp'), mapDispatchToProps({
  ...signUpActions,
}))(SignUp);
