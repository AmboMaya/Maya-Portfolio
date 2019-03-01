import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import IntroPage from './IntroPage';
import SocialMediaIcons from './SocialMediaIcons';


class MainPage extends Component {

    render () {
        return (
                <div className='introPageContainer'>
                    <Toolbar/>
                    <IntroPage />
                    <SocialMediaIcons />
                </div>
        )
    }
}

export default MainPage;