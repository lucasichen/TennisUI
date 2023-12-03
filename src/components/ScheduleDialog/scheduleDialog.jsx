// ScheduleDialog.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const ScheduleDialog = ({ isOpen, onClose, selectedPerson, selectedDay, onSubmit }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{`Edit schedule for ${selectedPerson} on ${selectedDay}`}</DialogTitle>
      <DialogContent>
        {/* Add your form fields here */}
        {/* For example: <TextField label="Task" fullWidth /> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ScheduleDialog;
