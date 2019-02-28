import React from 'react'
import Content from '../Content/content'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

const IntroPage = () => {

  return (
    <React.Fragment>
      <div className='introPage'>
        <Content>
          <h1>Nice to meet you</h1>
          <p>I'm a junior software dev who’s recently made the switch from a non-technical career. I love building digital products and learning cool stuff about technology. </p>
          <SocialMediaIcons />
        </Content>      
      </div>
    </React.Fragment>
  )
}

export default IntroPage