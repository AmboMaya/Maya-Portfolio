import React from 'react';

import classes from './NavigationItem.css';

const navigationItem = ( props ) => (
    <li className={classes.NavigationItem}>
        <a 
            href={props.link} 
            className={props.deactive ? classes.deactive : null}>{props.children}</a>
    </li>
);

export default navigationItem;