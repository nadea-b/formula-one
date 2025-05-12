import { useState, useEffect } from 'react';
import TeamCard from './TeamCard';
import { fetchTeams } from '../../services/dataService';

const TeamList = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('points');
  const [sortOrder, setSortOrder] = useState('desc');
  
  useEffect(() => {
    const loadTeams = async () => {
      setLoading(true);
      try {
        const data = await fetchTeams();
        setTeams(data);
        setError(null);
      } catch (err) {
        setError('Failed to load teams data. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadTeams();
  }, []);
  
  // Handle sorting
  const sortedTeams = [...teams].sort((a, b) => {
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
        <h2 className="text-2xl font-formula">F1 Teams</h2>
        
        <div className="w-full md:w-48">
          <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Sort By
          </label>
          <select
            id="sort-by"
            value={sortBy}
            onChange={handleSortChange}
            className="block w-full bg-white dark:bg-f1-gray border border-gray-300 dark:border-gray-600 rounded py-2 px-3 text-sm"
          >
            <option value="points">Points</option>
            <option value="wins">Wins</option>
            <option value="podiums">Podiums</option>
            <option value="championships">Championships</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedTeams.map(team => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamList;