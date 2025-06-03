import React, { useContext } from 'react';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { FavoritesContext } from '../../context/FavoritesContext';
import { ThemeContext } from '../../context/ThemeContext';

const DriverCard = ({ driver }) => {
  const { isDriverFavorite, toggleFavoriteDriver } = useContext(FavoritesContext);
  const { darkMode } = useContext(ThemeContext);

  const isFavorite = isDriverFavorite(driver.id);

  const handleFavoriteClick = () => {
    toggleFavoriteDriver(driver.id);
  };

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
    <div
      className="rounded-lg shadow-md overflow-hidden border relative transition-transform hover:scale-105"
      style={{
        backgroundColor: darkMode ? '#e5e7eb' : '#ffffff',
        color: darkMode ? '#f3f4f6' : '#1f2937',
        borderColor: darkMode ? '#4b5563' : '#d1d5db',
        transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease'
      }}
    >
      {/* Favorite button */}
      <button
        onClick={handleFavoriteClick}
        className="absolute top-2 right-2 z-10 rounded-full p-1 shadow-sm"
        style={{
          backgroundColor: darkMode ? '#38383f' : '#ffffff',
          transition: 'background-color 0.3s ease'
        }}
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

      <div className="p-4 flex flex-col items-center">
        <h3 style={{ color: '#0d0c0c' }} className="text-lg font-bold">{driver.name}</h3>
        <p style={{ color: '#4b5563' }} className="mb-2">
          {driver.team}
        </p>

        <div className="mt-3 grid grid-cols-2 gap-4 text-center w-full max-w-xs">
          <div className="p-2 rounded">
            <p
              className="text-xs"
              style={{ color: '#6b7280' }}
            >
              Wins
            </p>
            <p className="font-bold" style={{ color: '#0d0c0c' }}>{driver.wins}</p>
          </div>
          <div className="p-2 rounded" >
            <p
              className="text-xs"
              style={{ color: '#6b7280' }}
            >
              Points
            </p>
            < p className="font-bold" style={{ color: '#0d0c0c' }} > {driver.points}</p>
          </div>
        </div>

        {/* Nationality badge */}
        <div className="mt-3">
          <span
            className="inline-block px-3 py-1 text-xs rounded-full"
            style={{
              backgroundColor: darkMode ? '#4b5563' : '#f3f4f6',
              color: darkMode ? '#f3f4f6' : '#374151'
            }}
          >
            {driver.nationality}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
