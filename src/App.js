import React, { Component } from 'react'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience/Experience'
import Project from './components/Projects'
import Footer from './components/Navigation/Footer';
import MainPage from './components/Layout/MainPage';
import Toolbar from '../src/components/Navigation/Toolbar/Toolbar';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';


class App extends Component {
	state = {
	showSideDrawer: false
	}

	sideDrawerClosedHandler = () => {
		this.setState( { showSideDrawer: false } );
	}

	sideDrawerToggleHandler = () => {
		this.setState( ( prevState ) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		} );
	}

	render () {
		return (
			<div className='app'>
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler} />
				<MainPage />
				<AboutMe />
				<Project />
				<Experience />
				<Footer />
			</div>
		)
	}
}

export default App
