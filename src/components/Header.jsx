import React from 'react';
import logo from '../icons/logoDogCat.svg';
import Logo from './Logo';
import Navbar from './Navbar';
import Translate from './Translate';
import iconTranslate from '../icons/iconsWorlsTranslate.svg';
import { pageInfo } from '../utils/pageInfo';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Logo icon={logo} alt="logo Animals Home" />
        <Navbar items={pageInfo} />
        <Translate icon={iconTranslate} />
      </div>
    </div>
  );
};

export default Header;
