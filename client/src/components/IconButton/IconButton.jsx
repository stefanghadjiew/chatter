import React from 'react';
import classes from './styles.module.scss';

export const IconButton = ({ icon }) => {
    return <button className={classes['icon-button']}>{icon}</button>;
};
