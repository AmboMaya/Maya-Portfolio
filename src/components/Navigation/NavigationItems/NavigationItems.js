import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavigationItems.css'
import LandingPage from '../../Layout/LandingPage/LandingPage'
import Experience from '../../Experience/Experience'
import AboutMe from '../../AboutMe/AboutMe';

const NavigationItems = () => (
    <ul className={`${classes.NavigationItems} navFooter`}>
        <Link component={LandingPage} to={"/"}>Home</Link>     
        <Link component={Experience} to="/experience">Experience</Link>
        <Link component={AboutMe} to="/aboutme">About Me</Link>
        <Link component={Experience} to="/portfolio">Portfolio</Link>
    </ul>
);

export default NavigationItems
