import React from 'react';
import dog from '../icons/walkDog.png';

const ShelterContent = () => {
  return (
    <div className="about-animals-home">
      <img className="img-about-animals-home" src={dog} alt="man and dog" />
      <div className="content-about-animals-home">
        <h2>Discription</h2>
        <p>
          Nulla molestie, est et egestas fermentum, diam leo tempus augue, sit
          amet consequat nisl velit vel sapien. Curabitur pulvinar tincidunt
          turpis id vehicula. Curabitur ullamcorper sapien lacus, eu suscipit
          sapien interdum id. Donec luctus risus sit amet risus convallis
          elementum. Duis facilisis euismod egestas. Sed bibendum sapien quis
          varius congue. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae;
        </p>
      </div>
    </div>
  );
};

export default ShelterContent;
