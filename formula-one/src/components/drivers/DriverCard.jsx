import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';

const DriverCard = ({ driver }) => {
  const { isDriverFavorite, addFavoriteDriver, removeFavoriteDriver } = useContext(FavoritesContext);
  
  const isFavorite = isDriverFavorite(driver.id);
  
  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavoriteDriver(driver.id);
    } else {
      addFavoriteDriver(driver);
    }
  };
  
  // Default image if driver.imgUrl is not available
  const fallbackImage = "https://www.formula1.com/content/dam/fom-website/drivers/Driver%20missing.png.transform/2col/image.png";
  
  return (
    <div className="card overflow-hidden border border-gray-200 dark:border-f1-gray hover:border-gray-300 dark:hover:border-gray-500 transition-all">
      <div className={`h-2 bg-${driver.teamColor}`}></div>
      <div className="flex justify-between items-start p-4">
        <div>
          <h3 className="text-lg font-bold">{driver.name}</h3>
          <div className="flex items-center mt-1">
            <span className={`inline-block w-6 h-6 rounded-full bg-${driver.teamColor} text-white text-xs flex items-center justify-center mr-2 font-bold`}>
              {driver.number}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-300">{driver.team}</span>
          </div>
          <p className="text-sm mt-2">
            <span className="font-semibold">Nationality:</span> {driver.nationality}
          </p>
        </div>
        
        <button
          onClick={handleFavoriteToggle}
          className="text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-300"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? (
            <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          )}
        </button>
      </div>
      
      <div className="px-4 pb-4">
        <img 
          src={driver.imgUrl || fallbackImage} 
          alt={driver.name} 
          className="w-full h-40 object-contain object-center" 
        />
        
        <div className="grid grid-cols-3 gap-2 text-center mt-4 text-sm">
          <div className="bg-gray-100 dark:bg-f1-black p-2 rounded">
            <p className="font-semibold text-f1-red">{driver.points}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Points</p>
          </div>
          <div className="bg-gray-100 dark:bg-f1-black p-2 rounded">
            <p className="font-semibold text-f1-red">{driver.wins}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Wins</p>
          </div>
          <div className="bg-gray-100 dark:bg-f1-black p-2 rounded">
            <p className="font-semibold text-f1-red">{driver.podiums}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Podiums</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;