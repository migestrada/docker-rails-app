import React from 'react';
// Materials 
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
// Project
import CustomButton from '../CustomButton';


const ConfirmDialog = props => {
  const {
    open, 
    loading,
    title,
    message,
    onAccept,
    onClose,
    fullScreen,
    maxWidth,
    oneButton
  } = props;

  return <Dialog
    open={open}
    maxWidth={maxWidth || 'lg'}
    fullWidth
    fullScreen={fullScreen}
  >
    <DialogTitle>{title || 'Confirmacion'}</DialogTitle>
    <DialogContent>
      <DialogContentText>{message}</DialogContentText>
    </DialogContent>
    { props.children }
    <DialogActions>
      <Grid container spacing={3} justifyContent="end">
        <Grid item xs={12} sm={6} md={2}>
          <CustomButton
            label="Cerrar"
            variant="none"
            onClick={onClose}
            color={oneButton ? 'primary' : 'secondary'}
          />
        </Grid>
        {
          !oneButton &&
          <Grid item xs={12} sm={6} md={2}>
            <CustomButton
              label="Aceptar"
              onClick={onAccept}
              variant="none"
            />
          </Grid>
        }
      </Grid>
    </DialogActions>
  </Dialog>
};

export default ConfirmDialog;
