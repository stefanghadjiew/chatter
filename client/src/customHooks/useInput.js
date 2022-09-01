import { useState, useEffect } from 'react';
import { validateInput, isObjectValuesEmpty } from 'utils';

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = e => {
        setValue(e.target.value);
        setError(validateInput(e.target.type, e.target.value));
        if (error) {
            setSuccess(false);
        }
    };

    useEffect(() => {
        setError(false);
        setSuccess(false);
        setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        /* if (!value) {
            setError(false);
            setSuccess(false);
        } */
        if (error) {
            setSuccess(false);
        }
        if (typeof error === 'object' && isObjectValuesEmpty(error)) {
            setError(false);
            /* setSuccess(true); */
        }
        if (!error && value) {
            setSuccess(true);
        }
    }, [value, error]);

    return { value, error, success, handleChange, setValue };
};
