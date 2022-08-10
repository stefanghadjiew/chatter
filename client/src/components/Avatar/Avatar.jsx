import React from 'react';
import classes from './styles.module.scss';
import { assignClasses } from 'utils';

export const Avatar = ({
    imgSrc,
    alt = 'some avatar image',
    componentClasses,
}) => {
    return (
        <figure
            className={[
                assignClasses(componentClasses),
                classes['avatar'],
            ].join(' ')}
        >
            <img src={imgSrc} alt={alt} />
        </figure>
    );
};
