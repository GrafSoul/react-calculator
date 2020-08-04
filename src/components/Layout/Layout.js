import React from 'react';

import classes from './Layout.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = (props) => {
    return (
        <div className={classes.Layout}>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;
