import { useState } from 'react';
import DriverCard from '../components/drivers/DriverCard';

const ComparePage = () => {
  const [selectedDriver1, setSelectedDriver1] = useState(null);
  const [selectedDriver2, setSelectedDriver2] = useState(null);
  
  const handleSelectDriver = (driver, index) => {
    if (index === 1) setSelectedDriver1(driver);
    if (index === 2) setSelectedDriver2(driver);
  };
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-formula">Driver Comparison</h2>
      <div className="flex flex-col sm:flex-row gap-6 mt-6">
        {/* Driver 1 Select */}
        <div className="w-full sm:w-1/2">
          <label className="text-sm font-medium">Select Driver 1</label>
          {/* Dropdown or list to choose driver */}
        </div>

        {/* Driver 2 Select */}
        <div className="w-full sm:w-1/2">
          <label className="text-sm font-medium">Select Driver 2</label>
          {/* Dropdown or list to choose driver */}
        </div>
      </div>

      {/* Display comparison stats if both drivers are selected */}
      {selectedDriver1 && selectedDriver2 && (
        <div className="grid grid-cols-2 gap-4 mt-6">
          <DriverCard driver={selectedDriver1} />
          <DriverCard driver={selectedDriver2} />
        </div>
      )}
    </div>
  );
};

export default ComparePage;
