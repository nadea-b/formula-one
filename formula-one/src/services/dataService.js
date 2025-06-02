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
  
  // These functions calculate statistics for comparison
  export const calculateDriverAverages = (driver) => {
    if (!driver || !driver.statistics) return {};
    
    const qualifyingPositions = driver.statistics.qualifyingPosition;
    const racePositions = driver.statistics.racePosition;
    
    const avgQualifying = qualifyingPositions.reduce((sum, pos) => sum + pos, 0) / qualifyingPositions.length;
    const avgRacePosition = racePositions.reduce((sum, pos) => sum + pos, 0) / racePositions.length;
    const pointsPerRace = driver.points / racePositions.length;
    
    return {
      avgQualifying: avgQualifying.toFixed(2),
      avgRacePosition: avgRacePosition.toFixed(2),
      pointsPerRace: pointsPerRace.toFixed(2),
      winsPercentage: ((driver.wins / racePositions.length) * 100).toFixed(1) + '%',
      podiumsPercentage: ((driver.podiums / racePositions.length) * 100).toFixed(1) + '%'
    };
  };
  
  export const calculateTeamAverages = (team) => {
    if (!team || !team.statistics) return {};
    
    const pointsPerRace = team.statistics.pointsPerRace;
    
    const avgPoints = pointsPerRace.reduce((sum, points) => sum + points, 0) / pointsPerRace.length;
    const highestPoints = Math.max(...pointsPerRace);
    const lowestPoints = Math.min(...pointsPerRace);
    
    return {
      avgPoints: avgPoints.toFixed(2),
      highestPoints,
      lowestPoints,
      winsPercentage: ((team.wins / pointsPerRace.length) * 100).toFixed(1) + '%',
      podiumsPercentage: ((team.podiums / (pointsPerRace.length * 2)) * 100).toFixed(1) + '%'
    };
  };