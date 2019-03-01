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
      //when use code below only some components render to the page
      // <Router>
      // <div className={classes.App}>
      //     <Route path='/' component={Layout} />
      //     <Route path='#/aboutme' component={AboutMe} />
      //     <Route path='#/projects' component={Project} />
      //     <Route path='#/experience' component={Experience} />
      //   <Footer />
      // </div>
      // </Router>
    )
  }
}

export default App
