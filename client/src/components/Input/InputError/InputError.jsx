import React, { Fragment } from 'react';
import classes from './styles.module.scss';
import {
    AiOutlineExclamationCircle,
    AiOutlineCheckCircle,
    AiFillLock,
    AiOutlineClose,
} from 'react-icons/ai';
import { Svg } from 'components';

export const InputError = ({ error, success, removeValidation }) => {
    if (removeValidation) return null;

    return (
        <Fragment>
            {error && typeof error === 'string' && (
                <p
                    className={[
                        classes['helper-text'],
                        classes['helper-text--error'],
                    ].join(' ')}
                >
                    <Svg
                        componentClasses={classes['svg']}
                        icon={<AiOutlineExclamationCircle />}
                        type="error"
                    />
                    {error}
                </p>
            )}
            {error && typeof error === 'object' && (
                /* Object.values(error).filter(item => item).length !== 0 */ <div
                    className={[
                        classes['helper-text-password'],
                        classes['helper-text-password--error'],
                    ].join(' ')}
                >
                    <p>
                        <Svg icon={<AiFillLock />} type="error" /> Your
                        password needs to:
                    </p>
                    {error.characters && (
                        <p>
                            <AiOutlineClose /> {error.characters}
                        </p>
                    )}

                    {error.symbols && (
                        <p>
                            <AiOutlineClose /> {error.symbols}
                        </p>
                    )}
                    {error.length && (
                        <p>
                            <AiOutlineClose /> {error.length}
                        </p>
                    )}
                </div>
            )}
            {success && (
                <p
                    className={[
                        classes['helper-text'],
                        classes['helper-text--success'],
                    ].join(' ')}
                >
                    <Svg icon={<AiOutlineCheckCircle />} type="success" />
                </p>
            )}
        </Fragment>
    );
};
