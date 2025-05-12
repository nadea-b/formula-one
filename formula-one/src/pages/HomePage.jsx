import { Link } from 'react-router-dom';
import StatsDashboard from '../components/stats/StatsDashboard';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-formula font-bold text-center mb-8">Welcome to F1 Stats</h1>

      <StatsDashboard />

      {/* Card components below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="card">
          <h2 className="text-lg font-semibold">Top Teams</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Browse through the top teams of Formula 1.</p>
          <Link to="/teams" className="text-f1-red hover:underline mt-2">View Teams</Link>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold">Compare Drivers</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Compare your favorite drivers head-to-head.</p>
          <Link to="/compare" className="text-f1-red hover:underline mt-2">Go to Compare</Link>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold">All Drivers</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Explore all Formula 1 drivers.</p>
          <Link to="/drivers" className="text-f1-red hover:underline mt-2">Browse Drivers</Link>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold">Favorites</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">View your favorite drivers in one place.</p>
          <Link to="/favorites" className="text-f1-red hover:underline mt-2">My Favorites</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
