import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 3,
    border: '1px solid white'
  }
});

const Content = (props) => {
  return (
    <Grid container spacing={24} className='content'>
      <Grid item xs={3} />
        <Grid item xs={6}>
          {props.children}
        </Grid>
      <Grid item xs={3} />
    </Grid>
  )
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Content)