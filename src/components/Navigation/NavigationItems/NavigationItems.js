import React from 'react'
import { Link } from 'react-router-dom'
import IntroPage from '../../Layout/IntroPage'
import Experience from '../../Experience/Experience'
import AboutMe from '../../AboutMe';
import classes from '../NavigationItems/NavigationItems.css'

const NavigationItems = () => (
    <ul className={`${classes.NavigationItems} navigationItems`}>
        <Link component={IntroPage} to={"/"}>Home</Link>     
        <Link component={Experience} to="/experience">Experience</Link>
        <Link component={AboutMe} to="/aboutme">About</Link>
        <Link component={Experience} to="/portfolio">Portfolio</Link>
    </ul> 

);

export default NavigationItems
