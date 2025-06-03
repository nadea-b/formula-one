const API_BASE_URL = "http://localhost:5000/api";

// Fetch drivers from backend
export const fetchDrivers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/external-drivers`);
    if (!response.ok) {
      throw new Error('Failed to fetch drivers data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching drivers:', error);
    return getSampleDriversData(); // fallback
  }
};

// Fetch teams from backend
export const fetchTeams = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/external-teams`);
    if (!response.ok) {
      throw new Error('Failed to fetch teams data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching teams:', error);
    return getSampleTeamsData(); // fallback
  }
};