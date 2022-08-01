import React from 'react';
import classes from './styles.module.scss';
import { assignClasses } from 'utils';

export const Svg = ({ icon, type, componentClasses }) => {
    const TYPES = ['error', 'success', 'warning', 'info'];

    const assignClassesBasedOnState = TYPES.includes(type)
        ? classes[type]
        : classes['info'];

    return (
        <div
            className={[
                classes['svg-wrapper'],
                assignClassesBasedOnState,
                assignClasses(componentClasses),
            ].join(' ')}
        >
            {icon}
        </div>
    );
};
