import React from 'react'
import NavigationItems from './NavigationItems/NavigationItems'
import SocialMediaIcons from '../Layout/SocialMediaIcons'

const Footer = () => (
  <div className='footerContainer'>
		<div className='actionParagraph'>
    		<h2>I would love to work with you. Please get in touch.</h2>
    	</div>
    	<NavigationItems />
    	<SocialMediaIcons />
		<p style={{paddingTop: 10, opacity: 0.3}}>&copy; 2019 AmboMaya. All Rights Reserved.</p>
  </div>  
)

export default Footer