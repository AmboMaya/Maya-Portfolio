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
    )
  }
}

export default App
