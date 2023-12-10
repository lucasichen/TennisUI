export const getTennisSchedules = async () => {
  // const response = await fetch('/api/schedule');
  // const data = await response.json();
  const mockData = {
    "Monday": {
      "Paul": {
        "time": "9:00 AM",
        "court": "1"
      },
      "Barbara": {
        "time": "9:00 AM",
        "court": "2"
      },
    },
    "Tuesday": {
      "Paul": {
        "time": "9:00 AM",
        "court": "1"
      },
      "Barbara": {
        "time": "9:00 AM",
        "court": "2"
      },
    },
  };
  return mockData;
};

export const getPickelballSchedules = async () => {
  // const response = await fetch('/api/schedule');
  // const data = await response.json();
  const mockData = {
    "Sunday": {
      "Paul": {
        "time": "9:00 AM",
        "court": "4"
      },
      "Barbara": {
        "time": "9:00 AM",
        "court": "2"
      },
    },
    "Wednesday": {
      "Paul": {
        "time": "9:00 AM",
        "court": "4"
      },
      "Barbara": {
        "time": "9:00 AM",
        "court": "2"
      },
    },
  };
  return mockData;
}