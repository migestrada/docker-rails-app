import React from 'react';
import { connect } from 'react-redux';
// Material
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// Project
import { mapStateToProps, mapDispatchToProps } from '../untils/modules';
import * as appActions from '../redux/modules/app';

const App = props => {
  const {
    actions: {
      getStateFromApi,
    }
  } = props;

  return <Grid container justify="center">
    <Grid item xs={12}><Button
      onClick={getStateFromApi}
    >AAAAAAAAAAAA</Button></Grid>
  </Grid>;
};

export default connect(mapStateToProps('App'), mapDispatchToProps({
  ...appActions,
}))(App);
