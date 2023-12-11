// App.js
import React from 'react';
import ScheduleTabs from './pages/ScheduleTabs';
import { Box } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

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
          <button onClick={() => logout({ returnTo: window.location.origin })}> Log out </button>
          <ScheduleTabs />
        </Box>
      </SnackbarProvider>
    )
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }
}

export default App;
