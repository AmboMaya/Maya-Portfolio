import React, { Component } from 'react';
import IntroPage from './IntroPage';
import SocialMediaIcons from './SocialMediaIcons';


class MainPage extends Component {

    render () {
        return (
                <div className='introPageContainer'>
                    <IntroPage />
                    <SocialMediaIcons />
                </div>
        )
    }
}

export default MainPage;