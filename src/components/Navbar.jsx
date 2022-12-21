import React from 'react';
import { useDispatch } from 'react-redux';
import { changePage } from '../reducers/pageReducer';

const Navbar = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <div className="nav-bar">
      <ul className="nav-items">
        {items.map((item) => (
          <li
            onClick={() => dispatch(changePage(item.page))}
            className="nav-item"
            key={item.title}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
