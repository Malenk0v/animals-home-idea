import React from 'react';

const Logo = ({ size, icon, alt }) => {
  return <img className="logo" src={icon} alt={alt} />;
};

export default Logo;
