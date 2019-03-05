import React, { Component } from 'react'

import classes from './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

export default class Toolbar extends Component {
   
    render() {
        return (
        <header className={`${classes.Toolbar} toolbar`}>
            <div className={classes.hamburgerMenu}>
                <DrawerToggle clicked={this.props.drawerToggleClicked} />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
        )
    }
}