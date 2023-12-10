import React, { useState } from 'react'
import { Tab, Box } from '@mui/material'
import { TabContext, TabPanel, TabList } from '@mui/lab'
import ScheduleGrid from '../../components/ScheduleGrid';
import { useSchedule } from '../../hooks/useSchedule';

const ScheduleTabs = () => {
  const [value, setValue] = useState('1')
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const {
    tennisSchedule,
    pickleballSchedule,
    onTennisScheduleChange,
    onPickleballScheduleChange,
    onDeleteTennisSchedule,
    onDeletePickleballSchedule
  } = useSchedule();

  return (
    <Box>
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab label="Tennis" value="1" />
          <Tab label="Pickleball" value="2" />
        </TabList>
        <TabPanel value="1">
          <ScheduleGrid
            title="Tennis"
            schedule={tennisSchedule}
            onSubmit={onTennisScheduleChange}
            onDelete={onDeleteTennisSchedule}
          />
        </TabPanel>
        <TabPanel value="2">
          <ScheduleGrid
            title="Pickelball"
            schedule={pickleballSchedule}
            onSubmit={onPickleballScheduleChange}
            onDelete={onDeletePickleballSchedule}
          />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default ScheduleTabs