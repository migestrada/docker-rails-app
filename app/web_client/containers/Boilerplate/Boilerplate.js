import React from 'react';
import { connect } from 'react-redux';
// Material
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Project
import { mapStateToProps, mapDispatchToProps } from '../../untils/modules';
import * as boilerplateActions from '../../redux/modules/boilerplate';
import RootContainer from '../../components/commons/RootContainer'

const Boilerplate = props => {
  return <RootContainer
    title="Boilerplate"
  >

  </RootContainer>;
};

export default connect(mapStateToProps('Boilerplate'), mapDispatchToProps({
  ...boilerplateActions,
}))(Boilerplate);
