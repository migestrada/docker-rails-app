import React from 'react';
// Materials
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const CustomButton = props => {
  const {
    label,
    onClick,
    disabled,
    loading,
    variant,
    color
  } = props;

  return <Button
    onClick={onClick}
    disabled={disabled}
    fullWidth
    variant={variant || 'contained'}
    color={color}
  >
    {
      loading ?
      <CircularProgress /> :
      label || 'Buscar'
    }
  </Button>
};

export default CustomButton;
