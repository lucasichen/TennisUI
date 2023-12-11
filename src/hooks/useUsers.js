import { useState, useEffect, useCallback } from 'react';
import { getFirebaseUsers } from '../service/user.service';
import { useSnackbar } from 'notistack';

export const useUsers = () => {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const getUsers = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getFirebaseUsers();
      setUsers(data);
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Error getting users', { variant: 'error' });
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return {
    isLoading,
    users
  }
};