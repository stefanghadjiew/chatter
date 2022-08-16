import React from 'react';
import classes from './styles.module.scss';
import { assignClasses } from 'utils';

export const Avatar = ({
    imgSrc,
    alt = 'some avatar image',
    componentClasses,
    size,
}) => {
    const AVATAR_SIZES = ['small', 'medium', 'large'];

    const assignSize = AVATAR_SIZES.includes(size)
        ? classes[`avatar--${size}`]
        : classes[`avatar--${AVATAR_SIZES[2]}`];

    return (
        <figure
            className={[
                assignClasses(componentClasses),
                classes['avatar'],
                assignSize,
            ].join(' ')}
        >
            <img src={imgSrc} alt={alt} />
        </figure>
    );
};
