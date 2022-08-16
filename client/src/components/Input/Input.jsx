import React from 'react';
import classes from './styles.module.scss';
import { InputError } from './InputError/InputError';
import { assignClasses } from 'utils';

export const Input = ({
    value,
    label,
    onChange,
    type = 'text',
    error,
    success,
    removeValidation,
    removeLabel = false,
    componentClasses,
    componentInputClasses,
    removeHoverEffect = false,
}) => {
    return (
        <div
            className={[
                classes['input-wrapper'],
                assignClasses(componentClasses),
            ].join(' ')}
        >
            {!removeLabel && (
                <label className={classes['label']} htmlFor="name">
                    {label}
                </label>
            )}
            <input
                placeholder={label || 'Type in here...'}
                className={[
                    !removeValidation && error && classes['input--error'],
                    !removeValidation &&
                        success &&
                        classes['input--success'],
                    classes['input'],
                    !removeHoverEffect && classes['input--hover'],
                    assignClasses(componentInputClasses),
                ].join(' ')}
                value={value}
                onChange={onChange}
                name="name"
                type={type}
                autoComplete="off"
            />
            <InputError
                error={error}
                success={success}
                removeValidation={removeValidation}
            />
        </div>
    );
};
