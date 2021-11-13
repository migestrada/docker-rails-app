import React from 'react';
import { connect } from 'react-redux';
// Material
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// Project
import { mapStateToProps, mapDispatchToProps } from '../untils/modules';
import * as appActions from '../redux/modules/app';
import Routes from './Routes'

const App = props => {
  const {
    actions: {
      logout,
    }
  } = props;


  return <React.Fragment>
    {
      window.location.pathname !== '/login' &&
      <Button
        onClick={logout}
      >
        Salir
      </Button>
    }
    <Routes />
  </React.Fragment>
};

export default connect(mapStateToProps(), mapDispatchToProps({
  ...appActions,
}))(App);
