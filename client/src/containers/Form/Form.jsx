import React from 'react';
import classes from './styles.module.scss';
import { useLocation } from 'react-router-dom';
import { siteMap } from 'Router';
import { terms } from 'staticResources';
import { assignClasses } from 'utils';
import { FramerMotionAnimation, animationTypes } from 'components';

export const Form = ({
    children,
    onSubmit,
    title,
    removeShadow,
    componentClasses,
}) => {
    const { pathname } = useLocation();
    const isSignup = pathname === siteMap.Signup.path;

    return (
        <form className={assignClasses(componentClasses)}>
            {children}
            {isSignup && (
                <FramerMotionAnimation
                    animationVariant={animationTypes.bottomToTop}
                    animationDuration={1.2}
                >
                    <div
                        className={classes['terms-of-use']}
                        dangerouslySetInnerHTML={{ __html: terms }}
                    />
                </FramerMotionAnimation>
            )}
        </form>
    );
};
