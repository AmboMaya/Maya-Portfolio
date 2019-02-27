import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classes from './Experience.css'

const styles = theme => ({
  root: {
    flexGrow: 3,
  }
});

const Experience = (props) => {
  return (
    <React.Fragment>
      <Grid container spacing={24} className={classes.Experience}>
        <Grid item xs>
          <h1>Technologies</h1>
        </Grid>
        <Grid item xs>
          <p className={classes.headline}>Day-to-Day Comfort</p>
          <ul className={classes.list}>
            <li>HTML5 / CSS3</li>
            <li>JavaScript / jQuery</li>
            <li>Version Control ( GIT )</li>
            <li>Responsive Layout and Design</li>
            <li>Mobile First Thinking</li>
            <li>Cross-Browser Compatibility</li>
          </ul>
        </Grid>
        <Grid item xs> 
          <p className={classes.headline}>Experience With</p> 
          <ul className={classes.list}>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Sqlite3 Database</li>
            <li>Firebase Database</li>
            <li>Express</li>
          </ul>
        </Grid>
      </Grid>
      
      <Grid container spacing={24} className={classes.Experience}>
        <Grid item xs={4}>
          <h1>Work Experience</h1>
        </Grid>
        <Grid item xs={8}> 
          <p className={classes.headline}>Sales and Business Operations/admin at Sky Television, Auckland, May 2017 – May 2018</p>
          <p> I was looking after our national Sky Music B2B customers. I prepared contract for corporate customers, revenue reports and processed account invoices. 
            Effectively communicated technical terminologies to non-technical audience (customers) during cable TV and music installation. Sky Business also offers music product to its commercial customers and I advise customers around music royalty and copy rights.
          </p>
          <br />
          <p className={classes.headline}>Marketing Internship at Optimal Workshop, Wellington, Sept – Nov 2015</p>
          <p>Assisting the marketing manager with the planning of a training partners acquisition campaign. This includes researching for potential partners in NZ and overseas markets, distributing email marketing to potential training partners via LinkedIn.</p>
          <br/>
          <p className={classes.headline}>Junior Web Developer/Designer – VRX Systems Ltd, Wellington, Mar 2015 – July 2015</p>
          <p>As an entry-level front end web developer, I worked closely with the lead developer to create a web service for an auto parts wholesaler based in Australia.
              The focus of this role is to transform the design for the site given by the graphic designer into an active website.  Created a responsive website layouts using frameworks Bootstrap.
          </p> 
          <br/> 
          <p className={classes.headline}> Interim Business Coordinator – Damwatch Engineering Ltd, Wellington 	Nov 2014 – Mar 2015</p>
          <p>Provided timely management and Board report information and analysis, revenue stream and forecasting information. I worked as well as working closely with the engineers, tracking budgets and gathering data to develop reports on current projects.</p>
        </Grid>
      </Grid>
      <Grid container spacing={24} className={classes.Experience}>
        <Grid item xs={4}>
          <h1>Education</h1>
        </Grid>
        <Grid item xs={8}>
          <p className={classes.headline}>Ensipral Dev Academy, Auckland, October - December 2018</p>
          <p>This is web development bootcamp with intense learning to become a full-stack web developer. I completed between 800 - 1000hours coding on multiple projects in a team environment.</p>
          <br/>
          <p className={classes.headline}>Bachelor of Commerce (Marketing & Information Systems)</p>
          <p>Victoria University of Wellington, 2011 – 2014</p>
          <br/>
          <p className={classes.headline}>Diploma in Business Management & Marketing</p>
          <p>Wellington Institute of Technology, 2009 – 2011</p>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Experience)