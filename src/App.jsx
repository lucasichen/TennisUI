// App.js
import React from 'react';
import ScheduleTabs from './pages/ScheduleTabs';
import { Box } from '@mui/material';

function App() {
  return (
    <Box style={{ background: '#faf0e6' }} height='100vh' width="100%">
      <ScheduleTabs />
    </Box>
  );
}

export default App;
