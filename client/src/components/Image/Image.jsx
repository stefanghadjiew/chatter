import React from 'react';
import classes from './styles.module.scss';
import { assignClasses } from 'utils';

export const Image = ({
    src,
    alt = 'some image description',
    componentClasses,
}) => {
    return (
        <figure
            className={[
                assignClasses(componentClasses),
                classes['image-container'],
            ].join(' ')}
        >
            <img src={src} alt={alt} />
        </figure>
    );
};
