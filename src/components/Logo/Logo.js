import React from 'react';

import logo from '../../assets/logo.png';
import classes from './Logo.module.css';

const Logo = () => (
    <div>
        <img src={logo} className={classes.Logo} alt="logo" />
    </div>
);

export default Logo;
