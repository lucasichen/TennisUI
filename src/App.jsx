// App.js
import React from 'react';
import ScheduleTabs from './pages/ScheduleTabs';
import { Box } from '@mui/material';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <Box style={{ background: '#faf0e6' }} height='100vh' width="100%">
        <ScheduleTabs />
      </Box>
    </SnackbarProvider>
  );
}

export default App;
