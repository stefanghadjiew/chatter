import React from 'react';
import classes from './styles.module.scss';
import { assignClasses } from 'utils';

export const H1 = ({ text, componentClasses }) => {
    return (
        <h1 className={[assignClasses(componentClasses)].join(' ')}>
            {text}
        </h1>
    );
};

export const H2 = ({ text, componentClasses }) => {
    return (
        <h2
            className={[
                assignClasses(componentClasses),
                classes['h2'],
            ].join(' ')}
        >
            {text}
        </h2>
    );
};

export const Paragraph = ({ text, componentClasses }) => {
    return (
        <p className={[assignClasses(componentClasses)].join(' ')}>
            {text}
        </p>
    );
};
