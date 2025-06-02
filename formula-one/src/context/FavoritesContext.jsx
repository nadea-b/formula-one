import React, { createContext, useEffect, useState } from 'react';
import {
  getFavoriteDrivers,
  getFavoriteTeams,
  saveFavoriteDrivers,
  saveFavoriteTeams,
} from '../services/storageService';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteDrivers, setFavoriteDrivers] = useState([]);
  const [favoriteTeams, setFavoriteTeams] = useState([]);

  // Load favorites from localStorage on first mount
  useEffect(() => {
    const savedDrivers = getFavoriteDrivers();
    const savedTeams = getFavoriteTeams();
    setFavoriteDrivers(savedDrivers);
    setFavoriteTeams(savedTeams);
  }, []);

  // Save drivers to localStorage when changed
  useEffect(() => {
    saveFavoriteDrivers(favoriteDrivers);
  }, [favoriteDrivers]);

  // Save teams to localStorage when changed
  useEffect(() => {
    saveFavoriteTeams(favoriteTeams);
  }, [favoriteTeams]);

  const toggleFavoriteDriver = (driverId) => {
    setFavoriteDrivers((prev) =>
      prev.includes(driverId)
        ? prev.filter((id) => id !== driverId)
        : [...prev, driverId]
    );
  };

  const toggleFavoriteTeam = (teamId) => {
    setFavoriteTeams((prev) =>
      prev.includes(teamId)
        ? prev.filter((id) => id !== teamId)
        : [...prev, teamId]
    );
  };

const isDriverFavorite = (driverId) => favoriteDrivers.includes(driverId);

const isTeamFavorite = (teamId) => favoriteTeams.includes(teamId);

  return (
    <FavoritesContext.Provider
      value={{
        favoriteDrivers,
        favoriteTeams,
        toggleFavoriteDriver,
        toggleFavoriteTeam,
        isDriverFavorite,
        isTeamFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
