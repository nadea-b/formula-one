import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatsDashboard = () => {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Use hardcoded data instead of fetching from an external file
  useEffect(() => {
    // This simulates fetching data but uses your JSON directly
    const driverData = [
      {
        "id": "hamilton",
        "name": "Lewis Hamilton",
        "team": "Mercedes",
        "wins": 103,
        "points": 4400,
        "podiums": 195,
        "nationality": "British"
      },
      {
        "id": "verstappen",
        "name": "Max Verstappen",
        "team": "Red Bull Racing",
        "wins": 60,
        "points": 2700,
        "podiums": 90,
        "nationality": "Dutch"
      },
      {
        "id": "leclerc",
        "name": "Charles Leclerc",
        "team": "Ferrari",
        "wins": 5,
        "points": 1100,
        "podiums": 30,
        "nationality": "Monegasque"
      }
    ];
    
    setDrivers(driverData);
    setLoading(false);
  }, []);

  // Prepare data for the bar chart - only create chart data when drivers are loaded
  const chartData = {
    labels: drivers.map(driver => driver.name),
    datasets: [
      {
        label: 'Driver Points',
        data: drivers.map(driver => driver.points),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Driver Points Overview',
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (error) {
    return <div className="text-red-500 p-4">Error loading data: {error}</div>;
  }

  return (
    <div className="stats-dashboard bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Driver Points Overview</h2>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500">Loading driver data...</p>
        </div>
      ) : (
        <div className="h-64">
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
};

export default StatsDashboard;