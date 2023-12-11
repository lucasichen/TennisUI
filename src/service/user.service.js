export const getFirebaseUsers = async () => {
  const response = await fetch(process.env.REACT_APP_BASE_URL + 'api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
};