import React, { useState, useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { fetchDrivers } from '../../services/dataService';
import { ThemeContext } from '../../context/ThemeContext'; // Adjust path as needed

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatsDashboard = () => {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const loadDrivers = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchDrivers();

        // Sort descending by points, then take top 10
        const topDrivers = data
          .sort((a, b) => b.points - a.points)
          .slice(0, 10);

        setDrivers(topDrivers);
      } catch (err) {
        setError(err.message || 'Failed to load drivers');
      } finally {
        setLoading(false);
      }
    };

    loadDrivers();
  }, []);

  // Prepare chart data only when drivers loaded
  const chartData = {
    labels: drivers.map((driver) => driver.name),
    datasets: [
      {
        label: 'Driver Points',
        data: drivers.map((driver) => driver.points),
        backgroundColor: darkMode ? 'rgba(220, 0, 0, 0.6)' : 'rgba(255, 99, 132, 0.6)', // Ferrari red in dark mode
        borderColor: darkMode ? 'rgba(220, 0, 0, 1)' : 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        color: darkMode ? '#ffffff' : '#15151e',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: darkMode ? '#ffffff' : '#15151e',
        },
      },
      tooltip: {
        backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        titleColor: darkMode ? '#ffffff' : '#15151e',
        bodyColor: darkMode ? '#ffffff' : '#15151e',
        borderColor: darkMode ? 'rgba(220, 0, 0, 1)' : 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: darkMode ? '#ffffff' : '#15151e',
        },
      },
      x: {
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: darkMode ? '#ffffff' : '#15151e',
        },
      },
    },
  };

  if (error) {
    return (
      <div 
        className="p-4 text-center max-w-4xl mx-auto mt-8"
        style={{
          color: '#e10600', // f1-red
          transition: 'color 0.3s ease'
        }}
      >
        Error loading data: {error}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full py-8">
      <div 
        className="p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto"
        style={{
          backgroundColor: darkMode ? '#292828' : '#ffffff', // f1-black in dark, white in light
          color: darkMode ? '#ffffff' : '#15151e', // white in dark, f1-black in light
          transition: 'background-color 0.3s ease, color 0.3s ease'
        }}
      >
        <h2 
          className="text-2xl font-bold mb-6 text-center"
          style={{
            color: darkMode ? '#ffffff' : '#15151e',
            transition: 'color 0.3s ease'
          }}
        >
          Driver Points Overview
        </h2>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p 
              style={{
                color: darkMode ? '#f8f4f4' : '#38383f', // f1-light in dark, f1-gray in light
                transition: 'color 0.3s ease'
              }}
            >
              Loading driver data...
            </p>
          </div>
        ) : (
          <div className="h-80 md:h-96">
            <Bar data={chartData} options={chartOptions} />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsDashboard;