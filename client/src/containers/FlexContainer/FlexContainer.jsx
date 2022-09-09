import React, { forwardRef } from 'react';
import utilityClasses from '../../sassStyles/_utility.module.scss';
import { assignClasses } from 'utils';

export const FlexContainer = forwardRef((props, ref) => {
    const {
        id,
        children,
        componentClasses,
        justifyContent,
        alignItems,
        flexDirection,
        centered,
        onClick,
        style,
    } = props;
    const CONTAINER_CLASSES = {
        justifyContent: [
            'start',
            'end',
            'flex-start',
            'flex-end',
            'center',
            'space-around',
            'space-between',
            'space-evenly',
        ],
        alignItems: ['flex-start', 'flex-end', 'center'],
        flexDirection: ['column', 'column-reverse', 'row-reverse'],
        centered: ['flex-center'],
    };

    const assignJustifyContent = CONTAINER_CLASSES.justifyContent.includes(
        justifyContent
    )
        ? utilityClasses[`flex-justify-${justifyContent}`]
        : '';
    const assignAlignItems = CONTAINER_CLASSES.alignItems.includes(alignItems)
        ? utilityClasses[`flex-align-${alignItems}`]
        : '';
    const assignFlexDirection = CONTAINER_CLASSES.flexDirection.includes(
        flexDirection
    )
        ? utilityClasses[`flex-${flexDirection}`]
        : '';
    const assignCentered = CONTAINER_CLASSES.centered.includes(centered)
        ? utilityClasses[`flex-align-${centered}`]
        : '';

    return (
        <div
            id={id}
            ref={ref}
            onClick={onClick}
            style={style}
            className={[
                assignClasses(componentClasses),
                utilityClasses['flex'],
                assignFlexDirection,
                assignAlignItems,
                /* assignFlexColumn, */
                assignCentered,
                assignJustifyContent,
            ].join(' ')}
        >
            {children}
        </div>
    );
});
