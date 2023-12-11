// App.js
import React, { useEffect } from 'react';
import ScheduleTabs from './pages/ScheduleTabs';
import { Box } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { useAuth0 } from '@auth0/auth0-react';
import { CircularProgress } from '@mui/material';

function App() {
  const { isAuthenticated, loginWithRedirect, isLoading, error } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated]);

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

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
