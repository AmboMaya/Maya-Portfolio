import React from 'react'

const Placeholder = (props) => {
	return (
		<div className='projectContainer'>
			<div className="cardContainer overlay-bg">
				<div className="normal">
					<h3>{props.title}</h3>
					<img src={props.image} alt="project I've worked" />
					<p>{props.description}</p>
				</div>
				<div className="hover">
					<div className="text">
						<a href={props.url}>See more</a>
					</div>
				</div>
			</div>  
		</div>
	)
}

export default Placeholder
