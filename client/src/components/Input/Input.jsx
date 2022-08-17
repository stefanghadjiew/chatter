import classes from './styles.module.scss';
import { InputError } from './InputError/InputError';
import { assignClasses } from 'utils';

export const Input = ({
    value,
    label,
    placeholder,
    onChange,
    type = 'text',
    variant,
    error,
    success,
    removeValidation,
    removeLabel = false,
    componentClasses,
    componentInputClasses,
    removeBorder,
    removeOutline,
}) => {
    //create logic for removing focus-within

    const INPUT_TYPES = ['filled', 'outlined'];

    const assignVariant = INPUT_TYPES.includes(variant)
        ? classes[`input-wrapper--${variant}`]
        : classes[`input-wrapper--${INPUT_TYPES[0]}`];

    const assignErrorClasses =
        !removeValidation && error
            ? classes[
                  `input-wrapper--${
                      variant ? variant : INPUT_TYPES[0]
                  }--error`
              ]
            : '';

    const assignSuccessClasses =
        !removeValidation && success
            ? classes[
                  `input-wrapper--${
                      variant ? variant : INPUT_TYPES[0]
                  }--success`
              ]
            : '';

    const assignRemoveBorder = removeBorder
        ? classes['input-wrapper--outlined--remove-border']
        : '';
    const assignRemoveOutline = removeOutline
        ? classes['input-wrapper--filled--remove-outline']
        : '';

    return (
        <div
            className={[
                assignVariant,
                classes['input-wrapper'],
                assignErrorClasses,
                assignSuccessClasses,
                assignRemoveBorder,
                assignRemoveOutline,
                assignClasses(componentClasses),
            ].join(' ')}
        >
            <input
                placeholder={removeLabel ? placeholder : ''}
                className={[assignClasses(componentInputClasses)].join(
                    ' '
                )}
                value={value}
                onChange={onChange}
                name="name"
                type={type}
                autoComplete="off"
            />

            {!removeLabel && <label htmlFor="name">{label}</label>}
            <InputError
                error={error}
                success={success}
                removeValidation={removeValidation}
            />
        </div>
    );
};
