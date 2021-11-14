import React from 'react';
import { connect } from 'react-redux';
// Material
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Project
import { mapStateToProps, mapDispatchToProps } from '../../untils/modules';
import * as boilerplateActions from '../../redux/modules/boilerplate';
import CustomContainer from '../../components/commons/CustomContainer'

const Boilerplate = props => {
  return <CustomContainer
    logout={props.actions.logout}
    title="Boilerplate"
  >

  </CustomContainer>;
};

export default connect(mapStateToProps('Boilerplate'), mapDispatchToProps({
  ...boilerplateActions,
}))(Boilerplate);
