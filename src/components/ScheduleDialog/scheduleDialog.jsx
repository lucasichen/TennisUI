import React, { useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Grid,
  MenuItem,
} from '@mui/material';
import { useForm, FormProvider, Controller } from 'react-hook-form';

const ScheduleDialog = ({ isOpen, onClose, selectedPerson, selectedDay }) => {
  const methods = useForm();
  const { watch, handleSubmit } = methods;

  const timeOptions = Array.from({ length: 36 }, (_, index) => {
    const halfHour = index % 2 === 0;
    const hour = Math.floor(index / 2) + 6;
    const isPM = hour >= 12;
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;

    const label = `${displayHour}:${halfHour ? '00' : '30'} ${isPM ? 'PM' : 'AM'}`;
    const value = label;

    return { label, value };
  });

  const handleCancel = () => {
    // Reset the form values
    methods.reset();
    // Close the dialog
    onClose();
  };

  const onSubmit = (data) => {
    console.log(data, selectedPerson, selectedDay);
    onClose();
  };

  useEffect(() => {
    // Reset the form values
    methods.reset();
  }, [selectedPerson, selectedDay, methods]);


  return (
    <Dialog
      open={isOpen}
      onClose={handleCancel}
      onBackdropClick={handleCancel}
      sx={{
        backdropFilter: "blur(5px) sepia(5%)",
        "& .MuiDialog-paper": {
          borderRadius: "10px",
        },
      }}>
      <DialogTitle>
        <Typography variant="h4" component="div" sx={{ textAlign: 'center' }}>
          {`Edit schedule for ${selectedPerson} on ${selectedDay}`}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ p: 2 }}>
        <FormProvider {...methods}>
          <Grid container spacing={2} sx={{ p: 2 }}>
            <Grid item xs={6}>
              {/* Display selected person */}
              <TextField
                label="Host"
                variant="outlined"
                disabled
                defaultValue={selectedPerson}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              {/* Input for scheduling */}
              <TextField
                disabled
                label="Day"
                defaultValue={selectedDay}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              {/* Input for Court Number */}
              <Controller
                name="courtNumber"
                control={methods.control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Court Number"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              {/* Select for Time */}
              <Controller
                name="time"
                control={methods.control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    select
                    {...field}
                    label="Time"
                    variant="outlined"
                    fullWidth
                  >
                    {timeOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>
          </Grid>
        </FormProvider>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button
          onClick={handleCancel}
          variant="outlined"
          color="error"
          sx={{ borderRadius: '4px' }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="success"
          sx={{ borderRadius: '4px' }}
          disabled={watch('courtNumber') !== '' && watch('time') !== '' ? false : true}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ScheduleDialog;
