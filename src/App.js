import React, { Component } from 'react'
import classes from './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Experience from './components/Experience/Experience'
import Project from './components/Projects/Projects'
import Footer from './components/Navigation/Footer/Footer';
import LandingPage from './components/Layout/LandingPage/LandingPage';
import Toolbar from './components/Navigation/Toolbar/Toolbar';

class App extends Component {
  render () {
    return (
      <div className={classes.App}>
        <Toolbar />   
        <LandingPage />
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
