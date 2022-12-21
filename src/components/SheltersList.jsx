import React from 'react';
import { homesInfo } from '../utils/homesInfo';

const SheltersList = () => {
  return (
    <div className="animals-home-list">
      <ol>
        {homesInfo.map((home) => (
          <li>
            <p>
              {home.name}
              <button>show</button>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SheltersList;
