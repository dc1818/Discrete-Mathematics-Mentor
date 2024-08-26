import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function Toast(text, messageType) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={text}
      />
    </div>
  );
}
