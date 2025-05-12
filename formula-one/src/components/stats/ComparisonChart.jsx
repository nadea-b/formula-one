import { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ThemeContext } from '../../context/ThemeContext';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ComparisonChart = ({ data, type, title }) => {
  const { darkMode } = useContext(ThemeContext);

  const textColor = darkMode ? '#FFFFFF' : '#15151E';
  const gridColor = darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: textColor,
          font: {
            family: "'Titillium Web', sans-serif",
            size: 12,
          },
        },
      },
      title: {
        display: !!title,
        text: title,
        color: textColor,
        font: {
          family: "'Formula1', sans-serif",
          size: 16,
          weight: 'bold',
        },
      },
      tooltip: {
        backgroundColor: darkMode ? '#38383F' : 'rgba(255, 255, 255, 0.9)',
        titleColor: textColor,
        bodyColor: textColor,
        borderColor: darkMode ? '#4B4B57' : '#DDDDDD',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColor,
        },
        grid: {
          color: gridColor,
        },
      },
      y: {
        ticks: {
          color: textColor,
        },
        grid: {
          color: gridColor,
        },
      },
    },
  };

  return (
    <div className="my-6">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ComparisonChart;
