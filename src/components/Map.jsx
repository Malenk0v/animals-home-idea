import React from 'react';
import { homesInfo, defaultCoordTelAviv } from '../utils/homesInfo';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Map = () => {
  const positionCenter = defaultCoordTelAviv;
  return (
    <div className="map-container">
      <MapContainer
        className="map"
        center={positionCenter}
        zoom={9}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {homesInfo.map((home) => (
          <Marker position={home.coordinates}>
            <Popup>
              <h3>
                {home.name}
                <a href={home.googleMaps} target="blank">
                  google maps
                </a>
              </h3>
              <button>show</button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
