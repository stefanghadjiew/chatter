import React from 'react';
import classes from './styles.module.scss';
import { InputError } from './InputError/InputError';

export const Input = ({
    value,
    label,
    onChange,
    type = 'text',
    error,
    success,
    removeValidation,
}) => {
    return (
        <div className={classes['input-wrapper']}>
            <label className={classes['label']} htmlFor="name">
                {label}
            </label>
            <input
                placeholder={label || 'Type in here...'}
                className={[
                    !removeValidation && error && classes['input--error'],
                    !removeValidation &&
                        success &&
                        classes['input--success'],
                    classes['input'],
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
