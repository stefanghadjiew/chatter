import React from 'react';
import classes from './styles.module.scss';
import { assignClasses } from 'utils';

export const IconButton = ({ icon, onClick, componentClasses }) => {
    return (
        <button
            onClick={onClick}
            className={[
                classes['icon-button'],
                assignClasses(componentClasses),
            ].join(' ')}
        >
            {icon}
        </button>
    );
};
