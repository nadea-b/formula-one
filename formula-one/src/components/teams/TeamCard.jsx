import React from 'react';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';

const TeamCard = ({ team }) => {
  const { isTeamFavorite, toggleFavoriteTeam } = useContext(FavoritesContext);

  const isFavorite = isTeamFavorite(team.id);

  const handleFavoriteClick = () => {
    toggleFavoriteTeam(team.id); // just toggle, no need for add/remove
  };

  return (
    <div className="bg-white dark:bg-f1-gray text-f1-black dark:text-black rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-f1-light relative transition-colors duration-300">
      
      {/* Favorite button */}
      <button 
        onClick={() => toggleFavoriteTeam(team.id)}
        className="absolute top-2 right-2 z-10 bg-white dark:bg-f1-gray rounded-full p-1 shadow-sm"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? (
          <HeartIconSolid className="h-6 w-6 text-red-500" />
        ) : (
          <HeartIconOutline className="h-6 w-6 text-gray-400 hover:text-red-500" />
        )}
      </button>
      
      {/* Team color banner */}
      <div style={{ backgroundColor: team.color }} className="h-2 w-full"></div>
      
      <div className="p-4">
        {/* Team logo */}
        {team.logo && (
          <div className="flex justify-center mb-3">
            <img src={team.logo} alt={`${team.name} logo`} className="h-12 object-contain" />
          </div>
        )}
        
        {/* Team name and nationality */}
        <h3 className="text-lg font-bold text-center">{team.name}</h3>
        <p className="text-gray-600 text-sm text-center">{team.nationality}</p>

        {/* Position badge */}
        {team.position && (
          <div className="mt-2 flex justify-center">
            <span className="text-xs px-2 py-1 bg-red-600 text-white rounded-full shadow">
              #{team.position} in Championship
            </span>
          </div>
        )}
        
        {/* Stats */}
        <div className="mt-3 grid grid-cols-2 gap-2 text-center">
          <div className="bg-gray-50 dark:bg-red/10 p-2 rounded">
            <p className="text-xs text-gray-500">Championships</p>
            <p className="font-bold">{team.championshipsWon ?? 0}</p>
          </div>
          <div className="bg-gray-50 dark:bg-red/10 p-2 rounded">
            <p className="text-xs text-gray-500">Points</p>
            <p className="font-bold">{team.points ?? 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
