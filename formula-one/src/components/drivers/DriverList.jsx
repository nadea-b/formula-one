import { useState, useEffect, useContext } from 'react';
import DriverCard from './DriverCard';
import { fetchDrivers } from '../../services/dataService';
import { ThemeContext } from '../../context/ThemeContext';

const DriverList = () => {
  const { darkMode } = useContext(ThemeContext);
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

  const teams = [...new Set(drivers.map(driver => driver.team))];

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
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(value);
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
      <div
        className="p-4 rounded border-l-4"
        style={{
          backgroundColor: darkMode ? '#7f1d1d' : '#fee2e2',
          borderColor: darkMode ? '#ef4444' : '#b91c1c',
          color: darkMode ? '#fca5a5' : '#7f1d1d'
        }}
        role="alert"
      >
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Filter and Sort Controls */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {/* Team Filter */}
          <div className="w-full sm:w-48">
            <label
              htmlFor="team-filter"
              className="block text-sm font-medium mb-1"
              style={{ color: darkMode ? '#d1d5db' : '#374151' }}
            >
              Filter by Team
            </label>
            <select
              id="team-filter"
              value={filterTeam}
              onChange={(e) => setFilterTeam(e.target.value)}
              className="block w-full border rounded py-2 px-3 text-sm"
              style={{
                backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                color: darkMode ? '#e5e7eb' : '#111827',
                borderColor: darkMode ? '#4b5563' : '#d1d5db'
              }}
            >
              <option value="">All Teams</option>
              {teams.map(team => (
                <option key={team} value={team}>{team}</option>
              ))}
            </select>
          </div>

          {/* Sort Option */}
          <div className="w-full sm:w-48">
            <label
              htmlFor="sort-by"
              className="block text-sm font-medium mb-1"
              style={{ color: darkMode ? '#d1d5db' : '#374151' }}
            >
              Sort By
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={handleSortChange}
              className="block w-full border rounded py-2 px-3 text-sm"
              style={{
                backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                color: darkMode ? '#e5e7eb' : '#111827',
                borderColor: darkMode ? '#4b5563' : '#d1d5db'
              }}
            >
              <option value="points">Points</option>
              <option value="wins">Wins</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>

      {/* Driver Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAndSortedDrivers.map(driver => (
          <DriverCard key={driver.id} driver={driver} />
        ))}
      </div>

      {/* No Results Message */}
      {filteredAndSortedDrivers.length === 0 && (
        <div className="text-center py-12">
          <p
            className="text-lg"
            style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}
          >
            No drivers match your filter criteria.
          </p>
          <button
            onClick={() => setFilterTeam('')}
            className="mt-4 px-4 py-2 border rounded"
            style={{
              backgroundColor: darkMode ? '#1f2937' : '#ffffff',
              borderColor: darkMode ? '#6b7280' : '#d1d5db',
              color: darkMode ? '#f3f4f6' : '#1f2937'
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default DriverList;
