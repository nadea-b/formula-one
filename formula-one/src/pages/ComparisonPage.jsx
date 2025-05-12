import { useState, useEffect } from 'react';
import { fetchDrivers } from '../services/dataService';
import ComparisonChart from '../components/stats/ComparisonChart';

const ComparisonPage = () => {
  const [drivers, setDrivers] = useState([]);
  const [selectedDrivers, setSelectedDrivers] = useState([]);
  const [chartData, setChartData] = useState(null);

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
      const labels = ['Wins', 'Points', 'Podiums']; // customize as needed
      const data = {
        labels,
        datasets: [
          {
            label: d1.name,
            data: [d1.wins, d1.points, d1.podiums],
            backgroundColor: '#e10600',
          },
          {
            label: d2.name,
            data: [d2.wins, d2.points, d2.podiums],
            backgroundColor: '#38383f',
          },
        ]
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
            className="p-2 border rounded"
            onChange={e => handleSelect(e, index)}
            defaultValue=""
          >
            <option value="" disabled>Select Driver {index + 1}</option>
            {drivers.map(driver => (
              <option key={driver.id} value={driver.id}>{driver.name}</option>
            ))}
          </select>
        ))}
        <button onClick={handleCompare} className="btn btn-primary">Compare</button>
      </div>

      {chartData && (
        <ComparisonChart data={chartData} type="bar" title="Driver Comparison" />
      )}
    </div>
  );
};

export default ComparisonPage;
