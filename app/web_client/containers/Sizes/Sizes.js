import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// Material
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Project
import { mapStateToProps, mapDispatchToProps } from '../../untils/modules';
import * as sizesActions from '../../redux/modules/sizes';
import CustomContainer from '../../components/commons/CustomContainer';
import Controls from '../../components/Sizes/Controls';
import Form from '../../components/Sizes/Form';

const Sizes = props => {
  const {
    actions: {
      getStateFromApi
    }
  } = props

  useEffect(() => {
    getStateFromApi()
  }, [])

  return <CustomContainer
    logout={props.actions.logout}
    title="Tallas"
    headers={<Controls />}
    form={<Form />}
  >

  </CustomContainer>;
};

export default connect(mapStateToProps('Sizes'), mapDispatchToProps({
  ...sizesActions,
}))(Sizes);
