import React from 'react';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';

const DriverCard = ({ driver }) => {
  const { isDriverFavorite, addFavoriteDriver, removeFavoriteDriver } = useContext(FavoritesContext);
  
  const isFavorite = isDriverFavorite(driver.id);
  
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavoriteDriver(driver.id);
    } else {
      addFavoriteDriver(driver.id);
    }
  };

  // Determine team color class for styling
  const getTeamColorClass = () => {
    const teamColorMap = {
      'Red Bull Racing': 'bg-blue-800 border-blue-900',
      'Mercedes': 'bg-teal-500 border-teal-600',
      'Ferrari': 'bg-red-600 border-red-700',
      'McLaren': 'bg-orange-500 border-orange-600',
      'Aston Martin': 'bg-green-600 border-green-700',
      'Alpine': 'bg-blue-500 border-blue-600',
      'Williams': 'bg-blue-600 border-blue-700',
      'AlphaTauri': 'bg-gray-700 border-gray-800',
      'Alfa Romeo': 'bg-red-500 border-red-600',
      'Haas F1 Team': 'bg-gray-800 border-gray-900',
    };
    
    return teamColorMap[driver.team] || 'bg-gray-500 border-gray-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 relative">
      {/* Favorite button */}
      <button 
        onClick={handleFavoriteClick}
        className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-sm"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? (
          <HeartIconSolid className="h-6 w-6 text-red-500" />
        ) : (
          <HeartIconOutline className="h-6 w-6 text-gray-400 hover:text-red-500" />
        )}
      </button>
      
      {/* Team color banner */}
      <div className={`h-2 w-full ${getTeamColorClass()}`}></div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold">{driver.name}</h3>
        <p className="text-gray-600">{driver.team}</p>
        
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-xs text-gray-500">Wins</p>
            <p className="font-bold">{driver.wins}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-xs text-gray-500">Podiums</p>
            <p className="font-bold">{driver.podiums}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-xs text-gray-500">Points</p>
            <p className="font-bold">{driver.points}</p>
          </div>
        </div>
        
        <div className="mt-3">
          <span className="inline-block bg-gray-100 px-2 py-1 text-xs rounded-full text-gray-700">
            {driver.nationality}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;