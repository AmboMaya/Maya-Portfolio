import React, { Component } from 'react';

// import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import LandingPage from './LandingPage/LandingPage';

class Layout extends Component {

    render () {
        return (
            <React.Fragment>
                <Toolbar/>
                <LandingPage />
            </React.Fragment>
        )
    }
}

export default Layout;