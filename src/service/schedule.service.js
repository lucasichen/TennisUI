export const getTennisSchedules = async () => {
  const response = await fetch(process.env.REACT_APP_BASE_URL + 'api/schedule/tennis', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
};

export const getPickelballSchedules = async () => {
  const response = await fetch(process.env.REACT_APP_BASE_URL + 'api/schedule/pickleball', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
}

export const updateTennisSchedule = async (data) => {
  const payload = {
    'day': data.day,
    'user': data.person.id,
    'time': data.time,
    'court': data.courtNumber
  }
  const response = await fetch(process.env.REACT_APP_BASE_URL + 'api/schedule/tennis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  });
  const responseData = await response.json();
  return responseData;
};

export const updatePickleballSchedule = async (data) => {
  const payload = {
    'day': data.day,
    'user': data.person.id,
    'time': data.time,
    'court': data.courtNumber
  }
  const response = await fetch(process.env.REACT_APP_BASE_URL + 'api/schedule/pickleball', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  });
  const responseData = await response.json();
  return responseData;
};

export const deleteTennisSchedule = async (data) => {
  const payload = {
    'day': data.day,
    'user': data.person.id,
  }
  const response = await fetch(process.env.REACT_APP_BASE_URL + 'api/schedule/tennis', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  });
  const responseData = await response.json();
  return responseData;
}

export const deletePickleballSchedule = async (data) => {
  const payload = {
    'day': data.day,
    'user': data.person.id,
  }
  const response = await fetch(process.env.REACT_APP_BASE_URL + 'api/schedule/pickleball', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  });
  const responseData = await response.json();
  return responseData;
}