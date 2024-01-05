import { useState, useEffect, useCallback } from 'react';
import {
  getTennisSchedules,
  getPickelballSchedules,
  updateTennisSchedule,
  updatePickleballSchedule,
  deleteTennisSchedule,
  deletePickleballSchedule
} from '../service/schedule.service';
import { useSnackbar } from 'notistack';

export const useSchedule = () => {
  const [tennisSchedule, setTennisSchedule] = useState({});
  const [pickleballSchedule, setPickleballSchedule] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const getTennis = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getTennisSchedules();
      setTennisSchedule(data);
    } catch (error) {
      enqueueSnackbar('Error getting tennis schedule', { variant: 'error' });
    }
    setIsLoading(false);
  }, []);

  const getPickelball = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getPickelballSchedules();
      setPickleballSchedule(data);
    } catch (error) {
      enqueueSnackbar('Error getting pickleball schedule', { variant: 'error' });
    }
    setIsLoading(false);
  }, []);

  const onTennisScheduleChange = useCallback(async (data) => {
    setIsLoading(true);
    try {
      await updateTennisSchedule(data);
      setTennisSchedule((prevSchedule) => {
        const { day, person, time, courtNumber, duration } = data;
        // Check if the day exists in the schedule
        if (prevSchedule[day]) {
          // Check if the person already has a schedule on that day
          if (prevSchedule[day][person.name]) {
            // Update the existing schedule
            prevSchedule[day][person.name] = { time, court: courtNumber, duration };
          } else {
            // Add a new schedule for the person on that day
            prevSchedule[day][person.name] = { time, court: courtNumber, duration };
          }
        } else {
          // If the day doesn't exist, add a new entry for the day and the person
          prevSchedule[day] = { [person.name]: { time, court: courtNumber, duration } };
        }
        return { ...prevSchedule }; // Return a new object to trigger a state update
      });
      enqueueSnackbar('Tennis schedule updated successfully!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Error updating tennis schedule', { variant: 'error' });
    }
    setIsLoading(false);
  }, [enqueueSnackbar]);


  const onPickleballScheduleChange = useCallback(async (data) => {
    try {
      await updatePickleballSchedule(data);
      setPickleballSchedule((prevSchedule) => {
        const { day, person, time, courtNumber, duration } = data;
        // Check if the day exists in the schedule
        if (prevSchedule[day]) {
          // Check if the person already has a schedule on that day
          if (prevSchedule[day][person.name]) {
            // Update the existing schedule
            prevSchedule[day][person.name] = { time, court: courtNumber, duration };
          } else {
            // Add a new schedule for the person on that day
            prevSchedule[day][person.name] = { time, court: courtNumber, duration };
          }
        } else {
          // If the day doesn't exist, add a new entry for the day and the person
          prevSchedule[day] = { [person.name]: { time, court: courtNumber, duration } };
        }
        return { ...prevSchedule }; // Return a new object to trigger a state update
      });
      enqueueSnackbar('Pickleball schedule updated successfully!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Error updating pickleball schedule', { variant: 'error' });
    }
  }, []);

  const onDeleteTennisSchedule = useCallback(async (data) => {
    try {
      await deleteTennisSchedule(data);
      setTennisSchedule((prevSchedule) => {
        const { day, person } = data;
        // Check if the day exists in the schedule
        if (prevSchedule[day]) {
          // Check if the person already has a schedule on that day
          if (prevSchedule[day][person.name]) {
            // Update the existing schedule
            delete prevSchedule[day][person.name];
          }
        }
        return { ...prevSchedule }; // Return a new object to trigger a state update
      });
      enqueueSnackbar('Schedule deleted successfully!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Error deleting tennis schedule', { variant: 'error' });
    }
  }, []);

  const onDeletePickleballSchedule = useCallback(async (data) => {
    try {
      await deletePickleballSchedule(data);
      setPickleballSchedule((prevSchedule) => {
        const { day, person } = data;
        // Check if the day exists in the schedule
        if (prevSchedule[day]) {
          // Check if the person already has a schedule on that day
          if (prevSchedule[day][person.name]) {
            // Update the existing schedule
            delete prevSchedule[day][person.name];
          }
        }
        return { ...prevSchedule }; // Return a new object to trigger a state update
      });
      enqueueSnackbar('Schedule deleted successfully!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Error deleting pickleball schedule', { variant: 'error' });
    }
  }, []);

  useEffect(() => {
    getTennis();
    getPickelball();
  }, [getTennis, getPickelball]);

  return {
    isLoading,
    tennisSchedule,
    pickleballSchedule,
    onTennisScheduleChange,
    onPickleballScheduleChange,
    onDeleteTennisSchedule,
    onDeletePickleballSchedule,
  }
};