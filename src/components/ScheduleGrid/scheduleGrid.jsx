// ScheduleGrid.js
import React, { useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import './styles.css'
import ScheduleDialog from '../ScheduleDialog';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const people = ['Joe', 'Mary', 'May'];

const ScheduleGrid = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleCellClick = (day, person) => {
    setSelectedDay(day);
    setSelectedPerson(person);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogSubmit = () => {
    // Handle form submission logic here
    // You can also pass the form data to a parent component or perform any other action
    setDialogOpen(false);
  };

  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        p: '10%',
      }}>
      <Typography variant="h3" align="center" sx={{p:5}}>Tennis Weekly Schedule</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {daysOfWeek.map((day) => (
                <TableCell key={day} style={{ padding: '8px', textAlign: 'center', background: 'lightblue' }} sx={{ fontWeight: 'bold' }}>{day}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {people.map((person) => (
              <TableRow key={person}>
                <TableCell style={{ background: 'lightblue' }} sx={{ fontWeight: 'bold' }}>{person}</TableCell>
                {daysOfWeek.map((day, index) => (
                  <TableCell
                    key={`${person}-${day}`}
                    onClick={() => handleCellClick(day, person)}
                    style={{ cursor: 'pointer', borderBottom: '5px dashed #faf0e6', padding: '8px',
                    ...(day !== 'Sunday' && index !== 0 && { borderLeft: '5px dashed #faf0e6' })}}
                    className="hover-cell"
                  >
                    {/* Render content inside each cell */}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ScheduleDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        selectedPerson={selectedPerson}
        selectedDay={selectedDay}
        onSubmit={handleDialogSubmit}
      />
    </Box>
  );
};

export default ScheduleGrid;
