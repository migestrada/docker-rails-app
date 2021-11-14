import React from 'react';
import { connect } from 'react-redux';
// Material
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
// Project
import { mapStateToProps, mapDispatchToProps } from '../untils/modules';
import * as appActions from '../redux/modules/app';
import Router from './Router'

const App = props => {
  const {
    actions: {
      logout,
      hiddeError
    },
    app: {
      errorSnackBar,
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
    <Router />

    <Snackbar
      open={errorSnackBar.open}
      autoHideDuration={6000}
      onClose={hiddeError}
      message={errorSnackBar.message}
      TransitionComponent={Slide}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  </React.Fragment>
};

export default connect(mapStateToProps(), mapDispatchToProps({
  ...appActions,
}))(App);
