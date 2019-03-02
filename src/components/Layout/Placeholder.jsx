import React from 'react';

const Placeholder = (props) => {
  return (
    <div className='projectContainer'>
      <div className='cardContainer'>
        <img src={props.image} alt="project I've worked" />
        <p>{props.description}</p>
      </div>
    </div>
    );
}

export default Placeholder;
