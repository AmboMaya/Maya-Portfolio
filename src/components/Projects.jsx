import React from 'react'
import Placeholder from './Layout/Placeholder'
import { Element } from 'react-scroll'

const projects = [
	{
		title: 'Fuelio',
		url:'https://github.com/AmboMaya/FueLio',
		image: '/images/fuelio.png',
		projectDescription: "This is a personal project during EDA, inspired by spiking cost of fuel around Auckland."
	},
	{
		title: 'Mood',
		url: 'https://kowhai-fp.herokuapp.com/',
		image: '/images/mood2.png',
		projectDescription: "Mood records one's daily emotional state and reflect it in graphical data. This is a final team project at EDA."
	},
	{
		title: 'Nightlife',
		url: 'https://ambomaya.github.io/Art-Project-City-At-Night/js-art-project.html',
		image: '/images/artProject.png',
		projectDescription: "A simple art project to demonstrate my practical vanilla JS and CSS animation skills."
	},
	{
		title: 'Weather',
		url: 'https://github.com/AmboMaya/weather-app-prototype',
		image: '/images/weather.jpg',
		projectDescription: "This is personal project for a weather app prototype and is written in typescript using react framework."
	},
	{
		title: 'ambomaya.com',
		url: 'http://ambomaya.com/',
		image: '/images/ambomaya.jpg',
		projectDescription: "This portfolio is built with react.js and hosted in AWS services. I designed the site and followed"
	}
]

const Projects = () => {
	return (
		<React.Fragment>
			<div className='projects'>
				<div className='projectHeadline'>
					<Element name='target4'><h1>Projects I've worked on</h1></Element>
				</div>
				<div className='projectsContainer'>
					{projects.map(project => (
						<Placeholder key={project.title} title={project.title} image={project.image} description={project.projectDescription} url={project.url}/>
					))}
				</div>
			</div>
		</React.Fragment>
	)
}

export default Projects