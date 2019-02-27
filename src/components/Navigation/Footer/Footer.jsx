import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Footer.css'
import SocialMediaIcons from '../../Layout/SocialMediaIcons/SocialMediaIcons';

const Footer = (footer) => (
  <React.Fragment>
    <NavigationItems className={classes.Footer}/>
    <SocialMediaIcons />
  </React.Fragment>
)

export default Footer