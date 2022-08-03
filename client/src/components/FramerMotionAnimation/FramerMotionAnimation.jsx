import React from 'react';
import { motion } from 'framer-motion';
import { animations } from 'staticResources';
import { assignClasses } from 'utils';

export const FramerMotionAnimation = ({
    children,
    animation,
    animationDuration,
    motionKey,
    componentClasses,
}) => {
    const animationVariants = animations(animationDuration).hasOwnProperty(
        animation
    )
        ? animations(animationDuration)[animation]
        : null;

    return (
        <motion.div
            key={motionKey}
            className={assignClasses(componentClasses)}
            initial={animationVariants.initial}
            animate={animationVariants.animate}
            exit={animationVariants.exit}
            variants={animationVariants}
        >
            {children}
        </motion.div>
    );
};
