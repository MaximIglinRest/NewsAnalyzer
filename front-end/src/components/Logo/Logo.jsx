import React from 'react';
import './Logo.css';
import Img from './BackgroundEraser_20220409_131740048.png';

const Logo = () => {
  return (
    <div className='Logo'>
      <img src={Img} alt='Logo'/>
    </div>
  );
};

export default Logo;