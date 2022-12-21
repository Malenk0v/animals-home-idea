import React from 'react';
import { useDispatch } from 'react-redux';
import pichtureDogAndMan from '../icons/dogAndMan.png';
import { changePage } from '../reducers/pageReducer';
import AnimalsHome from './AnimalsShelter';

const AboutProject = () => {
  const dispatch = useDispatch();
  return (
    <div className="about-animals-home">
      <img
        className="img-about-animals-home"
        src={pichtureDogAndMan}
        alt="Dog and man"
      />
      <div className="content-about-animals-home">
        <h2>About Projects</h2>
        <p>
          Nulla molestie, est et egestas fermentum, diam leo tempus augue, sit
          amet consequat nisl velit vel sapien. Curabitur pulvinar tincidunt
          turpis id vehicula. Curabitur ullamcorper sapien lacus, eu suscipit
          sapien interdum id. Donec luctus risus sit amet risus convallis
          elementum. Duis facilisis euismod egestas. Sed bibendum sapien quis
          varius congue. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae;
          <br />
          <br /> Nullam ut scelerisque ante. Nulla venenatis pellentesque
          fringilla. Mauris dui dolor, scelerisque in cursus in, rutrum nec
          massa. Donec vel molestie turpis. Curabitur sagittis erat non interdum
          ultricies. Fusce in eros maximus ipsum pellentesque euismod ut vel
          urna. Fusce volutpat, mi sed vestibulum cursus, est felis ultrices
          ante, id sodales mi sem quis nisl. Donec ligula tellus, cursus a
          dapibus et, accumsan nec felis. Nulla in mattis ex. Nunc commodo sem
          quis massa vehicula, varius lacinia velit pretium. Nunc efficitur
          magna at ullamcorper fermentum.
        </p>
        <button
          onClick={() => dispatch(changePage(<AnimalsHome />))}
          className="btn-about"
        >
          view shelters
        </button>
      </div>
    </div>
  );
};

export default AboutProject;
