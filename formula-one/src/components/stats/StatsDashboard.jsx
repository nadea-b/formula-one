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
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        color: document.documentElement.classList.contains('dark') ? 'white' : 'black',
        font: {
          size: 18,
          weight: 'bold'
        }
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black'
        }
      },
      tooltip: {
        backgroundColor: document.documentElement.classList.contains('dark') ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        titleColor: document.documentElement.classList.contains('dark') ? 'white' : 'black',
        bodyColor: document.documentElement.classList.contains('dark') ? 'white' : 'black',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black',
        }
      },
      x: {
        grid: {
          color: document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black',
        }
      }
    },
  };

  if (error) {
    return <div className="text-f1-red p-4 text-center max-w-4xl mx-auto mt-8">Error loading data: {error}</div>;
  }

  return (
    <div className="flex justify-center items-center w-full py-8">
      <div className="stats-dashboard bg-white dark:bg-f1-black text-f1-black dark:text-white p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto transition-colors duration-300">
        <h2 className="text-2xl font-bold mb-6 text-center">Driver Points Overview</h2>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-f1-gray dark:text-f1-light">Loading driver data...</p>
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