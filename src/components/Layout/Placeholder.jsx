import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    maxWidth: 345,
    height: 320,
    marginLeft: 35,
    borderRadius: 4,
  },
  media: {
    height: 163,
    marginTop: -25
  },
  content: {
    textAlign: "left",
    padding: 0,
    marginTop: 10,
    marginBottom: -20

  },
  action: {
    padding: 0,
    height: 320,
    borderRadius: 4,

  }
};

const Placeholder = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
        <Card className={classes.card} >
          <CardActionArea className={classes.action} 
              style={{border: '1px solid white', backgroundColor:'white'}}>
            <CardMedia
              className={classes.media}
              image={props.image}
              title={props.title}
            />
            <CardContent className={classes.content}>
              <Typography component="p">
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </React.Fragment>
    );
}

Placeholder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Placeholder);
