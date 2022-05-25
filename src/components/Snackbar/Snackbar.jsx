import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './style';



const CustomizedSnackbar = ({open, setopen}) => {
    const classes = useStyles();

    const handleClose = (event, reason) => {
      if(reason === 'clickaway') return;
       setopen(false);
    }


  return (
    <div className={classes.root}>
    <Snackbar
     anchorOrigin = {{vertical:'top', horizontal:'right'}}
      open = {open}
      autoHideDuration = {3000}
      onClose={handleClose}
    >
     <MuiAlert onClose = {handleClose} severity="success" elevation={6} variant="filled" >Transaction successfully done!</MuiAlert>
    </Snackbar>
    
    </div>
  )
}

export default CustomizedSnackbar;