// App.js
import React from 'react';
import ScheduleTabs from './pages/ScheduleTabs';
import { Box, Typography, Button } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
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
    )
  } else {
    return (
      <Box
        height='100vh'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Box
          sx={{
            border: 1,
            textAlign: 'center',
            padding: 2,
            maxWidth: 400,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Welcome to the Tennis and Pickleball Scheduler
          </Typography>
          <Typography variant="body1" paragraph>
            Please log in to continue
          </Typography>
          <Button variant="contained" onClick={loginWithRedirect}>Log in</Button>
        </Box>
      </Box>
    )
  }
}

export default App;
