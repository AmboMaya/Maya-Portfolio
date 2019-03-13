import React from 'react'
import NavigationItems from './NavigationItems/NavigationItems'
import SocialMediaIcons from '../Layout/SocialMediaIcons'

const Footer = () => (
	<div className='footerContainer'>
		{/* <h2 className='actionParagraph'>I would love to work with you. <br/> Please get in touch.</h2> */}
    	<NavigationItems />
    	<SocialMediaIcons />
		<p style={{fontSize: 10, 	paddingTop: 10, opacity: 0.3}}>&copy; 2019 AmboMaya. All Rights Reserved.</p>
  	</div>  
)

export default Footer