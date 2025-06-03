import { useContext } from 'react';
import { Link } from 'react-router-dom';
import StatsDashboard from '../components/stats/StatsDashboard';
import { ThemeContext } from '../context/ThemeContext'; // Adjust path as needed

const HomePage = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div 
      className="container mx-auto px-4 py-6"
      style={{
        transition: 'color 0.3s ease'
      }}
    >
      <h1 
        className="text-3xl font-formula font-bold text-center mb-8"
        style={{
          color: darkMode ? '#ffffff' : '#15151e', // white in dark, f1-black in light
          transition: 'color 0.3s ease'
        }}
      >
        Welcome to F1 Stats
      </h1>

      <StatsDashboard />

      {/* Card components below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {/* Top Teams Card */}
        <div 
          className="rounded-lg shadow-md p-4"
          style={{
            backgroundColor: darkMode ? '#292828' : '#ffffff', // f1-gray in dark, white in light
            color: darkMode ? '#ffffff' : '#15151e',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}
        >
          <h2 
            className="text-lg font-semibold"
            style={{
              color: darkMode ? '#ffffff' : '#15151e',
              transition: 'color 0.3s ease'
            }}
          >
            Teams
          </h2>
          <p 
            className="text-sm mt-2"
            style={{
              color: darkMode ? '#f8f4f4' : '#6b7280', // f1-light in dark, gray-500 in light
              transition: 'color 0.3s ease'
            }}
          >
            Browse through the top teams of Formula 1.
          </p>
          <Link 
            to="/teams" 
            className="inline-block mt-3 hover:underline"
            style={{
              color: darkMode ? '#dc0000' : '#b91c1c', // ferrari red in dark, red-700 in light
              transition: 'color 0.3s ease'
            }}
          >
            View Teams
          </Link>
        </div>

        {/* All Drivers Card */}
        <div 
          className="rounded-lg shadow-md p-4"
          style={{
            backgroundColor: darkMode ? '#292828' : '#ffffff',
            color: darkMode ? '#ffffff' : '#15151e',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}
        >
          <h2 
            className="text-lg font-semibold"
            style={{
              color: darkMode ? '#ffffff' : '#15151e',
              transition: 'color 0.3s ease'
            }}
          >
            Drivers
          </h2>
          <p 
            className="text-sm mt-2"
            style={{
              color: darkMode ? '#f8f4f4' : '#6b7280',
              transition: 'color 0.3s ease'
            }}
          >
            Explore all Formula 1 drivers.
          </p>
          <Link 
            to="/drivers" 
            className="inline-block mt-3 hover:underline"
            style={{
              color: darkMode ? '#dc0000' : '#b91c1c',
              transition: 'color 0.3s ease'
            }}
          >
            Browse Drivers
          </Link>
        </div>

        {/* Compare Drivers Card */}
        <div 
          className="rounded-lg shadow-md p-4"
          style={{
            backgroundColor: darkMode ? '#292828' : '#ffffff',
            color: darkMode ? '#ffffff' : '#15151e',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}
        >
          <h2 
            className="text-lg font-semibold"
            style={{
              color: darkMode ? '#ffffff' : '#15151e',
              transition: 'color 0.3s ease'
            }}
          >
            Compare Drivers
          </h2>
          <p 
            className="text-sm mt-2"
            style={{
              color: darkMode ? '#f8f4f4' : '#6b7280',
              transition: 'color 0.3s ease'
            }}
          >
            Compare your favorite drivers head-to-head.
          </p>
          <Link 
            to="/compare" 
            className="inline-block mt-3 hover:underline"
            style={{
              color: darkMode ? '#dc0000' : '#b91c1c',
              transition: 'color 0.3s ease'
            }}
          >
            Go to Compare
          </Link>
        </div>

        {/* Favorites Card */}
        <div 
          className="rounded-lg shadow-md p-4"
          style={{
            backgroundColor: darkMode ? '#292828' : '#ffffff',
            color: darkMode ? '#ffffff' : '#15151e',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}
        >
          <h2 
            className="text-lg font-semibold"
            style={{
              color: darkMode ? '#ffffff' : '#15151e',
              transition: 'color 0.3s ease'
            }}
          >
            Favorites
          </h2>
          <p 
            className="text-sm mt-2"
            style={{
              color: darkMode ? '#f8f4f4' : '#6b7280',
              transition: 'color 0.3s ease'
            }}
          >
            View your favorite drivers in one place.
          </p>
          <Link 
            to="/favorites" 
            className="inline-block mt-3 hover:underline"
            style={{
              color: darkMode ? '#dc0000' : '#b91c1c',
              transition: 'color 0.3s ease'
            }}
          >
            My Favorites
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;