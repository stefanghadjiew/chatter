import React from 'react';
import classes from './styles.module.scss';

export const Avatar = ({ imgSrc, alt = 'some avatar image' }) => {
    return (
        <figure className={classes['avatar']}>
            <img src={imgSrc} alt={alt} />
        </figure>
    );
};
