import React from 'react';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';
import { ThemeContext } from '../../context/ThemeContext'; // Add this import

const TeamCard = ({ team }) => {
  const { isTeamFavorite, toggleFavoriteTeam } = useContext(FavoritesContext);
  const { darkMode } = useContext(ThemeContext); // Add this line
  const isFavorite = isTeamFavorite(team.id);

  const handleFavoriteClick = () => {
    toggleFavoriteTeam(team.id);
  };

  return (
    <div 
      className="relative rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
      style={{
        backgroundColor: darkMode ? '#e5e7eb' : '#ffffff',
        color: darkMode ? '#f3f4f6' : '#1f2937',
        transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease'
      }}
    >
      {/* Favorite button */}
      <button
        onClick={() => toggleFavoriteTeam(team.id)}
        className="absolute top-2 right-2 z-10 rounded-full p-1 shadow-sm"
        style={{
          backgroundColor: darkMode ? '#38383f' : '#ffffff',
          transition: 'background-color 0.3s ease'
        }}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? (
          <HeartIconSolid className="w-5 h-5 text-red-500" />
        ) : (
          <HeartIconOutline className="w-5 h-5 text-gray-500" />
        )}
      </button>
      
      {/* Team color banner */}
      <div 
        className="h-2"
        style={{ backgroundColor: team.color || '#dc0000' }}
      ></div>
      
      <div className="p-4">
        {/* Team logo */}
        {team.logo && (
          <div className="flex justify-center mb-4">
            <img
              src={team.logo}
              alt={`${team.name} logo`}
              className="w-16 h-16 object-contain"
            />
          </div>
        )}
        
        {/* Team name and nationality */}
        <h3 
          className="text-xl font-bold text-center mb-2"
          style={{
            color: '#1f2937'
          }}
        >
          {team.name}
        </h3>

        {/* Position badge */}
        {team.position && (
          <div className="flex justify-center mb-4">
            <span 
              className="px-3 py-1 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: darkMode ? '#dc2626' : '#ef4444',
                color: '#ffffff'
              }}
            >
              #{team.position} in Championship
            </span>
          </div>
        )}
        
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p 
              className="text-sm font-medium"
              style={{
                color: '#6b7280'
              }}
            >
              Championships
            </p>
            <p 
              className="text-2xl font-bold"
              style={{
                color: '#1f2937'
              }}
            >
              {team.championshipsWon ?? 0}
            </p>
          </div>
          <div className="text-center">
            <p 
              className="text-sm font-medium"
              style={{
                color: '#6b7280'
              }}
            >
              Points
            </p>
            <p 
              className="text-2xl font-bold"
              style={{
                color: '#1f2937'
              }}
            >
              {team.points ?? 0}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;