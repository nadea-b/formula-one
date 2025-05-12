import React from 'react';
import DriverList from '../components/drivers/DriverList';

const DriversPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Drivers</h1>
      <DriverList />
    </div>
  );
};

export default DriversPage;
