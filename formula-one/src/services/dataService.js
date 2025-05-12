// This service handles fetching data from our local JSON files

export const fetchDrivers = async () => {
    try {
      const response = await fetch('/data/drivers.json');
      if (!response.ok) {
        throw new Error('Failed to fetch drivers data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching drivers:', error);
      // Return some sample data if the fetch fails
      return getSampleDriversData();
    }
  };
  
  export const fetchTeams = async () => {
    try {
      const response = await fetch('/data/teams.json');
      if (!response.ok) {
        throw new Error('Failed to fetch teams data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching teams:', error);
      // Return some sample data if the fetch fails
      return getSampleTeamsData();
    }
  };
  
  // Sample data for development or fallback
  const getSampleDriversData = () => {
    return [
      {
        id: 1,
        name: "Max Verstappen",
        number: 1,
        team: "Red Bull Racing",
        teamColor: "redbull",
        nationality: "Netherlands",
        points: 425,
        wins: 14,
        podiums: 19,
        imgUrl: "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png",
        statistics: {
          qualifyingPosition: [1, 1, 1, 2, 1, 1, 3, 1, 1, 1, 3, 1, 4, 2, 1, 1, 6, 2, 2, 1],
          racePosition: [1, 2, 1, 1, 1, 1, 4, 1, 1, 1, 5, 1, 2, 5, 1, 1, 8, 2, 1, 1],
          fastestLaps: 8
        }
      },
      {
        id: 2,
        name: "Lewis Hamilton",
        number: 44,
        team: "Mercedes",
        teamColor: "mercedes",
        nationality: "United Kingdom",
        points: 274,
        wins: 3,
        podiums: 7,
        imgUrl: "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png",
        statistics: {
          qualifyingPosition: [3, 3, 9, 8, 3, 7, 4, 5, 4, 8, 10, 3, 7, 3, 3, 10, 4, 8, 6, 5],
          racePosition: [7, 9, 6, 9, 6, 2, 9, 3, 10, 2, 7, 3, 1, 1, 3, 9, 5, 7, 5, 2],
          fastestLaps: 3
        }
      },
      {
        id: 3,
        name: "Charles Leclerc",
        number: 16,
        team: "Ferrari",
        teamColor: "ferrari",
        nationality: "Monaco",
        points: 349,
        wins: 2,
        podiums: 11,
        imgUrl: "https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png",
        statistics: {
          qualifyingPosition: [4, 2, 2, 5, 2, 2, 1, 4, 3, 2, 1, 2, 5, 1, 2, 4, 1, 1, 3, 4],
          racePosition: [4, 1, 3, 3, 3, 4, 1, 5, 5, 4, 2, 5, 4, 3, 2, 5, 1, 1, 3, 3],
          fastestLaps: 2
        }
      },
      {
        id: 4,
        name: "Lando Norris",
        number: 4,
        team: "McLaren",
        teamColor: "mclaren",
        nationality: "United Kingdom",
        points: 316,
        wins: 3,
        podiums: 13,
        imgUrl: "https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col/image.png",
        statistics: {
          qualifyingPosition: [2, 5, 4, 1, 4, 3, 2, 3, 2, 5, 2, 4, 1, 4, 4, 2, 3, 4, 1, 2],
          racePosition: [3, 8, 5, 2, 2, 3, 2, 2, 2, 3, 1, 4, 3, 2, 5, 2, 2, 3, 2, 4],
          fastestLaps: 5
        }
      }
    ];
  };
  
  const getSampleTeamsData = () => {
    return [
      {
        id: 1,
        name: "Red Bull Racing",
        color: "redbull",
        countryOrigin: "Austria",
        points: 623,
        championships: 6,
        wins: 18,
        podiums: 30,
        logoUrl: "https://www.formula1.com/content/dam/fom-website/teams/2023/red-bull-racing-logo.png.transform/2col/image.png",
        drivers: [1, 11],
        statistics: {
          constructorsPosition: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          pointsPerRace: [43, 38, 31, 44, 36, 42, 30, 25, 35, 44, 15, 30, 24, 14, 38, 25, 8, 18, 32, 28]
        }
      },
      {
        id: 2,
        name: "Mercedes",
        color: "mercedes",
        countryOrigin: "Germany",
        points: 450,
        championships: 8,
        wins: 5,
        podiums: 16,
        logoUrl: "https://www.formula1.com/content/dam/fom-website/teams/2023/mercedes-logo.png.transform/2col/image.png",
        drivers: [44, 63],
        statistics: {
          constructorsPosition: [5, 4, 4, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3],
          pointsPerRace: [16, 14, 18, 10, 25, 33, 10, 27, 15, 25, 11, 28, 35, 41, 29, 9, 17, 18, 19, 29]
        }
      },
      {
        id: 3,
        name: "Ferrari",
        color: "ferrari",
        countryOrigin: "Italy",
        points: 590,
        championships: 16,
        wins: 4,
        podiums: 22,
        logoUrl: "https://www.formula1.com/content/dam/fom-website/teams/2023/ferrari-logo.png.transform/2col/image.png",
        drivers: [16, 55],
        statistics: {
          constructorsPosition: [2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2],
          pointsPerRace: [23, 43, 24, 22, 28, 22, 33, 19, 22, 22, 30, 16, 24, 35, 25, 20, 43, 34, 29, 23]
        }
      },
      {
        id: 4,
        name: "McLaren",
        color: "mclaren",
        countryOrigin: "United Kingdom",
        points: 575,
        championships: 8,
        wins: 5,
        podiums: 25,
        logoUrl: "https://www.formula1.com/content/dam/fom-website/teams/2023/mclaren-logo.png.transform/2col/image.png",
        drivers: [4, 81],
        statistics: {
          constructorsPosition: [4, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          pointsPerRace: [17, 12, 22, 34, 22, 25, 25, 33, 27, 25, 34, 26, 26, 15, 15, 31, 31, 23, 22, 18]
        }
      }
    ];
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