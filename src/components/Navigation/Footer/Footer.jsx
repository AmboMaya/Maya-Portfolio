import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Footer.css'
import SocialMediaIcons from '../../Layout/SocialMediaIcons/SocialMediaIcons';

const Footer = (footer) => (
  <React.Fragment>
    <div className={`${classes.Footer} footer`}>
      <div style={{padding: '70px 0 70px 0'}}>
        <h2>I would love to work with you. Please get in touch.</h2>
      </div>
      <NavigationItems />
      <SocialMediaIcons />
    </div>  
  </React.Fragment>
)

export default Footer