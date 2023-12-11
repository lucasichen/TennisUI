import React, { useState } from 'react';
import { Tab, Box } from '@mui/material';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import ScheduleGrid from '../../components/ScheduleGrid';
import { useSchedule } from '../../hooks/useSchedule';
import CircularProgress from '@mui/material/CircularProgress';
import { useUsers } from '../../hooks/useUsers';

const ScheduleTabs = () => {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => setValue(newValue);
  const { isLoading: usersLoading, users } = useUsers();
  const {
    isLoading,
    tennisSchedule,
    pickleballSchedule,
    onTennisScheduleChange,
    onPickleballScheduleChange,
    onDeleteTennisSchedule,
    onDeletePickleballSchedule,
  } = useSchedule();

  return (
    <Box>
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab label="Tennis" value="1" />
          <Tab label="Pickleball" value="2" />
        </TabList>
        <TabPanel value="1">
          {isLoading && usersLoading ? ( // Check if loading, render loading indicator
            <Box width='100%' height='80vh' sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <CircularProgress />
            </Box>
          ) : (
            <ScheduleGrid
              title="Tennis"
              schedule={tennisSchedule}
              onSubmit={onTennisScheduleChange}
              onDelete={onDeleteTennisSchedule}
              users={users}
              type="tennis"
            />
          )}
        </TabPanel>
        <TabPanel value="2">
          {isLoading && usersLoading ? ( // Check if loading, render loading indicator
            <Box width='100%' height='80vh' sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <CircularProgress />
            </Box>
          ) : (
            <ScheduleGrid
              title="Pickelball"
              schedule={pickleballSchedule}
              onSubmit={onPickleballScheduleChange}
              onDelete={onDeletePickleballSchedule}
              users={users}
              type="pickleball"
            />
          )}
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ScheduleTabs;
