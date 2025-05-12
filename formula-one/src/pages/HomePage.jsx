import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-formula font-bold text-center mb-8">Welcome to F1 Stats</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </div>
  );
};

export default HomePage;
