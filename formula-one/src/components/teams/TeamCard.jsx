import React from 'react';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';

const TeamCard = ({ team }) => {
  const { isTeamFavorite, addFavoriteTeam, removeFavoriteTeam } = useContext(FavoritesContext);
  
  const isFavorite = isTeamFavorite(team.id);
  
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavoriteTeam(team.id);
    } else {
      addFavoriteTeam(team.id);
    }
  };

  // Get team color class for styling
  const getTeamColorClass = () => {
    const teamColorMap = {
      'redbull': 'bg-blue-800 border-blue-900',
      'mercedes': 'bg-teal-500 border-teal-600',
      'ferrari': 'bg-red-600 border-red-700',
      'mclaren': 'bg-orange-500 border-orange-600',
      'astonmartin': 'bg-green-600 border-green-700',
      'alpine': 'bg-blue-500 border-blue-600',
      'williams': 'bg-blue-600 border-blue-700',
      'alphatauri': 'bg-gray-700 border-gray-800',
      'alfaromeo': 'bg-red-500 border-red-600',
      'haas': 'bg-gray-800 border-gray-900',
    };
    
    return teamColorMap[team.color] || 'bg-gray-500 border-gray-600';
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
        <h3 className="text-lg font-bold">{team.name}</h3>
        <p className="text-gray-600">{team.countryOrigin}</p>
        
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-xs text-gray-500">Championships</p>
            <p className="font-bold">{team.championships}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-xs text-gray-500">Wins</p>
            <p className="font-bold">{team.wins}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-xs text-gray-500">Points</p>
            <p className="font-bold">{team.points}</p>
          </div>
        </div>
        
        <div className="mt-3">
          <span className="inline-block bg-gray-100 px-2 py-1 text-xs rounded-full text-gray-700">
            {team.podiums} Podiums
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;