import React from 'react';
import { connect } from 'react-redux';
// Material
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// Project
import { mapStateToProps, mapDispatchToProps } from '../../untils/modules';
import * as signUpActions from '../../redux/modules/signUp';

const SignUp = props => {
  console.log('props', props);

  return <Grid container justify="center">
    <Grid item xs={12}><Typography>SIGN UP</Typography></Grid>
  </Grid>;
};

export default connect(mapStateToProps('SignUp'), mapDispatchToProps({
  ...signUpActions,
}))(SignUp);
