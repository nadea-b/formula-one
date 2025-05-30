import React, { useContext, useEffect, useState } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { fetchDrivers, fetchTeams } from '../services/dataService';
import DriverCard from '../components/drivers/DriverCard';
import TeamCard from '../components/teams/TeamCard';
import { Tab } from '@headlessui/react';

const FavoritesPage = () => {
  const { favoriteDrivers, favoriteTeams } = useContext(FavoritesContext);
  const [drivers, setDrivers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // For debugging - log the favorites from context
  useEffect(() => {
    console.log("FavoritesPage - Current favoriteDrivers:", favoriteDrivers);
    console.log("FavoritesPage - Current favoriteTeams:", favoriteTeams);
  }, [favoriteDrivers, favoriteTeams]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log("Fetching all drivers and teams...");
        // Fetch all drivers and teams
        const [driversData, teamsData] = await Promise.all([
          fetchDrivers(),
          fetchTeams()
        ]);
        
        console.log("All drivers:", driversData);
        console.log("All teams:", teamsData);
        console.log("Looking for favorite drivers with IDs:", favoriteDrivers);
        console.log("Looking for favorite teams with IDs:", favoriteTeams);
        
        // Filter to only include favorites - ensure string comparison
        const favoriteDriversList = driversData.filter(driver => 
          favoriteDrivers.map(String).includes(String(driver.id)));
        
        const favoriteTeamsList = teamsData.filter(team => 
          favoriteTeams.map(String).includes(String(team.id)));
        
        console.log("Filtered favorite drivers:", favoriteDriversList);
        console.log("Filtered favorite teams:", favoriteTeamsList);
        
        setDrivers(favoriteDriversList);
        setTeams(favoriteTeamsList);
      } catch (err) {
        console.error("Error fetching favorites data:", err);
        setError(err.message || "An error occurred while loading favorites");
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, [favoriteDrivers, favoriteTeams]);

  if (loading) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
        <div className="flex justify-center items-center h-64">
          <p>Loading favorites...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg">
          Error loading favorites: {error}. Please try again later.
        </div>
      </div>
    );
  }

  const hasFavorites = drivers.length > 0 || teams.length > 0;

  if (!hasFavorites) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
        <div className="bg-gray-50 p-8 rounded-lg text-center shadow-sm">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No favorites yet</h3>
          <p className="text-gray-600">You haven't added any drivers or teams to your favorites yet.</p>
          <p className="text-gray-600 mt-2">Visit the Drivers and Teams pages to add some favorites!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
      
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mb-4">
          <Tab 
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5 
              ${selected 
                ? 'bg-white shadow text-blue-700' 
                : 'text-gray-700 hover:bg-white/[0.12] hover:text-blue-600'}`
            }
          >
            Drivers ({drivers.length})
          </Tab>
          <Tab 
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5
              ${selected 
                ? 'bg-white shadow text-blue-700' 
                : 'text-gray-700 hover:bg-white/[0.12] hover:text-blue-600'}`  
            }
          >
            Teams ({teams.length})
          </Tab>
        </Tab.List>
        
        <Tab.Panels>
          <Tab.Panel>
            {drivers.length === 0 ? (
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <p className="text-gray-600">No favorite drivers yet. Visit the Drivers page to add some!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {drivers.map(driver => (
                  <DriverCard key={driver.id} driver={driver} />
                ))}
              </div>
            )}
          </Tab.Panel>
          
          <Tab.Panel>
            {teams.length === 0 ? (
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <p className="text-gray-600">No favorite teams yet. Visit the Teams page to add some!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {teams.map(team => (
                  <TeamCard key={team.id} team={team} />
                ))}
              </div>
            )}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default FavoritesPage;