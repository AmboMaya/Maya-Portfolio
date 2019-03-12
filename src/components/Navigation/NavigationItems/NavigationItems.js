import React from 'react'
import { Link } from 'react-scroll'
import classes from '../NavigationItems/NavigationItems.css'

const NavigationItems = (props) => (
    <ul className={`${classes.NavigationItems} navigationItems sideDrawerNav`}>
        <Link to='target1' smooth={true} duration={700} offset={-200}>Home</Link>
        <Link to='target2' smooth={true} duration={700} offset={0}>Experience</Link>
        <Link to='target3' smooth={true} duration={700} offset={-280}>About</Link>
        <Link to='target4' smooth={true} duration={700} offset={-10}>Portfolio</Link>
    </ul>
)

export default NavigationItems
