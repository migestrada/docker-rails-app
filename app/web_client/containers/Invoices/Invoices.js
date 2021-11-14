import React from 'react';
import { connect } from 'react-redux';
// Material
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Project
import { mapStateToProps, mapDispatchToProps } from '../../untils/modules';
import * as boilerplateActions from '../../redux/modules/boilerplate';
import CustomContainer from '../../components/commons/CustomContainer'
import Controls from '../../components/Invoices/Controls'

const Invoices = props => {
  return <CustomContainer
    logout={props.actions.logout}
    title="Facturas"
    headers={<Controls />}
  >

  </CustomContainer>;
};

export default connect(mapStateToProps('Invoices'), mapDispatchToProps({
  ...boilerplateActions,
}))(Invoices);
