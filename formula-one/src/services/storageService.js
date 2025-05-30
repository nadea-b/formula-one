// This service handles localStorage interactions

export const saveToLocalStorage = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
      return false;
    }
  };
  
  export const getFromLocalStorage = (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error getting ${key} from localStorage:`, error);
      return defaultValue;
    }
  };
  
  export const removeFromLocalStorage = (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing ${key} from localStorage:`, error);
      return false;
    }
  };
  
  // Functions specific to our app
  export const getFavoriteDrivers = () => {
    return getFromLocalStorage('favoriteDrivers', []);
  };
  
  export const getFavoriteTeams = () => {
    return getFromLocalStorage('favoriteTeams', []);
  };
  
  export const saveFavoriteDrivers = (drivers) => {
    return saveToLocalStorage('favoriteDrivers', drivers);
  };
  
  export const saveFavoriteTeams = (teams) => {
    return saveToLocalStorage('favoriteTeams', teams);
  };
  
  export const getThemePreference = () => {
    return getFromLocalStorage('theme', 'light');
  };
  
  export const saveThemePreference = (theme) => {
    return saveToLocalStorage('theme', theme);
  };
  
  export const getComparisonHistory = () => {
    return getFromLocalStorage('comparisonHistory', []);
  };
  
  export const saveComparisonToHistory = (comparison) => {
    const history = getComparisonHistory();
    
    // Add new comparison to the beginning of the array
    const updatedHistory = [comparison, ...history.slice(0, 9)];
    
    return saveToLocalStorage('comparisonHistory', updatedHistory);
  };