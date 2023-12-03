import { useState, useEffect } from 'react';

export const useSchedule = () => {
  // const [schedule, setSchedule] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);

  // useEffect(() => {
  //   const fetchSchedule = async () => {
  //     const response = await fetch('http://localhost:3000/schedule');
  //     const data = await response.json();
  //     setSchedule(data);
  //   };
  //   fetchSchedule();
  // }, []);

  // const updateSchedule = async (day, person, task) => {
  //   const response = await fetch('http://localhost:3000/schedule', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ day, person, task }),
  //   });
  //   const data = await response.json();
  //   setSchedule(data);
  // };

  return {
    // schedule,
    selectedDay,
    selectedPerson,
    isDialogOpen,
    setSelectedDay,
    setSelectedPerson,
    setDialogOpen,
    // updateSchedule,
  }
};