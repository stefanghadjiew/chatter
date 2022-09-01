import React from 'react';
import { motion } from 'framer-motion';
import { animationVariants } from './animationTypes';
import { assignClasses } from 'utils';
import classes from './styles.module.scss';

export const FramerMotionAnimation = ({
    children,
    animationVariant,
    animationDuration,
    motionKey,
    componentClasses,
}) => {
    const animation = animationVariants(animationDuration).hasOwnProperty(
        animationVariant
    )
        ? animationVariants(animationDuration)[animationVariant]
        : null;

    return (
        <motion.div
            key={motionKey}
            className={[
                assignClasses(componentClasses),
                classes['framer-motion'],
            ].join(' ')}
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            variants={animation}
        >
            {children}
        </motion.div>
    );
};
