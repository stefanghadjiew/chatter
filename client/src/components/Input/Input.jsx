import classes from './styles.module.scss';
import { InputError } from './InputError/InputError';
import { assignClasses } from 'utils';

export const Input = ({
    value,
    label,
    placeholder,
    onChange,
    type = 'text',
    variant = 'filled',
    error,
    success,
    removeValidation,
    removeLabel = false,
    componentClasses,
    componentInputClasses,
    onKeyDown,
    removeBorder,
    removeOutline,
}) => {
    //create logic for removing focus-within

    const INPUT_VARIANTS = ['filled', 'outlined'];

    const assignVariant = INPUT_VARIANTS.includes(variant)
        ? classes[`input-wrapper--${variant}`]
        : classes[`input-wrapper--${INPUT_VARIANTS[0]}`];

    const assignErrorClasses =
        !removeValidation && error
            ? classes[
                  `input-wrapper--${
                      variant ? variant : INPUT_VARIANTS[0]
                  }--error`
              ]
            : '';

    const assignSuccessClasses =
        !removeValidation && success
            ? classes[
                  `input-wrapper--${
                      variant ? variant : INPUT_VARIANTS[0]
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
                classes['input-wrapper'],
                assignVariant,
                assignErrorClasses,
                assignSuccessClasses,
                assignRemoveBorder,
                assignRemoveOutline,
                assignClasses(componentClasses),
            ].join(' ')}
        >
            <input
                className={[assignClasses(componentInputClasses)].join(
                    ' '
                )}
                placeholder={removeLabel ? placeholder : ' '}
                value={value}
                onChange={onChange}
                name="name"
                type={type}
                autoComplete="off"
                onKeyDown={onKeyDown}
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
