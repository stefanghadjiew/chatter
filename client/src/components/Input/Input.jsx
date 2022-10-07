import classes from './styles.module.scss';
import { InputError } from './InputError/InputError';
import { assignClasses } from 'utils';
import { useInput } from 'customHooks';

export const Input = ({
    initialValue,
    label,
    placeholder,
    type = 'text',
    variant = 'filled',
    removeValidation,
    componentClasses,
    componentInputClasses,
    onKeyDown,
    removeOutline,
}) => {
    //create logic for removing focus-within

    const { value, error, success, handleChange } = useInput(initialValue);

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
                assignRemoveOutline,
                assignClasses(componentClasses),
            ].join(' ')}
        >
            <input
                className={[assignClasses(componentInputClasses)].join(' ')}
                placeholder={!label ? placeholder : ' '}
                value={value}
                onChange={handleChange}
                name="name"
                type={type}
                autoComplete="off"
                onKeyDown={onKeyDown}
            />

            {label && <label htmlFor="name">{label}</label>}
            <InputError
                error={error}
                success={success}
                removeValidation={removeValidation}
            />
        </div>
    );
};
