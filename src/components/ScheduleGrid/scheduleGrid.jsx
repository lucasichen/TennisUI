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
  Typography,
} from '@mui/material';
import './styles.css';
import ScheduleDialog from '../ScheduleDialog';
import { daysOfWeek } from '../../constants/constants';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ScheduleGrid = ({ title, schedule, onSubmit, onDelete, users, type }) => {
  const usersArray = Object.values(users);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [personsSchedule, setPersonsSchedule] = useState();
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleCellClick = async (day, person) => {
    setSelectedDay(day);
    setSelectedPerson(person);
    if (schedule && schedule[day] && schedule[day][person.name]) {
      await setPersonsSchedule(schedule[day][person.name]);
    } else {
      await setPersonsSchedule(null);
    }
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setSelectedDay(null);
    setSelectedPerson(null);
    setDialogOpen(false);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        p: '10%',
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          p: 2, // Reduced padding
          fontSize: { xs: '1.5rem', sm: '2rem', md: '3em' }, // Adjust font size for mobile
        }}
      >
        {title} Weekly Schedule
      </Typography>

      {(isMobile || isMd) ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                {daysOfWeek.map((day) => (
                  <TableCell
                    key={day}
                    style={{
                      padding: '8px',
                      textAlign: 'center',
                      background: 'lightblue',
                    }}
                    sx={{ fontWeight: 'bold' }}
                  >
                    {day}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {usersArray.map((person, row) => (
                <TableRow key={person.name}>
                  <TableCell
                    style={{ background: 'lightblue' }}
                    sx={{ fontWeight: 'bold' }}
                  >
                    {person.name}
                  </TableCell>
                  {daysOfWeek.map((day, index) => {
                    const isScheduleDefined =
                      schedule && schedule[day] && schedule[day][person.name];

                    return (
                      <TableCell
                        key={`${person.id}-${day}`}
                        onClick={() => handleCellClick(day, person)}
                        style={{
                          cursor: 'pointer',
                          padding: '8px',
                          ...(row !== 0 && { borderTop: '5px dashed #faf0e6' }),
                          ...(day !== 'Sunday' &&
                            index !== 0 && { borderLeft: '5px dashed #faf0e6' }),
                        }}
                        className="hover-cell"
                      >
                        {isScheduleDefined ? (
                          <Box>
                            <Typography
                              variant="body1"
                              align="center"
                              sx={{
                                fontWeight: 'bold',
                                backgroundColor: 'rgba(144, 238, 144)',
                              }}
                            >
                              Court: {schedule[day][person.name].court}
                            </Typography>
                            <Typography
                              variant="body1"
                              align="center"
                              sx={{
                                fontWeight: 'bold',
                                backgroundColor: 'rgba(144, 238, 144)',
                              }}
                            >
                              {schedule[day][person.name].time} for {schedule[day][person.name]?.duration || 90} min
                            </Typography>
                          </Box>
                        ) : (
                          ''
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        daysOfWeek.map((day) => (
          <TableContainer key={day} component={Paper} style={{ marginBottom: '20px' }} widht='80%'>
            <Typography variant="h6" align="center" sx={{ p: 2, fontWeight: 'bold' }} style={{ background: 'lightgrey' }}>
              {day}
            </Typography>
            <Table>
              <TableBody>
                {usersArray.map((person, row) => (
                  <TableRow key={person.name}>
                    <TableCell
                      style={{ background: 'lightblue' }}
                      sx={{ fontWeight: 'bold' }}
                    >
                      {person.name}
                    </TableCell>
                    {[day].map((d, index) => {
                      const isScheduleDefined =
                        schedule && schedule[d] && schedule[d][person.name];

                      return (
                        <TableCell
                          width='50%'
                          height="calc(100vh / 8)"
                          key={`${person.id}-${d}`}
                          onClick={() => handleCellClick(d, person)}
                          style={{
                            cursor: 'pointer',
                            padding: '5px',
                            ...(row !== 0 && { borderTop: '5px dashed #faf0e6' }),
                            ...(d !== 'Sunday' &&
                              index !== 0 && { borderLeft: '5px dashed #faf0e6' }),
                          }}
                          className="hover-cell"
                        >
                          {isScheduleDefined ? (
                            <Box>
                              <Typography
                                variant="body1"
                                align="center"
                                sx={{
                                  fontWeight: 'bold',
                                  backgroundColor: 'rgba(144, 238, 144)',
                                }}
                              >
                                Court: {schedule[d][person.name].court}
                              </Typography>
                              <Typography
                                variant="body1"
                                align="center"
                                sx={{
                                  fontWeight: 'bold',
                                  backgroundColor: 'rgba(144, 238, 144)',
                                }}
                              >
                                {schedule[day][person.name].time} for {schedule[day][person.name]?.duration || 90} min
                              </Typography>
                            </Box>
                          ) : (
                            ''
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ))
      )}

      <ScheduleDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        selectedPerson={selectedPerson}
        selectedDay={selectedDay}
        editData={personsSchedule}
        onTypeSubmit={onSubmit}
        onDelete={onDelete}
        type={type}
      />
    </Box>
  );
};

export default ScheduleGrid;
