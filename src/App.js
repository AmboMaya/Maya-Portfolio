import React, { Component } from 'react'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience/Experience'
import Project from './components/Projects'
import Footer from './components/Navigation/Footer/Footer';
import IntroPage from './components/Layout/IntroPage/IntroPage';
import Toolbar from './components/Navigation/Toolbar/Toolbar';

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Toolbar />   
        <IntroPage />
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
