import { useContext } from 'react';
import {
  Bar
} from 'react-chartjs-2';
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ComparisonChart = ({ data, title }) => {
  const { darkMode } = useContext(ThemeContext);

  const textColor = darkMode ? '#ffffff' : '#1e1e1e';

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: !!title,
        text: title,
        color: textColor,
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `Points: ${context.raw}`
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColor
        },
        grid: {
          color: darkMode ? '#444' : '#ddd'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: textColor
        },
        grid: {
          color: darkMode ? '#444' : '#ddd'
        }
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-6">
      <div className="h-[350px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ComparisonChart;
