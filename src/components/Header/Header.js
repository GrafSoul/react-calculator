import React from 'react';

import classes from './Header.module.css';
import Logo from '../Logo/Logo';

const Header = () => (
    <header className={classes.Header}>
        <Logo />
        <h5>CALCULATOR</h5>
    </header>
);

export default Header;
