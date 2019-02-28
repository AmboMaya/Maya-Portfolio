import React from 'react'
import classes from './SocialMediaIcons.css'

const SocialMediaIcons = () => (
  <div className={`${classes.SocialMediaIcons} socialIcons`}>
    <span>
      <a href="https://github.com/AmboMaya"><i className="fab fa-github-alt fa-2x"></i></a>
    </span>
    <span>
      <a href="https://www.linkedin.com/in/maya-ningsih-b4393992/"><i className="fab fa-linkedin fa-2x"></i></a>
    </span>
    <span>
      <a href="https://twitter.com/ambomaya"><i className="fab fa-twitter fa-2x"></i></a>
    </span>
    <span>
      <a href="https://www.youtube.com/channel/UCmx0MFtcHnNiyY4B8rnNpQw/featured?view_as=subscriber"><i className="fab fa-youtube fa-2x"></i></a>
    </span>
  </div>
)

export default SocialMediaIcons
