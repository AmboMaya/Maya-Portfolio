import React from 'react';
import Placeholder from '../Layout/Placeholder/Placeholder';
import classes from "./Projects.css"

const projects = [
  {
    title: 'Fuelio',
    image: '/images/fuelio.png',
    projectDescription: "This is a personal project during EDA, inspired by spiking cost of fuel around Auckland."
  },
  {
    title: 'Mood',
    image: '/images/mood2.png',
    projectDescription: "Mood records one's daily emotional state and reflect it in graphical data. This is a final team project at EDA."
  },
  {
    title: 'Nightlife',
    image: '/images/artProject.png',
    projectDescription: "A simple art project to demonstrate my practical vanilla JS and CSS animation skills."
  }
]

const Projects = (props) => {
  return (
    <React.Fragment>
      <div className={classes.Projects}>
        {projects.map(project => (
          <Placeholder key={project.title} title={project.title} image={project.image} description={project.projectDescription}/>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Projects