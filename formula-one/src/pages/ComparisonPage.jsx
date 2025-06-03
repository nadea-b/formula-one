import { useState, useEffect, useContext } from 'react';
import { fetchDrivers } from '../services/dataService';
import ComparisonChart from '../components/stats/ComparisonChart';
import { ThemeContext } from '../context/ThemeContext';



const ComparisonPage = () => {
  const [drivers, setDrivers] = useState([]);
  const [selectedDrivers, setSelectedDrivers] = useState([]);
  const [chartData, setChartData] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const loadDrivers = async () => {
      const driversData = await fetchDrivers();
      setDrivers(driversData);
    };
    loadDrivers();
  }, []);  

  const handleCompare = () => {
    if (selectedDrivers.length === 2) {
      const [d1, d2] = selectedDrivers.map(id => drivers.find(d => d.id === id));
  
      const data = {
        labels: [d1.name, d2.name],
        datasets: [
          {
            label: 'Points',
            data: [d1.points, d2.points],
            backgroundColor: [d1.teamColor, d2.teamColor],
          },
        ],
      };
  
      setChartData(data);
    }
  };
  

  const handleSelect = (event, pickerIndex) => {
    const selectedDriverId = event.target.value;
    setSelectedDrivers((prevSelected) => {
      const updated = [...prevSelected];
      updated[pickerIndex] = selectedDriverId;
      return updated;
    });
  };
  

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-formula mb-4">Compare Drivers</h1>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {[0, 1].map(index => (
          <select
          key={index}
          className="p-2 border rounded bg-white text-gray-900 border-gray-300 dark:bg-f1-gray dark:text-white dark:border-gray-600"
          onChange={e => handleSelect(e, index)}
          defaultValue=""
        >
          <option value="" disabled>Select Driver {index + 1}</option>
          {drivers.map(driver => (
            <option key={driver.id} value={driver.id}>{driver.name}</option>
          ))}
        </select>
        
        ))}
        <button
            onClick={handleCompare}
            className={`px-4 py-2 rounded bg-f1-red hover:bg-red-700 transition dark:bg-f1-gray dark:hover:bg-gray-700`}
            style={{ color: darkMode ? 'white' : 'black' }}
          >
            Compare
          </button>

      </div>

      {chartData && (
        <ComparisonChart data={chartData} type="bar" title="Driver Comparison" />
      )}
    </div>
  );
};

export default ComparisonPage;
