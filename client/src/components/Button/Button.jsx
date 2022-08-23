import React from 'react';
import classes from './styles.module.scss';
import { assignClasses } from 'utils';

export const Button = ({
    text,
    color,
    size,
    onClick,
    loading = false,
    componentClasses,
    variant = 'filled',
}) => {
    const BUTTON_COLORS = [
        'primary',
        'warning',
        'danger',
        'success',
        'dark-primary',
    ];

    const BUTTON_SIZES = ['small', 'medium', 'large'];

    const BUTTON_VARIANTS = ['filled', 'outlined'];

    const assignButtonSizes = BUTTON_SIZES.includes(size)
        ? classes[`button--${size}`]
        : classes[`button--${BUTTON_SIZES[1]}`];

    const assignButtonColors = BUTTON_COLORS.includes(color)
        ? classes[`button--${color}`]
        : classes[`button--${BUTTON_COLORS[0]}`];

    const assignButtonVariants = BUTTON_VARIANTS.includes(variant)
        ? classes[`button--${variant}`]
        : classes[`button--${BUTTON_VARIANTS[0]}`];

    return (
        <div className={classes['button-wrapper']}>
            <button
                className={[
                    assignClasses(componentClasses),
                    classes['button'],
                    assignButtonSizes,
                    assignButtonColors,
                    assignButtonVariants,
                ].join(' ')}
                onClick={onClick}
            >
                {text} {/* {!loading && 'Hello'} */}
            </button>
        </div>
    );
};
