import React from 'react'
import classes from './LandingPage.css'
import Content from '../Content/content'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

const LandingPage = (props) => {

  return (
    <React.Fragment>
      <div className={classes.LandingPage}>
        <Content>
          <h1>Nice to meet you</h1>
          <p>I'm a junior software dev who’s recently made the switch from a non-technical career. I love building digital products and creating intuitive websites.</p>
          <SocialMediaIcons />
        </Content>      
      </div>
    </React.Fragment>
  )
}

export default LandingPage