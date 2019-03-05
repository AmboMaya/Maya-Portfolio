import React from 'react'
import classes from './DrawerToggle.css'

const drawerToggle = (props) => (
    <div className={`${classes.DrawerToggle} drawerToggle`} onClick={props.clicked}>
        <i className="fas fa-bars fa-2x"></i>
    </div>
)

export default drawerToggle;