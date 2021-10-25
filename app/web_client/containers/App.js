import React from 'react';
import { connect } from 'react-redux';
// Material
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// Project
import { mapStateToProps, mapDispatchToProps } from '../untils/modules';
import * as appActions from '../redux/modules/app';
import SignUp from './SignUp';

const App = props => {
  const {
    actions: {
      getStateFromApi,
    }
  } = props;

  return <Grid container justify="center">
    <SignUp />
  </Grid>;
};

export default connect(mapStateToProps(), mapDispatchToProps({
  ...appActions,
}))(App);
