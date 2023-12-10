import { useState, useEffect, useCallback } from 'react';
import { getTennisSchedules, getPickelballSchedules } from '../service/schedule.service';

export const useSchedule = () => {
  const [tennisSchedule, setTennisSchedule] = useState({});
  const [pickleballSchedule, setPickleballSchedule] = useState({});

  const getTennis = useCallback(async () => {
    const data = await getTennisSchedules();
    setTennisSchedule(data);
  }, []);

  const getPickelball = useCallback(async () => {
    const data = await getPickelballSchedules();
    setPickleballSchedule(data);
  }, []);

  const onTennisScheduleChange = useCallback(async (data) => {
    setTennisSchedule((prevSchedule) => {
      const { day, person, time, courtNumber } = data;

      // Check if the day exists in the schedule
      if (prevSchedule[day]) {
        // Check if the person already has a schedule on that day
        if (prevSchedule[day][person]) {
          // Update the existing schedule
          prevSchedule[day][person] = { time, court: courtNumber };
        } else {
          // Add a new schedule for the person on that day
          prevSchedule[day][person] = { time, court: courtNumber };
        }
      } else {
        // If the day doesn't exist, add a new entry for the day and the person
        prevSchedule[day] = { [person]: { time, court: courtNumber } };
      }

      console.log('Updated Tennis Schedule:', prevSchedule);
      return { ...prevSchedule }; // Return a new object to trigger a state update
    });
  }, []);


  const onPickleballScheduleChange = useCallback(async (data) => {
    setPickleballSchedule((prevSchedule) => {
      const { day, person, time, courtNumber } = data;

      // Check if the day exists in the schedule
      if (prevSchedule[day]) {
        // Check if the person already has a schedule on that day
        if (prevSchedule[day][person]) {
          // Update the existing schedule
          prevSchedule[day][person] = { time, court: courtNumber };
        } else {
          // Add a new schedule for the person on that day
          prevSchedule[day][person] = { time, court: courtNumber };
        }
      } else {
        // If the day doesn't exist, add a new entry for the day and the person
        prevSchedule[day] = { [person]: { time, court: courtNumber } };
      }

      console.log('Updated Pickleball Schedule:', prevSchedule);
      return { ...prevSchedule }; // Return a new object to trigger a state update
    });
  }, []);

  const onDeleteTennisSchedule = useCallback(async (data) => {
    setTennisSchedule((prevSchedule) => {
      const { day, person } = data;

      // Check if the day exists in the schedule
      if (prevSchedule[day]) {
        // Check if the person already has a schedule on that day
        if (prevSchedule[day][person]) {
          // Update the existing schedule
          delete prevSchedule[day][person];
        }
      }

      console.log('Updated Tennis Schedule:', prevSchedule);
      return { ...prevSchedule }; // Return a new object to trigger a state update
    });
  }, []);

  const onDeletePickleballSchedule = useCallback(async (data) => {
    setPickleballSchedule((prevSchedule) => {
      const { day, person } = data;

      // Check if the day exists in the schedule
      if (prevSchedule[day]) {
        // Check if the person already has a schedule on that day
        if (prevSchedule[day][person]) {
          // Update the existing schedule
          delete prevSchedule[day][person];
        }
      }

      console.log('Updated Pickleball Schedule:', prevSchedule);
      return { ...prevSchedule }; // Return a new object to trigger a state update
    });
  }, []);

  useEffect(() => {
    getTennis();
    getPickelball();
  }, [getTennis, getPickelball]);

  return {
    tennisSchedule,
    pickleballSchedule,
    onTennisScheduleChange,
    onPickleballScheduleChange,
    onDeleteTennisSchedule,
    onDeletePickleballSchedule,
  }
};