import React from 'react';
import classes from './styles.module.scss';

export const IconButton = ({ icon, onClick }) => {
    return (
        <button onClick={onClick} className={classes['icon-button']}>
            {icon}
        </button>
    );
};
