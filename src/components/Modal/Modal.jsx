import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { color } from '@mui/system';

export default function Modal({ open, setOpen }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div style={{ color: 'darkcyan' }}>
              Thanks for contacting me, I'll get back to you shortly. Arigato
              Senpai 🙇‍♂️
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ background: 'darkcyan', color: 'white', fontSize: '10px' }}
            onClick={handleClose}
            autoFocus
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
