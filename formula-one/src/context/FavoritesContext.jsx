import { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext({
  favoriteDrivers: [],
  favoriteTeams: [],
  addFavoriteDriver: () => {},
  removeFavoriteDriver: () => {},
  addFavoriteTeam: () => {},
  removeFavoriteTeam: () => {},
  isDriverFavorite: () => {},
  isTeamFavorite: () => {}
});

export const FavoritesProvider = ({ children }) => {
  const [favoriteDrivers, setFavoriteDrivers] = useState([]);
  const [favoriteTeams, setFavoriteTeams] = useState([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const savedDrivers = localStorage.getItem('favoriteDrivers');
    const savedTeams = localStorage.getItem('favoriteTeams');
    
    if (savedDrivers) setFavoriteDrivers(JSON.parse(savedDrivers));
    if (savedTeams) setFavoriteTeams(JSON.parse(savedTeams));
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favoriteDrivers', JSON.stringify(favoriteDrivers));
  }, [favoriteDrivers]);

  useEffect(() => {
    localStorage.setItem('favoriteTeams', JSON.stringify(favoriteTeams));
  }, [favoriteTeams]);

  const addFavoriteDriver = (driver) => {
    setFavoriteDrivers(prev => [...prev, driver]);
  };

  const removeFavoriteDriver = (driverId) => {
    setFavoriteDrivers(prev => prev.filter(driver => driver.id !== driverId));
  };

  const addFavoriteTeam = (team) => {
    setFavoriteTeams(prev => [...prev, team]);
  };

  const removeFavoriteTeam = (teamId) => {
    setFavoriteTeams(prev => prev.filter(team => team.id !== teamId));
  };

  const isDriverFavorite = (driverId) => {
    return favoriteDrivers.some(driver => driver.id === driverId);
  };

  const isTeamFavorite = (teamId) => {
    return favoriteTeams.some(team => team.id === teamId);
  };

  return (
    <FavoritesContext.Provider value={{
      favoriteDrivers,
      favoriteTeams,
      addFavoriteDriver,
      removeFavoriteDriver,
      addFavoriteTeam,
      removeFavoriteTeam,
      isDriverFavorite,
      isTeamFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};