import { useState, useEffect } from 'react';
import DriverCard from './DriverCard';
import { fetchDrivers } from '../../services/dataService';

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterTeam, setFilterTeam] = useState('');
  const [sortBy, setSortBy] = useState('points');
  const [sortOrder, setSortOrder] = useState('desc');
  
  useEffect(() => {
    const loadDrivers = async () => {
      setLoading(true);
      try {
        const data = await fetchDrivers();
        setDrivers(data);
        setError(null);
      } catch (err) {
        setError('Failed to load drivers data. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadDrivers();
  }, []);
  
  // Get unique teams for filter dropdown
  const teams = [...new Set(drivers.map(driver => driver.team))];
  
  // Handle sorting and filtering
  const filteredAndSortedDrivers = [...drivers]
    .filter(driver => !filterTeam || driver.team === filterTeam)
    .sort((a, b) => {
      let comparison = 0;
      
      if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else {
        comparison = a[sortBy] - b[sortBy];
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });
  
  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === sortBy) {
      // Toggle sort order if clicking the same field
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(value);
      // Default to descending for numerical values, ascending for name
      setSortOrder(value === 'name' ? 'asc' : 'desc');
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-f1-red"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded" role="alert">
        <p>{error}</p>
      </div>
    );
  }
  
  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-formula">F1 Drivers</h2>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="w-full sm:w-48">
            <label htmlFor="team-filter" className="block text-sm font-medium text-gray-700 dark:text-indigo-300 mb-1">
              Filter by Team
            </label>
            <select
              id="team-filter"
              value={filterTeam}
              onChange={(e) => setFilterTeam(e.target.value)}
              className="block w-full bg-white dark:bg-f1-gray border border-gray-300 dark:border-gray-600 rounded py-2 px-3 text-sm"
            >
              <option value="">All Teams</option>
              {teams.map(team => (
                <option key={team} value={team}>{team}</option>
              ))}
            </select>
          </div>
          
          <div className="w-full sm:w-48">
            <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Sort By
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={handleSortChange}
              className="block w-full bg-white  border border-gray-300 dark:border-gray-600 rounded py-2 px-3 text-sm"
            >
              <option value="points">Points</option>
              <option value="wins">Wins</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAndSortedDrivers.map(driver => (
          <DriverCard key={driver.id} driver={driver} />
        ))}
      </div>
      
      {filteredAndSortedDrivers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 dark:text-gray-400">No drivers match your filter criteria.</p>
          <button 
            onClick={() => setFilterTeam('')}
            className="mt-4 btn btn-outline"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default DriverList;