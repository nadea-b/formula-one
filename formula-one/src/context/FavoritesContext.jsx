import React, { createContext, useState, useEffect, useCallback } from 'react';
import {
  getFavoriteDrivers,
  saveFavoriteDrivers,
  getFavoriteTeams,
  saveFavoriteTeams
} from '../services/storageService';

export const FavoritesContext = createContext({
  favoriteDrivers: [],
  favoriteTeams: [],
  addFavoriteDriver: () => {},
  removeFavoriteDriver: () => {},
  addFavoriteTeam: () => {},
  removeFavoriteTeam: () => {},
  isDriverFavorite: () => false,
  isTeamFavorite: () => false
});

export const FavoritesProvider = ({ children }) => {
  // Initialize with empty arrays
  const [favoriteDrivers, setFavoriteDrivers] = useState([]);
  const [favoriteTeams, setFavoriteTeams] = useState([]);
  
  // Add debugging flag to track state changes
  const [isInitialized, setIsInitialized] = useState(false);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    console.log("Initializing favorites from localStorage");
    const storedDrivers = getFavoriteDrivers();
    const storedTeams = getFavoriteTeams();
    
    console.log("Stored drivers:", storedDrivers);
    console.log("Stored teams:", storedTeams);
    
    setFavoriteDrivers(storedDrivers);
    setFavoriteTeams(storedTeams);
    setIsInitialized(true);
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    // Only save if we've already initialized from localStorage
    if (!isInitialized) return;
    
    console.log("Saving favoriteDrivers to localStorage:", favoriteDrivers);
    saveFavoriteDrivers(favoriteDrivers);
  }, [favoriteDrivers, isInitialized]);

  useEffect(() => {
    // Only save if we've already initialized from localStorage
    if (!isInitialized) return;
    
    console.log("Saving favoriteTeams to localStorage:", favoriteTeams);
    saveFavoriteTeams(favoriteTeams);
  }, [favoriteTeams, isInitialized]);

  // Convert IDs to strings to ensure consistent comparison
  const addFavoriteDriver = useCallback((driverId) => {
    const id = String(driverId);
    console.log("Adding driver to favorites:", id);
    
    setFavoriteDrivers(prev => {
      // Check if ID already exists (as string)
      if (!prev.map(String).includes(id)) {
        console.log("Driver not in favorites, adding");
        return [...prev, id];
      }
      console.log("Driver already in favorites");
      return prev;
    });
  }, []);

  const removeFavoriteDriver = useCallback((driverId) => {
    const id = String(driverId);
    console.log("Removing driver from favorites:", id);
    
    setFavoriteDrivers(prev => {
      return prev.filter(existingId => String(existingId) !== id);
    });
  }, []);

  const addFavoriteTeam = useCallback((teamId) => {
    const id = String(teamId);
    console.log("Adding team to favorites:", id);
    
    setFavoriteTeams(prev => {
      // Check if ID already exists (as string)
      if (!prev.map(String).includes(id)) {
        console.log("Team not in favorites, adding");
        return [...prev, id];
      }
      console.log("Team already in favorites");
      return prev;
    });
  }, []);

  const removeFavoriteTeam = useCallback((teamId) => {
    const id = String(teamId);
    console.log("Removing team from favorites:", id);
    
    setFavoriteTeams(prev => {
      return prev.filter(existingId => String(existingId) !== id);
    });
  }, []);

  const isDriverFavorite = useCallback((driverId) => {
    const id = String(driverId);
    return favoriteDrivers.map(String).includes(id);
  }, [favoriteDrivers]);

  const isTeamFavorite = useCallback((teamId) => {
    const id = String(teamId);
    return favoriteTeams.map(String).includes(id);
  }, [favoriteTeams]);

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