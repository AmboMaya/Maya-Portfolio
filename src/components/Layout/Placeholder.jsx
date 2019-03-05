import React from 'react'

const Placeholder = (props) => {
	return (
		<div className='projectContainer'>
			<div className='cardContainer'>
				<a href={props.url}>
					<h3>{props.title}</h3>
					<img src={props.image} alt="project I've worked" />
					<p>{props.description}</p>
				</a>
			</div>  
		</div>
	)
}

export default Placeholder
