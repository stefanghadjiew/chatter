import React from 'react';
import sharedClasses from '../../sassStyles/_shared.module.scss';
import { assignClasses } from 'utils';

export const FlexContainer = ({
    children,
    flexColumn = false,
    centered = false,
    componentClasses,
    justifyContentEnd = false,
}) => {
    const assignFlexColumn = flexColumn ? sharedClasses['flex-col'] : '';
    const assignCentered = centered ? sharedClasses['flex-center'] : '';
    const assignJustifyContent = justifyContentEnd
        ? sharedClasses['flex-end']
        : '';

    return (
        <div
            className={[
                assignClasses(componentClasses),
                sharedClasses['flex'],
                assignFlexColumn,
                assignCentered,
                assignJustifyContent,
            ].join(' ')}
        >
            {children}
        </div>
    );
};
