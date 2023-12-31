import React from 'react';
import logoImage from '../assets/logo.png';

function Logo({ width = '100px' }) {
  return <img src={logoImage} alt="Logo" style={{ width }} />;
}

export default Logo;
