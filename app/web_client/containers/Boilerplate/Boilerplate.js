import React from 'react';
import { connect } from 'react-redux';
// Material
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Project
import { mapStateToProps, mapDispatchToProps } from '../../untils/modules';
import * as boilerplateActions from '../../redux/modules/boilerplate';

const Boilerplate = props => {
  console.log('props', props);

  return <Grid container justify="center">
    <Grid item xs={12}><Typography>Boilerplate</Typography></Grid>
  </Grid>;
};

export default connect(mapStateToProps('Boilerplate'), mapDispatchToProps({
  ...boilerplateActions,
}))(Boilerplate);
