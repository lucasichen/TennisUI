import React, { useState } from 'react'
import { Tab, Box } from '@mui/material'
import { TabContext, TabPanel, TabList } from '@mui/lab'
import ScheduleGrid from '../../components/ScheduleGrid';

const ScheduleTabs = () => {
  const [value, setValue] = useState('1')
  const handleChange = (event, newValue) => {
    setValue(newValue)
    console.log(value);
  }
  return (
    <Box>
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab label="Tennis" value="1" />
          {/* <Tab label="Pickleball" value="2" /> */}
        </TabList>
        <TabPanel value="1">
          <ScheduleGrid />
        </TabPanel>
        <TabPanel value="2">

        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default ScheduleTabs