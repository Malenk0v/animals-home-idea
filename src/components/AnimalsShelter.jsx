import React from 'react';
import Map from './Map';
import ShelterContent from './ShelterContent';
import SheltersList from './SheltersList';
const AnimalsHome = () => {
  return (
    <div className="container">
      <h1>Shelters</h1>
      <div className="animals-home-container">
        <SheltersList />
        <Map />
      </div>
      <ShelterContent />
    </div>
  );
};

export default AnimalsHome;
