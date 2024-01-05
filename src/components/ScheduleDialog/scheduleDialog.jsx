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
import { tennisCourts, pickleballCourts } from '../../constants/courtData';

const ScheduleDialog = ({ isOpen, onClose, selectedPerson, selectedDay, editData, onTypeSubmit, onDelete, type }) => {
  const name = selectedPerson?.name;
  const id = selectedPerson?.id;
  const methods = useForm();
  const { watch, handleSubmit } = methods;

  const isValid = watch('courtNumber') === '' || watch('time') === '' || watch('duration') === '' ? false : true;
  const isDirty = watch('courtNumber') !== editData?.court || watch('time') !== editData?.time || watch('duration') !== editData?.duration ? true : false;

  const timeOptions = Array.from({ length: 36 }, (_, index) => {
    const halfHour = index % 2 === 0;
    const hour = Math.floor(index / 2) + 6;
    const isPM = hour >= 12;
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;

    const label = `${displayHour}:${halfHour ? '00' : '30'} ${isPM ? 'PM' : 'AM'}`;
    const value = label;

    return { label, value };
  });

  let courtOptions = [];
  if (type === 'tennis') {
    courtOptions = Object.entries(tennisCourts).map(([courtId, courtData]) => ({
      label: courtId,
      value: courtId,
    }));
  } else {
    courtOptions = Object.entries(pickleballCourts).map(([courtId, courtData]) => ({
      label: courtId,
      value: courtId,
    }));
  }

  const handleCancel = (event, reason) => {
    // Reset the form values
    methods.reset();
    // Close the dialog
    onClose();

  };

  const handelDelete = () => {
    onDelete({ day: selectedDay, person: selectedPerson });
    onClose();
  };

  const onSubmit = (data) => {
    onTypeSubmit({ ...data, day: selectedDay, person: selectedPerson });
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
      sx={{
        backdropFilter: "blur(5px) sepia(5%)",
        "& .MuiDialog-paper": {
          borderRadius: "10px",
        },
      }}>
      <DialogTitle>
        <Typography variant="h4" component="div" sx={{ textAlign: 'center' }}>
          {`Edit schedule for ${name} on ${selectedDay}`}
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
                defaultValue={name}
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
                defaultValue={editData?.court || ''}
                render={({ field }) => (
                  <TextField
                    select
                    {...field}
                    label="Court Number"
                    variant="outlined"
                    fullWidth
                  >
                    {courtOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>
            <Grid item xs={6}>
              {/* Select for Time */}
              <Controller
                name="time"
                control={methods.control}
                defaultValue={editData?.time || ''}
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
            <Grid item xs={12}>
              {/* Input for duration from 30, 60, 90 */}
              <Controller
                name="duration"
                control={methods.control}
                defaultValue={editData?.duration || ''}
                render={({ field }) => (
                  <TextField
                    select
                    {...field}
                    label="Duration"
                    variant="outlined"
                    fullWidth
                  >
                    <MenuItem key={30} value={30}>
                      30 minutes
                    </MenuItem>
                    <MenuItem key={60} value={60}>
                      60 minutes
                    </MenuItem>
                    <MenuItem key={90} value={90}>
                      90 minutes
                    </MenuItem>
                  </TextField>
                )}
              />
            </Grid>
          </Grid>
        </FormProvider>
      </DialogContent>
      <DialogActions sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Button
          onClick={handelDelete}
          variant="contained"
          color="error"
          sx={{ borderRadius: '4px' }}
        >
          Delete
        </Button>
        <div>
          <Button
            onClick={handleCancel}
            variant="outlined"
            color="error"
            sx={{ borderRadius: '4px', marginRight: '8px' }} // Add margin to separate from the Save button
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            color="success"
            sx={{ borderRadius: '4px' }}
            disabled={!(isValid && isDirty)}
          >
            Save
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default ScheduleDialog;
