import React from 'react'
import { Element } from 'react-scroll'

const IntroPage = () => {

  return (
    <div className='introLine'>
      <Element name='target1'>
        <h1>Nice to meet you</h1>              
      </Element>      
      <p>I'm a junior software dev who’s recently made the switch from a non-technical career. I love building digital products and learning cool stuff about technology. </p>
      <img className='profileImg' src='/images/mayaProfileImg.jpg' alt='Get to know me' />
    </div>
  )
}

export default IntroPage