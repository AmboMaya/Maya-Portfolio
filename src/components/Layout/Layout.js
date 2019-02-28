import React, { Component } from 'react';

// import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import IntroPage from './IntroPage/IntroPage';

class Layout extends Component {

    render () {
        return (
            <React.Fragment>
                <Toolbar/>
                <IntroPage />
            </React.Fragment>
        )
    }
}

export default Layout;